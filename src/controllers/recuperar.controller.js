import initModels from "../models/init-models.js";
import sequelize from "../config/db.js";
import { ocultarEmail, ocultarTelefono } from '../utils/ocultarDatos.js';
import jwt from "jsonwebtoken";
const  models= initModels(sequelize);
const {UsuarioModel, SesionModel} = models;
import { enviarMailRecuperacion } from "../utils/mail.js"; 

export const mostrarRecuperar = async (req,res)=>{
  res.render("Recuperar");
};

//Obtener un usuario por MAIL
export const solicitarRecuperacion = async (req,res)=>{
  try {
    
    const mail = req.body.email;
    
    if(!mail) return res.status(400).render("recuperar",{status: 400, mail, error: "Campo mail vacio"});  //Solicitud incorrecta
    //Recupero usuario por mail
    const usuario = await UsuarioModel.findOne({where:{email:mail}});
    
     //Pagina no encontrada
    if(!usuario) return res.status(404).render("recuperar", { status: 404, mail, error: "Usuario no encontrado", mostrarOpciones: false });
    console.log("hola"+usuario);
    
    const idUsuario = usuario.id_usuario;

    const token = jwt.sign({idUsuario},process.env.JWT_SECRET,{expiresIn:"7d"})
    console.log("hola2");
    const sesion = SesionModel.build({
      id_usuario: idUsuario+0,
      token,
      fecha_expiracion_token: Date.now()+10*60*1000, //min-seg-miliseg TOTAL:10min
      estado: 0
    });
    console.log("hola3");
    console.log(sesion);
    await sesion.save();
    console.log("hola4");
    await enviarMailRecuperacion(usuario.email, token);
    res.render("recuperar", { mensaje: "Revisa tu correo para continuar el proceso." });

  } catch (error) {
    res.status(500).render("recuperar",{status: 500, error: error.message});
  }
}

//Mostrar formulario nueva clave
export const mostrarFormularioNuevaClave = async (req, res) => {
  const { token } = req.params;
  const sesion = await SesionModel.findOne({
    where: {
      token: token,
      fecha_expiracion_token: { [Op.gt]: Date.now() }
    }
  });
  if (!sesion) {
    return res.render("recuperar", { error: "El enlace es inválido o ha expirado." });
  }
  res.render("nueva_clave", { token });
};

export const actualizarClave = async (req, res) => {
  const { token } = req.params;
  const { pw } = req.body;
  const sesion = await SesionModel.findOne({
    where: {
      token: token,
      fecha_expiracion_token: { [Op.gt]: Date.now() }
    }
  });

  const usuario = await UsuarioModel.findOne({
    where: {id_Usuario: sesion.id_usuario}
  });

  if (!sesion || !usuario) {
    return res.render("recuperar", { error: "El enlace es inválido o ha expirado." });
  }
  
  usuario.contraseña = await bcrypt.hash(pw, 10);
  await usuario.save();

  sesion.token = null;
  sesion.fecha_expiracion_token = null;
  await sesion.save();

  res.render("login", { mensaje: "Contraseña actualizada. Ahora puedes iniciar sesión." });
};

// Mostrar opciones de envío
// export const mostrarMetodoEnvio = async (req, res) => {
//   try{
//     const mail = req.query.mail;
//     const usuario = await UsuarioModel.findOne({ where: { email: mail } });
//     if (!usuario) {
//       return res.status(404).render("recuperar", { status: 404, mail, error: "Usuario no encontrado" });
//     }
//     res.render("recuperar", { status: 200, mail, mostrarOpciones: true, usuario,             
//       emailOculto: ocultarEmail(usuario.email),
//       telefonoOculto: ocultarTelefono(usuario.telefono)
//     });
//   } catch(error) {
//     res.status(500).render("recuperar",{status: 500, error: error.message});
//   }
// };

// // Enviar código de recuperación
// export const enviarCodigoRecuperacion = async (req, res) => {
//   try{
//     const { mail, metodo } = req.body;
//     let msj = "";

//     if(metodo==="email"){
//       //Generar y enviar el código por Email
//       msj = "Código enviado correctamente, verifica tu casilla de correo.";
//     }else{
//       //Generar y enviar el código por teléfono
//       msj = "Código enviado correctamente, verifica tus SMS.";
//     }

//     res.render("recuperar", { status: 200, mail, mensaje: msj });
//   } catch(error) {
//     res.status(500).render("recuperar",{status: 500, error: error.message});
//   }
// };