import {Model, DataTypes} from 'sequelize';

export default class Sesion extends Model {
  static init(sequelize) {
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
      vencimiento: {
        type: DataTypes.DATE,
        allowNull: false
      },
      data: {
        type: DataTypes.TEXT,
        allowNull: false
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
