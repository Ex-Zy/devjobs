import postcssNested from "postcss-nested";
import postcssMixins from "postcss-mixins";
import postcssCustomMedia from "postcss-custom-media";

const plugins = [postcssCustomMedia, postcssMixins, postcssNested];

export { plugins };
