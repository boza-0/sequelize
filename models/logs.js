import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Logs = sequelize.define(
  "Logs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    log: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "logs",
    timestamps: true,
  }
);
