<template>
  <div>
    <!-- NavBar Component  v-for="item in orderInfo" :key="item.id" rderInfo.PlannerName !=undefined  &&   &&-->
    <NavBar />
    <div
      v-if=" orderInfo.PlannerName !=undefined && orderInfo.PlannerName.length >= 1"
      class="main pt-12 md:pt-16 bg-blue-200"
    >
      <div class>
        <div class="container flex w-full mx-auto">
          <div class="ml-6 py-4 lg:px-0 text-gray-600 text-sm">
            <ul class="list-inline inline-flex hover:underlines">
              <li class="pr-2">
                <router-link to="/home">
                  <i class="fa fa-home" />
                </router-link>
                <span class="mx-1">/</span>
              </li>
              <li class="pr-2">
                <router-link
                  to="/product"
                  class="hover:text-blue-500"
                >
                  旅行規劃師
                </router-link>
                <span class="mx-1">/</span>
              </li>
              <li class="pr-2">
                <router-link
                  :to="{ name: 'people', params: { id: orderInfo.TravelPlan_id }}"
                  class="hover:text-blue-500"
                >
                  {{ orderInfo.PlannerName[0].PlannerName }}旅行規劃師資訊
                </router-link>
                <span class="mx-1">/</span>
              </li>
              <li class="pr-2">
                訂單資料
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex container max-w-6xl mx-auto">
        <div class="w-full flex flex-col flex-wrap justify-center">
          <h1 class="text-center text-2xl mb-3">
            這是{{ orderInfo.name }}的訂單喔
          </h1>
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
                  <label class="order_title">會員姓名:</label>
                  <p class="order_text">
                    {{ orderInfo.name }}
                  </p>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="order_title">電子信箱:</label>
                  <p class="order_text">
                    {{ orderInfo.Email }}
                  </p>
                </div>
              </div>

              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="order_title">國家:</label>
                  <p class="order_text">
                    {{ orderInfo.country }}
                  </p>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="order_title">規劃城市旅遊:</label>
                  <p class="order_text">
                    {{ orderInfo.city }}
                  </p>
                </div>
              </div>

              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="order_title">行程的日期 範圍 :</label>
                  <p
                    class="order_text"
                  >
                    {{ orderInfo.DepartureTime1 }} ~ {{ orderInfo.DepartureTime2 }}
                  </p>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="order_title">預算:</label>
                  <p class="order_text">
                    {{ orderInfo.Budget }}
                  </p>
                </div>
              </div>

              <div class="mb-8">
                <fieldset class="border-0">
                  <legend class="order_title mb-2">
                    旅行喜好類型 :
                  </legend>
                  <div
                    class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
                  >
                    <button
                      class="bg-blue-500"
                      :class="{'hidden' : !orderInfo['Act']}"
                    >
                      冒險
                    </button>
                    <button
                      class="bg-blue-500"
                      :class="{'hidden' : !orderInfo['Secret']}"
                    >
                      秘境
                    </button>
                    <button
                      class="bg-blue-500"
                      :class="{'hidden' : !orderInfo['Culture']}"
                    >
                      文化
                    </button>
                    <button
                      class="bg-blue-600"
                      :class="{'hidden' : !orderInfo['Food']}"
                    >
                      吃貨
                    </button>
                    <button
                      class="bg-blue-600"
                      :class="{'hidden' : !orderInfo['Religion']}"
                    >
                      宗教
                    </button>
                    <button
                      class="bg-blue-600"
                      :class="{'hidden' : !orderInfo['Shopping']}"
                    >
                      購物
                    </button>
                  </div>
                </fieldset>
              </div>

              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="order_title">大人:</label>
                  <p class="order_text">
                    {{ orderInfo.Adult }} 人
                  </p>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="order_title">小孩:</label>
                  <p class="order_text">
                    {{ orderInfo.Children }} 人
                  </p>
                </div>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 text-base s font-bold mb-2">備註 :</label>
                <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                  <p class="text-sm text-gray-600 leading-relaxed px-5 pt-5">
                    {{ orderInfo.Remark }}
                  </p>
                </div>
              </div>

              <p class="text-right text-base text-gray-700 font-semibold mb-8">
                本次將扣除
                <span class="text-xl text-blue-500">{{ orderInfo.PlannerName[0].points }}</span>
                <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-1">點數</span> 購買後將剩餘
                <span class="text-xl text-blue-500">{{ this.$store.state.userInfo.points }}</span>
                <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-4">點數</span>
              </p>
              <div class="mb-8">
                <div class="flex justify-around">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    @click.prevent="goback"
                  >
                    上一步
                  </button>
                  <button
                    class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    @click="totalOrder"
                  >
                    完成訂單
                  </button>
                </div>
              </div>
            </div>
            <div
              class="bg-blue-800 bg-cover bg-right h-20 p-4 flex justify-end items-center form-head"
              style="background-image: url(https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"
            />
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
  name: "Orderlist",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      orderInfo: {},
      OrderId: ""
    };
  },
   computed: {
    ...mapState(["projects"], ["orders"], ["userInfo"])
  },
  created() {
    this.orderId = this.$route.params.id;

    this.getOrder();
    this.getOneUser();
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
    goback() {
      this.$router.back();
    },
    totalOrder() {
      this.$router.push(`/member/order`);
    },

    getOrder() {
      //單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;

      vm.orderId = this.$route.params.id;
      let api = `${process.env.VUE_APP_APIPATH}order/loadsingle/${vm.orderId}`;
      this.$http.get(api, { headers }).then(res => {
        //  vm.order = res.data;
        if (res.data.success) {
          vm.orderInfo = res.data.result[0];
          // console.log(vm.orderInfo);
        }
      });
    }
  }
};
</script>
<style scoped>
.form-head:before,
.form-head:after {
  background-color: #bee3f8;
}
</style>