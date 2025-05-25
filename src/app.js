import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = normalizePort(process.env.PORT || '3000');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/",(req,res)=>{
  res.render("index",{title:"Bienvenido"});
});

app.get("/login",(req,res)=>{
  res.render("login",{title:"Iniciar sesión"});
});

app.listen(port,()=>{
  console.log(`Servidor escuchando en: http://localhost:${port}`);
});

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return false;
  if (port >= 0) return port;
  return false;
}