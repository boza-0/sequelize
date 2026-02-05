import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class subcategoria extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    abbreviation: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'subcategoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoria_id" },
          { name: "id" },
        ]
      },
      {
        name: "categoria_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoria_id" },
          { name: "abbreviation" },
        ]
      },
    ]
  });
  }
}
