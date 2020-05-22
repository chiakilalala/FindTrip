import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import router from './router'
import store from './store'

import "./main.css";

Vue.config.productionTip = false;
axios.defaults.withCredentials = true; //解決跨域問題

Vue.use(VueAxios, axios);



Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//     console.log('to', to, 'from', from, 'next', next);
//     if (to.meta.requiresAuth) {
//         // 請求介面獲取資料
//         //  requiresAuth 是我們這次記錄 是否需要驗證 自訂的參數。
//         console.log(to.meta.requiresAuth);
//         const api = `https://forlife.southeastasia.cloudapp.azure.com/api/ApiMembers`;

//         axios.post(api).then(res => {
//             console.log(res.data);

//             if (res.data.success) {
//                 next(); //如果正確
//             } else {
//                 next({
//                     path: '/login'
//                 })
//             }
//         });

//     } else {
//         next();
//     }

//     // ...
// });