import express from "express";
import {
  crearLogs,
  obtenerLogs,
  obtenerLogsPorId,
  actualizarLogs,
  eliminarLogs
} from "../controllers/logsController.js";

const router = express.Router();

router.post("/", crearLogs);
router.get("/", obtenerLogs);
router.get("/:id", obtenerLogsPorId);
router.put("/:id", actualizarLogs);
router.delete("/:id", eliminarLogs);

export default router;
