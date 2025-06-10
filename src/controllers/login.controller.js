import initModels from "../models/init-models.js";
import sequelize from "../config/db.js";
import bcrypt from "bcrypt";

const  models= initModels(sequelize);
const {UsuarioModel} = models;

export const mostrarLogin = (req, res) => {
  res.render("login", { title: "Iniciar sesión" });
};

export const verificarLogin = async (req, res) => {
  const { mail, pw } = req.body;
  console.log("Entró a mostrarLogin");
  const usuario = await UsuarioModel.findOne({ where: { email: mail } });
  if (usuario && usuario.contraseña === pw) {
    //guardar datos en la sesión
    res.redirect("/home");
  } else {
    res.render("login", { error: "Credenciales incorrectas", status: 401 });
  }
};

export const logout = (req, res) => {
  req.session?.destroy(() => {
    res.clearCookie('connect.sid'); // si usas cookies de sesión
    res.redirect('/');
  });
};