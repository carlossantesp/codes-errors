import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import ErrorServer from "../views/ErrorServer.vue";
import Forbidden from "../views/Forbidden.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/500",
    name: "ErrorServer",
    component: ErrorServer,
  },
  {
    path: "/403",
    name: "Forbidden",
    component: Forbidden,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
