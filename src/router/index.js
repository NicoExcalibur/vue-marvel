import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/characters",
    name: "Character",
    component: Characters,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
