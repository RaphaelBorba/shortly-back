import { connection } from "../Database/db.js"



export async function postUrlShort(req ,res){

    const {userId} = res.locals


    res.status(200).send(res.locals)
}