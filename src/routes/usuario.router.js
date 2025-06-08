import {Router} from "express";
const router = Router();
//importo los controladores
import {getUsuarios,getUsuarioByMail} from "../controllers/usuario.controller.js";  

router.get("/",getUsuarios);

router.post("/usuarioByMail",getUsuarioByMail);

//EXPORTO las rutas para usar en la app
export default router;