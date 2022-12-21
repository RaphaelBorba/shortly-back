import { connection } from "../Database/db.js"
import { urlModel } from "../Models/urls.model.js"

export async function validatePostUrl(req, res, next){

    const body = req.body
    const {userId} = res.locals

    const validation = urlModel.validate(body)

    if(validation.error){
        return res.sendStatus(422)
    }

    const alreadyCreate = await connection.query(`SELECT * FROM urls WHERE url=$1 AND user_id=$2;`, [body.url,userId])

    if(alreadyCreate.rows[0]){
        return res.sendStatus(409)
    }

    next()
}