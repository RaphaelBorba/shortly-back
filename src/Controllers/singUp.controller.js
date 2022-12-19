import { connection } from "../Database/db.js"
import bcrypt from 'bcrypt';


export async function postSingUp(req, res){

    const {email, name, password} = req.body

    const passwordHash = bcrypt.hashSync(password, 10)

    try {
        
        await connection.query(`INSERT INTO users(name, email, password) VALUES ($1,$2,$3)`, [name, email, passwordHash])

        res.sendStatus(201)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}