import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

const plugins = [vue(), svgLoader()];

export { plugins };
