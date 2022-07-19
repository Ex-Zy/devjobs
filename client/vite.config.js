import { defineConfig } from "vite";
import { alias } from "./vite/path.alias.js";
import { resolveUrl } from "./vite/vite.helpers.js";
import { plugins as postcssPlugins } from "./vite/postcss.plugins.js";
import { plugins as vitePlugins } from "./vite/vite.plugins.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins,
  resolve: {
    alias,
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: postcssPlugins,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3004/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: resolveUrl("../../server/public"),
  },
});
