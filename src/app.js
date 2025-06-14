import express from "express";
import path from "path";
import session from "express-session";
import { fileURLToPath } from 'url';

import viewsRoutes from "./routes/views.js";
import recuperarRoutes from "./routes/recuperar.router.js";
import loginRoutes from "./routes/login.router.js";
import usuarioRoutes from "./routes/usuario.router.js";
import homeRoutes from "./routes/home.router.js"
import { verAutorizacion } from "./middleware/autorizacion.js";

import morgan from "morgan";

const app = express();    //Instancio express

//Recupero la ruta del directorio principal
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//CONFIGURACION DE LA APP
app.use(morgan("dev"));

app.set('views', path.join(__dirname, 'views'));  //indico la carpeta donde se almacenaran las vistas
app.set('view engine', 'pug');  //indico que voy a trabajar las vistas con PUG
app.use(express.static(path.join(__dirname, '..', 'public')));  //Declaro la carpeta PUBLICA
app.use(express.json());  //peticion de datos JSon-->ObjetoJS
app.use(express.urlencoded({ extended: true })); //desde formularios URL-encoded-->ObjetoJS
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,  //Evita guardar en el store si no hay cambios
  saveUninitialized: false, //No guarda sesiones vacias
  cookie: {   //tiempo de duracion de la cookie
    maxAge: 1000 * 60 * 60 // 1 horas
  }
}))

//ENDPOINTS
app.use("/",viewsRoutes);

app.use("/recuperar",recuperarRoutes);

app.use("/login",loginRoutes);

app.use("/usuario", usuarioRoutes);

app.use("/home", verAutorizacion, homeRoutes);

//Middleware para error 404
app.use((req, res, next) => {
  res.status(404).render("error", {
    mensaje: "404 - Página no encontrada",
    error: {}
  });
});

//Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.render("error", {
    mensaje: "Ocurrió un error en el servidor.",
    error: process.env.NODE_ENV === "development" ? err : {}
  });
});

export default app;