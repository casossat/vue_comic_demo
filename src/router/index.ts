import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundPage from "~/views/404.vue";
import Dashboard from "~/views/dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "*",
    name: "404_Error",
    component: NotFoundPage,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
