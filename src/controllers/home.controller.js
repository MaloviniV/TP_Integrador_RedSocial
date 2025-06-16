import {NotificacionModel, UsuarioModel, PerfilModel} from "../models/index.js"
import { Op } from "sequelize";

export const mostrarHome = async (req,res)=>{
  //const id_usuario = req.session.usuario.id_usuario
  const id_usuario = 3;
  const notificaciones = await NotificacionModel.findAll({
    where: {id_usuario: id_usuario}
  });
  res.render("home",{notificaciones});
}

export const buscar = async (req, res)=>{
  const buscar = req.query.buscar;
  try{
    if (!buscar){
      return res.redirect("/home");
    }
    const usuarios = await UsuarioModel.findAll({
      attributes: ["id_usuario", "nombre", "apellido"],
      where: {nombre:{
        [Op.like]: `${buscar}%`
      }},
      include: [{
        model: PerfilModel,
        attributes: ["nacionalidad"]
      }]
    });
    const busqueda={usuarios};
    console.log("esto es busqueda: "+JSON.stringify(busqueda));
    
    res.render("home", { busqueda, buscar });
  }catch(err){
    console.error("Error en buscar:", err);
    res.status(500).render("home", { busqueda:{}, buscar, error: "Error en la búsqueda"});
  }
};