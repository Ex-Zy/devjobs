import postcssNested from "postcss-nested";
import postcssMixins from "postcss-mixins";
import postcssCustomMedia from "postcss-custom-media";
import posctcssEach from "postcss-each";

const plugins = [
  postcssCustomMedia,
  postcssMixins,
  postcssNested,
  posctcssEach,
];

export { plugins };
