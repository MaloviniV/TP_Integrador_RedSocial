import {Router} from "express";
const router = Router();
//importo los controladores
import {crearCuenta, mostrarRegistro} from "../controllers/usuario.controller.js";  

router.get("/registro",mostrarRegistro);

router.post("/registro",crearCuenta);

//EXPORTO las rutas para usar en la app
export default router;