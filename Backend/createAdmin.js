// createAdmin.js

import mongoose from "mongoose";
import bcrypt from "bcrypt"
import User from "./model/User.js";
import dotenv from "dotenv";

dotenv.config()

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    const existingAdmin = await User.findOne({ email: "admin@asquarez.com" });
    if (existingAdmin) {
      console.log("❌ Admin already exists.");
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("asquarezstore", salt);

    const admin = new User({
      name: "Admin",
      email: "admin@asquarez.com",
      password: hashedPassword,
      role: "admin",
    });

    await admin.save();
    console.log("✅ Admin created successfully.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
