import { connection } from "../Database/db.js"
import bcrypt from 'bcrypt';
import { createUserModel } from "../Models/createUser.model.js";



export async function postSingUp(req, res){

    const {email, name, password} = req.body

    const validationModel = createUserModel.validate(req.body, {abortEarly:false})

    if(validationModel.error.message){
        const errors = validationModel.error.details.map(e => e.message)
        return res.status(400).send(errors)
    }

    const isCreate = await connection.query(`SELECT * FROM users WHERE email=$1`, [email])

    

    if(isCreate.rows[0]){

        return res.status(400).send('Email já cadastrado!')
    }

    const passwordHash = bcrypt.hashSync(password, 10)

    try {
        
        await connection.query(`INSERT INTO users(name, email, password) VALUES ($1,$2,$3)`, [name, email, passwordHash])

        res.sendStatus(201)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}