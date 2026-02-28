import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Load your variables
dotenv.config({ path: '.env.local' });

async function run() {
  console.log("Connecting to:", process.env.MONGODB_URI);
  await mongoose.connect(process.env.MONGODB_URI);
  
  // Clean up any half-created users
  await mongoose.connection.db.collection('users').deleteMany({ email: 'admin@test.com' });

  const hashedPassword = await bcrypt.hash('password123', 12);

  await mongoose.connection.db.collection('users').insertOne({
    email: 'admin@test.com',
    password: hashedPassword,
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  });

  console.log("-----------------------------------------");
  console.log("SUCCESS! User created.");
  console.log("EMAIL: admin@test.com");
  console.log("PASSWORD: password123");
  console.log("-----------------------------------------");
  process.exit(0);
}

run().catch(err => {
  console.error("FAILED:", err);
  process.exit(1);
});