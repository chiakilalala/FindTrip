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
      <div class="lg:flex px-8" v-for="(user,index) in userInfo" :key="index">
        <div class="w-full lg:w-1/5 flex-1 flex flex-col justify-center items-center">
          <div
            class="border-solid border-4 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:m-0"
          >
            <img

              :src="user.manpic"
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
        <div class="w-full lg:w-4/5" >
          <div class="sm:pl-6 sm:pt-4 flex-1 text-gray-800">
            <div class="mx-auto max-w-xl">
              <div class="flex flex-wrap md:w-auto w-full mb-0 lg:flex-col justify-center">
                <div class="md:w-full mb-3">
                  <label class="block tracking-wide text-grey-darker text-base font-bold mb-2">名字：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="text"
                    :value = "user.name"
                  />
                </div>
                <div class="md:w-full mb-3">
                  <label class="block tracking-wide text-grey-darker text-base font-bold mb-2">密碼：</label>
                  <input
                    type="password"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="******"
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
                    type="text"  :value = "user.MemberIntro"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div
                  class="flex sm:w-auto w-full sm:justify-start mb-0 lg:mb-3 justify-center items-center"
                >
                  <div class="lg:mr-4 mr-0 tracking-wider flex items-center">
                    <span class="text-grey-darker">點數：{{user.points}}</span>
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
                  @click="updateAccount"
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
import {  mapMutations,mapState,mapActions } from "vuex";

export default {
  data() {
    return {
     
      tempInfo: {},
      isNew:false
    };
  },
  computed: {
    ...mapState(["userInfo"]),
   
  },
  methods: {
    ...mapActions(["getOneUser"]),
     ...mapMutations(["changeLogin"]),
    uploadFile() {
      
      console.log(this);
      const uploadedFile = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("file-to-upload", uploadedFile); //新增物件
      let url = `${process.env.VUE_APP_APIPATH}/Login/userimg`;
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
            console.log(vm.tempInfo);
            vm.$set(vm.tempInfo, "imageUrl", response.data.imageUrl);
              // this.changeLogin({ Authorization: this.userToken });
            console.log(vm.tempInfo);
          } else {
            // this.$bus.$emit('message:push',response.data.message,'danger');
            console.log("失敗");
          }
        });
    },
    updateAccount(){
       let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      let api = `${process.env.VUE_APP_APIPATH}Login/account`;
      let httpMethod = "patch";
      console.log(api);
      const vm = this;
      this.$http[httpMethod](api, { data: vm.tempInfo },{headers}).then(response => {
        console.log(response.data);
        if (response.data.success) {
         this.$store.commit('UPDATE_USER', response.data.result);
          // vm.getProducts(); //重新取得資料一次
        } else {
           this.$store.commit('UPDATE_USER', response.data.result);
          // vm.getProducts();
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
      console.log("組建獲取完成");
  },
};
</script>