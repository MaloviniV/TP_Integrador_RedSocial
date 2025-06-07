import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class usuario_amigo extends Model {
  static init(sequelize, DataTypes) {
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
