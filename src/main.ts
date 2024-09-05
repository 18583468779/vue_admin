import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { setUpElementUi } from "./plugins/element";

const app = createApp(App);
app.use(router);
setUpElementUi(app);
app.mount("#app");
