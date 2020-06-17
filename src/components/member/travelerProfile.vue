<template>
  <div>
    <div class="flex max-w-6xl mx-auto">
      <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
        <ul class="list-inline inline-flex hover:underlines">
          <li class>
            <i class="fa fa-home">/</i>
          </li>

          <li>帳號設定</li>
        </ul>
      </div>
    </div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10">
      <ul class="flex border-b" v-if=" $store.state.Permission == '02' ">
        <li class="-mb-px mr-1">
          <router-link
            to="/member/account"
            class="inline-block py-2 px-4 text-gray-500 font-normal hover:text-blue-800"
            href="#"
          >旅行家</router-link>
        </li>
        <li class="mr-1">
          <router-link
            to="/member/travelerProfile"
            class="border-b-2 border-teal-400 font-semibold inline-block py-2 px-4 text-teal-400 font-normal hover:text-blue-800"
            href="#"
          >規劃師</router-link>
        </li>
      </ul>
    </div>

    <!-- 規劃師 -->
    <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex px-8">
        <!-- 規劃師上傳圖片 -->
        <div class="w-full lg:w-1/5 flex-1 flex flex-col justify-center items-center">
          <div
            class="border-solid border-4 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:m-0"
          >
            <img :src="userInfo.manpic" class="w-40 h-40 rounded-full" alt />
          </div>
          <input
            type="file"
            name="pic-to-upload"
            id="customFile"
            class="w-full my-4 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-1 px-3 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
            ref="files"
            @change="uploadFile"
          />

          <!-- <button class="my-4 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin  py-1 px-3 rounded-full lg:ml-4 ml-0  text-sm shadow-md">更換
          <i class="fa fa-upload"></i></button>-->
        </div>
        <div class="w-full lg:w-4/5">
          <div class="sm:pl-6 sm:pt-4 flex-1 text-gray-800">
            <div class="mx-auto max-w-xl">
              <div class="flex flex-wrap md:w-auto w-full mb-0 flex-row lg:flex-col justify-center">
                <div class="mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                  >規劃師 姓名：</label>
                  <input
                    v-model="userInfo.PlannerName"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="text"
                    placeholder="Chiakilalala"
                  />
                </div>
                <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                  >FB 帳號網址：</label>
                  <input
                    v-model="userInfo.PlannerSocial3"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="https://www.facebook.com/自己帳號"
                  />
                </div>
                <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                  >推特 帳號網址：</label>
                  <input
                    v-model="userInfo.PlannerSocial4"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="https://www.facebook.com/自己帳號"
                  />
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-base font-bold mb-2"
                    for="grid-first-name"
                  >聯絡電話：</label>
                  <input
                    v-model="userInfo.PlannerTel"
                    placeholder="930057001"
                    type="text"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                  >關於自己的一段介紹:</label>
                  <textarea
                    v-model="userInfo.PlannerIntro"
                    placeholder="身而為人覺得很抱歉"
                    class="border border-gray-400 w-full rounded-lg px-2 py-1 resize-none"
                    rows="4"
                  ></textarea>
                </div>

                <div class="flex sm:w-auto w-full mb-0 lg:mb-3 justify-end items-center">
                  <button
                    class="mr-4 bg-gray-500 mb-4 hover:bg-gray-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                  >取消</button>
                  <button
                    @click="updateTravelerAccount"
                    class="bg-blue-500 mb-4 hover:bg-blue-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                  >儲存變更</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let token = localStorage.getItem("token");
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        PlannerName: "",
        PlannerIntro: "",
        Tel: null,
        PlannerSocial3: null,
        PlannerSocial4: null
      },
      isNew: false,
   
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapActions(["getOneUser"]),
    ...mapMutations(["changeLogin"], ["Permission"]),
    changeTab(tab) {
      this.active_tab = tab;
    },
    uploadFile() {
      console.log(this);
      const uploadedFile2 = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("pic-to-upload", uploadedFile2); //新增物件
      let url = `${process.env.VUE_APP_APIPATH}/Login/userimg`;
      // vm.status.fileUploading =true;//接受到之後就圖片打開
      vm.axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
          // vm.status.fileUploading =false;//接受到之後就圖片隱藏
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;// 這樣是沒辦法用vue雙像綁定
            console.log("成功了！");
            this.$swal({
              icon: "success",
              title: "上傳成功"
            });
            console.log(vm.user);
            vm.$set(vm.user, "imageUrl", response.data.imageUrl);
            // this.changeLogin({ Authorization: this.userToken });
            console.log(vm.user);
          } else {
            // this.$bus.$emit('message:push',response.data.message,'danger');
            console.log("失敗");
          }
        });
    },
    updateTravelerAccount() {
      //修改旅行家帳號
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      };
      let api = `${process.env.VUE_APP_APIPATH}login/update/test`;
      const Info = {
        PlannerName: this.userInfo.PlannerName,
        PlannerIntro: this.userInfo.PlannerIntro,
        PlannerTel: this.userInfo.PlannerTel,
        PlannerSocial3: this.userInfo.PlannerSocial3,
        PlannerSocial4: this.userInfo.PlannerSocial4
      };
      // const o3 = Object.assign({ Info }, this.userInfo)
      const jsonData = JSON.stringify(Info);
      console.log(jsonData);
      // const vm = this;
      this.$http.patch(api, jsonData, { headers }).then(response => {
        if (response.data.success) {
          console.log(response.data.message);
          console.log(response.data.result);
          this.$message({
            message: "恭喜你，更新成功",
            type: "success"
          });

          this.getOneUser(); //重新取得資料一次
        } else {
          this.$message.error("错了哦，这是一条错误消息");
          this.getOneUser();
          console.log("failure");
        }
        //檔案建立成功
        // vm.products = response.data.products;
      });
    }
  },
  created() {
    // this.getUser();
    //1.呼叫api action
    this.getOneUser();
  }
};
</script>