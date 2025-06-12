import {Router} from "express";
const router = Router();
//importo los controladores
import {mostrarRecuperar, solicitarRecuperacion, actualizarClave, mostrarFormularioNuevaClave} from "../controllers/recuperar.controller.js";

router.get("/", mostrarRecuperar)

router.post("/", solicitarRecuperacion);

router.get("/:token", mostrarFormularioNuevaClave);

router.post("/nuevaClave", actualizarClave);

export default router;