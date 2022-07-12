import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { resolveUrl } from "./vite.helpers.js";

const plugins = [
  vue(),
  svgLoader(),
  createSvgIconsPlugin({
    iconDirs: [resolveUrl("../src/assets/icons")],
    symbolId: "[name]",
  }),
];

export { plugins };
