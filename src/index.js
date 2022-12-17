import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import singIn from './Routes/singIn.route.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(singIn)

const port = process.env.PORT || 4000

app.listen(port, ()=>console.log(`Server on ${port}`))