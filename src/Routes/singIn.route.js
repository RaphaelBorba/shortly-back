import { Router } from "express";
import { postSingIn } from "../Controllers/singIn.controller.js";



const router = Router()

router.post('/singIn', postSingIn)

export default router   