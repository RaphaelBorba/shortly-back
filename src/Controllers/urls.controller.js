import { connection } from "../Database/db.js"
import { nanoid } from "nanoid"



export async function postUrlShort(req ,res){

    const body = req.body
    const {userId} = res.locals
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

export async function getOpenUrl(req, res){

    const {shortUrl} = req.params

    const url = await connection.query(`SELECT * FROM urls WHERE short_url = $1`, [shortUrl])

    if(!url.rows[0]){
        return res.sendStatus(404)
    }

    try {
        
        await connection.query('UPDATE urls SET visit_count = $1 WHERE short_url = $2', [url.rows[0].visit_count+1, shortUrl])

        res.redirect(url.rows[0].url)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function deleteUrl(req, res){

    const urlId = req.params.id
    const {userId} = res.locals

    const url = await connection.query(`SELECT * FROM urls WHERE id=$1 AND user_id=$2`, [urlId, userId])

    if(!url.rows[0]){
        return res.sendStatus(401)
    }

    try {
        
        await connection.query(`DELETE FROM urls WHERE id=$1 AND user_id = $2`, [urlId, userId])

        res.sendStatus(204)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}