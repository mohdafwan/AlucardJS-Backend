import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectDBCONTNET = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongodb connected !!\t${connectDBCONTNET.connection.host}`
    );
  } catch (error) {
    console.table(`Mongodb Error !!\t`, error);
    process.exit(1);
  }
};

export default connectDB;
