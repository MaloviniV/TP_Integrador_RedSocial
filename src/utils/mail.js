import nodemailer from "nodemailer";
import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: envFile });

export const enviarMailRecuperacion = async (destinatario, token)=>{
  destinatario = "malovinivjd@hotmail.com";
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const enlace = `http://localhost:3000/recuperar/${token}`;
  
  const mail = {
    from: `"ArteSano" <${process.env.MAIL_USER}>`,
    to: destinatario,
    subject: "Recupera tu cuenta",
    html: `
    <h2>Recuperación de cuenta</h2>
    <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
    <a href="${enlace}">&#128073 HAZ CLICK AQUI &#128072</a>
    <p>Si no solicitaste esto, ignora este correo.</p>
    `
  };
  
  const mm = await transporter.sendMail(mail);
  console.log(mm);
};