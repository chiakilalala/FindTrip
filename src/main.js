import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import { Button, Select, Dialog, Rate, InputNumber, Message, Upload } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css' //樣式一定要引入

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Dialog.name, Dialog);
Vue.component(Rate.name, Rate);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Message.name, Message);
Vue.component(Upload.name, Upload);

import router from './router'
import store from './store'

import "./main.css";

// 讓瀏覽器的全域環境可以使用到 $
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery;

// In main.js
import VueScrollReveal from 'vue-scroll-reveal';

// VeeValidate
import { localize, ValidationProvider, extend, configure, ValidationObserver } from 'vee-validate';

import { email, required, min, max, confirmed, integer, max_value, min_value } from 'vee-validate/dist/rules.umd.js';

// // 設置語言為繁體中文
import zh_TW from 'vee-validate/dist/locale/zh_TW.json';

// 文編編輯器
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

localize('zh_TW', zh_TW);

configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    },
});
// 添加规则
extend('email', email); //信箱驗證
extend('required', required); //必須確認
extend('confirmed', confirmed); //確認確認
extend('min', min);
extend('max', max);
extend('integer', integer);
extend('max_value', max_value);
extend('min_value', min_value);


// Register it globally
// 全域註冊元件
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// VueSwal alert plugin


import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);



Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    scale: 1,
    distance: '10px',
    mobile: false
});
// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);






Vue.use(VueQuillEditor);

Vue.config.productionTip = false;
axios.defaults.withCredentials = false; //解決跨域問題 

Vue.use(VueAxios, axios);





Vue.config.productionTip = false;

Vue.filter('category', (value) => {
    switch (value) {
        case 'food':
            return '吃貨';
        case 'secret':
            return '秘境';
        case 'act':
            return '冒險';
        case 'culture':
            return '文化';
        case 'shopping':
            return '購物';
        case 'religion':
            return '宗教';
    }
});


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


// 頁面轉跳驗證
router.beforeEach((to, from, next) => {
    // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
    //導航守衛
    console.log('to=', to.fullPath, '| from=', from.fullPath);
    if (to.matched.some(record => {
            console.log(record.name, record.meta.requiresAuth);
            return record.meta.requiresAuth;
        })) {
        // 如果沒有 token 
        // console.log('token?', store.state.Authorization);
        if (store.state.token === '' || store.state.token === 'undefined') {
            // 轉跳到 login page
            next({ path: '/login' });
        } else {
            next(); // 往下繼續執行
        }
    } else {
        next(); // 往下繼續執行
    }
});