import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase/config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/applications",
      name: "Applications",
      component: () => import("../views/ApplicationsPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/jobs/:id",
      name: "JobDetails",
      component: () => import("../views/JobDetailsPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/add-application",
      name: "AddApplication",
      component: () => import("../views/Add-ApplicationPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/settings",
      name: "Settings",
      component: () => import("../views/SettingsPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/logout",
      name: "Logout",
      component: () => import("../views/LogoutPage.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("../views/SignupPage.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/signout",
      name: "Signout",
      component: () => import("../views/SignoutPage.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginPage.vue"),
      meta: { requiresAuth: false },
    },
  ],
});

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
