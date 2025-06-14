import { DataTypes } from "sequelize";

import Album from "./album.js";
import Album_tag from "./album_tag.js";
import Comentario from "./comentario.js";
import Denuncia from "./denuncia.js";
import Imagen from "./imagen.js";
import Notificacion from "./notificacion.js";
import Perfil from "./perfil.js";
import Sesion from "./sesion.js";
import Solicitud_amistad from "./solicitud_amistad.js";
import Tag from "./tag.js";
import Usuario_amigo from "./usuario_amigo.js";
import Usuario from "./usuario.js";
import Usuario_permitido from "./usuario_permitido.js";

export default function initModels(sequelize) {
  const AlbumModel = Album.init(sequelize, DataTypes);
  const Album_tagModel = Album_tag.init(sequelize, DataTypes);
  const ComentarioModel = Comentario.init(sequelize, DataTypes);
  const DenunciaModel = Denuncia.init(sequelize, DataTypes);
  const ImagenModel = Imagen.init(sequelize, DataTypes);
  const NotificacionModel = Notificacion.init(sequelize, DataTypes);
  const PerfilModel = Perfil.init(sequelize, DataTypes);
  const SesionModel = Sesion.init(sequelize, DataTypes);
  const Solicitud_amistadModel = Solicitud_amistad.init(sequelize, DataTypes);
  const TagModel = Tag.init(sequelize, DataTypes);
  const Usuario_amigoModel = Usuario_amigo.init(sequelize, DataTypes);
  const UsuarioModel = Usuario.init(sequelize, DataTypes);
  const Usuario_permitidoModel = Usuario_permitido.init(sequelize, DataTypes);

  AlbumModel.belongsToMany(TagModel, {
    as: "id_tag_tags",
    through: Album_tagModel,
    foreignKey: "id_album",
    otherKey: "id_tag",
  });
  ImagenModel.belongsToMany(UsuarioModel, {
    as: "id_usuario_usuarios",
    through: Usuario_permitidoModel,
    foreignKey: "id_imagen",
    otherKey: "id_usuario",
  });
  TagModel.belongsToMany(AlbumModel, {
    as: "id_album_albumes",
    through: Album_tagModel,
    foreignKey: "id_tag",
    otherKey: "id_album",
  });
  UsuarioModel.belongsToMany(ImagenModel, {
    as: "id_imagen_imagenes",
    through: Usuario_permitidoModel,
    foreignKey: "id_usuario",
    otherKey: "id_imagen",
  });
  UsuarioModel.belongsToMany(UsuarioModel, {
    as: "id_seguido_usuarios",
    through: Usuario_amigoModel,
    foreignKey: "id_seguidor",
    otherKey: "id_seguido",
  });
  UsuarioModel.belongsToMany(UsuarioModel, {
    as: "id_seguidor_usuarios",
    through: Usuario_amigoModel,
    foreignKey: "id_seguido",
    otherKey: "id_seguidor",
  });
  Album_tagModel.belongsTo(AlbumModel, {
    as: "id_album_albume",
    foreignKey: "id_album",
  });
  AlbumModel.hasMany(Album_tagModel, {
    as: "albumes_tags",
    foreignKey: "id_album",
  });
  ImagenModel.belongsTo(AlbumModel, {
    as: "id_album_albume",
    foreignKey: "id_album",
  });
  AlbumModel.hasMany(ImagenModel, { as: "imagenes", foreignKey: "id_album" });
  ComentarioModel.belongsTo(ComentarioModel, {
    as: "comentario_padre_comentario",
    foreignKey: "comentario_padre",
  });
  ComentarioModel.hasMany(ComentarioModel, {
    as: "comentarios",
    foreignKey: "comentario_padre",
  });
  ComentarioModel.belongsTo(ImagenModel, {
    as: "id_imagen_imagene",
    foreignKey: "id_imagen",
  });
  ImagenModel.hasMany(ComentarioModel, {
    as: "comentarios",
    foreignKey: "id_imagen",
  });
  Usuario_permitidoModel.belongsTo(ImagenModel, {
    as: "id_imagen_imagene",
    foreignKey: "id_imagen",
  });
  ImagenModel.hasMany(Usuario_permitidoModel, {
    as: "usuarios_permitidos",
    foreignKey: "id_imagen",
  });
  PerfilModel.belongsTo(UsuarioModel, { foreignKey: "usuario" });
  UsuarioModel.hasOne(PerfilModel, { foreignKey: "usuario" });
  Album_tagModel.belongsTo(TagModel, {
    as: "id_tag_tag",
    foreignKey: "id_tag",
  });
  TagModel.hasMany(Album_tagModel, {
    as: "albumes_tags",
    foreignKey: "id_tag",
  });
  AlbumModel.belongsTo(UsuarioModel, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario",
  });
  UsuarioModel.hasMany(AlbumModel, { as: "albumes", foreignKey: "id_usuario" });
  ComentarioModel.belongsTo(UsuarioModel, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario",
  });
  UsuarioModel.hasMany(ComentarioModel, {
    as: "comentarios",
    foreignKey: "id_usuario",
  });
  DenunciaModel.belongsTo(UsuarioModel, {
    as: "id_usuario_reportante_usuario",
    foreignKey: "id_usuario_reportante",
  });
  UsuarioModel.hasMany(DenunciaModel, {
    as: "denuncia",
    foreignKey: "id_usuario_reportante",
  });
  NotificacionModel.belongsTo(UsuarioModel, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario",
  });
  UsuarioModel.hasMany(NotificacionModel, {
    as: "notificaciones",
    foreignKey: "id_usuario",
  });
  SesionModel.belongsTo(UsuarioModel, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario",
  });
  UsuarioModel.hasMany(SesionModel, {
    as: "sesiones",
    foreignKey: "id_usuario",
  });
  Solicitud_amistadModel.belongsTo(UsuarioModel, {
    as: "id_emisor_usuario",
    foreignKey: "id_emisor",
  });
  UsuarioModel.hasMany(Solicitud_amistadModel, {
    as: "solicitud_amistads",
    foreignKey: "id_emisor",
  });
  Solicitud_amistadModel.belongsTo(UsuarioModel, {
    as: "id_receptor_usuario",
    foreignKey: "id_receptor",
  });
  UsuarioModel.hasMany(Solicitud_amistadModel, {
    as: "id_receptor_solicitud_amistads",
    foreignKey: "id_receptor",
  });
  Usuario_amigoModel.belongsTo(UsuarioModel, {
    as: "id_seguidor_usuario",
    foreignKey: "id_seguidor",
  });
  UsuarioModel.hasMany(Usuario_amigoModel, {
    as: "usuario_amigos",
    foreignKey: "id_seguidor",
  });
  Usuario_amigoModel.belongsTo(UsuarioModel, {
    as: "id_seguido_usuario",
    foreignKey: "id_seguido",
  });
  UsuarioModel.hasMany(Usuario_amigoModel, {
    as: "id_seguido_usuario_amigos",
    foreignKey: "id_seguido",
  });
  Usuario_permitidoModel.belongsTo(UsuarioModel, {
    as: "id_usuario_usuario",
    foreignKey: "id_usuario",
  });
  UsuarioModel.hasMany(Usuario_permitidoModel, {
    as: "usuarios_permitidos",
    foreignKey: "id_usuario",
  });

  return {
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
  };
}
