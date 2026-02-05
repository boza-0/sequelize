import express from "express";
import {
  crearVia_administracion,
  obtenerVia_administracion,
  obtenerVia_administracionPorId,
  actualizarVia_administracion,
  eliminarVia_administracion
} from "../controllers/via_administracionController.js";

const router = express.Router();

router.post("/", crearVia_administracion);
router.get("/", obtenerVia_administracion);
router.get("/:id", obtenerVia_administracionPorId);
router.put("/:id", actualizarVia_administracion);
router.delete("/:id", eliminarVia_administracion);

export default router;
