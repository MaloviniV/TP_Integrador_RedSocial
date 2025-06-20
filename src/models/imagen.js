import { Model, DataTypes } from 'sequelize';
export default class Imagen extends Model {
  static init(sequelize) {
  return super.init({
    id_imagen: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_album: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albumes',
        key: 'id_album'
      }
    },
    ruta: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visibilidad: {
      type: DataTypes.ENUM('PUBLICO','LOCAL','SEGUIDORES','ESPECIFICO'),
      allowNull: false,
      defaultValue: "PUBLICO"
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    tableName: 'imagenes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_imagen" },
        ]
      },
      {
        name: "id_album",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_album" },
          { name: "ruta" },
        ]
      },
    ]
  });
  }
}
