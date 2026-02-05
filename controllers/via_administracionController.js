import { via_administracionBaseController as Base } from "./base/via_administracionBaseController.js";

export const crearVia_administracion = Base.create;
export const obtenerVia_administracion = Base.getAll;
export const obtenerVia_administracionPorId = Base.getById;
export const actualizarVia_administracion = Base.update;
export const eliminarVia_administracion = Base.remove;
