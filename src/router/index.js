import Vue from 'vue'

import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [

    {
        path: '/login',
        name: 'Login',

        component: () =>
            import ('@/components/page/Login'),
        meta: { requiresAuth: false }, //不需要驗證
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () =>
            import ('@/components/Dashboard'),
        meta: { requiresAuth: true }, //需要驗證
    },

    {
        path: '/*',
        redirect: '/login',

    }, //// 當 url path 不符合 router 表的時候，預設轉址到
    // 順序一定要最後面


]

const router = new VueRouter({

    base: process.env.BASE_URL,
    routes
})

export default router