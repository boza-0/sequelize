import { categoriaBaseController as Base } from "./base/categoriaBaseController.js";

export const crearCategoria = Base.create;
export const obtenerCategoria = Base.getAll;
export const obtenerCategoriaPorId = Base.getById;
export const actualizarCategoria = Base.update;
export const eliminarCategoria = Base.remove;
