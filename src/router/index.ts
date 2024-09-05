import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../view/home.vue";
import About from "../view/about.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/about", component: About },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
