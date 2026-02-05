import { subcategoriaBaseController as Base } from "./base/subcategoriaBaseController.js";

export const crearSubcategoria = Base.create;
export const obtenerSubcategoria = Base.getAll;
export const obtenerSubcategoriaPorId = Base.getById;
export const actualizarSubcategoria = Base.update;
export const eliminarSubcategoria = Base.remove;
