import { Router } from "express";
import { deleteUrl, getOpenUrl, getUrl, postUrlShort } from "../Controllers/urls.controller.js";
import { validatePostUrl } from "../Middlewares/validatePostUrl.middleware.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";


const router = Router()

router.post('/urls/shorten', validateUser, validatePostUrl, postUrlShort)

router.get('/urls/:id', getUrl)

router.get('/urls/open/:shortUrl', getOpenUrl)

router.delete('/urls/:id', validateUser, deleteUrl)

export default router