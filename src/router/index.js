import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ListProduct from "../views/ListProduct.vue";
import EditProduct from "../views/EditProduct.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/editProduct/:id",
        name: "Edit",
        component: EditProduct
    },
    {
        path: "/listProduct",
        name: "ListProduct",
        component: ListProduct
    },
    {
        path: "/",
        name: "Home",
        component: Home,
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
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;