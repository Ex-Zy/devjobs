import { fileURLToPath, URL } from "url";

const resolveUrl = (path) => fileURLToPath(new URL(path, import.meta.url));

export { resolveUrl };
