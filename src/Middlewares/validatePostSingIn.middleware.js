import { connection } from "../Database/db.js"
import bcrypt from 'bcrypt';
import { validateSingInModel } from "../Models/createUser.model.js";

export async function validatePostSingIn(req,res,next){

    const {email, password} = req.body

    const validation = validateSingInModel.validate(req.body, {abortEarly: false})

    if(validation.error){
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

    res.locals.userId = user.rows[0].id
    res.locals.userName = user.rows[0].name

    next()
}