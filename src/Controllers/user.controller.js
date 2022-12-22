import { connection } from "../Database/db.js"



export async function getUser(req, res){

    const userId = res.locals.userId

    try {

        const user = await connection.query(`SELECT users.*, SUM(urls.visit_count) AS visit_count,  JSON_AGG(urls.*) AS shortened_urls
        FROM users 
        LEFT JOIN urls ON urls.user_id = users.id 
        WHERE users.id=$1 
        GROUP BY users.id`, [userId])
   
       res.status(200).send(user.rows[0])

    } catch (error) {
        console.log(error)
        res.sendStatus(500) 
    }
}