import { logsBaseController as Base } from "./base/logsBaseController.js";

export const crearLogs = Base.create;
export const obtenerLogs = Base.getAll;
export const obtenerLogsPorId = Base.getById;
export const actualizarLogs = Base.update;
export const eliminarLogs = Base.remove;
