import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import FrontHome from "../view/front.vue/index.vue";
import AdminHome from "../view/admin/index.vue";
import Admin from "../layout/admin.vue";
import Front from "../layout/front.vue";

const routes = [
  {
    path: "/",
    redirect: "/admin/home",
  },
  {
    path: "/admin",
    component: Admin,
    children: [{ path: "home", component: AdminHome }],
  },
  {
    path: "/front",
    component: Front,
    children: [{ path: "home", component: FrontHome }],
  },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
