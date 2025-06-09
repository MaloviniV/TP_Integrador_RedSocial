import { Model, DataTypes } from 'sequelize';

export default class Notificacion extends Model {
  static init(sequelize) {
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
      defaultValue: DataTypes.NOW
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
