import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ApplicationsPage from "../views/ApplicationsPage.vue";
import AddApplicationPage from "../views/Add-ApplicationPage.vue";
import SettingsPage from "../views/SettingsPage.vue";
import LogoutPage from "../views/LogoutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/applications",
      name: "Applications",
      component: ApplicationsPage,
    },
    {
      path: "/add-application",
      name: "AddApplication",
      component: AddApplicationPage,
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsPage,
    },
    {
      path: "/logout",
      name: "Logout",
      component: LogoutPage,
    },
  ],
});

export default router;
