import {DataTypes} from "sequelize";

import _albumes from  "./albumes.js";
import _albumes_tags from  "./albumes_tags.js";
import _comentarios from  "./comentarios.js";
import _denuncias from  "./denuncias.js";
import _imagenes from  "./imagenes.js";
import _notificaciones from  "./notificaciones.js";
import Perfil from  "./perfil.js";
import Sesion from  "./sesion.js";
import _solicitud_amistad from  "./solicitud_amistad.js";
import _tags from  "./tags.js";
import _usuario_amigo from  "./usuario_amigo.js";
import Usuario from  "./usuario.js";
import _usuarios_permitidos from  "./usuarios_permitidos.js";

export default function initModels(sequelize) {
  const albumes = _albumes.init(sequelize, DataTypes);
  const albumes_tags = _albumes_tags.init(sequelize, DataTypes);
  const comentarios = _comentarios.init(sequelize, DataTypes);
  const denuncias = _denuncias.init(sequelize, DataTypes);
  const imagenes = _imagenes.init(sequelize, DataTypes);
  const notificaciones = _notificaciones.init(sequelize, DataTypes);
  const PerfilModel = Perfil.init(sequelize, DataTypes);
  const SesionModel = Sesion.init(sequelize, DataTypes);
  const solicitud_amistad = _solicitud_amistad.init(sequelize, DataTypes);
  const tags = _tags.init(sequelize, DataTypes);
  const usuario_amigo = _usuario_amigo.init(sequelize, DataTypes);
  const UsuarioModel = Usuario.init(sequelize);
  const usuarios_permitidos = _usuarios_permitidos.init(sequelize, DataTypes);

  albumes.belongsToMany(tags, { as: 'id_tag_tags', through: albumes_tags, foreignKey: "id_album", otherKey: "id_tag" });
  imagenes.belongsToMany(UsuarioModel, { as: 'id_usuario_usuarios', through: usuarios_permitidos, foreignKey: "id_imagen", otherKey: "id_usuario" });
  tags.belongsToMany(albumes, { as: 'id_album_albumes', through: albumes_tags, foreignKey: "id_tag", otherKey: "id_album" });
  UsuarioModel.belongsToMany(imagenes, { as: 'id_imagen_imagenes', through: usuarios_permitidos, foreignKey: "id_usuario", otherKey: "id_imagen" });
  UsuarioModel.belongsToMany(UsuarioModel, { as: 'id_seguido_usuarios', through: usuario_amigo, foreignKey: "id_seguidor", otherKey: "id_seguido" });
  UsuarioModel.belongsToMany(UsuarioModel, { as: 'id_seguidor_usuarios', through: usuario_amigo, foreignKey: "id_seguido", otherKey: "id_seguidor" });
  albumes_tags.belongsTo(albumes, { as: "id_album_albume", foreignKey: "id_album"});
  albumes.hasMany(albumes_tags, { as: "albumes_tags", foreignKey: "id_album"});
  imagenes.belongsTo(albumes, { as: "id_album_albume", foreignKey: "id_album"});
  albumes.hasMany(imagenes, { as: "imagenes", foreignKey: "id_album"});
  comentarios.belongsTo(comentarios, { as: "comentario_padre_comentario", foreignKey: "comentario_padre"});
  comentarios.hasMany(comentarios, { as: "comentarios", foreignKey: "comentario_padre"});
  comentarios.belongsTo(imagenes, { as: "id_imagen_imagene", foreignKey: "id_imagen"});
  imagenes.hasMany(comentarios, { as: "comentarios", foreignKey: "id_imagen"});
  usuarios_permitidos.belongsTo(imagenes, { as: "id_imagen_imagene", foreignKey: "id_imagen"});
  imagenes.hasMany(usuarios_permitidos, { as: "usuarios_permitidos", foreignKey: "id_imagen"});
  PerfilModel.belongsTo(UsuarioModel, { foreignKey: "usuario" });
  UsuarioModel.hasOne(PerfilModel, { foreignKey: "usuario" });
  albumes_tags.belongsTo(tags, { as: "id_tag_tag", foreignKey: "id_tag"});
  tags.hasMany(albumes_tags, { as: "albumes_tags", foreignKey: "id_tag"});
  albumes.belongsTo(UsuarioModel, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  UsuarioModel.hasMany(albumes, { as: "albumes", foreignKey: "id_usuario"});
  comentarios.belongsTo(UsuarioModel, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  UsuarioModel.hasMany(comentarios, { as: "comentarios", foreignKey: "id_usuario"});
  denuncias.belongsTo(UsuarioModel, { as: "id_usuario_reportante_usuario", foreignKey: "id_usuario_reportante"});
  UsuarioModel.hasMany(denuncias, { as: "denuncia", foreignKey: "id_usuario_reportante"});
  notificaciones.belongsTo(UsuarioModel, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  UsuarioModel.hasMany(notificaciones, { as: "notificaciones", foreignKey: "id_usuario"});
  SesionModel.belongsTo(UsuarioModel, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  UsuarioModel.hasMany(SesionModel, { as: "sesiones", foreignKey: "id_usuario"});
  solicitud_amistad.belongsTo(UsuarioModel, { as: "id_emisor_usuario", foreignKey: "id_emisor"});
  UsuarioModel.hasMany(solicitud_amistad, { as: "solicitud_amistads", foreignKey: "id_emisor"});
  solicitud_amistad.belongsTo(UsuarioModel, { as: "id_receptor_usuario", foreignKey: "id_receptor"});
  UsuarioModel.hasMany(solicitud_amistad, { as: "id_receptor_solicitud_amistads", foreignKey: "id_receptor"});
  usuario_amigo.belongsTo(UsuarioModel, { as: "id_seguidor_usuario", foreignKey: "id_seguidor"});
  UsuarioModel.hasMany(usuario_amigo, { as: "usuario_amigos", foreignKey: "id_seguidor"});
  usuario_amigo.belongsTo(UsuarioModel, { as: "id_seguido_usuario", foreignKey: "id_seguido"});
  UsuarioModel.hasMany(usuario_amigo, { as: "id_seguido_usuario_amigos", foreignKey: "id_seguido"});
  usuarios_permitidos.belongsTo(UsuarioModel, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  UsuarioModel.hasMany(usuarios_permitidos, { as: "usuarios_permitidos", foreignKey: "id_usuario"});

  return {
    albumes,
    albumes_tags,
    comentarios,
    denuncias,
    imagenes,
    notificaciones,
    PerfilModel,
    SesionModel,
    solicitud_amistad,
    tags,
    usuario_amigo,
    UsuarioModel,
    usuarios_permitidos,
  };
}
