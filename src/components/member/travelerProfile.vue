<template>
  <div>
    <div class="flex max-w-6xl mx-auto">
      <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
        <ul class="list-inline inline-flex hover:underlines">
          <li class="pr-2">
            <router-link
              to="/home"
              class="hover:text-blue-500"
            >
              <i class="fa fa-home" />
            </router-link>
            <span class="mx-1">/</span>
          </li>

          <li class="pr-2">
            帳號設定
          </li>
        </ul>
      </div>
    </div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10">
      <ul
        v-if=" $store.state.Permission == '02' "
        class="flex border-b"
      >
        <li class="-mb-px mr-1">
          <router-link
            to="/member/account"
            class="inline-block py-2 px-4 text-gray-500 font-normal hover:text-blue-800"
            href="#"
          >
            旅行家
          </router-link>
        </li>
        <li class="mr-1">
          <router-link
            to="/member/travelerProfile"
            class="border-b-2 border-teal-400 font-semibold inline-block py-2 px-4 text-teal-400 font-normal hover:text-blue-800"
            href="#"
          >
            規劃師
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 規劃師 -->
    <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex px-8">
        <!-- 規劃師上傳圖片 -->
        <div class="w-full lg:w-1/5 flex-1 flex flex-col justify-center items-center">
          <div
            class="border-solid border-4 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0  "
          >
            <img
              :src="userInfo.manpic"
              class="w-40 h-40 rounded-cover object-cover"
              alt
            >
          </div>
          <!-- <input
            type="file"
            name="pic-to-upload"
            id="customFile"
            class="w-full my-4 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-1 px-3 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
            ref="files"
            @change="uploadFile"
          /> -->

          <div class="flex   items-center  justify-center border-blue-500 mt-2">
            <label class="w-28 flex items-end py-1 px-3   rounded-full shadow-md  bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white cursor-pointer">
              <svg
                class="w-6 h-6 pr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-sm leading-normal ">上傳大頭照</span>
              <input
                id="customFiles"
                ref="files"
                type="file"
                name="pic-to-upload"
                class="hidden"
                @change="uploadFile"
              >
            </label>
          </div>
        </div>
        <div class="w-full lg:w-4/5">
          <div class="sm:pl-6 sm:pt-4 flex-1 text-gray-800">
            <div class="mx-auto max-w-xl">
              <div class="flex flex-wrap md:w-auto w-full mb-0 flex-row lg:flex-col justify-center">
                <div class="mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                  >規劃師 姓名：</label>
                  <input
                    v-model="userInfo.PlannerName"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="text"
                    placeholder="Chiakilalala"
                  >
                </div>
                <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                  >FB 帳號網址：</label>
                  <input
                    v-model="userInfo.PlannerSocial3"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="https://www.facebook.com/自己帳號"
                  >
                </div>
                <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                  >推特 帳號網址：</label>
                  <input
                    v-model="userInfo.PlannerSocial4"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="https://www.facebook.com/自己帳號"
                  >
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-lg font-bold mb-2"
                    for="grid-first-name"
                  >聯絡電話：</label>
                  <input
                    v-model="userInfo.PlannerTel"
                    placeholder="930057001"
                    type="text"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  >
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                  >關於自己的一段介紹:</label>
                  <textarea
                    v-model="userInfo.PlannerIntro"
                    placeholder="身而為人覺得很抱歉"
                    class="border border-gray-400 w-full rounded-lg px-2 py-1 resize-none"
                    rows="4"
                  />
                </div>

                <div class="flex sm:w-auto w-full mb-0 lg:mb-3 justify-end items-center">
                  <button
                    class="mr-4 bg-gray-500 mb-4 hover:bg-gray-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                  >
                    取消
                  </button>
                  <button
                    class="bg-blue-500 mb-4 hover:bg-blue-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                    @click="updateTravelerAccount"
                  >
                    儲存變更
                  </button>
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
      
      const uploadedFile2 = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("pic-to-upload", uploadedFile2); //新增物件
      let url = `${process.env.VUE_APP_APIPATH}/Login/userimg`;
    
      vm.axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          // console.log(response.data);
 
          if (response.data.success) {
           
           this.$notify({
              title: "成功",
              message: "上傳圖片成功",
              type: "success"
            });
          
            vm.$set(vm.userInfo, "manpic", response.data.imageUrl);
         
           
          } else {
           this.$notify({
              title: "失敗",
              message: "上傳檔案格式或圖片超過2MB",
              type: "warning"
            });
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
      const jsonDataS = JSON.stringify(Info);
      // console.log(Info);
      // const vm = this;
      this.$http.patch(api, jsonDataS, { headers }).then(response => {
        if (response.data.success) {
     
          // console.log(response.data.result);
        this.$notify({
              title: "成功",
              message: "檔案修改成功",
              type: "success"
            });

          // this.getOneUser(); //重新取得資料一次
        } else {
             this.$notify({
              title: "失敗",
              message: "檔案修改失敗",
              type: "warning"
            });
          // this.getOneUser();
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