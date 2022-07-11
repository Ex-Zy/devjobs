import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import components from "./plugins/global.components";
import { Vue3Mq } from "vue3-mq";

const app = createApp(App);
const breakpoints = {
  mobile: 0,
  tablet: 780,
  desktop: 1024,
};

app.use(components);
app.use(router);
app.use(Vue3Mq, { breakpoints });
app.mount("#app");
