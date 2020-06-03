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
        // 5. state 改變，通知 UI 更新
        userInfo: [],
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
        searchData: [],

        selectedCountry: "",
        selectedCity: null,
        form: {
            Rid: "a01",
            county: "日本",
            city: ["大阪", "關西", "神戶", "京都"],
            data: "2020.6.22 ~2020.7.8",
            money: "",
            type: {
                //checkbox
                act: false,
                secrect: false,
                culture: false,
                fun: false,
                food: false,
                shopping: false,
                religion: false
            },
            adult: 1,
            child: 0,
            messages: "沒有啦啦啦啊啊啊啊"
        }



    },
    getter: {
        getUserList: (state) => state.userInfo,
        selectedCountry: (state) => state.selectedCountry,
        selectedCity: (state) => state.selectedCity,
        county: (state) => {
            const counies = new Set();
            state.projects.forEach((value) => {
                if (!value.projects.country) return;
                counies.add(value.country);

            });
            return Array.from(counies);
        },
        city: (state) => {
            const cities = [];
            state.projects.forEach((value) => {
                if (!value.projects.city) return;
                cities.add(value.city);

            });
            return Array.from(cities);
        },
        filterCountyData: (state, getters) => {
            return state.projects.filter((value) => {
                console.log(getters);
                return value.projects.country === getters.selectedCountry;

            });
        },
        filterCityData: (state, getters) => {
            return getters.filterCountyData.filter((value) => {
                return value.projects.city === getters.selectedCity;
            });
        },
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
            console.log(user);
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);

        },
        // 4. 收到資料改變 state
        UPDATE_USER(state, userInfo) {
            state.userInfo = userInfo;
            console.log(userInfo);
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
        setProjectInfo(state, val) { //拿到全部計畫

            state.projects = val;
            // console.log(val);
        },
        SELECTEDCOUNTY(state, payload) { //拿到全部國家
            state.selectedCountry = payload;
            console.log(payload);
        },
        SELECTEDCITY(state, payload) { //拿到全部城市
            state.selectedCity = payload;
        },
        SEARCHDATA(state, payload) {
            state.searchData = payload;
        },
        setORDERDate(state, val) {
            console.log('setORDERDate', val);
            if (val.Rid) state.form.Rid = val.Rid;
            if (val.county) state.form.county = val.county;
            if (val.city) state.form.city = val.city;
            if (val.date && val.data.length > 1) state.form.date = val.date;
            if (val.money) state.form.money = val.money;
            if (val.messages) state.form.messages = val.messages;
            if (val.adult) state.form.adult = val.adult;
            if (val.child) state.form.child = val.child;

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
                localStorage.removeItem("Authorization");
                resolve();
            })
        },
        // getProjects({ commit }) {
        //     // 取得所有card
        //     const headers = {
        //         'Authorization': token
        //     };
        //     const api = 'https://jsonbin.org/chiakilalala'
        //     Axios.get(api).then(res => {
        //         commit('setProjectInfo', res.data);

        //         // console.log(res.data);
        //     })
        // },
        getProjects({ commit }) {
            // 取得所有card
            const headers = {
                "Content-Type": "application/json",
                "secret-key": "$2b$10$ij0rh9TWxI4z.evx9S/zbOCfgrMFiekyJWwKEQLQMpsclSLWw8Zsu"
            };
            const api = 'https://api.jsonbin.io/b/5ed7e55979382f568bd28418'
            Axios.get(api, { headers }).then(res => {
                commit('setProjectInfo', res.data);

                console.log(res.data);
            })
        },
        getOneUser({ commit }) { //拿到會員資料
            let token = localStorage.getItem("Authorization");
            const headers = {
                'Authorization': token
            };
            // 2. action 發出 ajax
            //取得會員資料
            const api = "http://findtrip.rocket-coding.com/api/Login/Load";
            // let token = localStorage.getItem("Authorization");
            console.log(token);

            Axios
                .get(api, { headers })
                .then(response => {
                    console.log(response.data);
                    if (response.status == 200) {

                        // 3. success 後把資料丟給 mutation
                        console.log(commit, "ssss");

                        commit('UPDATE_USER', response.data);
                        console.log(response.data);
                        // commit('auth_success',Authorization, userInfo)
                    }
                })
                .catch(err => {
                    console.log(err.message);
                });
        },
        orderBooking({ commit }, obj) {
            const vm = this;
            const headers = {
                "Content-Type": "application/json"
            };
            const order = vm.form;
            Axios.request({
                url: 'http://localhost:3000/posts',
                method: 'post',
                headers: headers,
                data: {
                    order
                }
            }).then(res => {
                console.log(res)
                if (res.data) {
                    commit('setReservationDate', obj);
                }
            }).catch(err => {
                if (err.response) {
                    alert("err")
                }
            });
        },
        setORDERDate({ commit }, obj) {
            // 儲存
            commit('setORDERDate', obj);
        }
        // postProject({ commit }, obj) {

        //     let token = localStorage.getItem("Authorization");
        //     const headers = {
        //         'Authorization': token
        //     };
        //     const api = `http://localhost:3000/posts`;

        //     // this.$http.post(url,{data:order}).then((response)=>{
        //     //     console.log('訂單建立',response.data)

        //     // })
        //     Axios.request({
        //         url: api,
        //         method: 'post',
        //         headers,
        //         data: {
        //             city: '',
        //             county: '',
        //             data: '',
        //             tag: { //checkbox
        //                 act: false,
        //                 secrect: false,
        //                 cultue: false,
        //                 fun: false,
        //                 food: false,
        //                 shopping: false,
        //                 religion: false
        //             },
        //             adult: 0,
        //             child: 0,
        //             message: ''
        //         }
        //     }).then(res => {
        //         console.log(res);
        //         if (res.data) {
        //             commit
        //         }
        //     })

        // }

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