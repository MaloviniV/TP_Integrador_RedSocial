import initModels from "../models/init-models.js";
import sequelize from "../config/db.js";
const  models= initModels(sequelize);
const {UsuarioModel} = models;

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
//Obtener un usuario por MAIL
export const getUsuarioByMail = async (req,res)=>{
  try {
    const mail = req.body.mail;
    if(!mail) return res.status(400).render("recuperar",{status: 400, mail, error: "Campo mail vacio"});  //Solicitud incorrecta

    const usuario = await UsuarioModel.findOne({where:{email:mail}});

    if(!usuario) return res.status(404).render("recuperar",{status: 404, mail, error:"Usuario no encontrado"}); //Pagina no encontrada

    res.status(200).render("index");
  } catch (error) {
    res.status(500).render("recuperar",{status: 500, error: error.message});
  }
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