import {Router} from "express";
import {mostrarLogin, verificarLogin, logout} from "../controllers/login.controller.js";

const router = Router();

router.get("/",mostrarLogin);
router.post("/",verificarLogin);
router.get("/logout",logout);

export default router;