import { BaseController } from "./baseController.js";
import { familiaService } from "../../services/familiaService.js";

export const familiaBaseController = new BaseController(familiaService);
