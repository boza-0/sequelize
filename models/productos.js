import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class productos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "sku"
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
    familia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'familia',
        key: 'id'
      }
    },
    via_administracion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'via_administracion',
        key: 'id'
      }
    },
    marca: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unidades_por_envase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comentarios: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    foto_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    principio_activo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    concentracion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forma_farmaceutica: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sustancia_controlada: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    requiere_serializacion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    pvp: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'productos',
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
        name: "sku",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sku" },
        ]
      },
      {
        name: "productos_categoria_subcategoria_familia_fk",
        using: "BTREE",
        fields: [
          { name: "categoria_id" },
          { name: "subcategoria_id" },
          { name: "familia_id" },
        ]
      },
      {
        name: "productos_via_administracion_fk",
        using: "BTREE",
        fields: [
          { name: "via_administracion_id" },
        ]
      },
    ]
  });
  }
}
