import express from 'express';
import cors from 'cors';
import { LIMIT_SIZE } from './constants.js';
import cookieParser from 'cookie-parser';
const app = express(); //express to app

//middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: LIMIT_SIZE,
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: LIMIT_SIZE,
  })
);
app.use(express.static('public'));
app.use(cookieParser({}));
// end middleware

// routes
import userRouter from './routes/user.routes.js';
app.use('/api/v1/users', userRouter);
// exports app -> express()
export { app };
