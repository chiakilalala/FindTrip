<template>
  <div id="wrapper">
    <div>

      <div class="flex container max-w-xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0 my-10">
          <div class="mt-6 container mx-auto  round-xll overflow-hidden bg-white relative my-10 max-w-450 shadow-md">
            <div
              class=" bg-cover  h-24 p-4 flex justify-end items-center form-head bg-bottom"
              style="background-image: url(https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"
            >
              <p
                class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg"
              >
                DFW
                <span class="tracking-normal">--&gt;</span> SEA
              </p>
            </div>
            <div class="p-12 px-10 ">
              <div class="mb-3">
                <div class="w-full flex flex-wrap">
                  <div class="w-full flex-1 mt-5">
                    <h3 class="text-center text-2xl text-blue-700 mb-3 tracking-widest">會 員 登入</h3>
                    <div
                      class="flex md:flex-1 tracking-widestflex flex-col  items-center lg:justify-around justify-center"
                    >
                      <button
                        class="mr-2  mb-4 w-full  font-semibold shadow-sm rounded-lg py-3 bg-blue-300 hover:bg-blue-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                      >
                        <div class="bg-white p-2 rounded-full">
                          <svg class="w-4" viewBox="0 0 533.5 544.3">
                            <path
                              d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                              fill="#4285f4"
                            />
                            <path
                              d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                              fill="#34a853"
                            />
                            <path
                              d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                              fill="#fbbc04"
                            />
                            <path
                              d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                              fill="#ea4335"
                            />
                          </svg>
                        </div>
                        <span class="ml-4">Sign Up with Google</span>
                      </button>

                      <button
                        class="mr-2 lg:mb-0 mb-4 w-full  font-semibold shadow-sm rounded-lg py-3 bg-blue-300 hover:bg-blue-400 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                      >
                        <div class="bg-white p-2 rounded-full">
                          <svg
                            class="w-4 text-blue-500 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 96.124 96.123"
                          >
                            <path
                              d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z"
                            />
                          </svg>
                        </div>
                        <span class="ml-1">Sign Up with Facebook</span>
                    
                      </button>
                    </div>

                    <div class="my-10  border-b-2 text-center  ">
                      <div
                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                      >Or sign up with e-mail</div>
                      <p v-if="loginError">{{ loginError }}</p>
                      <p v-if="loginSuccessful">Login Successful</p>
                    </div>
                    <ValidationObserver>
                      <form class="mx-auto max-w-xl" @submit.prevent="signin">
                        <ValidationProvider
                          rules="required|email"
                          v-slot="{ errors, classes }"
                          name="email"
                        >
                          <div class="relative" :class="classes">
                            <input
                              class="w-full px-8 py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-gray-400 focus:bg-white"
                              type="email"
                              name="email"
                              placeholder="Email:@mail.com..."
                              v-model="user.Email"
                            />
                            <i
                              class="pointer-events-none fa fa-envelope absolute inset-0 pl-2 flex items-center text-gray-500"
                            ></i>
                          </div>
                          <div class="text-sm text-red-400">{{ errors[0] }}</div>
                        </ValidationProvider>

                        <ValidationProvider
                          rules="required|min:6|max:20"
                          v-slot="{ errors, classes }"
                          name="密碼"
                        >
                          <div class="relative" :class="classes">
                            <input
                              class="w-full px-8 py-5 rounded-lg font-medium text-gray-300 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                              type="Password"
                              placeholder="Password "
                              v-model="user.Password"
                            />
                            <i
                              class="mt-2 pointer-events-none fas fa-key absolute inset-0 pl-2 flex items-center text-gray-500"
                            ></i>
                          </div>

                          <div class="text-sm text-red-400">{{ errors[0] }}</div>
                        </ValidationProvider>

                        <div class="text-sm text-gray-600 mb-2"></div>
                        <button
                          class="my-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                          type="submit"
                        >
                          <svg
                            class="w-6 h-6 -ml-2"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <path d="M20 8v6M23 11h-6" />
                          </svg>
                          <span class="ml-3">log In</span>
                        </button>
                        <div class="text-sm text-gray-600 mb-2 flex justify-between">
                          <span>尚未設立帳戶？<router-link to="/sign" class="text-right text-blue-500">在此註冊</router-link></span>
                          <!-- <p class="text-right">免費登入</p> -->
                          <p class="text-right">忘記密碼？</p>
                        </div>

                        <!-- barcode -->
                        <div class="depart-barcode"></div>
                      </form>
                    </ValidationObserver>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-blue-800 bg-cover bg-right h-20 p-4 flex justify-end items-center form-head"
                  style="background-image: url(https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"
            ></div>
          </div>

          <!-- </div> -->
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
/* eslint-disable */


import axios from "axios";
import qs from 'qs'
import Footer from "@/components/Footer.vue";


import { mapState, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Footer,
  
  },
  data() {
    return {
      user: {
        Id: "",
        Email: "",
        Password: ""
      },
      userToken: "",
      token:''
      // rules: {
      //   Email: [{ required: true, message: " 請輸入使用者名稱" }],
      //   Password: [{ required: true, message: " 請輸入密碼" }]
      // }
    };
  },
  computed: {
    ...mapState(["isLogin", "loginError", "loginSuccessful"])
  },
  methods: {
    ...mapMutations(["changeLogin"], ["loginStart"],['UPDATE_USER']),

    signin() {

      const api = `${process.env.VUE_APP_APIPATH}/login/memberlogin`;
      const vm = this;
      if (this.user.Email == "" || this.user.Password == "") {
        this.$swal({
          icon: "error",
          title: "帳號密碼不得為空"
        });
      } else {
        this.$http
          .post(api, vm.user)
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              vm.$router.push("/home"); //登入成功轉到首頁
              this.userToken = `Bearer  ${res.data.token}`;
              this.token =res.data.token;
              this.$store.commit("loginStart", true);
              this.$store.commit("UPDATE_USER", res.data);// 可以更新會員資料
            //將使用者token儲存到vuex中
              // this.changeLogin({ Authorization: this.userToken });重複使用undefined
               this.changeLogin({token: this.token });
                    console.log(this.$store.state);
            }
          })
          .catch(err => {
            console.log(err.message);
            this.$swal({
              icon: "error",
              title: "密碼或帳號錯誤"
            });
          });
      }
    },
 
    
    // login() {
    //   // const data = { Email: this.user.Email, Password: this.user.Password };

    //   // console.log(qs.stringify(data));
    //   // console.log(data);
    //   this.axios({
    //     method: "post",
    //     url: "http://findtrip.rocket-coding.com/api/login/memberlogin",
    //     data: {
    //       Email: this.user.Email,
    //       Password: this.user.Password
    //     },
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded"
    //     }
    //   })
    //     .then(res => {
    //       console.log(res);
    //       this.$router.push("/home"); //登入成功轉到首頁
    //       this.changeLogin({ Authorization: this.userToken });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>
<style scoped>
#wrapper {
 
    background-size: cover;
    background: bottom;
 
    background-repeat: no-repeat;
  background-color: #ebf8ff;
      background-image: url(https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&fm=jpg&s=fa68c48…);
}
.max-w-450{
  max-width: 450px;
}
</style>

