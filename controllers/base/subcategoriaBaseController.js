import { BaseController } from "./baseController.js";
import { subcategoriaService } from "../../services/subcategoriaService.js";

export const subcategoriaBaseController = new BaseController(subcategoriaService);
