import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");

const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        login: resolve(root, "login", "index.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
});
