import { defineConfig } from "vite";
import { alias } from "./vite/path.alias";
import { plugins as postcssPlugins } from "./vite/postcss.plugins";
import { plugins as vuePlugins } from "./vite/vue.plugins";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: vuePlugins,
  resolve: {
    alias,
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: postcssPlugins,
    },
  },
});
