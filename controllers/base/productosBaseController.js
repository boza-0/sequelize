import { BaseController } from "./baseController.js";
import { productosService } from "../../services/productosService.js";

export const productosBaseController = new BaseController(productosService);
