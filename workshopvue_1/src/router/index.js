import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Sign from "../views/Sign.vue";
import Forgot from "../views/Forgot.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Sign",
        component: Sign,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },

    {
        path: "/forgot",
        name: "Forgot",
        component: Forgot,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;