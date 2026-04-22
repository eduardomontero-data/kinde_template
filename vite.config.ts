import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "dev"),
  publicDir: false,
  build: {
    outDir: path.resolve(__dirname, "preview-build"),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      "@kinde/infrastructure": path.resolve(
        __dirname,
        "dev/kinde-infrastructure-stub.tsx",
      ),
    },
  },
});
