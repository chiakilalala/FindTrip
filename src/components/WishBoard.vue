<template>
  <div class="container mx-auto flex max-w-7xl flex-wrap pb-12">
    <div
      v-for="item in wishList"
      :key="item.id"
      class="w-full md:w-1/2 lg:w-1/4 flex flex-col mb-8 mt-4 px-3"
      @click="getWish(item.id)"
    >
      <div
        class="overflow-hidden bg-white round-xll shadow sample hover:shadow-md hover:translateY-2px transition"
      >
        <div class="p-6 flex flex-col justify-between">
          <div class="flex items-center">
            <div class="flex items-center">
              <img
                class="border-gray-500 shadow border-2 w-10 h-10 rounded-full mr-3 flex-1"
                :src=" item.manpic ? item.manpic : 'https://picsum.photos/50/50/?people=4'"
                alt="people"
              >
            </div>

            <span class="font-medium text-gray-600 font-bold leading-normal">{{ item.name }}</span>
          </div>
      
          <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
            <p class="inline-flex items-center py-4">
              <span class="text-gray-600 text-sm">{{ item.Comment1s }}  {{ item.Comment2 }}</span>
            </p>
          </div>

          <div class="flex items-center justify-end py-2">
            <div class="text-gray-600 flex hover:text-blue-500 items-center mr-2">
              <a
                href="#"
                class="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center hover:text-blue-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 h-4 fill-current"
                >
                  <g>
                    <path
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                    />
                  </g>
                </svg>
              </a>
              <span class="ml-0">{{ item.LikeTotal }}</span>
            </div>

            <div class="text-gray-600 flex hover:text-red-500 items-center mr-2">
              <span
              
                class="w-8 h-8 hover:bg-red-200 rounded-full flex items-center justify-center hover:text-red-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="w-4 h-4 fill-current"
                >
                  <g>
                    <path
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                    />
                  </g>
                </svg>
              </span>
              <span class="ml-1">{{ item.CommentTotal }}</span>
            </div>

            <!-- 收藏功能 -->
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
                  <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z" />
                </svg>
              </a>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <ZDialog
      v-if="commentVisible"
      :z-dialog="commentVisible"
      @dialog-cancel="closeManage"
    />
    <!--  -->
  </div>
</template>
<script>
import ZDialog from "@/components/ZDialog.vue";
export default {
 components:{
  ZDialog
  },
  props: {
    wishList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return{
        commentVisible: false,
        wishMessage: {},
        rely: {
        NewComment: "",

      },
    }
  },
  methods: {
      closeManage() {
      this.commentVisible = false
    },
     beforeClose(done) {
      //dialog關掉的xx
  
      this.commentVisible = false;
      done();
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
        Rid:id
      };
      // console.log(message);

      if (!this.$store.state.token){
         this.$notify.info({
          title: "提醒",
          message: "請先登入或是註冊會員"
        });
      }else{
         this.$http
        .post(api, message, { headers })
        .then(res => {
          if (res.data.success) {
            console.log(res.data);
            // this.relyMessage = res.data.result;
            // console.log(this.relyMessage);
            // this.$message("留言成功");
            // vm.relyWish(id);
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
      //旅行家觀看單一許願板

      const vm = this;

      let api = `${process.env.VUE_APP_APIPATH}wish/inner/${id}`;
      this.$http.get(api).then(res => {
        if (res.data.success) {
          
          vm.wishMessage = res.data.result;
          vm.commentVisible = true;
          console.log(vm.wishMessage);
        }
      });
    },
  },
};
</script>


