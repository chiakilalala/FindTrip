<template>
  <div class="bg-member">
    <div class="hero-member">
      <!-- NavBar Component -->
      <NavBar />
      <!-- 個人資料 -->
      <Profile :userInfo ="userInfo"/>

      <div class="bg-member">
        <div class="flex container max-w-7xl mx-auto mt-10">
          <div class="w-full flex flex-row flex-wrap justify-around ">
            <!-- <div class="w-full lg:w-1/5 px-2 text-xl text-gray-800 leading-normal"> -->
          
              <!-- right-col 左邊 sidebar-->
              <Sidebar />
            <!-- </div> -->

            <!-- left-col -->
            <div class="lg:px-8 px-6 w-full lg:w-3/4 mt-0 lg:mt-0 text-gray-900 leading-normal">
              <div class="my-2 mt-10">
                <!-- 麵包屑 -->
                <div class="flex max-w-6xl mx-auto">
                  <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
                    <ul class="list-inline inline-flex hover:underlines">
                      <li class>
                        <i class="fa fa-home">/</i>
                      </li>

                      <li>旅行計劃</li>
                    </ul>
                  </div>
                </div>

                <!-- 書籤表示旅行家和規劃師 -->
                <!-- status :false 不存在書籤 -->
                <div class="my-2 mb-3" v-if="this.$store.state.status">
                  <ul class="flex border-b">
                    <li class="-mb-px mr-1">
                      <a
                        class="inline-block border-b-2 border-teal-400 py-2 px-4 text-teal-700 font-semibold"
                        href="#"
                      >旅行家</a>
                    </li>
                    <li class="mr-1">
                      <a
                        class="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-normal"
                        href="#"
                      >規劃師</a>
                    </li>
                  </ul>
                </div>
                <div id="member">
                  <router-view></router-view>
                </div>
              </div>

              <!-- 訂單資料 -->
            </div>
          </div>
        </div>
      </div>

      <!--Footer Component-->
      <!-- 海浪特效 -->
      <Footer />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapState, mapActions, mapMutations } from "vuex";
// import { mapState, mapActions, mapMutations } from "vuex";

import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Profile from '@/components/Profile.vue';

  let token = localStorage.getItem("token");
  const headers = {
    'Authorization': `Bearer ${token}`
  };
//     const $axios = axios.create({
// baseURL: 'http://findtrip.rocket-coding.com/api',
// timeout: 1000,
// headers: {
// 'Content-Type': 'application/x-www-form-urlencoded',
//   'Authorization': token

// }

// });

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    Footer,
    Sidebar,
    Profile
  },

  methods: {
    //api 動作
    ...mapActions(["getOneUser"]),
    ...mapMutations(["changeLogin"], ["loginStart"]),
  
    // getUser() {
    //   const api = "http://findtrip.rocket-coding.com/api/Login/Load";
    //   // let token = localStorage.getItem("Authorization");
    //   console.log(token);

    //   this.axios
    //     .get(api, { headers })
    //     .then(response => {
    //       console.log(response.data);
    //       if(response.status == 200){
    //         this.userInfo = response.data;
    //         console.log(this.userInfo,"ssss");
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err.message);
    //     });
    // }
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    // this.getUser();
    //1.呼叫api action
    this.getOneUser();
      console.log("組建獲取完成");
  },
  beforeUpdate() {
    console.log("更新食用ㄚ");
  },
};
</script>

<style>

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
     position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>