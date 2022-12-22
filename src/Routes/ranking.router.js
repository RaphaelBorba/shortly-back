import { Router } from "express";
import { getRanking } from "../Controllers/ranking.controller.js";

const router = Router()

router.get('/ranking', getRanking)

export default router