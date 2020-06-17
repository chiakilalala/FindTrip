<template>
  <div>
    <!-- NavBar Component -->
    <NavBar />
    <div class="main pt-12 md:pt-16 bg-blue-200">
      <div class="my-2 lg:ml-10 ml-2">
        <div class="flex max-w-6xl mx-auto">
          <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
            <ul class="list-inline inline-flex hover:underlines">
              <li class>
                <i class="fa fa-home">/</i>
              </li>
              <li>旅行規劃師 /</li>
              <li>名字 個人資訊/</li>
              <li>訂單資料</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex container max-w-6xl mx-auto " v-for="item in orderInfo" :key="item.id">
        <div class="w-full flex flex-col flex-wrap justify-center">
          <h1 class="text-center text-2xl mb-3">這是{{item.name}}的訂單喔喔喔喔</h1>
          <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
            <div
              class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head"
              style="background-image: url(https://content.api.news/v3/images/bin/11990db1d540d5c13ea8ca3e01f2083c)"
            >
              <p
                class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg"
              >
                DFW
                <span class="tracking-normal">--&gt;</span> SEA
              </p>
            </div>
            <div class="p-12 px-22">
              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-base font-bold"
                  >會員姓名:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.name}}</p>
                  <!--<div class="text-sm text-red-600">Error message</div>-->
                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-base font-bold"
                  >電子信箱:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.Email}}</p>
                </div>
              </div>

              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">國家:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.country}}</p>
                  <!-- <div class="text-sm text-red-600">Error message</div> -->
                  <!-- <div class="text-xs text-gray-600">Help text</div>  -->
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
                  >
                    {{item.DepartureTime1}} ~  {{item.DepartureTime2}}
                  </p>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">預算:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  > {{item.Budget}}</p>
                </div>
              </div>

              <div class="mb-8">
                <fieldset class="border-0">
                  <legend class="text-gray-700 mb-2 font-bold">旅行喜好類型 :</legend>
                  <div
                    class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
                  >
                    <button class="bg-blue-500"   :class="{'hidden' : !item['Act']}">冒險</button>
                    <button class="bg-blue-500" :class="{'hidden' : !item['Secret']}">秘境</button>
                    <button class="bg-blue-500" :class="{'hidden' : !item['Culture']}">文化</button>
                    <button class="bg-blue-600" :class="{'hidden' : !item['Food']}">吃貨</button>
                    <button class="bg-blue-600" :class="{'hidden' : !item['Religion']}">宗教</button>
                    <button class="bg-blue-600" :class="{'hidden' : !item['Shopping']}">購物</button>
                
                  </div>

                  <!--<div class="text-sm text-red-600">Error message</div>-->
                  <!--<div class="text-xs text-gray-600">Help text</div>-->
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

              <p class="text-right text-base text-gray-700 font-semibold mb-8">
                本次將扣除
                <span class="text-xl text-blue-500">300</span>
                <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-1">點數</span> 購買後將剩餘
                <span class="text-xl text-blue-500">700</span>
                <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-4">點數</span>
              </p>
              <div class="mb-8">
                <div class="flex justify-around">
                  <button @click.prevent="goback"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                  >上一步</button>
                  <button  @click="totalOrder"
                    class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                  >完成訂單</button>
                </div>
              </div>
            </div>
          </div>

          <!-- </div> -->
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "orderlist",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      orderInfo: {

      },
      OrderId: ""
    };
  },
  methods: {
    //api 動作

    ...mapActions(["getOneUser"], ["getProjects"], ["checkOrder"]),
    ...mapMutations(
      ["setProjectInfo"],
      ["changeLogin"],
      ["loginStart"],
      ["UPDATE_USER"],
      ["GETORDER"]
    ),
    goback(){
        this.$router.back()
    },
    totalOrder(){
      
        this.$router.push(`/member/order`);
    },

    getOrder() {//單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
     
        vm.orderId = this.$route.params.id;
      let api = `http://findtrip.rocket-coding.com/api/order/loadsingle/${vm.orderId}`;
      this.$http.get(api, { headers }).then(res => {
        //  vm.order = res.data;
        if (res.data.success) {
          
          vm.orderInfo = res.data.result;
          console.log(vm.orderInfo);
         

        }
      });
    }
  },
  computed: {
    ...mapState(["projects"], ["orders"], ["userInfo"],)
  },
  created() {
    this.orderId = this.$route.params.id;
    console.log(this.orderId);
    this.getOrder();
    this.getOneUser();
    
  }
};
</script>