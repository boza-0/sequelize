import express from "express";
import {
  crearLog6,
  obtenerLog6,
  obtenerLog6PorId,
  actualizarLog6,
  eliminarLog6
} from "../controllers/log6Controller.js";

const router = express.Router();

router.post("/", crearLog6);
router.get("/", obtenerLog6);
router.get("/:id", obtenerLog6PorId);
router.put("/:id", actualizarLog6);
router.delete("/:id", eliminarLog6);

export default router;
