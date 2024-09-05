// element-ul 的配置
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { App } from "vue";

export const setUpElementUi = (app: App) => {
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    // 设置Icon
    app.component(key, component);
  }
};
