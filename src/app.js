import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from 'url';

import viewsRoutes from "./routes/views.js";
import recuperarRoutes from "./routes/recuperar.router.js";

const app = express();    //Instancio express
const port = process.env.PORT || "3000"; //recupero el puerto
//Recupero la ruta del directorio principal
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//CONFIGURACION DEL SERVIDOR
app.set('port', port);  //Configuracion de informacion de la app
app.set('views', path.join(__dirname, 'views'));  //indico la carpeta donde se almacenaran las vistas
app.set('view engine', 'pug');  //indico que voy a trabajar las vistas con PUG
app.use(express.static(path.join(__dirname, '..', 'public')));  //Declaro la carpeta PUBLICA
app.use(express.json());  //peticion de datos JSon-->ObjetoJS
app.use(express.urlencoded({ extended: true })); //desde formularios URL-encoded-->ObjetoJS

//ENDPOINTS
app.use("/",viewsRoutes);

app.use("/recuperar",recuperarRoutes);

// app.get("/login",(req,res)=>{
//   res.render("login",{title:"Iniciar sesión"});
// });

// app.get("/home",(req,res)=>{
//   const publicaciones = [
//     {
//         usuario: "Juan Pérez",
//         resenia: "Excelente producto, superó mis expectativas.",
//         imagen: "/icons/user2.svg"
//     },
//     {
//         usuario: "María López",
//         resenia: "El servicio fue rápido y eficiente, lo recomiendo.",
//         imagen: "/icons/user.svg"
//     },
//     {
//         usuario: "Carlos Gómez",
//         resenia: "Buena calidad, aunque esperaba un poco más.",
//         imagen: "/icons/user.svg"
//     },
//     {
//         usuario: "Ana Martínez",
//         resenia: "Increíble experiencia, volveré a comprar sin duda.",
//         imagen: "/icons/user.svg"
//     }
// ];

//   res.render("home",{title:"HOME",publicaciones});
// });

//INICIO EL SERVIDOR
app.listen(port,()=>{
  console.log(`Servidor escuchando en: http://localhost:${port}`);
});