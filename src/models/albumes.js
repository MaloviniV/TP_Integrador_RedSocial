import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class albumes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_album: {
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
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    tipo_album: {
      type: DataTypes.ENUM('PERSONAL','SEGUIDO'),
      allowNull: false,
      defaultValue: "PERSONAL"
    },
    estado: {
      type: DataTypes.ENUM('PUBLICO','PRIVADO'),
      allowNull: false,
      defaultValue: "PUBLICO"
    }
  }, {
    sequelize,
    tableName: 'albumes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_album" },
        ]
      },
      {
        name: "id_usuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "titulo" },
        ]
      },
    ]
  });
  }
}
