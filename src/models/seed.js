import sequelize from "../config/db.js";
import initModels from "./init-models.js"   //Importo el modulo para inicializar todos mis modelos con sus relaciones

const models = initModels(sequelize);   //Genero el constructor de todos mis modelos
const {
    albumes,
    albumes_tags,
    comentarios,
    denuncias,
    imagenes,
    notificaciones,
    PerfilModel,
    sesiones,
    solicitud_amistad,
    tags,
    usuario_amigo,
    UsuarioModel,
    usuarios_permitidos,
  } = models;

// Primero sincroniza los modelos (solo para pruebas, cuidado con force:true)
await sequelize.sync({ alter: true });

await poblarTablas();

async function poblarTablas() {
  const usuarios = [
    { apellido: "Pérez", nombre: "Ana", email: "ana1@correo.com", teléfono: "111111111", contraseña: "pass1", estado_cuenta: "ACTIVA" },
    { apellido: "Gómez", nombre: "Luis", email: "luis2@correo.com", teléfono: "222222222", contraseña: "pass2", estado_cuenta: "ACTIVA" },
    { apellido: "Martínez", nombre: "Sofía", email: "sofia3@correo.com", teléfono: "333333333", contraseña: "pass3", estado_cuenta: "ACTIVA" },
    { apellido: "Rodríguez", nombre: "Carlos", email: "carlos4@correo.com", teléfono: "444444444", contraseña: "pass4", estado_cuenta: "ACTIVA" },
    { apellido: "Fernández", nombre: "Lucía", email: "lucia5@correo.com", teléfono: "555555555", contraseña: "pass5", estado_cuenta: "ACTIVA" },
    { apellido: "López", nombre: "María", email: "maria6@correo.com", teléfono: "666666666", contraseña: "pass6", estado_cuenta: "ACTIVA" },
    { apellido: "Díaz", nombre: "Javier", email: "javier7@correo.com", teléfono: "777777777", contraseña: "pass7", estado_cuenta: "ACTIVA" },
    { apellido: "Sánchez", nombre: "Valentina", email: "valen8@correo.com", teléfono: "888888888", contraseña: "pass8", estado_cuenta: "ACTIVA" },
    { apellido: "Romero", nombre: "Mateo", email: "mateo9@correo.com", teléfono: "999999999", contraseña: "pass9", estado_cuenta: "ACTIVA" },
    { apellido: "Torres", nombre: "Camila", email: "camila10@correo.com", teléfono: "101010101", contraseña: "pass10", estado_cuenta: "ACTIVA" }
  ];
  
  const perfiles = [
    { usuario: null, foto: "ana.jpg", nacionalidad: "Argentina", genero: "MUJER", fecha_nacimiento: "1990-01-01", intereses: "Pintura, Escultura", antecedentes: "Licenciada en Bellas Artes" },
    { usuario: null, foto: "luis.jpg", nacionalidad: "Chile", genero: "HOMBRE", fecha_nacimiento: "1985-02-02", intereses: "Madera, Reciclado", antecedentes: "Carpintero artesanal" },
    { usuario: null, foto: "sofia.jpg", nacionalidad: "Uruguay", genero: "MUJER", fecha_nacimiento: "1992-03-03", intereses: "Cerámica, Dibujo", antecedentes: "Artista independiente" },
    { usuario: null, foto: "carlos.jpg", nacionalidad: "Paraguay", genero: "HOMBRE", fecha_nacimiento: "1988-04-04", intereses: "Fotografía, Grabado", antecedentes: "Fotógrafo profesional" },
    { usuario: null, foto: "lucia.jpg", nacionalidad: "Argentina", genero: "MUJER", fecha_nacimiento: "1995-05-05", intereses: "Textil, Macramé", antecedentes: "Diseñadora textil" },
    { usuario: null, foto: "maria.jpg", nacionalidad: "Bolivia", genero: "MUJER", fecha_nacimiento: "1991-06-06", intereses: "Escultura, Pintura", antecedentes: "Escultora" },
    { usuario: null, foto: "javier.jpg", nacionalidad: "Perú", genero: "HOMBRE", fecha_nacimiento: "1987-07-07", intereses: "Reciclado, Madera", antecedentes: "Artesano" },
    { usuario: null, foto: "valentina.jpg", nacionalidad: "Argentina", genero: "MUJER", fecha_nacimiento: "1993-08-08", intereses: "Pintura, Fotografía", antecedentes: "Estudiante de arte" },
    { usuario: null, foto: "mateo.jpg", nacionalidad: "Chile", genero: "HOMBRE", fecha_nacimiento: "1989-09-09", intereses: "Dibujo, Grabado", antecedentes: "Ilustrador" },
    { usuario: null, foto: "camila.jpg", nacionalidad: "Uruguay", genero: "MUJER", fecha_nacimiento: "1994-10-10", intereses: "Cerámica, Textil", antecedentes: "Ceramista" }
  ];
  for(let i = 0; i<usuarios.length; i++){
    const usuario = await UsuarioModel.create(usuarios[i]);
    perfiles[i].usuario = usuario.id_usuario;
    await PerfilModel.create(perfiles[i]);
  };
};

console.log("¡Datos de prueba insertados!");
await sequelize.close();