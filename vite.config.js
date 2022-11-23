import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const about = resolve(root, "about");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      root,
      about,
    },
  },

  server: {
    port: 8080,
  },
});
