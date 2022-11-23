import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue"
const router = createRouter({
    routes: [
      {
        path: "/",
        component: HelloWorld,
      },
    ],
    history: createWebHistory(),
  });


export default router;