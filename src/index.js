import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';  

dotenv.config({
  path: './env',
});

connectDB() // connect to mongodb atlast
  .then(app.listen(process.env.PORT || 3000), () => {
    console.log(
      `®️ server is running on port http://localhost:${process.env.PORT}`
    );
  })
  .catch((e) => console.error('Mongo DB connection failed !!!', e))
  .finally(console.log('\tDATABASE IS CONNECTED'));
