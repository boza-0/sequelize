import _sequelize from 'sequelize';
const { Model } = _sequelize;

export default class familia extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'subcategoria',
          key: 'categoria_id'
        }
      },

      subcategoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'subcategoria',
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
      tableName: 'familia',
      timestamps: false,

      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" }
          ]
        },
        {
          name: "categoria_subcategoria_abbreviation_unique",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "categoria_id" },
            { name: "subcategoria_id" },
            { name: "abbreviation" }
          ]
        }
      ]
    });
  }
}
