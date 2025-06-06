import express from 'express';
import dotenv from 'dotenv';
import {dbconnect} from './user/db/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import adminRouter from './admin/routes/admin.routes.js';
import roomRouter from './admin/routes/room.routes.js';


const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;

// Default middlerwares
app.use(express.json())

app.use(cookieParser())

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

// It is use to accept urlencoded form data like from postman without this we need to send raw data in the form of json
app.use(express.urlencoded({ extended: true }))

dbconnect();

// routes are defined here
// user routes


// admin routes
app.use('/api/v1/admin/auth', adminRouter)
app.use('/api/v1/admin/room', roomRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})