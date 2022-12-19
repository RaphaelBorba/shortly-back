import { connection } from "../Database/db.js"
import { urlModel } from "../Models/urls.model.js"
import { nanoid } from "nanoid"



export async function postUrlShort(req ,res){

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

    const shortUrl = nanoid(6)

    try {
        
        await connection.query(`INSERT INTO urls(short_url, url, user_id) VALUES ($1,$2,$3);`, [shortUrl, body.url, userId])

        res.status(200).send(shortUrl)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

    
}

export async function getUrl(req, res){

    const {id} = req.params

    try {
        const checkId = await connection.query(`SELECT id, short_url, url FROM urls WHERE id=$1`, [id])

        if(!checkId.rows[0]){
            return res.sendStatus(404)
        }
        
        res.status(200).send(checkId.rows[0])

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}