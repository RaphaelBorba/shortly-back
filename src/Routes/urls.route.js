import { Router } from "express";


const router = Router()

router.post('/urls/shorten', postUrlShort)

export default router