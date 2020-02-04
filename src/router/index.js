import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/detalle',
        name: 'detalle',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Detalle.vue')
    },
    {
        path: '/producto',
        name: 'producto',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Producto.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;