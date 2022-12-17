import { Router } from "express";
import { postSingIn } from "../Controllers/singIn.controller.js";



const router = Router()

router.post('/sing_in', postSingIn)

export default router