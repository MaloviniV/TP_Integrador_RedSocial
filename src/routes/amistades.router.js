import {Router} from "express"
import {enviarSolicitud} from "../controllers/amistades.controller.js"

const router = Router();

router.post("/solicitud", enviarSolicitud);

export default router;