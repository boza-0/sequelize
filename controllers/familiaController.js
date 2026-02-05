import { familiaBaseController as Base } from "./base/familiaBaseController.js";

export const crearFamilia = Base.create;
export const obtenerFamilia = Base.getAll;
export const obtenerFamiliaPorId = Base.getById;
export const actualizarFamilia = Base.update;
export const eliminarFamilia = Base.remove;
