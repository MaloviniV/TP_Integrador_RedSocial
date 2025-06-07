import {Router} from "express";
const router = Router();
//importo los controladores
import {getUsuarios} from "../controllers/usuario.controller.js";  

router.get("/",getUsuarios);

//EXPORTO las rutas para usar en la app
export default router;