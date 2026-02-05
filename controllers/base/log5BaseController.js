import { BaseController } from "./baseController.js";
import { log5Service } from "../../services/log5Service.js";

export const log5BaseController = new BaseController(log5Service);
