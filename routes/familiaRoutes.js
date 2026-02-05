import express from "express";
import {
  crearFamilia,
  obtenerFamilia,
  obtenerFamiliaPorId,
  actualizarFamilia,
  eliminarFamilia
} from "../controllers/familiaController.js";

const router = express.Router();

router.post("/", crearFamilia);
router.get("/", obtenerFamilia);
router.get("/:id", obtenerFamiliaPorId);
router.put("/:id", actualizarFamilia);
router.delete("/:id", eliminarFamilia);

export default router;
