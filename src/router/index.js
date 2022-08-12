import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import( /* webpackChunkName: "contact" */ "@/views/ContactView.vue" ),
  },
  {
    path: "/cv",
    name: "cv",
    component: () =>
      import( /* webpackChunkName: "cv" */ "@/views/CVView.vue" ),
  },
  {
    path: "/projects",
    name: "projectsList",
    component: () =>
      import( /* webpackChunkName: "projectsList" */ "@/views/ProjectsListView.vue" ),
  },
  {
    path: "/project/:id",
    name: "projectDetails",
    component: () =>
      import( /* webpackChunkName: "projectDetails" */ "@/views/ProjectDetailsView.vue" ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savePosition) {
    return (
      savePosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
  },
});

export default router;
