import {NotificacionModel} from "../models/index.js"

export const mostrarHome = async (req,res)=>{
  const id_usuario = req.session.usuario.id_usuario
  const notificaciones = await NotificacionModel.findAll({
    where: {id_usuario: id_usuario}
  });
  res.render("home",{notificaciones});
}