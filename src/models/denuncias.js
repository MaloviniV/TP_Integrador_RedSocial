import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class denuncias extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_usuario_reportante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    motivo: {
      type: DataTypes.ENUM('CONTENIDO_INAPROPIADO','FRAUDE','OTROS'),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('PENDIENTE','RESUELTA','RECHAZADA'),
      allowNull: false,
      defaultValue: "PENDIENTE"
    },
    tipo_contenido: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true
    },
    id_referencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'denuncias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_reportante" },
          { name: "tipo_contenido" },
          { name: "id_referencia" },
        ]
      },
    ]
  });
  }
}
