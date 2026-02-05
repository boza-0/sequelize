import { BaseController } from "./baseController.js";
import { categoriaService } from "../../services/categoriaService.js";

export const categoriaBaseController = new BaseController(categoriaService);
