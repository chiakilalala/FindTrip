<template>
  <div>
    <loading loader="bars" :active.sync="isLoading"></loading>
    <div class="flex max-w-6xl mx-auto">
      <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
        <ul class="list-inline inline-flex hover:underlines">
          <li class="pr-2">
            <router-link to="/home" class="hover:text-blue-500">
              <i class="fa fa-home"></i>
            </router-link>
            <span class="mx-1">/</span>
          </li>

          <li class="pr-2">訂單記錄</li>
        </ul>
      </div>
    </div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10 flex justify-between">
      <ul class="flex border-b" v-if=" $store.state.Permission == '02' ">
        <li class="-mb-px mr-1">
          <router-link
            to="/member/Order"
            class="border-b-2 border-teal-400 font-semibold inline-block py-2 px-4 text-teal-400 font-normal hover:text-blue-800"
          >旅行家</router-link>
        </li>
        <li class="mr-1">
          <router-link
            to="/member/traveler"
            class="inline-block py-2 px-4 text-gray-500 font-normal hover:text-blue-800"
          >規劃師</router-link>
        </li>
      </ul>
      <el-button
        @click=" QAisVisble  = true"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >Ｑ＆Ａ</el-button>
    </div>

    <!-- Q&A跳窗 -->

    <QAModel v-if="QAisVisble" :QAModel="QAisVisble" @dialog-cancel="closeManage"></QAModel>

    <div
      class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5 hover:shadow-sm hover:bg-gray-100"
      v-for="item in  orders"
      :key="item.id "
    >
      <!-- $router.push({ name: 'orderlist', params: { id: item.id } }) -->
      <div class="lg:flex">
        <div
          class="lg:flex-shrink-0 relative"
          v-if=" item.PlannerPic !=undefined && item.PlannerPic.length >= 1"
        >
          <img
            :src="item.PlannerPic[0].manpic"
            alt
            srcset
            class="object-cover ml-8 -mt-3 border-2 border-white w-12 h-12 rounded-full absolute top-0 left-0 bg-blue-500"
          />
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            :style="{backgroundImage:`url(${item.PlanPic[0]? item.PlanPic[0].Cpicture : 'https://picsum.photos/300/200?random=1' })`}"
          ></div>
          <p
            v-if="item.Status === 3"
            class="cursor-pointer ml-5 mt-2 text-blue-400 hover:text-blue-700 font-sm"
            @click="openComment(item)"
          >
            <i class="fas fa-edit"></i>撰寫評論
          </p>
        </div>
        <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
          <div class="flex relative">
            <!-- 三種現象 -->
            <span
              v-if="item.Status === 1"
              class="bg-gray-500 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 mx-4 lg:ml-0"
            >訂單確認中</span>
            <span
              v-else-if="item.Status === 2"
              class="bg-teal-600 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 mx-4 lg:ml-0"
            >訂單委託中</span>
            <span
              v-else-if="item.Status === 3"
              class="bg-blue-100 text-blue-500 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 mx-4 lg:ml-0"
            >已完成</span>

            <span
              @click="getOrder(item.id)"
              class="cursor-pointer bg-blue-400 hover:bg-blue-200 text-blue-100 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >
              <i class="far fa-file"></i> 查看訂單
            </span>

            <div
              class="min-w-15 bg-white min-h-16 p-0 mb-0 font-medium absolute top-0 right-0 lg:mr-0 mr-5 lg:mt-0 -mt-12"
            >
              <div
                class="w-20 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow"
              >
                <div class="block rounded-t overflow-hidden text-center">
                  <div class="bg-blue-200 text-gray-500 py-1">{{item.CreateOn.slice(0,4) }}</div>
                  <div class="bg-gray-200 text-gray-500">{{item.CreateOn.slice(5,7) | month }}</div>
                  <div class="bg-gray-200">
                    <span
                      class="text-3xl font-bold text-gray-500 leading-tight"
                    >{{item.CreateOn.slice(8,10) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-8 lg:px-0 lg:mt-0">
            <!-- !=undefined && orderInfo.PlannerName.length >= 1 -->
            <p
              class="sm:my-2 block lg:mt-4 text-base mt-2 leading-tight font-semibold text-gray-900"
              v-if="item.PlannerName!=undefined && item.PlannerName.length >= 1"
            >
              旅行規劃師
              <span
                class="text-sm font-thin sm:text-base"
              >— {{item.PlannerName[0].PlannerName}}</span>
            </p>
            <p
              class="sm:my-2 block lg:mt-4 text-base mt-2 leading-tight font-semibold text-gray-900"
            >
              國家 ：
              <span class="text-sm font-thin sm:text-base">{{item.country}}</span>
            </p>
            <p
              class="sm:my-2 block lg:mt-4 mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              城市 ：
              <span class="text-sm font-thin sm:text-base">{{item.city}}</span>
            </p>
            <div class="lg:mt-8 sm:mt-2 lg:flex justify-between">
              <div class="lg:my-0 sm:my-6 flex items-center">
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                  :class="{'hidden' : !item['Culture']}"
                >文化</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                  :class="{'hidden' : !item['Religion']}"
                >宗教</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                  :class="{'hidden' : !item['Secret']}"
                >秘境</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                  :class="{'hidden' : !item['Shopping']}"
                >購物</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                  :class="{'hidden' : !item['Act']}"
                >冒險</span>
                <span
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                  :class="{'hidden' : !item['Food']}"
                >吃貨</span>
              </div>

              <div class="flex justify-between items-baseline">
                <button
                  v-if="item.Status === 2"
                  @click="totalCahange(item.id)" :class= "{ hidden :isHidden}"
                  class="bg-transparent border border-blue-500 hover:bg-blue-500 hover:shadow-xl hover:text-white text-blue-500 font-thin py-2 px-4 rounded xl:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >完成訂單</button>
                <button
                  v-else-if="item.Status === 3"
                  class="cursor-not-allowed opacity-50 bg-gray-600 text-white font-thin py-2 px-4 rounded ml-0 lg:mt-0 mt-8 text-sm"
                >已完成</button>
                <div v-if="item.PlannerEmail !=undefined && item.PlannerEmail.length >= 1">
                  <a
                    target="_blank"
                    data-msg="Email用來傳遞規劃師行程表"
                    :href="`mailto:${item.PlannerEmail[0].Email}`"
                    class="tooltip cursor-pointer bg-blue-500 border border-blue-500 hover:bg-transparent hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                  >訊息聯絡</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 訂單完成 -->

    <el-dialog :visible="centerVisibl" :before-close="beforeClose" width="50%" center>
      <!-- 下面是留言格式 -->

      <div class="flex container max-w-4xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0">
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <h3 class="text-center font-bold text-gray-600">確定 已經收到了 規劃師 的 行程書</h3>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click=" centerVisibl  = false">取 消</el-button>
            <el-button type="primary" @click="sendState">送出</el-button>
          </div>
          <!-- </div> -->
        </div>
      </div>
    </el-dialog>

    <!-- 訂單  check  dialog -->
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <div
        class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative shadow-lg"
      >
        <div
          class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head bg-blue-300"
          style="background-image: url(https://upload.cc/i1/2020/06/18/XT05If.jpg)"
        >
          <p
            class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg"
          >
            DFW
            <span class="tracking-normal">--&gt;</span> SEA
          </p>
        </div>
        <!-- v-for="item in Oneorders" :key="item.id" -->
        <div class="p-12 px-22">
          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">會員姓名:</label>
              <p class="order_text">{{ Oneorders.name}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">電子信箱:</label>
              <p class="order_text">{{Oneorders.Email}}</p>
            </div>
          </div>
          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">聯絡電話:</label>
              <p class="order_text">{{Oneorders.Tel}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">創建日期:</label>
              <p
                v-if="Oneorders.CreateOn !=undefined && Oneorders.CreateOn.length >= 1"
                class="order_text"
              >{{Oneorders.CreateOn.slice(0,10)}} {{Oneorders.CreateOn.slice(14,19)}}(GTM+8)</p>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">國家:</label>
              <p class="order_text">{{Oneorders.country}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">城市:</label>
              <p class="order_text">{{Oneorders.city}}</p>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">行程的日期 範圍 :</label>
              <p class="order_text">{{Oneorders.DepartureTime1}} ~ {{Oneorders.DepartureTime2}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">預算:</label>
              <p class="order_text">{{Oneorders.Budget}}</p>
            </div>
          </div>

          <div class="mb-8">
            <fieldset class="border-0">
              <legend class="text-gray-700 mb-2 font-bold">旅行喜好類型 :</legend>
              <div
                class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
              >
                <button class="bg-blue-500" :class="{'hidden' : !Oneorders['Act']}">冒險</button>
                <button class="bg-blue-500" :class="{'hidden' : !Oneorders['Secret']}">秘境</button>
                <button class="bg-blue-500" :class="{'hidden' : !Oneorders['Culture']}">文化</button>

                <button class="bg-blue-600" :class="{'hidden' : !Oneorders['Religion']}">宗教</button>
                <button class="bg-blue-600" :class="{'hidden' : !Oneorders['Shopping']}">購物</button>
                <button class="bg-blue-600" :class="{'hidden' : !Oneorders['Food']}">吃貨</button>
              </div>
            </fieldset>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">大人:</label>
              <p class="order_text">{{Oneorders.Adult}} 人</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">小孩:</label>
              <p class="order_text">{{Oneorders.Children}} 人</p>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 text-xl font-bold mb-2">備註 :</label>
            <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
              <p class="text-sm text-gray-600 leading-relaxed px-5 pt-5">{{Oneorders.Remark}}</p>
            </div>
          </div>

          <p
            class="text-right text-base text-gray-700 font-semibold mb-8"
            v-if=" Oneorders.PlannerName !=undefined && Oneorders.PlannerName.length >= 1"
          >
            本次扣除
            <span class="text-xl text-blue-500">{{Oneorders.PlannerName[0].points}}</span>
            <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-1">點數</span>
            購買後剩餘
            <span class="text-xl text-blue-500">{{price}}</span>
            <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-4">點數</span>
          </p>
        </div>

        <div
          class="bg-blue-800 bg-cover bg-right h-20 p-4 flex justify-end items-center form-head"
          style="background-image: url(https://upload.cc/i1/2020/06/18/XT05If.jpg)"
        ></div>
      </div>
    </el-dialog>

    <!-- comment dialog -->

    <el-dialog :visible="commentVisible" :before-close="beforeClose" width="50%">
      <!-- 下面是留言格式 -->

      <div class="flex container max-w-4xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0">
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <div class="p-12">
              <div class="mb-3">
                <div class="w-full flex flex-wrap">
                  <div class="w-full flex items-center">
                    <div class="w-16 h-16 rounded-full bg-blue-500 mb-3 ml-1">
                      <img
                        :src=" $store.state.userInfo.manpic ? $store.state.userInfo.manpic : '../../assets/img/user001.png'"
                        alt
                        class="mx-auto w-16 h-16 rounded-full"
                      />
                    </div>
                    <span class="text-lg pl-2">{{$store.state.userInfo.name}}</span>
                  </div>
                </div>
              </div>
              <ValidationObserver>
                <div class="mb-5">
                  <h1 class="text-xl text-gray-600 font-bold">請給這次體驗打個分數吧！(最高5顆星)</h1>
                  <ValidationProvider rules="required" v-slot="{ errors }" name="星星評分">
                    <el-rate class="my-3" v-model="comment.star" :colors="colors" name="星星評分"></el-rate>
                    <div class="text-sm text-red-400 my-2">{{ errors[0] }}</div>
                  </ValidationProvider>
                  <ValidationProvider rules="required" v-slot="{ errors,classes }" name="評分">
                    <input
                      placeholder="評分"
                      name="評分"
                      :class="classes"
                      v-model="comment.rating"
                      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                      type="input"
                    />
                    <div class="text-sm text-red-400 my-2">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="mb-5">
                  <div class="md:flex-1">
                    <label
                      class="border-3 block tracking-wide text-gray-700 text-lg font-bold"
                    >告訴我們你的想法:</label>
                    <ValidationProvider rules="required" v-slot="{ errors,classes }" name="體驗評論">
                      <textarea
                        placeholder="你覺得這次體驗如何請告訴我們"
                        v-model="comment.RatingContent"
                        :class="classes"
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                        type="input"
                        name="體驗評論"
                      ></textarea>
                      <div class="text-sm text-red-400 my-2">{{ errors[0] }}</div>
                    </ValidationProvider>
                  </div>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click=" commentVisible = false">取 消</el-button>
                    <el-button type="primary" @click="singleRating(comment.id)">送出</el-button>
                  </div>
                </div>
              </ValidationObserver>
            </div>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import QAModel from "@/components/QAModel.vue";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      isHidden:false,
      isLoading: false,
      value2: null,
      Oneorders: {}, //model資料
      dialogVisible: false,
      commentVisible: false,
      centerVisibl: false, //旅行家的button
      QAisVisble: false,
      deleteModal: false, //刪除訂單
      isTraveler: "all",
      comment: {
        rating: null,
        star: null,
        RatingContent: ""
      },
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      travelerId: null
    };
  },
  components: {
    QAModel
  },

  methods: {
    closeManage() {
      this.QAisVisble = false; //QA-Dialog
    },
    totalCahange(id) {
      //旅行家確定規劃師已經完成訂單後 按下訂單完成按鈕
      //  this.$emit('totalCahange', this.centerVisib);

      this.travelerId = id;
      // console.log(this.travelerId);
      //呼叫單筆api
      this.centerVisibl = true;
    },
    sendState() {
       this.isHidden = true;

       this.centerVisibl = false;

    },

    //   //單筆訂單整理
    // },
    travelOrder(id) {
      //修改單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      // let httpMethod = "patch";

      let api = `${process.env.VUE_APP_APIPATH}order/update/${id}`;
      // console.log(this.count);
      this.$http
        .patch(
          api,
          {
            Status: vm.Oneorder.Status
          },
          { headers }
        )
        .then(res => {
          if (res.data.success) {
            // console.log(res.data.message);
            // console.log(vm.checkOrder());
            vm.checkOrder(); //重新全部取得資料一次
          } else {
            console.log("更新失敗");
            vm.checkOrder(); //重新全部取得資料一次
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    },

    openComment(item) {
      this.commentVisible = true;
      this.comment = Object.assign({}, item); //資料傳餐特性
      // console.log(this.comment);
    },
    beforeClose(done) {
      //dialog關掉的xx
      this.dialogVisible = false;
      this.commentVisible = false;
      this.centerVisibl = false;
      this.deleteModal = false;

      done();
    },
    ...mapActions(["checkOrder"], ["getOrder"], ["getProjects"]),
    ...mapMutations(
      ["GETORDER"],
      ["UPDATE_USER"],
      ["changeLogin"],
      ["setProjectInfo"]
    ),

    getOrder(id) {
      //旅行家觀看單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;

      vm.orderId = this.$route.params.id;

      let api = `${process.env.VUE_APP_APIPATH}/order/loadsingle/${id}`;

      vm.isLoading = true;
      this.$http.get(api, { headers }).then(res => {
        vm.isLoading = false;
        if (res.data.success) {
          vm.Oneorders = res.data.result[0];
          vm.dialogVisible = true;
        }
      });
    },
    singleRating(id) {
      //傳送評論
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}rating/single/${id}`;
      // const vm = this;
      const Info = {
        rating: this.comment.rating,
        star: this.comment.star,
        RatingContent: this.comment.RatingContent
      };
      // console.log(Info);
      // console.log(id);
      this.$http
        .post(api, Info, { headers })
        .then(res => {
          if (res.data.success) {
            this.$notify({
              title: "成功",
              message: "順利評論",
              type: "success"
            });
            // console.log(res.data);
            vm.commentVisible = false;
          }
        })
        .catch(err => {
          console.log(err);
          this.$notify({
            title: "可惜",
            message: "評論失敗",
            type: "warning"
          });
        });
    },
    deleteDialogModal(item) {
      const vm = this;
      vm.temPlans = item;
      vm.deleteModal = true;
    }
  },
  computed: {
    ...mapState(["orders"], ["userInfo"], ["projects"]),
    ordersa() {
      return this.$store.state.orders;
    },
    price() {
      return this.$store.state.userInfo.points;

      //   if(this.$store.state.userInfo.point < this.Oneorders.PlannerName[0].points){
      //      return '無法購買還請儲值'
      //   }else if(this.$store.state.userInfo.point >= this.Oneorders.PlannerName[0].points){
      //       return this.$store.state.userInfo.points - this.Oneorders.PlannerName[0].points ;
      //   }
      //     return this.$store.state.userInfo.points - this.Oneorders.PlannerName[0].points
    }
  },
  mounted() {},
  created() {
    this.$store.dispatch("getProjects");

    this.checkOrder();
  }
};
</script>
<style scoped>
/*  border-b-2 border-teal-400 font-semibold #4fd1c5;*/
a.active {
  border-bottom: 2px solid #4fd1c5;
  font-weight: 700;
  color: #4fd1c5;
}
.el-dialog__wrapper .el-dialog {
  background-color: #ebf8ff;
}
.form-head:before,
.form-head:after {
  background-color: #fff;
}
</style>