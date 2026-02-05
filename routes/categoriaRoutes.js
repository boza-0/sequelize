import express from "express";
import {
  crearCategoria,
  obtenerCategoria,
  obtenerCategoriaPorId,
  actualizarCategoria,
  eliminarCategoria
} from "../controllers/categoriaController.js";

const router = express.Router();

router.post("/", crearCategoria);
router.get("/", obtenerCategoria);
router.get("/:id", obtenerCategoriaPorId);
router.put("/:id", actualizarCategoria);
router.delete("/:id", eliminarCategoria);

export default router;
