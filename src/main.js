import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "./plugins/global.components";

import "virtual:svg-icons-register";
// import "virtual:svg-icons-names";

const app = createApp(App);

app.use(components);
app.use(router);
app.mount("#app");
