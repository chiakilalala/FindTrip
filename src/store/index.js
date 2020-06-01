import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Axios from 'axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);


const store = new Vuex.Store({
    // 儲存token

    state: {
        projects: [],
        isLogin: false,

        userInfo: {
            id: "",
            Name: "",
            UserPoint: 1000,
            UserImg: null,
            BGImg: null,
            MemberIntro: "hello",
            Tel: null
        },
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        user: {
            Email: "",
            Password: ""
        },
        loginError: null,
        loginSuccessful: false,
        isVisble: false, //導覽列
        status: false,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',

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
        },
        logout(state) {

            state.Authorization = "";
        },
        auth_success(state, Authorization, userInfo) {
            state.Authorization = Authorization;
            state.userInfo = userInfo;
        },
        setProjectInfo(state, val) {

            state.projects = val;
            console.log(val);
        },

    },
    actions: {
        doLogin({ commit }, user) {


            axios.post('http://findtrip.rocket-coding.com/api/login/memberlogin', {
                    Email: user.Email,
                    Password: user.Password
                })
                .then((res) => {
                    // commit('UPDATE_USER', res.date.user);
                    if (res.data.success) {
                        commit('loginStart');
                        this.$router.push('/home')
                    }


                })
                .catch(error => {
                    commit('loginStop', error.data)
                })
        },
        logout({ commit }) {
            return new Promise(resolve => {
                commit('logout');
                // console.log('logout');
                commit('UPDATE_USER', {});
                localStorage.removeItem("Authorization");
                resolve();
            })
        },
        getProjects({ commit }) {
            // 取得所有card
            const api = 'https://next.json-generator.com/api/json/get/4y_gTejsO'
            Axios.get(api).then(res => {
                commit('setProjectInfo', res.data);
                console.log(res.data);
            })
        }

        // register({ commit }, user) {
        //     return new Promise((resolve, reject) => {
        //         axios({
        //             url: 'http://findtrip.rocket-coding.com/api/Login/Register',
        //             data: user,
        //             method: 'POST'
        //         }).then(res => {
        //             console.log(res);
        //             const token = res.data.token;
        //             const user = res.data.user;
        //             localStorage.setItem("token", token);
        //             axios.defaults.headers.common["Authorization"] = token; //
        //             commit("auth_success", token, user);
        //             console.log("succes")
        //             resolve(res);

        //         }).catch(err => {
        //             localStorage.removeItem("token");
        //             reject(err);
        //         })
        //     })
        // }
    }

});

export default store