import { createRouter, createWebHistory } from "vue-router";
import StartPage from "../views/StartPage.vue";

const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/cats",
    name: "cats",
    component: () => import("../views/CatsPage.vue"),
  },
  {
    path: "/dogs",
    name: "dogs",
    component: () => import("../views/DogsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
