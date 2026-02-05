import express from "express";
import {
  crearLog5,
  obtenerLog5,
  obtenerLog5PorId,
  actualizarLog5,
  eliminarLog5
} from "../controllers/log5Controller.js";

const router = express.Router();

router.post("/", crearLog5);
router.get("/", obtenerLog5);
router.get("/:id", obtenerLog5PorId);
router.put("/:id", actualizarLog5);
router.delete("/:id", eliminarLog5);

export default router;
