import { Router } from "express";
const router = Router();

router.get("/",(req,res)=>{
  res.render("index",{title:"Bienvenido"});
});

router.get("/recuperar",(req,res)=>{
  res.render("recuperar",{title:"Recuperar Cuenta"});
});

router.get("/home",(req,res)=>{
  const publicaciones = [
    {
        usuario: "Juan Pérez",
        resenia: "Excelente producto, superó mis expectativas.",
        imagen: "/icons/user2.svg"
    },
    {
        usuario: "María López",
        resenia: "El servicio fue rápido y eficiente, lo recomiendo.",
        imagen: "/icons/user.svg"
    },
    {
        usuario: "Carlos Gómez",
        resenia: "Buena calidad, aunque esperaba un poco más.",
        imagen: "/icons/user.svg"
    },
    {
        usuario: "Ana Martínez",
        resenia: "Increíble experiencia, volveré a comprar sin duda.",
        imagen: "/icons/user.svg"
    }
  ];

  res.render("home",{title:"HOME",publicaciones});
});

router.get("/login",(req,res)=>{
  res.render("login",{title:"Iniciar sesión"});
});

export default router;