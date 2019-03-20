import Vue from "vue";
import VueRouter from "vue-router";
import Hello from "./Components/Hello";
import NotFound from "./Components/NotFound";
import BulkData from "./Components/BulkData";
import Security from "./Components/Security";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Hello },
  {
    path: "/lazy-load",
    component: () => import(/* webpackChunkName: "LazyVue" */ "./Components/LazyLoad")
  },
  { path: "/bulk-data", component: BulkData },
  { path: "/security", component: Security },
  { path: "*", component: NotFound}
]

const router = new VueRouter({
  routes
});

export default router;
