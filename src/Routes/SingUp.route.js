import {Router} from 'express';
import { postSingUp } from '../Controllers/singUp.controller.js';
import { validatePostSingUp } from '../Middlewares/validatePostSingUp.middleware.js';


const router = Router()

router.post('/singUp',validatePostSingUp, postSingUp)

export default router