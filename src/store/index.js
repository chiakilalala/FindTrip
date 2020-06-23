import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Axios from 'axios';
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);
Vue.use(VueAxios, axios);


const store = new Vuex.Store({
    // 儲存token

    state: {
        isLoading: false,
        started: [],
        projects: [],
        onePlan: {}, //檢視旅行家個人檔案
        SearchPlans: [], //搜尋資料
        isLogin: false,
        // 5. state 改變，通知 UI 更新
        userInfo: {},
        orders: [], //全部訂單
        sellOrders: [], //規劃師全部訂單
        order: {},
        loginUser: {},
        Permission: localStorage.getItem('Permission') ? localStorage.getItem('Permission') : '',
        user: {
            Email: "",
            Password: ""
        },
        loginError: null,
        loginSuccessful: false,
        isVisble: false, //導覽列
        status: false,
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        searchData: [],

        countries: [],
        selectedCountry: "",
        selectedCity: null,
        wishList: [] //許願板東西



    },
    getter: {
        getStarted: (state) => state.started,
        getUserList: (state) => state.userInfo,
        selectedCountry: (state) => state.selectedCountry,
        selectedCity: (state) => state.selectedCity,
        getStorage: function(state) {
            if (!state.Permission) {
                state.Permission = JSON.parse(localStorage.getItem('Permission'))
            }
            return state.Permission;
        },
        SearchProjects: (state) => state.SearchPlans,

        // county: (state) => {
        //     return state.projects
        //         .map(item => item.country) //篩出國家
        //         .filter((item, index, arr) => arr.indexOf(item) === index);
        // },
        // city: (state) => {
        //     const cities = [];
        //     state.projects.forEach((value) => {
        //         if (!value.city) return;
        //         cities.add(value.city);

        //     });
        //     return Array.from(cities);
        // },

        updateSearch: (state, getters) => {
            let filterData = [];
            if (state.searchData.length > 0) {
                filterData = state.searchData;

            } else if (getters.selectedCity) {
                filterData = getters.filterCityData;
            } else if (getters.selectedCountry) {
                filterData = getters.filterCountyData;
            }
            return filterData;
        },


    },
    mutations: {

        //修改token 並將token 存入localStoreage
        changeLogin(state, user) { //這裡的state 對應上面的state
            // console.log(user);
            // state.Authorization = user.Authorization;
            state.token = user.token;
            // localStorage.setItem('Authorization', user.Authorization);
            localStorage.setItem('token', user.token);

        },
        // 4. 收到資料改變 state
        UPDATE_USER(state, userInfo) {
            state.userInfo = userInfo;
            // console.log(userInfo);
        },
        LOGIN_USER(state, loginUser) {
            state.loginUser = loginUser;
        },
        PREMISSION(state, val) {
            state.Permission = val;
            localStorage.setItem('Permission', val);
            // console.log(val);
        },
        loginStart: state => state.isLogin = true,
        loginStop: state => state.isLogin = false,

        logout(state) {

            state.token = "";
            state.Permission = "";
        },
        auth_success(state, token, userInfo) {
            state.token = token;
            state.userInfo = userInfo;
        },
        setProjectInfo(state, val) { //拿到全部計畫

            state.projects = val;
            // console.log(val);
        },
        setPREMISSION(state, val) { //拿到全部計畫

            state.Permission = val;
            localStorage.setItem('Permission', val)
                // console.log(val);
        },
        searchProjects(state, val) { //search 資料

            state.SearchPlans = val;
        },
        Setcounty(state, val) { //拿到全部國家

            state.countries = val;
            // console.log(val);
        },
        GETORDER(state, val) {
            state.orders = val;
            // console.log(val);
        },
        SELLORDER(state, val) {
            state.sellOrders = val;
        },
        GETONEORDER(state, val) {
            state.order = val;
            // console.log(val);
        },
        LOOKPLAN(state, val) {
            state.onePlan = val;
            // console.log(val);
        },
        WISHMESSAGE(state, val) {
            state.wishList = val;
            // console.log(val);
        },
        STARED(state, val) {
            state.started = val;
        }


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
                commit("loginStop", false);
                localStorage.removeItem("token");
                localStorage.removeItem("Permission");
                localStorage.removeItem("vuex");
                resolve();
            })
        },
        getProjects({ commit }) {
            // 取得所有card
            // let token = localStorage.getItem("token");
            // const headers = {
            //     'Authorization': `Bearer ${token}`
            // };
            let url = `${process.env.VUE_APP_APIPATH}plan/index`; //不用token

            Axios.get(url).then(res => {
                // console.log(res.data);
                // console.log(res.data.allPlans); //全部旅行計劃
                commit('setProjectInfo', res.data.allPlans);
                commit('WISHMESSAGE', res.data.wishboard);

                // commit('Setcounty', res.data.countries);


            })


        },
        getOneUser({ commit }) { //拿到會員資料
            let token = localStorage.getItem("token");
            const headers = {
                'Authorization': `Bearer ${token}`
            };
            // 2. action 發出 ajax
            //取得會員資料
            const api = `${process.env.VUE_APP_APIPATH}/Login/Load`;

            Axios
                .get(api, { headers })
                .then(response => {
                    // console.log(response);
                    if (response.data.success) {

                        // 3. success 後把資料丟給 mutation
                        commit('loginStart');
                        commit('UPDATE_USER', response.data.result[0]);
                        // console.log(commit, "資料獲取完成");
                        // commit('auth_success', token, response.data.result)
                    }
                })
                .catch(err => {
                    console.log(err.message);
                });
        },

        checkOrder({ commit }) { //旅行家拿到自己全部訂單
            let token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`
            };

            let api = `${process.env.VUE_APP_APIPATH}order/load`;

            // console.log(api);
            // const vm = this;
            // vm.isLoading = true;
            Axios
                .get(api, { headers })
                .then(res => {
                    // vm.isLoading = false;
                    if (res.data.success) {

                        commit('loginStart');
                        commit('GETORDER', res.data.result);
                        // console.log(res.data.result)

                    }

                })
                .catch(err => {
                    console.log(err.message);
                });
            //  this.$store.dispatch('getApi');
        },
        sellerOrder({ commit }) { //規劃師拿到自己all訂單

            let token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`
            };

            let api = `${process.env.VUE_APP_APIPATH}order/seller`;

            // console.log(api);
            // const vm = this;
            // vm.isLoading = true;

            Axios
                .get(api, { headers })
                .then(res => {
                    // vm.isLoading = false;
                    if (res.data.success) {
                        // console.log(res.data.result)
                        commit('loginStart');
                        commit('SELLORDER', res.data.result);


                    } else {
                        console.log('失敗')
                    }

                })
                .catch(err => {
                    console.log(err.message);
                });

        },
        getOrder({ commit }) { //單一訂單
            let token = localStorage.getItem("token");
            const headers = {
                Authorization: `Bearer ${token}`
            };
            // const vm = this;
            // http://localhost:3000/posts/${vm.OrderId}
            let api = `${process.env.VUE_APP_APIPATH}order/loadsingle/${this.state.orders.id}`;
            this.$http.get(api, { headers }).then(res => {
                // console.log(res);

                commit('GETONEORDER', res.data.result);
            });
        },



    },
    plugins: [createPersistedState()]

});

export default store