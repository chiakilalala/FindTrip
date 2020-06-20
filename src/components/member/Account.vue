<template>
  <div>
    <div class="flex max-w-6xl mx-auto">
      <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
        <ul class="list-inline inline-flex hover:underlines">
             <li class="pr-2">
                  <router-link to="/home" class="hover:text-blue-500">
                <i class="fa fa-home"></i>
                   </router-link>
                    <span class="mx-1">/</span>
              </li>

          <li class="pr-2">帳號設定</li>
        </ul>
      </div>
    </div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10">
      <ul class="flex border-b" v-if=" $store.state.Permission == '02' ">
        <li class="-mb-px mr-1">
          <router-link
            to="/member/account"
            class="border-b-2 border-teal-400 font-semibold inline-block py-2 px-4 text-teal-400 font-normal hover:text-blue-800"
            href="#"
          >旅行家</router-link>
        </li>
        <li class="mr-1">
          <router-link
            to="/member/travelerProfile"
            class="inline-block py-2 px-4 text-gray-500 font-normal hover:text-blue-800"
         
          >規劃師</router-link>
        </li>
      </ul>
    </div>

    <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex px-8" >
        <div class="w-full lg:w-1/5 flex-1 flex flex-col justify-center items-center">
          <div
            class="border-solid border-2 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0  sm:m-0"
          >
            <img :src="userInfo.manpic ? userInfo.manpic : userInfo.imageUrl" class="w-40 h-40 rounded-full object-cover" alt='個人大頭照' />
          </div>

          <!-- <input
           
           
            
            class="w-full my-4 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-1 px-3 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
            
           
          /> -->

          <div class="flex   items-center  justify-center border-blue-500 mt-2">
    <label class="w-28 flex items-end py-1 px-3   rounded-full shadow-md  bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white cursor-pointer">
        <svg class="w-6 h-6 pr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-sm leading-normal ">上傳大頭照</span>
        <input   type="file" name="file-to-upload" id="customFile" ref="files" class="hidden"   @change="uploadFile"/>
    </label>
</div>
          <!-- 更換 -->
          <!-- <i class="fa fa-upload"></i> -->
        </div>
        <div class="w-full lg:w-4/5">
          <div class="sm:pl-6 sm:pt-4 flex-1 text-gray-800">
            <div class="mx-auto max-w-xl">
              <div class="flex flex-wrap md:w-auto w-full mb-0 lg:flex-col justify-center">
                 <div class="md:w-full mb-8">
                  <label class="block tracking-wide text-grey-darker text-lg font-bold mb-2">名字：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="text"
                    v-model="userInfo.name"
                  />
                </div>
                 <div class="md:w-full mb-8">
                  <label class="block tracking-wide text-grey-darker text-lg font-bold mb-2">密碼：</label>
                  <input
                    type="password"
                    class="cursor-not-allowed disabled bg-blue-100 text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    placeholder="******"
                  />
                </div>
                 <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                  >FB 帳號網址：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    v-model="userInfo.PlannerSocial1"
                  />
                </div>
                 <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                  >推特 帳號網址：</label>
                  <input
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    v-model="userInfo.PlannerSocial2"
                  />
                </div>

                 <div class="md:w-full mb-8">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-lg font-bold mb-2"
                    for="grid-first-name"
                  >E-mail 網址：</label>
                  <input
                    v-model="userInfo.Email"
                    placeholder="2051sss02@gmail.com"
                    type="text"
                    class="cursor-not-allowed disabled text-md block px-3 py-2 rounded-lg w-full bg-blue-100 border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                  <div class="text-sm text-red-400 mt-2">不能修改E-mail</div>
                </div>

                 <div class="md:w-full mb-8">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-lg font-bold mb-2"
                    for="grid-first-name"
                  >聯絡電話：</label>
                  <input
                    v-model="userInfo.Tel"
                    type="text"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>

                 <div class="md:w-full mb-8">
                  <label
                    class="block tracking-wide text-grey-darker text-lg font-bold mb-2"
                    for="grid-first-name"
                  >一句話的介紹自己:</label>
                  <input
                    placeholder="一個無憂無慮的人 一句話的簡介物長不短"
                    type="text"
                    v-model="userInfo.MemberIntro"
                    class="text-md block px-3 py-2 rounded-lg w-full bg-white border border-gray-400 placeholder-gray-600 shadow-xs focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <div
                  class="flex sm:w-auto w-full sm:justify-start mb-0 lg:mb-3 justify-center items-center"
                >
                  <div class="lg:mr-4 mr-0 tracking-wider flex items-center">
                    <span class="text-grey-darker">點數：{{userInfo.points}}</span>
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
                    class="mr-4 bg-gray-500 mb-4 hover:bg-gray-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                  >取消</button>
                  <button
                    @click="updateAccount"
                    class="bg-blue-500 mb-4 hover:bg-blue-light text-white font-bold py-2 px-4 hover:bg-gray-400 rounded"
                  >儲存變更</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 規劃師 -->
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

    uploadFile() {
      console.log(this);
      const uploadedFile = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("file-to-upload", uploadedFile); //新增物件
      let url = `${process.env.VUE_APP_APIPATH}/Login/userimg`;
      
      vm.axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
          
          if (response.data.success) {
         
            // console.log("成功了！");
            this.$swal({
              icon: "success",
              title: "上傳成功"
            });
           
            vm.$set(vm.userInfo, "manpic", response.data.imageUrl);
            //  console.log(vm.userInfo);
         
         
          } else {
         
            console.log("失敗");
          }
        });
    },
    updateAccount() {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type':'application/json'
      };
      let api = `${process.env.VUE_APP_APIPATH}login/update/test`;
      const Info = {
        name: this.userInfo.name,
        MemberIntro: this.userInfo.MemberIntro,
        Tel: this.userInfo.Tel,
        Email: this.userInfo.Email,
        PlannerSocial1: this.userInfo.PlannerSocial1,
        PlannerSocial2: this.userInfo.PlannerSocial2
      };
      const jsonData = JSON.stringify(Info);
      console.log(Info);
      const vm = this;
      this.$http.patch(api, jsonData, { headers }).then(response => {
        if (response.data.success) {
          // console.log(response.data.message);
          // console.log(response.data.result);
          this.$message({
            message: "恭喜你，更新成功",
            type: "success"
          });
          vm.getOneUser(); //重新取得資料一次
        } else {
          vm.getOneUser();
          console.log("failure");
        }
        //檔案建立成功
        // vm.products = response.data.products;
      });
    },
  
  },
  created() {
    // this.getUser();
    //1.呼叫api action
    this.getOneUser();
   
  }
};
</script>