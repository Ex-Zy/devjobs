import { fileURLToPath, URL } from "url";

const resolveUrl = (path) => fileURLToPath(new URL(path, import.meta.url));

const alias = {
  "@": resolveUrl("../src"),
  "@node_modules": resolveUrl("../node_modules"),
  "@base": resolveUrl("../src/components/base"),
  "@components": resolveUrl("../src/components"),
  "@styles": resolveUrl("../src/styles"),
  "@pages": resolveUrl("../src/components/pages"),
  "@assets": resolveUrl("../src/assets"),
  "@models": resolveUrl("../src/models"),
  "@services": resolveUrl("../src/services"),
  "@api": resolveUrl("../src/api"),
  "@helpers": resolveUrl("../src/helpers"),
};

export { alias };
