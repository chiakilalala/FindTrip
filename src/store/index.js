import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);


const store = new Vuex.Store({
    // 儲存token

    state: {

        isLogin: false,
        userInfo: {},
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        user: {
            Email: "",
            Password: ""
        },
        loginError: null,
        loginSuccessful: false

    },
    mutations: {
        //修改token 並將token 存入localStoreage
        changeLogin(state, user) { //這裡的state 對應上面的state
            console.log(user);
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);

        },
        UPDATE_USER(state, userInfo) {
            state.userInfo = userInfo;
        },
        loginStart: state => state.isLogin = true,
        loginStop: (state, errorMessage) => {
            state.isLogin = false;
            state.loginError = errorMessage;
            state.loginSuccessful = !errorMessage;
        }

    },
    actions: {
        doLogin({ commit }, loginData) {
            commit('loginStart');

            axios.post('http://findtrip.rocket-coding.com/api/login/memberlogin', {
                    ...loginData
                })
                .then(() => {

                    commit('loginStop', null)


                })
                .catch(error => {
                    commit('loginStop', error.data)
                })
        }
    }

});

export default store