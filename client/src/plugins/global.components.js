import ButtonEl from "@base/ButtonEl.vue";
import SwitchEl from "@base/SwitchEl.vue";
import InputEl from "@base/InputEl.vue";
import CheckboxEl from "@base/CheckboxEl.vue";
import LoaderBase from "@base/LoaderBase.vue";
import LogoSvg from "@base/logo/LogoSvg.vue";
import SvgIcon from "@base/SvgIcon.vue";

const components = [
  { name: "ButtonEl", component: ButtonEl },
  { name: "SwitchEl", component: SwitchEl },
  { name: "InputEl", component: InputEl },
  { name: "CheckboxEl", component: CheckboxEl },
  { name: "LoaderBase", component: LoaderBase },
  { name: "LogoSvg", component: LogoSvg },
  { name: "SvgIcon", component: SvgIcon },
];

export default {
  install(app) {
    // Global components registration
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
