import { connection } from "../Database/db.js";


export async function getRanking(req, res){


    try {

        const rank = await connection.query(`SELECT users.id, users.name, SUM(urls.visit_count) AS visit_counts,  COUNT(urls.user_id) AS links_count
        FROM users 
        LEFT JOIN urls ON urls.user_id = users.id 
        GROUP BY users.id
        ORDER BY visit_counts DESC NULLS LAST
        LIMIT 10`)
    
        res.status(200).send(rank.rows)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}