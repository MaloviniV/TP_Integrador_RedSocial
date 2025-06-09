import { Model, DataTypes } from 'sequelize';

export default class Usuario_amigo extends Model {
  static init(sequelize) {
  return super.init({
    id_seguidor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_seguido: {
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
    tableName: 'usuario_amigo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_seguido" },
          { name: "id_seguidor" },
        ]
      },
    ]
  });
  }
}
