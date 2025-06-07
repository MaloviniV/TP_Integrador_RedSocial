import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class notificaciones extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_notificacion: {
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
    tipo: {
      type: DataTypes.ENUM('COMENTARIO','DENUNCIA','SEGUIDOS_aceptada','SEGUIDOS_rechazada','SEGUIDOS_solicitud'),
      allowNull: false
    },
    id_referencia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    estado: {
      type: DataTypes.ENUM('PENDIENTE','LEIDA'),
      allowNull: false,
      defaultValue: "PENDIENTE"
    }
  }, {
    sequelize,
    tableName: 'notificaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notificacion" },
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
