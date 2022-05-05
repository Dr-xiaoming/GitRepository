import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import localCache from '../utils/cache'


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect:"/welcome",
    children:[
      {
       path:"/welcome",
       name:"welcome",
       component:()=>
        import("../views/menu/welcome.vue")
      },
      {
        path:"/person",
        name:"person",
        component:()=>
        import("../views/menu/person.vue")
      },
      {
        path:"/home1",
        name:"home1",
        component:()=>
        import("../views/home1.vue")
      }
    ]
  },
  {
    path:"/login",
    name:"login-box",
    component:()=>
      import("../views/login/login-box.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router;
