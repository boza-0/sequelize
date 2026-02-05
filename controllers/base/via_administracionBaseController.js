import { BaseController } from "./baseController.js";
import { via_administracionService } from "../../services/via_administracionService.js";

export const via_administracionBaseController = new BaseController(via_administracionService);
