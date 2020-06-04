<template>
  <div>
    <!-- left-col -->

    <!-- 新增按鈕 -->
    <div class="mt-1 mb-3 flex justify-end">
      <el-button
        type="text"
        @click="dialogVisible = true"
        class="bg-teal-600 rounded px-5 py-3 text-white hover:bg-teal-400 cursor-pointer"
      >
        新增計畫
        <i class="fa fa-plus"></i>
      </el-button>
    </div>
    <!-- 訂單目錄 -->
    <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex">
        <div class="lg:flex-shrink-0 relative">
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-70 w-52 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            style="background-image: url('https://i.picsum.photos/id/1033/600/400.jpg')"
          ></div>
        </div>
        <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
          <div class="px-4 mt-8 lg:px-0 lg:mt-0 h-full flex flex-col justify-between">
            <p
              class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
            >
              國家 ：
              <span class="text-sm font-thin">日本</span>
            </p>
            <p
              class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
            >
              區域 ：
              <span class="text-sm font-thin">京都，大阪，神戶</span>
            </p>
            <p
              class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
            >
              上架日期 ：
              <span class="text-sm font-thin">2020 .5 . 12</span>
            </p>
            <div class="mt-0 lg:flex justify-between">
              <div>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >吃貨</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >秘境</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >冒險</span>
              </div>
              <div class="lg:flex-0 flex justify-between items-center">
                <button
                  class="bg-red-500 hover:bg-red-400 hover:shadow-xl text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >刪除</button>
                <button
                  class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >編輯</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 訂單資料 -->
    </div>

    <!-- 新增modal -->

    <el-dialog title="編輯旅行計劃" :visible.sync="dialogVisible" width="60%">
      <div
        class="lg:px-10 pt-3 pb-5 px-2 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <div class="lg:flex flex-col">
          <div class="lg:p-4 p-6 lg:flex-shrink-0 w-full">
            <el-upload
              class="rounded w-full md:h-48 py-16 px-0 text-center bg-gray-300 opacity-50 md:border-solid md:border-2 md:border-gray-400 avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <svg
                class="mx-auto feather feather-image"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p class="lg:visible hidden text-xs leading-normal">上傳背景圖</p>
          </div>
          <!-- <div class="lg:p-4 p-6 lg:flex-shrink-0 w-full">
            <div
              id="lg:px-16 empty-cover-art"
              class="rounded w-full md:h-48 py-16 px-0 text-center bg-gray-300 opacity-50 md:border-solid md:border-2 md:border-gray-400"
            >
              <svg
                class="mx-auto feather feather-image"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <div class="py-4">Add Cover Art</div>
            </div>
          </div>-->
          <!-- <div class="flex items-center px-4 lg:flex-0 justify-center">
            <p class="lg:visible hidden text-xs leading-normal">上傳背景圖</p>

            <button
              class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded-full lg:ml-4 ml-0 mt-0 text-sm shadow-md"
            >
              上傳圖片
              <i class="fa fa-upload"></i>
            </button>
          </div>-->
        </div>
      </div>

      <div
        class="lg:px-12 px-6 lg:py-5 py-3 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <div class="lg:flex flex-col">
          <div class="lg:flex-shrink-0 p-2 w-full">
            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >簡介</div>
              <textarea
                class="border border-gray-400 w-full rounded px-2 py-1 resize-none"
                rows="4"
              ></textarea>
            </label>

            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >經歷</div>
              <textarea
                class="border border-gray-400 w-full rounded px-2 py-1 resize-none"
                rows="4"
                v-model="temPlans.TravelPlanIntro"
              ></textarea>
            </label>
            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >點數設定</div>
              <input
                class="h-10 bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded px-4 py-1 mt-2 block w-full lg:w-40 appearance-none leading-normal"
                type="text"
                name="address_number"
                placeholder="點數300"
              />
            </label>
          </div>
        </div>
      </div>

      <div
        class="lg:px-10 pt-3 pb-5 px-6 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <p class="pt-5 text-gray-500 leading-normal">以上資料可以幫助旅行家更了解你的規劃內容</p>
        <div class="lg:flex flex-col">
          <div class="lg:flex-shrink-0 py-4 w-full lg:flex">
            <div class="w-full lg:w-1/2 text-xl text-gray-800 leading-normal flex-1">
              <!-- <div class="lg:flex-shrink-0 w-full">
                <div
                  id=" empty-cover-art"
                  class="rounded w-full lg:h-64 h-auto py-16 px-0 text-center bg-gray-300 opacity-50 md:border-solid md:border-2 md:border-gray-400"
                >
                  <svg
                    class="mx-auto feather feather-image"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <div class="py-4">Add Cover Art</div>
                </div>
              </div>-->
              <!-- <div class="lg:mt-4 mt-0 flex items-center mt-4 lg:flex-0 justify-center">
                <p class="lg:visible hidden text-xs leading-normal">上傳圖片</p>

                <button
                  class="mt-0 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
                >
                  上 傳
                  <i class="fa fa-upload"></i>
                </button>
              </div>-->
            </div>
            <div class="ml-0 lg:ml-10 w-full lg:w-1/2 text-xl text-gray-800 leading-normal">
              <label class="block mb-6">
                <div class="text-md text-gray-600 font-medium mb-3">國家</div>

                <div class="relative inline-block w-full lg:w-48">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>Filter</option>
                    <option>Filter</option>
                    <option>Filter</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
                  >
                    <i class="fas fa-angle-down text-blue-500"></i>
                  </div>
                </div>
              </label>

              <label class="block mb-6">
                <div class="text-md text-gray-600 font-medium mb-3">區域(最多可選4個)</div>

                <div class="relative inline-block w-full lg:w-48">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>Filter</option>
                    <option>Filter</option>
                    <option>Filter</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
                  >
                    <i class="fas fa-angle-down text-blue-500"></i>
                  </div>
                </div>
              </label>
              <!-- 旅遊類型 -->
              <div class="mb-3">
                <fieldset class="border-0">
                  <legend class="text-gray-600 mb-3 font-bold">制定行程擅長類型 （可多選）</legend>
                  <label class="mr-1 text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">冒險</span>
                  </label>
                  <label class="mr-1 text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">秘境</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-sm">文化</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">吃貨</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">購物</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">宗教</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <!-- 訂單資料 -->
      </div>

      <div class="mb-12">
        <div slot="footer" class="flex justify-center dialog-footer">
          <el-button
            @click="dialogVisible = false"
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mx-4"
          >上一步</el-button>
          <el-button
            @click="updatePlan"
            class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full mx-4"
          >確認送出</el-button>
        </div>
      </div>

      <!-- <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false,
      imageUrl: "",
      plans: [],
      temPlans: {},
      isNew: false
    };
  },
  methods: {
    ...mapMutations(["UPDATE_USER"]),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    getPlans() {
      let token = localStorage.getItem("Authorization");
      const headers = {
        Authorization: token
      };
      // let USERid = this.userInfo.id
      const api = `http://findtrip.rocket-coding.com/api/plan/loadsingle/${this.$store.state.userInfo[0].id}`;
      console.log(api);
      // const vm = this;
      // vm.isLoading = true;
      this.axios.get(api, { headers }).then(response => {
        console.log(response);
        // vm.isLoading = false;
        // vm.plans = response.data.products;
      }).catch(err=>{
        console.log(err.message);
      });
      //  this.$store.dispatch('getApi');
    },

    updatePlan() {
      let token = localStorage.getItem("Authorization");
      const headers = {
        Authorization: token
      };
      const api = `http://findtrip.rocket-coding.com/api/plan/create/`;
      let httpMethod = "post";
      console.log(api);
      const vm = this;
      //  let httpMethod = "post";
      // vm.isLoading = true;
      this.$http[httpMethod](api, { data: vm.temPlans }, { headers }).then(
        response => {
          console.log(response.data);
          if (response.data.success) {
            this.dialogVisible = false; //新增成功的話就會關掉視窗並取得遠端的內容
            // vm.getProducts(); //重新取得資料一次
          } else {
            this.dialogVisible = false;
            //vm.getProducts(); //重新取得資料一次
            console.log("failure");
          }
          // vm.isLoading = false;
          vm.plans = response.data.result;
        }
      );
      //  this.$store.dispatch('getApi');
    }
  },
  computed: {
    ...mapState(["userInfo"]),
    rfv(){
      return console.log(this.$store.state.userInfo[0].id,"rrrr");
    } 
  },
  created() {
    
    this.getPlans();
  }
};
</script>
<style scoped>
</style>