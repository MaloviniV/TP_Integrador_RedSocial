import {Model, DataTypes} from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init({
      id_usuario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      contraseña: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      fecha_exp_token: {
        type: DataTypes.DATE,
        allowNull: true
      },
      estado_cuenta: {
        type: DataTypes.ENUM('ACTIVA','DESACTIVADA','SUSPENDIDA'),
        allowNull: false,
        defaultValue: "ACTIVA"
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    }, {
      sequelize,      //Define mi instancia a la base de datos
      tableName: 'usuarios',    //Nombre exacto de la tabla
      timestamps: false,    //Indico si quiero que Sequelize maneje las fechas
      indexes: [    //INDICES de la tabla
        {
          name: "PRIMARY",  //nombre del indice
          unique: true,     //campo unico
          using: "BTREE",   //tipo de indice
          fields: [         //columnas a la que se aplican los indices
            { name: "id_usuario" },
          ]
        },
        {
          name: "email",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },
      ]
    });
  }
}
