import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./db",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
