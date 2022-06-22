import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssNested from "postcss-nested";
import postcssMixins from "postcss-mixins";
import postcssCustomMedia from "postcss-custom-media";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [postcssCustomMedia, postcssMixins, postcssNested],
    },
  },
});
