import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: "dist",        // garante saída em dist
    emptyOutDir: true,
    rollupOptions: {
      input: "./index.html", // força o HTML raiz
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
