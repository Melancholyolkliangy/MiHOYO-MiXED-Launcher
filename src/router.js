import * as VueRouter from "vue-router";
import MainPage from "./pages/MainPage.vue";
import StarRailPage from "./pages/StarRailPage.vue";
import GenshinPage from "./pages/GenshinPage.vue";
import Honkai3Page from "./pages/Honkai3Page.vue";
import tmpGsPage from "./pages/tmpGsPage.vue";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      name: "mainpage",
      path: "/",
      component: MainPage,
    },
    {
      name: "gspage",
      path: "/gspage",
      component: GenshinPage,
    },
    {
      name: "srpage",
      path: "/srpage",
      component: StarRailPage,
    },
    {
      name: "hipage",
      path: "/hipage",
      component: Honkai3Page,
    },
    {
      name: "tempGsPage",
      path: "/tmpgspage",
      component: tmpGsPage,
    },
  ],
});

export default router;
