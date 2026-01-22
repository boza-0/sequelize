import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
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
