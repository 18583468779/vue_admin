import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { setUpElementUi } from "./plugins/element";
import { setUpRegisterComponent } from "./plugins/registerComponent";

const app = createApp(App);
app.use(router); // 设置路由
setUpElementUi(app); // 设置elementui
setUpRegisterComponent(app); // 设置全局注册组件
app.mount("#app");
