import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import router from './router'
import store from './store'

import "./main.css";

// 讓瀏覽器的全域環境可以使用到 $
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;

// In main.js
import VueScrollReveal from 'vue-scroll-reveal';

// VeeValidate
import { ValidationProvider } from 'vee-validate';

// VueSwal alert plugin


import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

// Register it globally
// 全域註冊元件
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    scale: 1,
    distance: '10px',
    mobile: false
});
// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

Vue.config.productionTip = false;
axios.defaults.withCredentials = false; //解決跨域問題 

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