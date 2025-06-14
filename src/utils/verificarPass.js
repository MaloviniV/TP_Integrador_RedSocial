import {UsuarioModel} from "../models/index.js"

export async function verificarPass(mail, pass){
  try {
    if (!mail || !pass) return null

    //Buscar el usuario
    const usuario = await UsuarioModel.findOne({where: {email:mail}});
    if(!usuario) return null;

    //Comparar contraseña
    //const exito = await bcript.compare(pass, usuario.contraseña);
    const exito = usuario.contraseña === pass;
    if(!exito) return null;

    return {
      id: usuario.id_usuario,
      nombre: `${usuario.nombre} ${usuario.apellido}`,
      email: usuario.email
    };
  } catch (error) {
    console.error("Error en VerificarPass" + error.message);
    throw error;
  }  
};