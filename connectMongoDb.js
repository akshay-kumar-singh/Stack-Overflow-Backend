import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.CONNECTION_URL) {
      console.error("CONNECTION_URL is missing");
      return;
    }

    const conn = await mongoose.connect(process.env.CONNECTION_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    // ❌ DO NOT EXIT PROCESS IN SERVERLESS
  }
};

export default connectDB;
