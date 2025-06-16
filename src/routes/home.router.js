import {Router} from "express";
import {mostrarHome, buscar} from "../controllers/home.controller.js"

const router = Router();

router.get("/", mostrarHome);

router.get("/buscar", buscar)

export default router;