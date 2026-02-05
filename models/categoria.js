import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class categoria extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "nombre"
    },
    abbreviation: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "abbreviation"
    }
  }, {
    sequelize,
    tableName: 'categoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "nombre",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "abbreviation",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "abbreviation" },
        ]
      },
    ]
  });
  }
}
