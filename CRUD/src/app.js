import dotenv from "dotenv";
import express from 'express';
import connectToDB from "./config/db.js";
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'

const app = express()
dotenv.config();

//express built-in middleware
app.use(express.json()); //parse json request
app.use(express.urlencoded({extended: true})) // parse form data

app.use(cors());

//init connection to db
connectToDB();

app.use('/', userRoutes)

export default app