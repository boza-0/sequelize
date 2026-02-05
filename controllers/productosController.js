import { productosBaseController as Base } from "./base/productosBaseController.js";

export const crearProductos = Base.create;
export const obtenerProductos = Base.getAll;
export const obtenerProductosPorId = Base.getById;
export const actualizarProductos = Base.update;
export const eliminarProductos = Base.remove;
