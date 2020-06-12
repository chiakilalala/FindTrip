<template>
  <div>
    <!-- left-col -->

    <!-- 新增按鈕 -->
    <div class="mt-1 mb-3 flex justify-end">
      <el-button
        type="primary"
        @click="openModel(true)"
        class="bg-teal-600 rounded px-5 py-3 text-white hover:bg-teal-400 cursor-pointer"
      >
        新增計畫
        <i class="fa fa-plus"></i>
      </el-button>
    </div>
    <!-- 訂單目錄 -->
    <div
      class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5"
      v-for="item   in plans"
      :key="item.id"
    >
      <div class="lg:flex">
        <div class="lg:flex-shrink-0 relative">
          <!-- {{  item}} -->
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-70 w-52 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            :style="{backgroundImage:`url(${item.Cpicture ? item.Cpicture : 'https://picsum.photos/300/200?random=1' })`}"
          ></div>


<!-- :style="{backgroundImage:`url(${item.Cpicture ? item.Cpicture : 'https://picsum.photos/300/200?random=1' })`}" -->

        </div>
        <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
          <div class="px-4 mt-8 lg:px-0 lg:mt-0 h-full flex flex-col justify-between">
            <p
              class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
            >
              國家 ：
              <span class="text-md">{{item.country}}</span>
            </p>
            <p
              class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
            >
              區域 ：
              <!--item.city.join( ',' -->
              <span class="text-md">{{item.city}}</span>
            </p>
            <p
              class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
            >
              上架日期 ：
              <span class="text-md font-thin">{{item.CreateOn}}</span>
            </p>
            <!-- item.CreateOn.substring(0,10) -->
            <div class="mt-0 lg:flex justify-between">
              <div>
                <span
                  :class="{'hidden' : !item.tags['Culture']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >文化</span>
                <span
                  :class="{'hidden' : !item.tags['Religion']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >宗教</span>
                <span
                  :class="{'hidden' : !item.tags['Secret']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >秘境</span>
                <span
                  :class="{'hidden' : !item.tags['Shopping']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >購物</span>
                <span
                  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >冒險</span>
                <span
                  :class="{'hidden' : !item.tags['Food']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >吃貨</span>
              </div>
              <div class="lg:flex-0 flex justify-between items-center">
                <el-button
                  @click="deleteDialogModal(item)"
                  class="bg-red-500 hover:bg-red-400 hover:shadow-xl text-white font-thin py-3 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >刪除</el-button>
                <button
                  @click="openModel(false, item)"
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

    <el-dialog title="編輯旅行計劃" :visible.sync="dialogVisible" width="70%">
      <div
        class="lg:px-10 pt-3 pb-5 px-2 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <div class="lg:flex flex-col">
          <div
            class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
          >上傳背景圖</div>
          <div class="relative lg:p-4 p-6 lg:flex-shrink-0 w-full">
            <div class="py-4">Add Cover Art</div>
            <!-- <svg
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
            </svg>-->
            <!-- <img  :src="templans.TPBGImg"  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80" class="avatar" /> -->
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->

            <div class="flex justify-center mt-2">
              <input
                type="file"
                name="file-to-upload"
                id="customFile"
                class="form-control bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-6 rounded-full lg:ml-4 ml-0 mt-0 text-sm shadow-md"
                ref="files"
                @change="uploadImg"
              />
              <!-- 上傳圖片
              <i class="fa fa-upload"></i>-->
            </div>
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

              <quill-editor
                v-model="temPlans.TravelPlanIntro"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
              ></quill-editor>

              <!-- <textarea
                class="border border-gray-400 w-full rounded px-2 py-1 resize-none"
                rows="4"  v-model="temPlans.TravelPlanIntro"
              ></textarea>-->
            </label>

            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >經歷</div>
              <quill-editor
                v-model="temPlans.TPExperience"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)"
              ></quill-editor>
            </label>
            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >點數設定</div>
              <input
                class="h-10 bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded px-4 py-1 mt-2 block w-full lg:w-40 appearance-none leading-normal"
                type="text"
                name="address_number"
                placeholder="請設定點數"
                v-model="temPlans.points"
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
              <div class="lg:flex-shrink-0 w-full">
                <div
                  id=" empty-cover-art"
                  class="rounded w-full lg:h-64 h-auto py-16 px-0 text-center bg-gray-300 opacity-50 md:border-solid md:border-2 md:border-gray-400"
                >
                 <img :src="temPlans.Cpicture" alt="" class="absolute inset-y-0" >
                  <!-- <svg
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
                  </svg> -->
                  <div class="py-4">Add Cover Art</div>
                 
                </div>
              </div>
              <div class="lg:mt-4 mt-0 flex items-center mt-4 lg:flex-0 justify-center">
                <p class="lg:visible hidden text-xs leading-normal">上傳圖片</p>
                <label for="image">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="temPlans.Cpicture"
                  placeholder="請輸入圖片連結"
                />
                <!-- 
                <button
                  class="mt-0 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
                >
                  上 傳
                  <i class="fa fa-upload"></i>
                </button>-->
                <!-- <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"
                  alt
                  :src="temPlans.Cpicture"
                /> -->
                <input type="file" name="pic-to-upload" ref="files" @change="uploadPic" class="mt-0 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded-full lg:ml-4 ml-0 text-sm shadow-md" />
              </div>
            </div>
            <div class="ml-0 lg:ml-10 w-full lg:w-1/2 text-xl text-gray-800 leading-normal">
              <label class="block mb-6">
                <div class="text-md text-gray-600 font-medium mb-3">
                  國家 :
                  <span class="text-gray-500 text-md font-mono">{{temPlans.country}}</span>
                </div>

                <div class="relative inline-block w-full lg:w-48">
                  <input
                    v-model="temPlans.country"
                    type="text"
                    class="max-w-6xl block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <!-- <select
                    class="max-w-6xl block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    v-model="selectedCountry"
                    name="country"
                    @change="selectedCity = null"
                  >
                    <option v-for="(item,index)   in county" :key="index" :value="item">{{item}}</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
                  >
                  <i class="fas fa-angle-down text-blue-500"></i>-->
                  <!-- </div> -->
                </div>
              </label>

              <label class="block mb-6">
                <div class="text-md text-gray-600 font-medium mb-3">
                  城市
                  <span class="text-gray-500 text-md font-mono">{{temPlans.city}} {{temPlans.id}}</span>
                </div>

                <div class="relative inline-block w-full lg:w-48">
                  <input
                    v-model="temPlans.city"
                    type="text"
                    class="max-w-6xl block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                  <!-- <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >-->
                  <!-- <select
                    v-model="selectedCity"
                    placeholder="请选择"
                    name="city"
                    class="max-w-6xl block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option v-for="(item,index) in city[0]" :key="index" :value="item">{{item}}</option>
                  </select>-->

                  <!-- </select> -->
                  <!-- <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
                  >
                    <i class="fas fa-angle-down text-blue-500"></i>
                  </div>-->
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
                      v-model="temPlans['Act']"
                      value="冒險"
                    />
                    <span class="text-base">冒險</span>
                  </label>
                  <label class="mr-1 text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      v-model="temPlans['Secret']"
                      value="秘境"
                      name="group"
                    />
                    <span class="text-base">秘境</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      v-model="temPlans['Culture']"
                      value="文化"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-sm">文化</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      v-model="temPlans['Food']"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">吃貨</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      v-model="temPlans['Shopping']"
                      value="購物"
                      type="checkbox"
                      name="group"
                    />
                    <span class="text-base">購物</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      v-model="temPlans['Religion']"
                      value="宗教"
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
    </el-dialog>
    <!-- 刪除modal -->

    <el-dialog :visible="deleteModal" :before-close="beforeClose">
      確定要將此旅行計劃永久刪除？
      <div slot="footer" class="dialog-footer">
        <el-button @click=" deleteModal = false">取 消</el-button>
        <el-button type="primary" @click="deletePlans">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      dialogVisible: false,
      deleteModal: false,

      plans: [],
      temPlans: {
        points: 1999,
        TPExperience: "djdljdl",
        TravelPlanIntro: "<p>hello ! 你好嗎 </p>",
        country: "日本",
        city: "giui",
        Cpicture: "",
        TPBGImg: "",
        Religion: false,
        Secret: false,
        Act: false,
        Food: false,
        Culture: false,
        Shopping: false
      },
      isNew: false,
      content: null,
      selectedCountry: "",
      selectedCity: null,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"]
          ]
        }
      },
      components: {
        quillEditor
      }
    };
  },
  methods: {
    ...mapMutations(["UPDATE_USER"], ["changeLogin"], ["setProjectInfo"]),
    ...mapActions(["getProjects"]),

    beforeClose(done) {
      this.dialogVisible = false;
      this.deleteModal = false;
      done();
    },
    onEditorBlur() {
      //失去焦點事件
    },
    onEditorFocus() {
      //獲得焦點事件
    },
    onEditorChange() {
      //內容改變事件
    },
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // },
    getPlans() {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };

      let api = `${process.env.VUE_APP_APIPATH}/plan/loadsingle`;

      // console.log(api);
      const vm = this;
      // vm.isLoading = true;
      this.$http
        .get(api, { headers })
        .then(response => {
          // vm.isLoading = false;
          vm.plans = response.data.result;
          console.log(response);
        })
        .catch(err => {
          console.log(err.message);
        });
      //  this.$store.dispatch('getApi');
    },
    openModel(isNew, item) {
      const vm = this;

      if (isNew) {
        vm.temPlans = {};
        vm.isNew = true;
      } else {
        vm.temPlans = Object.assign({}, item); //資料傳參特性
        vm.isNew = false;
      }
      vm.dialogVisible = true;
    },
    deleteDialogModal(item) {
      const vm = this;
      vm.temPlans = item;
      vm.deleteModal = true;
    },
    updatePlan() {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      let api = `${process.env.VUE_APP_APIPATH}plan/create`;

      // let httpMethod = "post";
      // let data = vm.temPlans;
      const vm = this;

      let httpMethod = "post";
      vm.isLoading = true;
      if (!vm.isNew) {
        //假設產品不是新的
        api = `${process.env.VUE_APP_APIPATH}plan/update/${vm.temPlans.id}`;
        httpMethod = "patch";
      }
      console.log(api, "update");

      this.$http[httpMethod](
        api,
        {
          country: this.temPlans.country,
          city: this.temPlans.city,
          points: this.temPlans.points,
          TPExperience: this.temPlans.TPExperience,
          TravelPlanIntro: this.temPlans.TravelPlanIntro,
          TPBGImg: this.temPlans.TPBGImg,
          Cpicture: this.temPlans.Cpicture,
          Religion: this.temPlans.Religion,
          Secret: this.temPlans.Secret,
          Act: this.temPlans.Act,
          Food: this.temPlans.Food,
          Culture: this.temPlans.Culture,
          Shopping: this.temPlans.Shopping
        },
        { headers }
      ).then(response => {
        // console.log(vm.temPlans);
        if (response.data.success) {
          this.dialogVisible = false; //新增成功的話就會關掉視窗並取得遠端的內容
          vm.getPlans(); //重新取得資料一次

          // console.log(this.getPlans);
        } else {
          this.dialogVisible = false;
          vm.getPlans(); //重新取得資料一次
          console.log("failure");
        }
        // vm.isLoading = false;
        // vm.plans = response.data.result;
      });
    },
    uploadPic() {
      //上傳國家片
      let token = localStorage.getItem("token");
      console.log(this);
      const uploadedPic = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("pic-to-upload", uploadedPic); //新增物件
      let url = `${process.env.VUE_APP_APIPATH}plan/cyimg`;

      // vm.status.fileUploading =true;//接受到之後就圖片打開
      this.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          // vm.status.fileUploading =false;//接受到之後就圖片隱藏
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;// 這樣是沒辦法用vue雙像綁定
            console.log("成功了！");
            // vm.temPlans.Cpicture = response.data.Cpicture;
            console.log(response.data);
            vm.$set(vm.temPlans, "Cpicture", response.data.Cpicture);
            console.log(vm.temPlans);
          } else {
            // this.$bus.$emit('message:push',response.data.message,'danger');
            console.log("失敗");
          }
        });
    },

    uploadImg() {
      let token = localStorage.getItem("token");
      console.log(this);
      const uploadedFile = this.$refs.files.files[0]; //這是檔案上傳物件
      const vm = this;
      const formData = new FormData(); //新增新物件可以
      formData.append("file-to-upload", uploadedFile); //新增物件
      let url = `${process.env.VUE_APP_APIPATH}plan/bgimg`;

      // vm.status.fileUploading =true;//接受到之後就圖片打開
      this.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          // vm.status.fileUploading =false;//接受到之後就圖片隱藏
          if (response.data.success) {
            // vm.tempProduct.imageUrl = response.data.imageUrl;// 這樣是沒辦法用vue雙像綁定
            console.log("成功了！");
            // vm.temPlans.TPBGImg = response.data.TPBGImg;

            vm.$set(vm.temPlans, "TPBGImg", response.data.TPBGImg);
            console.log(vm.temPlans);
            // console.log(vm.tempProduct);
          } else {
            // this.$bus.$emit('message:push',response.data.message,'danger');
            console.log("失敗");
          }
        });
    },
    deletePlans() {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/plan/delete/${vm.temPlans.id}`;
      console.log(url);
      vm.axios.delete(url, { headers }).then(response => {
        console.log(response);
        if (response.data.success) {
          vm.deleteModal = false;
          vm.getPlans();
          console.log("刪除成功");
        } else {
          vm.deleteModal = false;
          vm.getPlans();
          console.log("刪除失敗");
        }
      });
    }
  },
  computed: {
    ...mapState(["userInfo"], ["projects"]),
    county() {
      return this.$store.state.projects
        .map(item => item.country) //篩出國家
        .filter((item, index, arr) => arr.indexOf(item) === index);
    },
    city() {
      return this.$store.state.projects //篩出城市
        .filter(item => item.city === this.selectedCountry)
        .map(item => item.city)
        .filter((item, index, arr) => arr.indexOf(item) === index);
    }
  },
  created() {
    this.getPlans();
    this.getProjects();
    // console.log(this.$store.state);
  }
};
</script>
<style scoped>
</style>