import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        credentials: true
    }
));
app.use(express.json(limit='16kb'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

export { app }