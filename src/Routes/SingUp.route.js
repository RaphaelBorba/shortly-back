import {Router} from 'express';
import { postSingUp } from '../Controllers/singUp.controller.js';


const router = Router()

router.post('/sing_up', postSingUp)

export default router