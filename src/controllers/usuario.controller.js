import initModels from "../models/init-models.js";
import sequelize from "../config/db.js";
import { ocultarEmail, ocultarTelefono } from '../utils/ocultarDatos.js';
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




//Crear un usuario
export const crearUsuario = async (req,res)=>{
  
}
//Actualizar un usuario
export const actualizarUsuario = async (req,res)=>{
  
}
//Eliminar un usuario
export const eliminarUsuario = async (req,res)=>{
  
}