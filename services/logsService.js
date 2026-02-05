import { BaseService } from "./baseService.js";
import { Logs } from "../models/logs.js";

export const logsService = new BaseService(Logs);
