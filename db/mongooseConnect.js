import mongoose from "mongoose";

export default async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Connect to ${connect.connections[0].name}`);
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
  }
}
