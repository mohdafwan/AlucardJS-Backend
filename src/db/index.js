import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectDBCONTNET = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\t--------Mongodb connected--------\n${connectDBCONTNET.connection.host}`
    );
  } catch (error) {
    console.table(`\t--------Mongodb Error !!-------- \n`, error);
    process.exit(1);
  }
};

export default connectDB;
