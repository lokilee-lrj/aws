import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import InformationView from "../views/InformationView.vue";
import DashboardView from "../views/DashboardView.vue";
import HelpView from "../views/HelpView.vue";
import QuizView from "../views/QuizView.vue";
import AboutView from "../views/AboutView.vue";
import NewsView from "../views/NewsView.vue";
export const routes = [
  {
    path: "/information",
    name: "information",
    component: InformationView,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),/
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ,
    ...routes,
  ],
});

export default router;
