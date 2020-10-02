import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let routes = [
    {
        path: "/",
        alias: "/permissions",
        name: "permissions",
        component: () => import("./components/PermissionsList")
      },
      {
        path: "/permission/:id",
        name: "permission-details",
        component: () => import("./components/Permission")
      },
      {
        path: "/add-permission",
        name: "add-permission",
        component: () => import("./components/PermissionAdd")
      }
];

export default new Router({
    mode: "history",
    routes: routes
})