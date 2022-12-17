import { connection } from "../Database/db.js"
import bcrypt from 'bcrypt';
import { v4 as uuid } from "uuid";
import { validateSingInModel } from "../Models/createUser.model.js";



export async function postSingIn(req, res){

    const {email, password} = req.body

    const validation = validateSingInModel.validate(req.body, {abortEarly: false})

    if(validateSingInModel.error.message){
        const errors = validateSingInModel.error.details.map(e => e.message)
        return res.status(400).send(errors)
    }

    const user = await connection.query('SELECT * FROM users WHERE email = $1', [email])

    if(!user.rows[0]){
        return res.sendStatus(404)
    }
    
    const validatePassword = bcrypt.compareSync(password, user.rows[0].password)

    if(!validatePassword){
        return res.sendStatus(404)
    }

    const newToken = uuid()

    const token = await connection.query(`SELECT * FROM sessions WHERE user_id = $1`, [user.rows[0].id])

    if(token.rows[0]){
        await connection.query(`UPDATE sessions SET token = $1 WHERE user_id = $2`, [newToken, token.rows[0].user_id])
    }else{
        await connection.query(`INSERT INTO sessions(token, user_id) VALUES ($1, $2)`, [newToken, user.rows[0].id])
    }
    try {

        res.status(200).send(newToken)
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }


}