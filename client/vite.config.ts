import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Interface-CRUD-Linux/",
  build: {
    outDir: "dist",
    // Verifique se não há configurações excluindo arquivos:
    rollupOptions: {
      input: "index.html", // Garanta que o index.html é o ponto de entrada
    },
  },
});
