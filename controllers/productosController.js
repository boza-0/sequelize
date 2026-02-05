import { productosBaseController as Base } from "./base/productosBaseController.js";

export const crearProducto = Base.create;
export const obtenerProductos = Base.getAll;
export const obtenerProducto = Base.getById;
export const actualizarProducto = Base.update;
export const eliminarProducto = Base.remove;
