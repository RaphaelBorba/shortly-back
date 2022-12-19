import { connection } from "../Database/db.js"
import { createUserModel } from "../Models/createUser.model.js";


export async function validatePostSingUp(req, res, next){

    const {email} = req.body

    const validationModel = createUserModel.validate(req.body, {abortEarly:false})

    if(validationModel.error){
        const errors = validationModel.error.details.map(e => e.message)
        return res.status(400).send(errors)
    }

    const isCreate = await connection.query(`SELECT * FROM users WHERE email=$1`, [email])

    

    if(isCreate.rows[0]){

        return res.status(400).send('Email já cadastrado!')
    }

    next()
}