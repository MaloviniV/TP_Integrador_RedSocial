import {Model, DataTypes} from 'sequelize';

export default class Perfil extends Model {
  static init(sequelize) {
  return super.init({
    id_perfil: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nacionalidad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    genero: {
      type: DataTypes.ENUM('HOMBRE','MUJER','OTRO'),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    intereses: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    antecedentes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'perfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_perfil" },
        ]
      },
      {
        name: "perfil",        
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
  }
}
