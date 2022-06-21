import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ButtonApp from "./components/ButtonApp.vue";

const app = createApp(App);
app.component("ButtonApp", ButtonApp);
app.use(router);
app.mount("#app");
