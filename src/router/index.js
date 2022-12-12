import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SkillsView from "../views/SkillsView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {name: 'home'}
    },
    {
      path: "/CV_VueJS",
      name: "home",
      component: HomeView,
    },
    {
      path: "/CV_VueJS/skills",
      name: "skills",
      component: SkillsView,
    },
    {
      path: "/CV_VueJS/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
    {
      path: "/CV_VueJS/contact",
      name: "contact",
      component: ContactView,
    }
  ]
});

export default router;
