import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class albumes_tags extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'id_tag'
      }
    },
    id_album: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'albumes',
        key: 'id_album'
      }
    }
  }, {
    sequelize,
    tableName: 'albumes_tags',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tag" },
          { name: "id_album" },
        ]
      },
      {
        name: "id_album",
        using: "BTREE",
        fields: [
          { name: "id_album" },
        ]
      },
    ]
  });
  }
}
