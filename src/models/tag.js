import { Model, DataTypes } from 'sequelize';

export default class Tag extends Model {
  static init(sequelize) {
  return super.init({
    id_tag: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    etiqueta: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tag" },
        ]
      },
    ]
  });
  }
}
