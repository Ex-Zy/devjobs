import { defineConfig } from "vite";
import { alias } from "./vite/path.alias";
import { plugins as postcssPlugins } from "./vite/postcss.plugins";
import { plugins as vitePlugins } from "./vite/vite.plugins";

// eslint-disable-next-line no-undef
const isProduction = process.env.NODE_ENV === "production";

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
  base: isProduction ? "/devjobs/" : "/",
});
