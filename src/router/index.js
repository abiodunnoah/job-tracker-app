import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import ApplicationsPage from "../views/ApplicationsPage.vue";
import AddApplicationPage from "../views/Add-ApplicationPage.vue";
import JobDetailsPage from "../views/JobDetailsPage.vue";
import SettingsPage from "../views/SettingsPage.vue";
import LogoutPage from "../views/LogoutPage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignupPage from "../views/SignupPage.vue";
import SignoutPage from "../views/SignoutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: "/applications",
      name: "Applications",
      component: ApplicationsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/jobs/:id",
      name: "JobDetails",
      component: JobDetailsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/add-application",
      name: "AddApplication",
      component: AddApplicationPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/settings",
      name: "Settings",
      component: SettingsPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/logout",
      name: "Logout",
      component: LogoutPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignupPage,
      meta: { requiresAuth: false },
    },
    {
      path: "/signout",
      name: "Signout",
      component: SignoutPage,
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
      meta: { requiresAuth: false },
    },
  ],
});

import { auth } from "../firebase/config";

// navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const user = auth.currentUser;

  if (requiresAuth && !user) {
    next({ name: "Login" });
  } else if (
    !requiresAuth &&
    user &&
    (to.name === "Login" || to.name === "Signup" || to.name === "Signout")
  ) {
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
