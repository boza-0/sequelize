import { BaseService } from "./baseService.js";
import { Productos } from "../models/productos.js";

export const productosService = new BaseService(Productos);
