import { Router } from "express";
import { getUrl, postUrlShort } from "../Controllers/urls.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";


const router = Router()

router.post('/urls/shorten', validateUser, postUrlShort)

router.get('/urls/:id', getUrl)

export default router