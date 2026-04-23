import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Egidijus" },
  },
  {
    path: "/about",
    component: () => import("@/views/AboutView.vue"),
    meta: { title: "About — Egidijus" },
  },
  {
    path: "/projects",
    component: () => import("@/views/ProjectsView.vue"),
    meta: { title: "Projects — Egidijus" },
  },
  {
    path: "/projects/:slug",
    component: () => import("@/views/ProjectView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: "404 — Egidijus" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) ?? "Egidijus";
});

export default router;
