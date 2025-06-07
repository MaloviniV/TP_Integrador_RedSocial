import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class sesiones extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_sesion: {
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
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('ACTIVA','INACTIVA','CERRADA'),
      allowNull: false,
      defaultValue: "ACTIVA"
    }
  }, {
    sequelize,
    tableName: 'sesiones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_sesion" },
        ]
      },
      {
        name: "usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
  }
}
