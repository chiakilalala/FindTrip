<template>
  <div id="wrapper">
    <div>
      <div class="flex container max-w-4xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0">
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <div
              class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head"
              style="background-image: url(https://content.api.news/v3/images/bin/11990db1d540d5c13ea8ca3e01f2083c)"
            >
              <p
                class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg"
              >
                DFW
                <span class="tracking-normal">--&gt;</span> SEA
              </p>
            </div>
            <div class="p-12 px-10 lg:px-20">
              <div class="mb-3">
                <div class="w-full flex flex-wrap">
                  <div class="w-full flex-1 mt-8">
                    <h3 class="text-center text-2xl text-blue-700 mb-3 tracking-widest">會 員 登入</h3>
                    <div
                      class="flex md:flex-1 tracking-widestflex flex-col lg:flex-row items-center lg:justify-around justify-center"
                    >
                      <button
                        class="mr-2 lg:mb-0 mb-4 w-full lg:w-1/2 font-semibold shadow-sm rounded-lg py-3 bg-indigo-300 hover:bg-indigo-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
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
                        class="mr-2 lg:mb-0 mb-4 w-full lg:w-1/2 font-semibold shadow-sm rounded-lg py-3 bg-indigo-300 hover:bg-indigo-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
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

                    <div class="my-12 border-b text-center">
                      <div
                        class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                      >Or sign up with e-mail</div>
                    </div>
                    <ValidationObserver>
                      <div class="mx-auto max-w-xl">
                        <ValidationProvider
                          rules="required|max:10"
                          v-slot="{ errors, classes }"
                          name="姓名"
                        >
                          <div class="relative mb-5" :class="classes">
                            <input
                              class="w-full px-8 py-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-gray-400 focus:bg-white"
                              type="name"
                              name="name"
                              placeholder="會員姓名"
                              v-model="user.Name"
                            />
                            <i
                              class="pointer-events-none fa fa-user absolute inset-0 pl-2 flex items-center text-gray-500"
                            ></i>
                          </div>
                          <div class="text-sm text-red-400 my-2 ">{{ errors[0] }}</div>
                        </ValidationProvider>
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
                              placeholder="電子郵件"
                              v-model="user.Email"
                            />
                            <i
                              class="pointer-events-none fa fa-envelope absolute inset-0 pl-2 flex items-center text-gray-500"
                            ></i>
                          </div>
                          <div class="text-sm text-red-400 my-2">{{ errors[0] }}</div>
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
                              placeholder="密碼"
                              v-model="user.Password"
                            />
                            <i
                              class="mt-2 pointer-events-none fas fa-key absolute inset-0 pl-2 flex items-center text-gray-500"
                            ></i>
                          </div>
                          <div class="text-sm text-red-400 my-2">{{ errors[0] }}</div>
                        </ValidationProvider>
                        <ValidationProvider
                          rules="required|confirmed:password"
                          v-slot="{ errors, classes }"
                          name="確認密碼"
                        >
                          <div class="relative" :class="classes">
                            <input
                              class="w-full px-8 py-5 rounded-lg font-medium text-gray-300 border border-gray-200 placeholder-gray-500 text-md focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                              type="Password"
                              placeholder="確認密碼 "
                              v-model="user.PasswordConfirm"
                            />
                            <i
                              class="mt-2 pointer-events-none fas fa-key absolute inset-0 pl-2 flex items-center text-gray-500"
                            ></i>
                          </div>
                          <div class="text-sm text-red-400 my-2">{{ errors[0] }}</div>
                        </ValidationProvider>

                        <div class="text-sm text-gray-600 mb-2"></div>
                        <button
                          class="my-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                          type="submit"
                          @click.prevent="SingUp"
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
                          <span class="ml-3">Sign Up</span>
                        </button>
                        <div class="text-md text-gray-600 mb-2 flex justify-between">
                          <router-link to="/login" class="text-right">登入</router-link>
                          <p class="text-right">忘記密碼？</p>
                        </div>

                        <!-- barcode -->
                        <div class="depart-barcode"></div>
                      </div>
                    </ValidationObserver>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="bg-blue-800 bg-cover bg-center h-20 p-4 flex justify-end items-center form-head"
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
import Footer from "@/components/Footer.vue";

import { mapMutations } from "vuex";
export default {
  components: {
    Footer
  },
  data() {
    return {
      user: {
        Name: "",
        Email: "",
        Password: "",
        PasswordConfirm: ""
      },
      userToken: ""
      // rules: {
      //   Email: [{ required: true, message: " 請輸入使用者名稱" }],
      //   Password: [{ required: true, message: " 請輸入密碼" }]
      // }
    };
  },
  methods: {
    ...mapMutations(["changeLogin"], ["loginStart"]),
    // async serverSignIn(config) {
    //   try {
    //     const api = `http://findtrip.rocket-coding.com/api/login/memberlogin`;
    //     const { data } = await this.$axios.post("api", config);
    //     this.$swal({
    //       icon: "success",
    //       title: '成功'
    //     });
    //     this.$store.commit("UPDATE_USER", data.userInfo);
    //     this.$router.push("/home");
    //   } catch ({ response }) {
    //     console.log({response});
    //     this.$swal({
    //       icon: "error",
    //       title: '失敗'
    //     });
    //   }
    // },
    SingUp() {
      const api = `http://findtrip.rocket-coding.com/api/Login/Register`;
      const vm = this;
      if (vm.user.Name == "" || vm.user.Email == "" || vm.user.Password == "") {
        this.$swal({
          icon: "error",
          title: "帳號密碼不得為空"
        });
      } else {
        this.$http
          .post(api, {
            Name: this.user.Name,
            Email: this.user.Email,
            Password: this.user.Password,
            PasswordConfirm: this.user.Password
          })
          .then(res => {
            console.log(res);
            if (res.data.success) {
              this.$swal({
                icon: "success",
                title: res.data.message
              });

              this.$router.push("/login");
              this.changeLogin({ Authorization: this.userToken });
            } else {
              this.$swal({
                icon: "error",
                title: res.data.message
              });
            }
          })
          .catch(err => {
            console.log(err);
            this.$swal({
              icon: "error",
              title: err.data.message
            });
          });
      }
    }
  }
};
</script>
<style scoped>
#wrapper {
  background-color: #ebf8ff;
}
</style>

