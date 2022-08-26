import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Temp from "../views/Temp.vue";
import NotFound from "../views/NotFound.vue";
import FantasyPage from "../views/genre/Fantasy.vue";
import HorrorPage from "../views/genre/Horror.vue";
import DrumPage from "../views/genre/Drum.vue";
import ActionPage from "../views/genre/Action.vue";
import ComedyPage from "../views/genre/Comedy.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/see-res",
    name: "temp",
    component: Temp,
  },
  { 
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/category/fantasy",
    name: "fantasy",
    component: FantasyPage,
  },
  {
    path: "/category/horror",
    name: "horror",
    component: HorrorPage,
  },
  {
    path: "/category/drum",
    name: "drum",
    component: DrumPage,
  },
  {
    path: "/category/action",
    name: "action",
    component: ActionPage,
  },
  {
    path: "/category/comedy",
    name: "comedy",
    component: ComedyPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
