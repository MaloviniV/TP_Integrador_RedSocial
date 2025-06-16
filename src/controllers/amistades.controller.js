import {} from "../models/index.js";

export const enviarSolicitud =  (req,res)=>{
  console.log("enviando solicitud"+req.body);
  res.status(200).json({ mensaje: "Solicitud de amistad enviada." });
}