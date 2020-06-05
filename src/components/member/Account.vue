<template>
  <div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10">
      <ul class="flex border-b">
        <li class="-mb-px mr-1">
          <a
            class="inline-block border-b-2 border-teal-400 py-2 px-4 text-teal-400 font-semibold"
            href="#"
          >旅行家</a>
        </li>
        <li class="mr-1">
          <a
            class="inline-block py-2 px-4 text-gray-500 hover:text-blue-800 font-normal"
            href="#"
          >規劃師</a>
        </li>
      </ul>
    </div>

    <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex px-8">
        <div class="w-full lg:w-1/5 flex-1 flex flex-col justify-center items-center">
          <div
            class="border-solid border-4 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:m-0"
          >
            <img

              :src="tempProduct.imageUrl"
              class="w-40 h-40 p-5"
              alt
            />
          </div>

          <input
            type="file"
            name="file-to-upload"
            id="customFile"
            class="w-full my-4 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-1 px-3 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
            ref="files"
            @change="uploadFile"
          />
          <!-- 更換 -->
          <!-- <i class="fa fa-upload"></i> -->
        </div>
        <div class="w-full lg:w-4/5" v-for="(user,index) in userInfo" :key="index">
          <div class="sm:pl-6 sm:pt-4 flex-1 text-gray-800">
            <div class="mx-auto max-w-xl">
              <div class="flex flex-wrap md:w-auto w-full mb-0 lg:flex-col justify-center">
                <div class="md:w-full mb-3">
                  <label class="block tracking-wide text-grey-darker text-base font-bold mb-2">名字：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="text"
                    :value = "user.Name"
                  />
                </div>
                <div class="md:w-full mb-3">
                  <label class="block tracking-wide text-grey-darker text-base font-bold mb-2">密碼：</label>
                  <input
                    type="password"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="12334444"
                  />
                </div>
                <div class="md:w-full mb-3">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                  >FB 帳號網址：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    
                     :value = "user.PlannerSocial1"
                  />
                </div>
                <div class="md:w-full mb-3">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                  >推特 帳號網址：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    :value = "user.PlannerSocial2"
                  />
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-base font-bold mb-2"
                    for="grid-first-name"
                  >E-mail 網址：</label>
                  <input
                    placeholder="沒有資料2051sss02@gmail.com"
                    type="text"
                    
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-base font-bold mb-2"
                    for="grid-first-name"
                  >聯絡電話：</label>
                  <input
                     :value = "user.Tel"
                    type="text"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>

                <div class="md:w-full mb-3">
                  <label
                    class="block tracking-wide text-grey-darker text-base font-bold mb-2"
                    for="grid-first-name"
                  >一句話的介紹自己:</label>
                  <input
                    placeholder="一個無憂無慮的人 一句話的簡介物長不短"
                    type="text"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div
                  class="flex sm:w-auto w-full sm:justify-start mb-0 lg:mb-3 justify-center items-center"
                >
                  <div class="lg:mr-4 mr-0 tracking-wider flex items-center">
                    <span class="text-grey-darker">點數：{{user.UserPoints}}</span>
                    <img src="../../assets/img/coin.png" class="w-8 h-8 mr-2" alt srcset />
                  </div>
                  <span
                    class="relative inline-block px-4 py-1 font-normal text-white leading-tight"
                  >
                    <span
                      class="shadow absolute inset-0 bg-blue-500 hover:bg-blue-300 rounded-full"
                    ></span>
                    <span class="relative">
                      儲值
                      <i class="fa fa-dollar-sign"></i>
                    </span>
                  </span>
                </div>
                <div
                  class="flex sm:w-auto w-full mb-0 lg:mb-3 lg:mt-0 lg:justify-end items-center justify-center mt-4"
                >
                  <button
                    class="bg-gray-500 mb-4 hover:bg-blue-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                  >儲存</button>
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
import {  mapMutations,mapState } from "vuex";

export default {
  data() {
    return {
      products: [],
      tempProduct: {}
    };
  },
  computed: {
    ...mapState(["userInfo"]),
   
  },
  methods: {
     ...mapMutations(["changeLogin"]),
    uploadFile() {
      
      console.log(this);
      const uploadedFile = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("file-to-upload", uploadedFile); //新增物件
      const url = `${process.env.VUE_APP_APIPATH}/Login/userimg`;
      // vm.status.fileUploading =true;//接受到之後就圖片打開
      vm.axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
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
            console.log(vm.tempProduct);
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
              this.changeLogin({ Authorization: this.userToken });
            console.log(vm.tempProduct);
          } else {
            // this.$bus.$emit('message:push',response.data.message,'danger');
            console.log("失敗");
          }
        });
    },

  }
};
</script>