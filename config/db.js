import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "api_rest_db",
  "root",
  "", // empty string if MySQL has no password
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false
  }
);

// Comprobar conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida con la base de datos.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
})();
