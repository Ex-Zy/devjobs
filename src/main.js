import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ButtonApp from "./components/ButtonApp.vue";

// Base styles
import "../node_modules/normalize.css";
import "./styles/reset.local.pcss";
import "./styles/theme.pcss";
import "./styles/typography.pcss";

const app = createApp(App);

app.component("ButtonApp", ButtonApp);

app.use(router);
app.mount("#app");
