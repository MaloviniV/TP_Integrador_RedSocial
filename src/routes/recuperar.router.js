import {Router} from "express";
const router = Router();
//importo los controladores
import {mostrarRecuperar, getUsuarioByMail, mostrarMetodoEnvio, enviarCodigoRecuperacion} from "../controllers/recuperar.controller.js";

router.get("/", mostrarRecuperar)

router.post("/", getUsuarioByMail);

router.get("/metodo-envio", mostrarMetodoEnvio);

router.post("/enviar-codigo", enviarCodigoRecuperacion);

export default router;