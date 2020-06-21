<template>
  <div>
    <el-dialog :visible.sync="ZDialog" :before-close="cancelManage">
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

                    <div class="text-xs text-gray-500 pl-2 flex items-end" v-if=' wishMessage.CreateOn !=undefined '>
                      <div>{{ wishMessage.CreateOn.slice(0,10)}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 bg-white p-5 rounded">
                <p
                  class="text-lg text-gray-600 leading-loose"
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
                <div class="text-lg pl-8 text-gray-700">
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
                      <div class="font-medium mb-7 bg-white rounded-lg h-auto p-5">
                  <p class="text-lg text-gray-500 leading-loose">{{item.NewComment}}</p>
                      </div>
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
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "ZDialog", //接口变量名
  data() {
    return {
      rely: {
        NewComment: ""
      }
    };
  },
  props: {
    ZDialog: {
      type: Boolean,
      default: false
    },
    wishMessage: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    ...mapActions(["getProjects"]),
    ...mapMutations(["WISHMESSAGE"]),
    cancelManage() {
      this.$emit("dialog-cancel"); //函数接口
    },
    getWish(id) {
      //旅行家觀看單一許願板

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
    relyWish(id) {
      //回復留言
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
      // console.log(message);

      if (!this.$store.state.token) {
        vm.$notify.info({
          title: "提醒",
          message: "請先登入或是註冊會員"
        });
      } else {
        this.$http
          .post(api, message, { headers })
          .then(res => {
            if (res.data.success) {
              console.log(res.data.result);
              // this.relyMessage = res.data.result;
              // console.log(this.relyMessage);

              this.$notify.info({
                title: "成功",
                message: "留言順利"
              });
              vm.getWish(id);
          
            }
          })
          .catch(err => {
            console.log(err);
            this.$message({
              message: "留言失敗",
              type: "warning"
            });
             vm.getWish(id);
           
          });
      }
    }
  },
  created() {
    this.getProjects();
  }
};
</script>

<style>

.form-head:before, .form-head:after {
    background-color: #fff;
  
}
</style>