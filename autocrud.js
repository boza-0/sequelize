import fs from "fs";
import path from "path";

const modelsPath = "./models";
const servicesPath = "./services";
const controllersPath = "./controllers";
const controllersBasePath = "./controllers/base";
const routesPath = "./routes";

fs.mkdirSync(servicesPath, { recursive: true });
fs.mkdirSync(controllersPath, { recursive: true });
fs.mkdirSync(controllersBasePath, { recursive: true });
fs.mkdirSync(routesPath, { recursive: true });

const files = fs
  .readdirSync(modelsPath)
  .filter((f) => f.endsWith(".js") && !f.toLowerCase().includes("init-models"));

const toPascalFromFile = (file) => {
  const base = path.basename(file, ".js"); // productos
  return base.charAt(0).toUpperCase() + base.slice(1); // Productos
};

const toSingular = (plural) => plural.replace(/s$/, "");

for (const file of files) {
  const modelFileBase = path.basename(file, ".js"); // productos
  const ModelName = toPascalFromFile(file); // Productos
  const singular = toSingular(modelFileBase); // producto

  // ---- SERVICE (siempre regenerable)
  const serviceContent = `import { BaseService } from "./baseService.js";
import { ${ModelName.slice(0, -1)} as ${ModelName.slice(0, -1)}Model } from "../models/${file}";

export const ${modelFileBase}Service = new BaseService(${ModelName.slice(0, -1)}Model);
`;
  fs.writeFileSync(path.join(servicesPath, `${modelFileBase}Service.js`), serviceContent);

  // ---- BASE CONTROLLER (siempre regenerable)
  const baseControllerContent = `import { BaseController } from "./baseController.js";
import { ${modelFileBase}Service } from "../../services/${modelFileBase}Service.js";

export const ${modelFileBase}BaseController = new BaseController(${modelFileBase}Service);
`;
  fs.writeFileSync(
    path.join(controllersBasePath, `${modelFileBase}BaseController.js`),
    baseControllerContent
  );

  // ---- CONTROLLER (no pisar si existe)
  const controllerFile = path.join(controllersPath, `${modelFileBase}Controller.js`);
  if (!fs.existsSync(controllerFile)) {
    const controllerContent = `import { ${modelFileBase}BaseController as Base } from "./base/${modelFileBase}BaseController.js";

export const crear${ModelName.slice(0, -1)} = Base.create;
export const obtener${ModelName} = Base.getAll;
export const obtener${ModelName.slice(0, -1)} = Base.getById;
export const actualizar${ModelName.slice(0, -1)} = Base.update;
export const eliminar${ModelName.slice(0, -1)} = Base.remove;
`;
    fs.writeFileSync(controllerFile, controllerContent);
  }

  // ---- ROUTES (siempre regenerable)
  const routesContent = `import express from "express";
import {
  crear${ModelName.slice(0, -1)},
  obtener${ModelName},
  obtener${ModelName.slice(0, -1)},
  actualizar${ModelName.slice(0, -1)},
  eliminar${ModelName.slice(0, -1)}
} from "../controllers/${modelFileBase}Controller.js";

const router = express.Router();

router.get("/", obtener${ModelName});
router.get("/:id", obtener${ModelName.slice(0, -1)});
router.post("/", crear${ModelName.slice(0, -1)});
router.put("/:id", actualizar${ModelName.slice(0, -1)});
router.delete("/:id", eliminar${ModelName.slice(0, -1)});

export default router;
`;
  fs.writeFileSync(path.join(routesPath, `${modelFileBase}Routes.js`), routesContent);

  console.log(`CRUD generado para: ${modelFileBase}`);
}

console.log("AutoCRUD completado.");
