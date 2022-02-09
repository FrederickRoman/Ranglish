import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const API = () =>
  import(/* webpackChunkName: "apiPage" */ "../views/API.vue");
const ComingSoon = () =>
  import(/* webpackChunkName: "comingSoon" */ "../views/ComingSoon.vue");
const NotFound = () =>
  import(/* webpackChunkName: "404" */ "../views/NotFound.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/apiPage",
    name: "API",
    component: API,
  },
  {
    path: "/comingSoon",
    name: "ComingSoon",
    component: ComingSoon,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
