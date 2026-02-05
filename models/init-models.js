import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _categoria from  "./categoria.js";
import _familia from  "./familia.js";
import _log5 from  "./log5.js";
import _log6 from  "./log6.js";
import _productos from  "./productos.js";
import _subcategoria from  "./subcategoria.js";
import _via_administracion from  "./via_administracion.js";

export default function initModels(sequelize) {
  const categoria = _categoria.init(sequelize, DataTypes);
  const familia = _familia.init(sequelize, DataTypes);
  const log5 = _log5.init(sequelize, DataTypes);
  const log6 = _log6.init(sequelize, DataTypes);
  const productos = _productos.init(sequelize, DataTypes);
  const subcategoria = _subcategoria.init(sequelize, DataTypes);
  const via_administracion = _via_administracion.init(sequelize, DataTypes);

  subcategoria.belongsToMany(subcategoria, { as: 'subcategoria_id_subcategoria', through: familia, foreignKey: "categoria_id", otherKey: "subcategoria_id" });
  subcategoria.belongsToMany(subcategoria, { as: 'categoria_id_subcategoria', through: familia, foreignKey: "subcategoria_id", otherKey: "categoria_id" });
  subcategoria.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id"});
  categoria.hasMany(subcategoria, { as: "subcategoria", foreignKey: "categoria_id"});
  productos.belongsTo(familia, { as: "familium", foreignKey: "familia_id"});
  familia.hasMany(productos, { as: "productos", foreignKey: "familia_id"});
  familia.belongsTo(subcategoria, { as: "categorium", foreignKey: "categoria_id"});
  subcategoria.hasMany(familia, { as: "familia", foreignKey: "categoria_id"});
  familia.belongsTo(subcategoria, { as: "subcategorium", foreignKey: "subcategoria_id"});
  subcategoria.hasMany(familia, { as: "subcategoria_familia", foreignKey: "subcategoria_id"});
  productos.belongsTo(subcategoria, { as: "categorium", foreignKey: "categoria_id"});
  subcategoria.hasMany(productos, { as: "productos", foreignKey: "categoria_id"});
  productos.belongsTo(subcategoria, { as: "subcategorium", foreignKey: "subcategoria_id"});
  subcategoria.hasMany(productos, { as: "subcategoria_productos", foreignKey: "subcategoria_id"});
  productos.belongsTo(via_administracion, { as: "via_administracion", foreignKey: "via_administracion_id"});
  via_administracion.hasMany(productos, { as: "productos", foreignKey: "via_administracion_id"});

  return {
    categoria,
    familia,
    log5,
    log6,
    productos,
    subcategoria,
    via_administracion,
  };
}
