import "dotenv/config";
import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
  dialect: "postgresql", // Cambiado a "postgresql"
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Asegúrate de que DATABASE_URL esté configurado correctamente
  },
};

export default config;
