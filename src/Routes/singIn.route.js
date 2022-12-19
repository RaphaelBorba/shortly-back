import { Router } from "express";
import { postSingIn } from "../Controllers/singIn.controller.js";
import { validatePostSingIn } from "../Middlewares/validatePostSingIn.middleware.js";



const router = Router()

router.post('/singIn',validatePostSingIn, postSingIn)

export default router   