import express from "express";
import {
  crearProductos,
  obtenerProductos,
  obtenerProductosPorId,
  actualizarProductos,
  eliminarProductos
} from "../controllers/productosController.js";

const router = express.Router();

router.post("/", crearProductos);
router.get("/", obtenerProductos);
router.get("/:id", obtenerProductosPorId);
router.put("/:id", actualizarProductos);
router.delete("/:id", eliminarProductos);

export default router;
