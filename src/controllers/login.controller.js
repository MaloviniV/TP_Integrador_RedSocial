import { verificarPass } from "../utils/verificarPass.js";

export const mostrarLogin = (req, res) => {
  res.render("login", { title: "Iniciar sesión" });
};

export const verificarLogin = async (req, res) => {
  // 200 credenciales ok
  // 401 no autorizado faltan credenciales
  // 403 no tiene permisos para acceder, cuenta bloqueada
  try {
    console.log("hola1");
    
    const { mail, pw } = req.body; // Recupero los datos del requerimiento
    console.log("hola2");
    const usuario = await verificarPass(mail, pw);
    console.log("hola3");

    if (usuario) {
      console.log("aca estoy"+JSON.stringify(usuario));
      
      req.session.usuario = usuario;
      res.redirect("/home");
    } else {
      res.status(401).render("login", { mensaje: "Credenciales incorrectas", status: 401 });
    }
  } catch (error) {
    res.status(500).render("login", { mensaje: "Error interno del servidor", status: 500 });
  }
};

export const logout = (req, res) => {
  req.session?.destroy((err) => {
    // Fuerza un error para pruebas
    //err = err || new Error("Error simulado al destruir la sesión"); Fuerza un error de servidor
    if (err) {
      console.error("Error al destruir la sesión:", err);
      return res.status(500).render("login", { mensaje: "Error interno del servidor al cerrar sesión", status: 500 });
    }
    res.clearCookie('connect.sid'); // si usas cookies de sesión
    res.redirect('/');
  });
};