import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/detalle',
        name: 'Detalle',
        component: () =>
            import ( /* webpackChunkName: "detalle" */ '../views/Detalle.vue')
    },
    {
        path: '/producto',
        name: 'Producto',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Producto.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
    },
    {
        path: '/noticias',
        name: 'Noticias',
        component: () => import('../views/Noticias.vue')
    },
    {
        path: '/equipo',
        name: 'Equipo',
        component: () => import('../views/Equipo.vue')
    },
    {
        path: '/menulogin',
        name: 'Menulogin',
        component: () => import('../views/userviews/MenuLogin.vue')
    },
    {
        path: '/reporte',
        name: 'Reporte',
        component: () => import('../views/userviews/Reporte.vue')
    },
    {
        path: '/busquedaReporte',
        name: 'BusquedaReporte',
        component: () => import('../views/userviews/BusquedaReporte.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;