import { BaseController } from "./baseController.js";
import { logsService } from "../../services/logsService.js";

export const logsBaseController = new BaseController(logsService);
