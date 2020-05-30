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
        path: '/sign',
        name: 'Sign',

        component: () =>
            import ('@/components/page/Sign'),
        meta: { requiresAuth: false }, //不需要驗證
    },
    {
        path: '/home',
        /* 首頁*/
        name: 'Home',

        component: () =>
            import ('@/components/Home'),
        meta: { requiresAuth: false }, //不需要驗證
    },
    {
        path: '/Product',
        name: 'Product',
        component: () =>
            import ('@/components/page/Product'),
        meta: { requiresAuth: false }, //不需要驗證
    },
    {
        path: '/member',
        name: 'member',
        component: () =>
            import ('@/components/page/Dashboard'),
        meta: { requiresAuth: true }, //需要驗證

        children: [{
                path: 'order', // url= /member/order
                component: () =>
                    import ('@/components/member/Order'),
                meta: { requiresAuth: true },
            },
            {
                path: 'point', // url= /member/point
                component: () =>
                    import ('@/components/member/Point'),
                meta: { requiresAuth: true },
            },
            {
                path: 'account', // url= /member/account
                component: () =>
                    import ('@/components/member/Account'),
                meta: { requiresAuth: true },
            },
            {
                path: 'project', // url= /member/project
                component: () =>
                    import ('@/components/member/Project'),
                meta: { requiresAuth: true },
            },
            {
                path: 'message', // url= /member/message
                component: () =>
                    import ('@/components/member/Message'),
                meta: { requiresAuth: true },
            },
            {
                path: 'favorite', // url= /member/favorite
                component: () =>
                    import ('@/components/member/Favorite'),
                meta: { requiresAuth: true },
            },
        ]
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