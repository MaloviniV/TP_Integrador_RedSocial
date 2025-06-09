import { Model, DataTypes } from 'sequelize';

export default class Comentario extends Model {
  static init(sequelize) {
  return super.init({
    id_comentario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_imagen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'imagenes',
        key: 'id_imagen'
      }
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    comentario_padre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comentarios',
        key: 'id_comentario'
      }
    }
  }, {
    sequelize,
    tableName: 'comentarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_comentario" },
        ]
      },
      {
        name: "id_imagen",
        using: "BTREE",
        fields: [
          { name: "id_imagen" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "comentario_padre",
        using: "BTREE",
        fields: [
          { name: "comentario_padre" },
        ]
      },
    ]
  });
  }
}
