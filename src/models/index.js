import sequelize from "../config/db.js";
import initModels from "../models/init-models.js";

const models = initModels(sequelize);

export const {
  AlbumModel,
  Album_tagModel,
  ComentarioModel,
  DenunciaModel,
  ImagenModel,
  NotificacionModel,
  PerfilModel,
  SesionModel,
  Solicitud_amistadModel,
  TagModel,
  Usuario_amigoModel,
  UsuarioModel,
  Usuario_permitidoModel,
} = models;