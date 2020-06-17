import Vue from 'vue'

import VueRouter from 'vue-router'

/* eslint-disable */

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
        path: '/homeTest',
        /* 首頁*/
        name: 'homeTest',

        component: () =>
            import ('@/components/HomeTest'),
        meta: { requiresAuth: false }, //不需要驗證
    },
    {
        path: '/product',
        name: 'Product',
        component: () =>
            import ('@/components/page/Product'),
        meta: { requiresAuth: false }, //不需要驗證

    },
    {
        path: '/product/:id',
        name: 'people',
        component: () =>
            import ('@/components/page/People'),
        meta: { requiresAuth: false }, //不需要驗證
        // children: [{
        //     path: '/product/:id/order',
        //     name: 'order',
        //     component: () =>
        //         import ('@/components/peopleorder'),
        //     meta: { requiresAuth: false }, //不需要驗證
        // }]
    },
    {
        path: '/order/:id',
        name: 'orderlist',
        component: () =>
            import ('@/components/CheckOrder.vue'),
        meta: { requiresAuth: false },
    },


    {
        path: '/wish',
        name: 'wish',
        component: () =>
            import ('@/components/page/Wish.vue'),
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
            // {
            //     path: 'traveler', // url= /member/traveler
            //     component: () =>
            //         import ('@/components/member/Traveler'),
            //     meta: { requiresAuth: true },
            // },
            {
                path: 'traveler', // url= /member/traveler
                component: () =>
                    import ('@/components/member/TravelTest'),
                meta: { requiresAuth: true },
            },
            {
                path: 'travelerProfile', // url= /member/travelerProfile
                component: () =>
                    import ('@/components/member/travelerProfile'),
                meta: { requiresAuth: true },
            },
        ]
    },

    {
        path: '/*',
        redirect: '/home',

    }, //// 當 url path 不符合 router 表的時候，預設轉址到
    // 順序一定要最後面


]


const router = new VueRouter({

    base: process.env.BASE_URL,
    routes
})

export default router