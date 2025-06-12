import initModels from "../models/init-models.js";
import sequelize from "../config/db.js";
import bcrypt from "bcrypt";

const  models= initModels(sequelize);
const {UsuarioModel} = models;

//Renderizar vista de registro
export const mostrarRegistro = async (req,res)=>{
  try {
    res.render("registro", {title: "Crear Nueva Cuenta"});
  } catch (error) {
    console.error(error);
    res.status(500).render("error", {
      mensaje: "Error al mostrar el formulario de registro"
    });
  }
}

//Ingresar registro de usuario
export const crearCuenta = async (req,res)=>{
  try {
    console.log(req.body);
    const {nombre,apellido, telefono, mail, pw} = req.body;

    const existe = await UsuarioModel.findOne({where: {email: mail}});

    if(existe){
      return res.render("registro",{
        title: "Crear Nueva Cuenta",
        error: "El email ya está registrado."})
    }

    const saltRounds = parseInt(process.env.SALT_ROUND) || 10;
    const hash = await bcrypt.hash(pw, saltRounds);

    await UsuarioModel.create({
      nombre,
      apellido,
      telefono,
      email: mail,
      contraseña: hash
    });
    console.log("USUARIO CREADO CON EXITO");
    
    res.render("registro", {
      title: "Crear Nueva Cuenta",
      exito: true
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("registro",{
      status: 500,
      title: "Crear Nueva Cuenta",
      error: "Ocurrió un error al crear la cuenta. Intenta nuevamente."
    });    
  }
}

//Obtener todos los usuarios
export const getUsuarios = async (req,res)=>{  
  try {
    const usuarios = await UsuarioModel.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//Obtener un usuario por ID
export const getUsuarioPorID = async (req,res)=>{
  
}




//Crear un usuario
export const crearUsuario = async (req,res)=>{
  
}
//Actualizar un usuario
export const actualizarUsuario = async (req,res)=>{
  
}
//Eliminar un usuario
export const eliminarUsuario = async (req,res)=>{
  
}