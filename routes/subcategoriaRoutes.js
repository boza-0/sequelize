import express from "express";
import {
  crearSubcategoria,
  obtenerSubcategoria,
  obtenerSubcategoriaPorId,
  actualizarSubcategoria,
  eliminarSubcategoria
} from "../controllers/subcategoriaController.js";

const router = express.Router();

router.post("/", crearSubcategoria);
router.get("/", obtenerSubcategoria);
router.get("/:id", obtenerSubcategoriaPorId);
router.put("/:id", actualizarSubcategoria);
router.delete("/:id", eliminarSubcategoria);

export default router;
