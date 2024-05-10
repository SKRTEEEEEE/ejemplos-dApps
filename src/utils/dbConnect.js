import mongoose from 'mongoose';



export const connectToDB = async () => {
  const connection = {};


  try {
    if (connection.isConnected) return mongoose.connection;
    const db = await mongoose.connect(process.env.MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState === 1;
    console.log("Connected!");
    return db.connection;
    
  } catch (error) {
    throw new Error(error);
  }
};