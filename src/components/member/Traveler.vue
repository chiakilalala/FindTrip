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

          <li class="pr-2">訂單記錄</li>
        </ul>
      </div>
    </div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10">
      <ul class="flex border-b" v-if=" $store.state.Permission == '02' ">
        <li class="-mb-px mr-1">
          <router-link
            to="/member/Order"
            class="inline-block py-2 px-4 text-gray-500 hover:text-blue-800"
            href="#"
          >旅行家</router-link>
        </li>
        <li class="mr-1">
          <router-link
            to="/member/traveler"
            class="border-b-2 border-teal-400 font-semibold inline-block py-2 px-4 text-teal-400 font-normal hover:text-blue-800"
            href="#"
          >規劃師</router-link>
        </li>
      </ul>
    </div>

    <div
      class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5 hover:shadow-sm"
      v-for="item in  sellOrders"
      :key="item.id "
    >
      <!--  @click="getOrder(item.id)"$router.push({ name: 'orderlist', params: { id: item.id } }) -->
      <div class="lg:flex ">
        <div class="lg:flex-shrink-0 relative">
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-70 w-52 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            :style="{backgroundImage:`url(${item.PlanPic[0].Cpicture ? item.PlanPic[0].Cpicture : 'https://picsum.photos/300/200?random=1' })`}"
          ></div>
          <p
            v-if="item.Status === 3"
            class="cursor-pointer ml-5 mt-2 text-blue-400 font-sm"
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
              @click="sellOrder(item.id)"
              class="cursor-pointer bg-blue-400  hover:bg-blue-200 text-blue-100 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >
              <i class="far fa-file"></i> 查看訂單
            </span>

            <div
              class="min-w-15 bg-white min-h-16 p-0 mb-0 font-medium absolute top-0 right-0 lg:mr-0 mr-5 lg:mt-0 -mt-12"
            >
              <div
                class="w-16 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow"
              >
                <div class="block rounded-t overflow-hidden text-center">
                  <div class="bg-gray-200 text-gray-500 py-1">{{item.CreateOn.slice(5,7) | month }}</div>
                  <!--  2020-06-14T16:47:48.243  -->
                  <div class="pt-1 bg-gray-200">
                    <span
                      class="text-3xl font-bold text-gray-500 leading-tight"
                    >{{item.CreateOn.slice(8,10) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-8 lg:px-0 lg:mt-0">
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              旅行家
              <span class="text-sm font-thin">— {{item.name}}</span>
            </p>
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              國家 ：
              <span class="text-sm font-thin">{{item.country}}</span>
            </p>
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              區域 ：
              <span class="text-sm font-thin">{{item.city}}</span>
            </p>
            <div class="mt-4 lg:flex justify-between">
              <div>
                <span
                  :class="{'hidden' : !item['Culture']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >文化</span>
                <span
                  :class="{'hidden' : !item['Religion']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >宗教</span>
                <span
                  :class="{'hidden' : !item['Secret']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >秘境</span>
                <span
                  :class="{'hidden' : !item['Shopping']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >購物</span>
                <span
                  :class="{'hidden' : !item['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >冒險</span>
                <span
                  :class="{'hidden' : !item['Food']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >吃貨</span>
              </div>

              <div class="flex justify-between">
                <button
                  v-if="item.Status === 2"
                  class="bg-transparent border border-blue-500 hover:bg-blue-500 hover:shadow-xl hover:text-white text-blue-500 font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >完成訂單</button>
                <button
                  v-else-if="item.Status === 3"
                  class="cursor-not-allowed opacity-50 bg-gray-600 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm"
                >已完成</button>

                <button
                  class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >訊息聯絡</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="80%">
      <div
        class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative border-gray-500 border"
      >
        <div
          class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head bg-blue-300"
        >
          <p
            class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg"
          >
            DFW
            <span class="tracking-normal">--&gt;</span> SEA
          </p>
        </div>
        <div class="p-12 px-22" v-for="(item) in OneTraveler" :key="item.id">
          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">會員姓名:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.name}}</p>
           
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">電子信箱:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.Email}}</p>
            </div>
          </div>
          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">聯絡電話:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.Tel}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">創建日期:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.DepartureTime1}} ~ {{item.DepartureTime2}}</p>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">國家:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.country}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">區域:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.city}}</p>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-base font-bold"
              >行程的日期 範圍 :</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.DepartureTime1}} ~ {{item.DepartureTime2}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">預算:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.Budget}}</p>
            </div>
          </div>

          <div class="mb-8">
            <fieldset class="border-0">
              <legend class="text-gray-700 mb-2 font-bold">旅行喜好類型 :</legend>
              <div
                class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
              >
                <button class="bg-blue-500" :class="{'hidden' : !item['Act']}">冒險</button>
                <button class="bg-blue-500" :class="{'hidden' : !item['Secret']}">秘境</button>
                <button class="bg-blue-500" :class="{'hidden' : !item['Culture']}">文化</button>

                <button class="bg-blue-600" :class="{'hidden' : !item['Religion']}">宗教</button>
                <button class="bg-blue-600" :class="{'hidden' : !item['Shopping']}">購物</button>
                <button class="bg-blue-600" :class="{'hidden' : !item['Food']}">吃貨</button>
              </div>
            </fieldset>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">大人:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.Adult}} 人</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">小孩:</label>
              <p
                class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
              >{{item.Children}} 人</p>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 text-base s font-bold mb-2">備註 :</label>
            <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
              <p class="text-sm text-gray-600 leading-relaxed px-5 pt-5">{{item.Remark}}</p>
            </div>
          </div>

          <div class="mb-8">
            <div class="flex justify-center">
              <!-- <el-button
                
               @click="changeState(item.id)"
           
              >確認點擊訂單 {{count}}</el-button>-->
              <el-button
                @click="switchState(item.id)"
                :class="[
                    item.Status == 1
                    ? 'bg-teal-600' : item.Status === 2 
                    ? 'bg-blue-500' : item.Status === 3
                    ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500'
                    ]"
                class="hover:opacity-75 text-white font-bold py-2 px-4 rounded-full mx-4"
              >{{ item.Status | status }}</el-button>
              <!-- <el-button
                @click="switchState2(item.id)"
                v-if="item.Status === 2"
                class="bg-gray-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
              >完成訂單 {{ item.Status }}</el-button>

              <el-button
              
                class="cursor-not-allowed bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
              >訂單完成 {{ item.Status }}</el-button>-->
            </div>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- comment dialog -->

    <el-dialog :visible="commentVisible" :before-close="beforeClose">
      <!-- 下面是留言格式 -->

      <div class="flex container max-w-4xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center px-6 lg:px-0">
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <div class="p-12">
              <div class="mb-3">
                <div class="w-full flex flex-wrap">
                  <div class="w-full flex items-center">
                    <div class="w-16 h-16 rounded-full bg-blue-500 p-1 mb-3 ml-1">
                      <img
                        src="../../assets/img/user001.png"
                        alt
                        class="mx-auto object-cover w-18 h-18 rounded-full"
                      />
                    </div>
                    <span class="text-lg pl-2">chiakilalal</span>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <h1 class="text-xl text-gray-400 font-bold">請給這次體驗打個分數吧！(最高5顆星)</h1>
                <el-rate class="my-3"  v-model="comment.rating" :colors="colors" score-template="{value}"></el-rate>
                <input placeholder="評分" v-model="comment.star" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal" type="input">
              </div>
              <div class="mb-5">
                <div class="md:flex-1">
                  <label
                    class="border-3 block tracking-wide text-gray-700 text-lg font-bold"
                  >告訴我們你的想法:</label>
                    <textarea placeholder="你覺得這次體驗如何請告訴我們" 
                    v-model="comment.RatingContent"
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal" type="input"></textarea>
               

                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
              </div>
                   <div slot="footer" class="dialog-footer">
        <el-button @click=" commentVisible = false">取 消</el-button>
        <el-button type="primary" @click="singleRating(comment.id)">送出</el-button>
      </div>
            </div>
          </div>

          <!-- </div> -->
        </div>
      
      </div>
   
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      value:3,
      count: 1,
      OneTraveler: {
        Status: 1
      }, //model資料
      state: {},
      dialogVisible: false,
      commentVisible: false,
      isTraveler: 'all',
      comment:{
        rating: null,
        star:null,
        RatingContent: '',
       
      },
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    };
  },

  methods: {
    openComment(item){
     this.commentVisible = true;
     this.comment = Object.assign({}, item); //資料傳餐特性
     console.log(this.comment)
    },
    beforeClose(done) {
      this.dialogVisible = false;
      this.commentVisible = false;
      done();
    },
    
    switchState(item) {
      if (this.OneTraveler[0].Status == 0) {
        this.$set(this.OneTraveler, "Status", 1);
        console.log(this.OneTraveler.Status);
      } else if (this.OneTraveler[0].Status == 1) {
        this.$set(this.OneTraveler, "Status", 2);
        console.log(this.OneTraveler.Status);
      } else if (this.OneTraveler[0].Status == 2) {
        this.$set(this.OneTraveler, "Status", 3);
        console.log(this.OneTraveler.Status);
      }

      console.log(item); //看id
      this.travelOrder(item);//更新api

      //單筆訂單整理
    },
    // switchState2(item) {
    //   this.$set(this.OneTraveler[0], "Status", 3);
    //   console.log(this.OneTraveler[0].Status);

    //   this.travelOrder(item);
    //   //單筆訂單整理
    // },

    ...mapActions(["sellerOrder"], ["getOrder"], ["getProjects"]),
    ...mapMutations(
      ["SELLORDER"],
      ["UPDATE_USER"],
      ["changeLogin"],
      ["setProjectInfo"]
    ),

    sellOrder(id) {
      //歸畫師是單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;

      vm.orderId = this.$route.params.id;
      let api = `${process.env.VUE_APP_APIPATH}order/sellersingle/${id}`;
      this.$http.get(api, { headers }).then(res => {
        if (res.data.success) {
          vm.OneTraveler = res.data.result;
          console.log(vm.OneTraveler);
          vm.dialogVisible = true;
        }
      });
    },
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
            Status: vm.OneTraveler.Status
          },
          { headers }
        )
        .then(res => {
          if (res.data.success) {
            console.log(res.data.message);
            // console.log(vm.sellerOrder());
            vm.sellerOrder(); //重新全部取得資料一次
          } else {
            console.log("更新失敗");
            vm.sellerOrder(); //重新全部取得資料一次
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    singleRating(id) {
    //傳送評論
    let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/rating/single/${id}`;
      // const vm = this;
      const Info = {
        rating: this.comment.rating,
        star:this.comment.star,
        RatingContent: this.comment.RatingContent,
      };
      console.log(Info)
      console.log(id)
      this.$http
          .post(api,Info ,{headers})
          .then(res => {
            
            if (res.data.success) {
             console.log(res.data);
             vm.commentVisible = false;
         

            }
          }).catch(err =>{
            console.log(err)
          })
    
      
    },

  },
  computed: {
    ...mapState(["sellOrders"], ["userInfo"], ["projects"]),
    
  },
  updated() {
    // 讓我們可以知道組件有被更新
    console.log("view updated");
  },
  created() {
    this.$store.dispatch("getProjects");
    this.sellerOrder();
  }
};
</script>
<style>
/*  border-b-2 border-teal-400 font-semibold #4fd1c5;*/
a.active {
  border-bottom: 2px solid #4fd1c5;
  font-weight: 700;
  color: #4fd1c5;
}
.liBackground {
  background: darkcyan;
}
</style>