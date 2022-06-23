import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ButtonEl from "./components/form/ButtonEl.vue";
import SwitchEl from "./components/form/SwitchEl.vue";
import InputEl from "./components/form/InputEl.vue";
import CheckboxEl from "./components/form/CheckboxEl.vue";

// Base styles
import "../node_modules/normalize.css";
import "./styles/reset.local.pcss";
import "./styles/theme.pcss";
import "./styles/typography.pcss";

const app = createApp(App);

// Global components registration
app.component("ButtonEl", ButtonEl);
app.component("SwitchEl", SwitchEl);
app.component("InputEl", InputEl);
app.component("CheckboxEl", CheckboxEl);

app.use(router);
app.mount("#app");
