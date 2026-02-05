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

const modelFiles = fs
  .readdirSync(modelsPath)
  .filter(
    (f) =>
      f.endsWith(".js") &&
      !f.toLowerCase().includes("init-models")
  );

const toPascal = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

for (const file of modelFiles) {
  const resource = path.basename(file, ".js"); // productos
  const Resource = toPascal(resource);          // Productos

  /* =========================
     SERVICE (regenerable)
     ========================= */
  const serviceContent = `import { BaseService } from "./baseService.js";
import { ${Resource} } from "../models/${file}";

export const ${resource}Service = new BaseService(${Resource});
`;

  fs.writeFileSync(
    path.join(servicesPath, `${resource}Service.js`),
    serviceContent
  );

  /* =========================
     BASE CONTROLLER (regenerable)
     ========================= */
  const baseControllerContent = `import { BaseController } from "./baseController.js";
import { ${resource}Service } from "../../services/${resource}Service.js";

export const ${resource}BaseController = new BaseController(${resource}Service);
`;

  fs.writeFileSync(
    path.join(controllersBasePath, `${resource}BaseController.js`),
    baseControllerContent
  );

  /* =========================
     CONTROLLER (stable, do NOT overwrite)
     ========================= */
  const controllerFile = path.join(
    controllersPath,
    `${resource}Controller.js`
  );

  if (!fs.existsSync(controllerFile)) {
    const controllerContent = `import { ${resource}BaseController as Base } from "./base/${resource}BaseController.js";

export const crear${Resource} = Base.create;
export const obtener${Resource} = Base.getAll;
export const obtener${Resource}PorId = Base.getById;
export const actualizar${Resource} = Base.update;
export const eliminar${Resource} = Base.remove;
`;

    fs.writeFileSync(controllerFile, controllerContent);
  }

  /* =========================
     ROUTES (regenerable)
     ========================= */
  const routesContent = `import express from "express";
import {
  crear${Resource},
  obtener${Resource},
  obtener${Resource}PorId,
  actualizar${Resource},
  eliminar${Resource}
} from "../controllers/${resource}Controller.js";

const router = express.Router();

router.post("/", crear${Resource});
router.get("/", obtener${Resource});
router.get("/:id", obtener${Resource}PorId);
router.put("/:id", actualizar${Resource});
router.delete("/:id", eliminar${Resource});

export default router;
`;

  fs.writeFileSync(
    path.join(routesPath, `${resource}Routes.js`),
    routesContent
  );

  console.log(`CRUD generado para: ${resource}`);
}

console.log("AutoCRUD completado correctamente.");
