import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ProjectView from "@/views/ProjectView.vue";
import NotFound from "@/views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/projects", component: ProjectsView },
  { path: "/projects:slug", component: ProjectView },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
