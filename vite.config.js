import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/news-explorer-frontend/",
  plugins: [react()],
  server: {
    port: 3001,
  },
});
