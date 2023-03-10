import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import singIn from './Routes/singIn.route.js'
import singUp from './Routes/SingUp.route.js'
import urls from './Routes/urls.route.js'
import users from './Routes/user.route.js'
import rank from './Routes/ranking.router.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(singIn)
app.use(singUp)
app.use(urls)
app.use(users)
app.use(rank)

const port = process.env.PORT || 4000

app.listen(port, ()=>console.log(`Server on ${port}`))