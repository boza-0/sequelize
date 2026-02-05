import { log5BaseController as Base } from "./base/log5BaseController.js";
import  Log5  from "../models/log5.js";
export const crearLog5 = Base.create;
export const obtenerLog5 = Base.getAll;
export const obtenerLog5PorId = Base.getById;
export const actualizarLog5 = Base.update;
export const eliminarLog5 = Base.remove;





export const crearLog5V1 = async (req, res) => {
  try {

console.log("Creando Log5 con datos:", req.body);
    const log5 = await Log5.create(req.body);
    res.status(201).json(log5);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
