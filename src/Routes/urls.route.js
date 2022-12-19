import { Router } from "express";
import { postUrlShort } from "../Controllers/urls.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";


const router = Router()

router.post('/urls/shorten', validateUser, postUrlShort)

export default router