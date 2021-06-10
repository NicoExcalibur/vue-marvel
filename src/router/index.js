import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Characters from "../views/Characters.vue";
import Hero from "../views/Hero.vue";

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
  {
    path: "/characters/:id",
    name: "hero",
    component: Hero,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
