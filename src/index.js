import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { connection } from './Database/db.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4000

app.listen(port, ()=>console.log(`Server on ${port}`))