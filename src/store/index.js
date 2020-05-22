import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(Vuex);
// Vue.use(VueAxios, axios);


const store = new Vuex.Store({
    // 儲存token

    state: {
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    mutations: {
        //修改token 並將token 存入localStoreage
        changeLogin(state, user) { //這裡的state 對應上面的state
            console.log(user);
            state.Authorization = user.Authorization;

        }
    }

});

export default store