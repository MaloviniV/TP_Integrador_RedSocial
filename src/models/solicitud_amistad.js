import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class solicitud_amistad extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_solicitud: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_emisor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    id_receptor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    estado: {
      type: DataTypes.ENUM('PENDIENTE','ACEPTADA','RECHAZADA',''),
      allowNull: false,
      defaultValue: "PENDIENTE"
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'solicitud_amistad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_solicitud" },
        ]
      },
      {
        name: "id_emisor",
        using: "BTREE",
        fields: [
          { name: "id_emisor" },
        ]
      },
      {
        name: "id_receptor",
        using: "BTREE",
        fields: [
          { name: "id_receptor" },
        ]
      },
    ]
  });
  }
}
