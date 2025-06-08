import {Router} from "express";
const router = Router();
//importo los controladores
import {getUsuarioByMail, mostrarMetodoEnvio, enviarCodigoRecuperacion} from "../controllers/usuario.controller.js";

// Paso 1: Buscar usuario por mail
router.post("/", getUsuarioByMail);

// Paso 2: Mostrar opciones de envío (si el usuario existe)
router.get("/metodo-envio", mostrarMetodoEnvio);

// Paso 3: Enviar código de recuperación
router.post("/enviar-codigo", enviarCodigoRecuperacion);

export default router;