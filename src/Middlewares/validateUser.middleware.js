import { connection } from "../Database/db.js"

export async function validateUser(req, res, next){

    const token = req.headers.authorization.split(' ')[1]

    const userSession = await connection.query(`SELECT u.id FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.token = $1`, [token])
    
    if(!userSession.rows[0]){
        return res.sendStatus(401)
    }
    res.locals.userId = userSession.rows[0].id

    next()
}