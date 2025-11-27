import dotenv from "dotenv";
import express from 'express';
import connectToDB from "./config/db.js";
import cors from 'cors';

const app = express()
dotenv.config();

//express built-in middleware
app.use(express.json()); //parse json request
app.use(express.urlencoded({extended: true})) // parse form data

app.use(cors());

//init connection to db
connectToDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('You have vistided instagram')
})

export default app