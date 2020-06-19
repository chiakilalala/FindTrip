<template>
  <div>
    <!-- NavBar Component -->
    <NavBar />
    <!-- banner -->
    <div class="hero bg-cover h-112 overflow-hidden">
      <!-- 選告 -->
      <div
        class="mt-10 lg:px-5 p-6 py-12 flex container max-w-7xl mx-auto member flex flex-wrap items-center justify-around"
      >
        <div
          class="border border-gray-100 lg:py-0 py-10 flex-col mt-10 container max-w-7xl bg-white flex text-gray-500 rounded-lg shadow-xl items-center"
        >
          <h2 class="text-4xl text-teal-900">
            願望成真！
            <i class="fab fa-gratipay"></i>
          </h2>
          <p class="text-xl">
            如果願望累積到 50個
            <i class="fas fa-heart text-2xl"></i>，Find Trip 將為大家找知名旅行家大人來設計行程!
          </p>
        </div>
      </div>
    </div>

    <!-- 麵包屑 -->
    <div class="my-2 lg:ml-10 ml-2">
      <div class="container flex max-w-7xl mx-auto -mt-32">
        <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
          <ul class="list-inline inline-flex hover:underlines">
            <li class>
              <i class="fa fa-home">/</i>
            </li>
            <li>許願池</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 熱門規劃師 -->
    <section class="bg-chiaki-blue py-10">
      <!-- filter -->
      <div class="flex container mx-auto flex-wrap max-w-7xl px-4 sm:px-5">
        <div class="py-5 flex">
          <div class="relative">
            <select
              class="w-full lg:w-32 min-w-32 appearance-none h-full rounded-md border-solid block appearance-none shadow bg-white border-gray-600 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-blue-200 focus:border-gray-500"
            >
              <option>最多愛心</option>
              <option>最新貼文</option>
            </select>
            <div
              class="filter-arrow pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>

          <div class="mt-1 mb-3 flex justify-end">
            <div class="btnCust eventInsert" @click="wishModel">我要許願</div>
          </div>
        </div>
        <!-- 類型挑選 -->
        <div class="container mx-auto max-w-7xl pr-4 mb-5">
          <!-- <div class="people_wrap my-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center">
            <button class="bg-blue-500">冒險</button>
            <button class="bg-blue-500">秘境</button>
            <button class="bg-blue-500">文化</button>
            <button class="bg-blue-500">吃貨</button>
            <button class="bg-blue-500">宗教</button>
            <button class="bg-blue-500">購物</button>
          </div>-->
        </div>
        <div
          class="w-full md:w-1/2 lg:w-1/4 flex flex-col mb-8 mt-4 px-3"
          @click="getWish(item.id)"
          v-for="item in wishBoard"
          :key="item.id"
        >
          <div class="overflow-hidden bg-white round-xll shadow sample hover:shadow-xl transition">
            <div class="p-6 flex flex-col justify-between">
              <div class="flex items-center">
                <div class="flex items-center">
                  <img
                    class="border-gray-500 shadow border-2 w-10 h-10 rounded-full mr-3 flex-1"
                    :src=" item.manpic ? item.manpic : 'https://picsum.photos/50/50/?people=4'"
                    alt="people"
                  />
                </div>

                <span class="font-medium text-gray-600 font-bold leading-normal">{{item.name}}</span>
              </div>

              <p class="inline-flex items-center py-2 lg:w-52 w-full">
                <span class="ellipsis ext-gray-600 text-sm leading-loose">{{item.Comment2}}</span>
              </p>
              <div class="py-2">
                <a href="#">
                  <img
                    alt="Placeholder"
                    class="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>
              </div>

              <div class="flex items-center justify-end py-2">
                <div class="text-gray-600 flex hover:text-blue-500 items-center mr-2">
                  <a
                    href="#"
                    class="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center hover:text-blue-500"
                  >
                    <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
                      <g>
                        <path
                          d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                        />
                      </g>
                    </svg>
                  </a>
                  <span class="ml-0">{{item.CommentTotal}}</span>
                </div>

                <div class="text-gray-600 flex hover:text-red-500 items-center mr-2">
                  <a
                    href="#"
                    class="w-8 h-8 hover:bg-red-200 rounded-full flex items-center justify-center hover:text-red-500"
                  >
                    <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current">
                      <g>
                        <path
                          d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                        />
                      </g>
                    </svg>
                  </a>
                  <span class="ml-1">{{item.LikeTotal}}</span>
                </div>

                <!-- <div
                  class="text-gray-600 flex hover:text-red-500 items-center justify-content-end mx-2"
                >
                  <a
                    href="#"
                    class="w-4 h-4 hover:bg-gray-300 rounded-full flex items-center justify-center hover:text-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      class="w-4 h-4 fill-current stroke-1"
                    >
                      <path
                        d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z"
                      />
                    </svg>
                  </a>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <el-dialog :visible="commentVisible" :before-close="beforeClose">
      <!-- 下面是點擊留言格式 -->

      <div class="flex container max-w-4xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0">
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <div
              class="bg-blue-500 bg-cover bg-center h-20 p-4 flex justify-end items-center form-head"
            >
              <h3 class="lg:text-2xl text-gray-100 text-md font-extrabold">
                <i class="fas fa-plane text-md pr-2 text-gray-100"></i>BOARDING PASS
              </h3>
            </div>
            <div class="p-12 px-10 bg-gray-200">
              <div class="mb-3">
                <div class="w-full flex flex-wrap">
                  <div class="w-full flex items-center">
                    <div class="w-16 h-16 rounded-full bg-blue-500 mb-3 ml-1">
                      <img
                        :src=" wishMessage.manpic ?  wishMessage.manpic : '../../assets/img/user001.png'"
                        alt
                        class="mx-auto w-16 h-16 rounded-full"
                      />
                    </div>
                    <span class="text-lg pl-2">{{ wishMessage.name}}</span>

                    <div class="text-sm pl-2 flex items-end">
                      <div>{{ wishMessage.CreateOn}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <p
                  class="text-lg text-gray-500 leading-loose"
                >我想去 {{wishMessage.Comment1}} 希望可以 {{wishMessage.Comment2}}！</p>
                <!-- <img src="../../assets/img/jp001.jpg" alt="w-full h-auto mt-15" srcset /> -->
              </div>

              <div class="flex items-center justify-start py-2 border-b border-blue-200 mb-5">
                <div class="text-gray-700 flex hover:text-blue-500 items-center mr-2">
                  <a
                    href="#"
                    class="w-10 h-10 hover:bg-blue-200 rounded-full flex items-center justify-center hover:text-blue-500"
                  >
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                      <g>
                        <path
                          d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                        />
                      </g>
                    </svg>
                  </a>
                  <span class="ml-0">{{ wishMessage.CommentTotal}}</span>
                </div>

                <div class="text-gray-600 flex hover:text-red-500 items-center mr-2">
                  <a
                    href="#"
                    class="w-10 h-10 hover:bg-red-200 rounded-full flex items-center justify-center hover:text-red-500"
                  >
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                      <g>
                        <path
                          d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                        />
                      </g>
                    </svg>
                  </a>
                  <span class="ml-1">{{wishMessage.CommentTotal}}</span>
                </div>
              </div>

              <div class="w-full flex items-center" v-if="$store.state.token">
                <div class="w-16 h-16 rounded-full bg-blue-500">
                  <img
                    :src=" $store.state.userInfo.manpic ?  $store.state.userInfo.manpic : '../../assets/img/man001.svg'"
                    alt
                    class="mx-auto object-cover w-16 h-16 rounded-full"
                  />
                </div>
                <div class="text-lg pl-8 text-gray-400">
                  <span>{{$store.state.userInfo.name}}</span>
                </div>
              </div>

              <div class="flex flex-wrap">
                <textarea
                  placeholder="留言"
                  class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                  type="input"
                  v-model="rely.NewComment"
                ></textarea>
              </div>
              <div class="mb-3 border-gray-300 border-b pb-5">
                <div class="flex justify-end">
                  <button
                    @click="relyWish(wishMessage.id)"
                    class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-5"
                  >留言</button>
                </div>
              </div>
              <div
                class="mb-8 w-full flex items-center relative"
                v-for=" item in wishMessage.wishReply"
                :key="item.id"
              >
                <div class="w-16 h-16 rounded-full bg-blue-500 absolute">
                  <img
                    :src="item.manpic ? item.manpic : '../../assets/img/man002.svg'"
                    alt
                    class="mx-auto object-cover w-16 h-16 rounded-full"
                  />
                </div>
                <div class="w-full flex flex-col items-stretch text-lg pl-20 text-gray-400">
                  <span class="text-base mb-3">{{item.name}}</span>
                  <p class="text-lg text-gray-500 leading-loose">{{item.NewComment}}</p>
                </div>
              </div>
              <!-- <div class="my-3 border-gray-300 border-t pb-5">
                <div class="flex justify-end">
                  <p class="font-bold mt-5 text-gray-600">
                    <i class="fas fa-reply pr-2"></i>回覆
                  </p>
                </div>
              </div>-->
            </div>

            <div
              class="relative bg-blue-500 bg-cover bg-center h-20 p-4 flex justify-end items-center form-head"
            >
              <div class="sbarcode"></div>
            </div>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </el-dialog>

    <el-dialog :visible="wishVisble" :before-close="beforeClose">
      <!-- 下面是留言格式 -->

      <div class="flex container max-w-4xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0">
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <div
              class="bg-blue-700 bg-cover bg-center h-20 p-4 flex justify-end items-center form-head"
            >
              <h3 class="lg:text-2xl text-gray-100 text-md font-extrabold">
                <i class="fas fa-plane text-md pr-2 text-gray-100"></i>BOARDING PASS
              </h3>
            </div>
            <div class="p-12 px-10 lg:px-20 border-gray-200 border-2">
              <div class="mb-3">
                <div class="w-full flex flex-wrap">
                  <div class="w-full flex items-center">
                    <div class="w-16 h-16 rounded-full bg-blue-500">
                      <img
                        :src="$store.state.userInfo.manpic"
                        alt
                        class="object-cover w-16 h-16 rounded-full"
                      />
                    </div>
                    <span class="text-lg pl-2">{{$store.state.userInfo.name}}</span>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <div class="md:flex-1">
                  <label class="border-3 block tracking-wide text-gray-700 text-lg font-bold">我想去:</label>
                  <input
                    type="text"
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                    placeholder="像是冰島"
                    v-model="wish.Comment1"
                  />

                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
              </div>
              <div class="mb-5">
                <div class="md:flex-1">
                  <label class="border-3 block tracking-wide text-gray-700 text-lg font-bold">我想做:</label>
                  <textarea
                    v-model="wish.Comment2"
                    type="text"
                    class="bg-white focus:outline-none border rounded border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                    placeholder="最有名的冰島看一整天山"
                  ></textarea>

                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
              </div>
              <div class="md:flex-1 flex justify-end">
                <el-button
                  @click="wishVisble = false"
                  class="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                >取消</el-button>
                <el-button
                  type="primary"
                  @click="wishComment"
                  class="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                >留言</el-button>
              </div>
            </div>

            <div
              class="bg-blue-700 bg-cover bg-center h-20 p-4 flex justify-end items-center form-head"
            ></div>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </el-dialog>
    <Footer />
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "wish",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      wishBoard: [],
      relyMessage: {},
      wishMessage: {},
      commentVisible: false,
      wishVisble: false,
      wish: {
        Comment1: "",
        Comment2: ""
      },
      rely: {
        NewComment: ""
      },
      isLike: false
    };
  },
  computed: {
    ...mapState(["userInfo"], ["wishList"], ["projects"])
  },
  methods: {
    ...mapActions(["getOneUser"], ["getProjects"]),

    ...mapMutations(
      ["UPDATE_USER"],
      ["changeLogin"],
      ["setProjectInfo"],
      ["WISHMESSAGE"]
    ),
    beforeClose(done) {
      //dialog關掉的xx
      this.wishVisble = false;
      this.commentVisible = false;
      done();
    },
    wishModel() {
      if (!this.$store.state.token) {
        this.$notify.info({
          title: "提醒",
          message: "請先登入或是註冊會員"
        });
        this.wishVisble = false;
      } else {
        this.wishVisble = true;
      }
    },

    openMidel(id) {
      console.log(id);
      this.commentVisible = true;
    },
    wishComment() {
      //傳送願望
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/wish/make`;
      // const vm = this;
      const Info = {
        Comment1: this.wish.Comment1,
        Comment2: this.wish.Comment2
      };
      console.log(Info);

      this.$http
        .post(api, Info, { headers })
        .then(res => {
          if (res.data.success) {
            // console.log(res.data);
            this.message = res.data.result;
            console.log(this.message);
            this.$message("留言成功");
            vm.getllWish();

            vm.wishVisbl = false;
          }
        })
        .catch(err => {
          console.log(err);
          this.$message({
            message: "留言失敗",
            type: "warning"
          });
        });
    },
    relyWish(id) {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}wish/reply/`;

      // const vm = this;
      const message = {
        NewComment: this.rely.NewComment,
        Rid: id
      };
      console.log(message);

      if (!this.$store.state.token) {
        this.$notify.info({
          title: "提醒",
          message: "請先登入或是註冊會員"
        });
      } else {
        this.$http
          .post(api, message, { headers })
          .then(res => {
            if (res.data.success) {
              // console.log(res.data);
              // this.relyMessage = res.data.result;
              // console.log(this.relyMessage);
              this.$message("留言成功");
              vm.relyWish(id);
              vm.commentVisible = false;
            }
          })
          .catch(err => {
            console.log(err);
            this.$message({
              message: "留言失敗",
              type: "warning"
            });
          });
      }
    },

    getWish(id) {
      //旅行家觀看許願板

      const vm = this;

      let api = `${process.env.VUE_APP_APIPATH}wish/inner/${id}`;
      this.$http.get(api).then(res => {
        if (res.data.success) {
          vm.wishMessage = res.data.result;
          vm.commentVisible = true;
          // console.log(vm.wishMessage);
        }
      });
    },
    getllWish() {
      let api = `${process.env.VUE_APP_APIPATH}/wish/all`;

      const vm = this;
      // vm.isLoading = true;
      // console.log(api);
      this.$http
        .get(api)
        .then(response => {
          // vm.isLoading = false;
          vm.wishBoard = response.data.result;
          // console.log(vm.wishBoard);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },

  created() {
    this.getOneUser();
    this.getllWish();
    // this.$store.dispatch("getProjects");
  }
};
</script>

<style scoped>
.form-head:before,
.form-head:after {
  background-color: #fff;
}
</style>

