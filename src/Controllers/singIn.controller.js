import { connection } from "../Database/db.js"
import { v4 as uuid } from "uuid";



export async function postSingIn(req, res){

    const {userId, userName} = res.locals

    const newToken = uuid()

    const token = await connection.query(`SELECT * FROM sessions WHERE user_id = $1`, [userId])

    if(token.rows[0]){
        await connection.query(`UPDATE sessions SET token = $1 WHERE user_id = $2`, [newToken, token.rows[0].user_id])
    }else{
        await connection.query(`INSERT INTO sessions(token, user_id) VALUES ($1, $2)`, [newToken, userId])
    }

    try {

        res.status(200).send({token: newToken, userId: userId, name:userName})
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }


}