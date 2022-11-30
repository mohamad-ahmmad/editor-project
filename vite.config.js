import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const login = resolve(root, "login");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root: root,
  build: {
    outDir: outDir,
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      root: root,
      login: login,
    },
  },
  server: {
    port: 8080,
  },
});
