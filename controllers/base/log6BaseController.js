import { BaseController } from "./baseController.js";
import { log6Service } from "../../services/log6Service.js";

export const log6BaseController = new BaseController(log6Service);
