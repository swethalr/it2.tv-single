import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please define MONGODB_URI environment variable');
}

const MONGODB_URI: string = process.env.MONGODB_URI;

/**
 * Global cache for MongoDB connection to prevent multiple connections
 * in serverless environments (Next.js API routes hot reload)
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}


// 1. Initialize from global, using type assertion to satisfy TS
let cached = global.mongoose as MongooseCache;

// 2. If it doesn't exist (first time running), create it on the global object
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}
/**
 * Connect to MongoDB with connection pooling and caching
 * Optimized for Vercel serverless functions
 */
export async function connectDB(): Promise<typeof mongoose> {
  // Return cached connection if exists
  if (cached.conn) {
    return cached.conn;
  }

  // Return existing connection promise if in progress
  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
      minPoolSize: 2,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 10000,
      //family: 4,  Use IPv4, skip IPv6
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    });
  }

 
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
  return cached.conn;
}

/**
 * Disconnect from MongoDB (useful for testing)
 */
export async function disconnectDB(): Promise<void> {
  if (cached.conn) {
    await cached.conn.disconnect();
    cached.conn = null;
    cached.promise = null;
    console.log('🔌 MongoDB disconnected');
  }
}

/**
 * Check if database is connected
 */
export function isConnected(): boolean {
  return cached.conn?.connection?.readyState === 1;
}
