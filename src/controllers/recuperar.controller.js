import initModels from "../models/init-models.js";
import sequelize from "../config/db.js";
import { ocultarEmail, ocultarTelefono } from '../utils/ocultarDatos.js';
const  models= initModels(sequelize);
const {UsuarioModel} = models;

export const mostrarRecuperar = async (req,res)=>{
  res.render("Recuperar");
};

//Obtener un usuario por MAIL
export const getUsuarioByMail = async (req,res)=>{
  try {
    const mail = req.body.mail;
    if(!mail) return res.status(400).render("recuperar",{status: 400, mail, error: "Campo mail vacio"});  //Solicitud incorrecta
    
    const usuario = await UsuarioModel.findOne({where:{email:mail}});
    
    if(!usuario) return res.status(404).render("recuperar", { status: 404, mail, error: "Usuario no encontrado", mostrarOpciones: false }); //Pagina no encontrada

    res.redirect(`/recuperar/metodo-envio?mail=${encodeURIComponent(mail)}`);
  } catch (error) {
    res.status(500).render("recuperar",{status: 500, error: error.message});
  }
}

// Mostrar opciones de envío
export const mostrarMetodoEnvio = async (req, res) => {
  try{
    const mail = req.query.mail;
    const usuario = await UsuarioModel.findOne({ where: { email: mail } });
    if (!usuario) {
      return res.status(404).render("recuperar", { status: 404, mail, error: "Usuario no encontrado" });
    }
    res.render("recuperar", { status: 200, mail, mostrarOpciones: true, usuario,             
      emailOculto: ocultarEmail(usuario.email),
      telefonoOculto: ocultarTelefono(usuario.telefono)
    });
  } catch(error) {
    res.status(500).render("recuperar",{status: 500, error: error.message});
  }
};

// Enviar código de recuperación
export const enviarCodigoRecuperacion = async (req, res) => {
  try{
    const { mail, metodo } = req.body;
    let msj = "";

    if(metodo==="email"){
      //Generar y enviar el código por Email
      msj = "Código enviado correctamente, verifica tu casilla de correo.";
    }else{
      //Generar y enviar el código por teléfono
      msj = "Código enviado correctamente, verifica tus SMS.";
    }

    res.render("recuperar", { status: 200, mail, mensaje: msj });
  } catch(error) {
    res.status(500).render("recuperar",{status: 500, error: error.message});
  }
};