import {Router} from "express";
import {mostrarHome} from "../controllers/home.controller.js"

const router = Router();

router.get("/",mostrarHome);

export default router;