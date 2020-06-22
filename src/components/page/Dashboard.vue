<template>
  <div class="bg-member">
    <div class="hero-member">
      <!-- NavBar Component -->
      <NavBar />
      <!-- 個人資料 -->
      <Profile :userInfo ="userInfo"/>

      <div class="bg-member">
        <div class="flex container max-w-7xl mx-auto mt-10 dashborard">
          <div class="w-full flex flex-row flex-wrap justify-around ">
            <!-- <div class="w-full lg:w-1/5 px-2 text-xl text-gray-800 leading-normal"> -->
          
              <!-- right-col 左邊 sidebar-->
              <Sidebar />
            <!-- </div> -->

            <!-- left-col -->
            <div class=" px-6 w-full lg:w-3/4 mt-0 lg:mt-0 text-gray-900 leading-normal">
              <div class="my-2 mt-10">
                <!-- 麵包屑 -->
                <!-- <div class="flex max-w-6xl mx-auto">
                  <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
                    <ul class="list-inline inline-flex hover:underlines">
                      <li class>
                        <i class="fa fa-home">/</i>
                      </li>

                      <li>旅行計劃</li>
                    </ul>
                  </div>
                </div> -->

                <!-- 書籤表示旅行家和規劃師 -->
                <!-- status :false 不存在書籤 -->
               
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


import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Profile from '@/components/Profile.vue';

  let token = localStorage.getItem("token");
  const headers = {
    'Authorization': `Bearer ${token}`
  };


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
    ...mapMutations(["changeLogin"], ["loginStart"],['setPREMISSION']),
  

  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    // this.getUser();
    //1.呼叫api action
    this.getOneUser();
    
  },
  beforeUpdate() {
 
  },
};
</script>

<style>
.dashborard{
  min-height: calc( 100vh - 329px);
}

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
    line-height: 17px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>