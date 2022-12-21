import { Router } from "express";
import { getUser } from "../Controllers/user.controller.js";
import { validateUser } from "../Middlewares/validateUser.middleware.js";

const router = Router()

router.get('/users/me', validateUser, getUser)

export default router