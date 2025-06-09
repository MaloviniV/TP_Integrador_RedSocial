import { Model, DataTypes } from 'sequelize';

export default class Usuario_permitido extends Model {
  static init(sequelize) {
  return super.init({
    id_imagen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'imagenes',
        key: 'id_imagen'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios_permitidos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_imagen" },
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  }
}
