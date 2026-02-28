import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB...");

    const email = "admin@test.com";
    const password = "password123";
    const hashedPassword = await bcrypt.hash(password, 12);

    // This ensures we don't have duplicates
    await mongoose.connection.db.collection('users').deleteOne({ email });

    await mongoose.connection.db.collection('users').insertOne({
      email,
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log("-----------------------------------------");
    console.log("✅ SUCCESS: Admin user created!");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log("-----------------------------------------");
    
    process.exit(0);
  } catch (err) {
    console.error("❌ ERROR:", err);
    process.exit(1);
  }
}

createAdmin();