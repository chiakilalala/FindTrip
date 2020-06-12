<template>
  <div>
    <div
      class="  flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5 hover:shadow-sm"
      v-for="item in orders"
      :key="item.id "
      @click="getOrder(item.id)"
    >
    <!-- $router.push({ name: 'orderlist', params: { id: item.id } }) -->
      <div class="lg:flex cursor-pointer">
        <div class="lg:flex-shrink-0 relative">
          <img
            src="../../assets/img/user001.png"
            alt
            srcset
            class="object-cover ml-8 -mt-3 border-2 border-white w-12 h-12 rounded-full absolute top-0 left-0 bg-blue-500"
          />
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-70 w-52 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            style="background-image: url('../../assets/img/jp001.jpg')"
          ></div>
        </div>
        <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
          <div class="flex relative">
            <!-- 三種現象 -->
            <span
              class="bg-gray-500 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >訂單確認中</span>
            <!-- <span
              class="bg-teal-600 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >訂單委託中</span>
             <span
              class="bg-blue-100 text-blue-500 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >已完成</span>-->

            <div
              class="min-w-15 bg-white min-h-16 p-0 mb-0 font-medium absolute top-0 right-0 lg:mr-0 mr-5 lg:mt-0 -mt-12"
            >
              <div
                class="w-16 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow"
              >
                <div class="block rounded-t overflow-hidden text-center">
                  <div class="bg-gray-200 text-gray-500 hover:text-blue-100 py-1">March</div>
                  <div class="pt-1 bg-gray-200">
                    <span
                      class="text-3xl font-bold text-gray-500 hover:text-blue-100 leading-tight"
                    >17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-8 lg:px-0 lg:mt-0">
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              旅行規劃師
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
                <!-- <span  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >文化</span>
                <span  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >宗教</span>
                <span  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >秘境</span>
                 <span  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >購物</span>
                 <span  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >冒險</span>
                 <span  :class="{'hidden' : !item.tags['Act']}"
                  class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
                >吃貨</span>-->
              </div>

              <div class="flex justify-between">
                <button
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
    <!-- <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex">
        <div class="lg:flex-shrink-0 relative">
          <img
            src="../../assets/img/user001.png"
            alt
            srcset
            class="object-cover ml-8 -mt-3 border-2 border-white w-12 h-12 rounded-full absolute top-0 left-0 bg-blue-500"
          />
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-70 w-64 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            style="background-image: url('../../assets/img/jp001.jpg')"
          ></div>
        </div>
        <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
          <div class="flex relative">
            <span
              class="bg-teal-600 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >訂單委託中</span>

            <div
              class="min-w-15 bg-white min-h-16 p-0 mb-0 font-medium absolute top-0 right-0 lg:mr-0 mr-5 lg:mt-0 -mt-12"
            >
              <div
                class="w-16 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow"
              >
                <div class="block rounded-t overflow-hidden text-center">
                  <div class="bg-gray-200 text-gray-500 hover:text-blue-100 py-1">March</div>
                  <div class="pt-1 bg-gray-200">
                    <span
                      class="text-3xl font-bold text-gray-500 hover:text-blue-100 leading-tight"
                    >17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-8 lg:px-0 lg:mt-0">
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              旅行規劃師
              <span class="text-sm font-thin">— Jack Smitspanh</span>
            </p>
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              國家 ：
              <span class="text-sm font-thin">日本</span>
            </p>
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              區域 ：
              <span class="text-sm font-thin">京都，大阪，神戶</span>
            </p>
            <div class="mt-4 lg:flex justify-between">
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
              <div class="lg:flex-0 flex justify-between">
                <button
                  class="bg-transparent border border-blue-500 hover:bg-blue-500 hover:shadow-xl hover:text-white text-blue-500 font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >完成訂單</button>
                <button
                  class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >訊息聯絡</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5">
      <div class="lg:flex">
        <div class="lg:flex-shrink-0 relative">
          <img
            src="../../assets/img/user001.png"
            alt
            srcset
            class="object-cover ml-8 -mt-3 border-2 border-white w-12 h-12 rounded-full absolute top-0 left-0 bg-blue-500"
          />
          <div
            class="lg:mx-5 mx-4 h-48 lg:w-70 w-64 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
            style="background-image: url('../../assets/img/jp002.jpg')"
          ></div>
        </div>
        <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
          <div class="flex relative">
            <span
              class="bg-blue-100 text-blue-500 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
            >已完成</span>

            <div
              class="min-w-15 bg-white min-h-16 p-0 mb-0 font-medium absolute top-0 right-0 lg:mr-0 mr-5 lg:mt-0 -mt-12"
            >
              <div
                class="w-16 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow"
              >
                <div class="block rounded-t overflow-hidden text-center">
                  <div class="bg-gray-200 text-gray-500 hover:text-blue-100 py-1">March</div>
                  <div class="pt-1 bg-gray-200">
                    <span
                      class="text-3xl font-bold text-gray-500 hover:text-blue-100 leading-tight"
                    >17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 mt-8 lg:px-0 lg:mt-0">
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              旅行規劃師
              <span class="text-sm font-thin">— Jack Smitspanh</span>
            </p>
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              國家 ：
              <span class="text-sm font-thin">日本</span>
            </p>
            <p
              class="block lg:mt-4 lg:text-lg mt-2 text-base leading-tight font-semibold text-gray-900"
            >
              區域 ：
              <span class="text-sm font-thin">京都，大阪，神戶</span>
            </p>
            <div class="mt-4 lg:flex justify-between">
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
              <div class="lg:flex-0 flex justify-between">
                <button
                  class="cursor-not-allowed opacity-50 bg-gray-600 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm"
                >已完成</button>
                <button
                  class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                >訊息聯絡</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
<el-dialog
  
  :visible.sync="dialogVisible"
  width="80%"
  >
 <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative border-gray-500 border">
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
            <div class="p-12 px-22" v-for="item in Oneorders" :key="item.id">
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
                  >chikilalal@gmail.com</p>
                </div>
              </div>
               <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">聯絡電話:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.Tel}}</p>
                  <!--<div class="text-sm text-red-600">Error message</div>-->
                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">創建日期:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.DepartureTime}}</p>
                </div>
              </div>

              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">國家:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.Country}}</p>
                  <!--<div class="text-sm text-red-600">Error message</div>-->
                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">區域:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >{{item.City}}</p>
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
                    2020.12.11
                    <span>~</span>2020.12.17
                  </p>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">預算:</label>
                  <p
                    class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
                  >NT$4,5000 ~ NT$6,0000</p>
                </div>
              </div>

              <div class="mb-8">
                <fieldset class="border-0">
                  <legend class="text-gray-700 mb-2 font-bold">旅行喜好類型 :</legend>
                  <div
                    class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
                  >
                    <button class="bg-blue-500">冒險</button>
                    <button class="bg-blue-500">秘境</button>
                    <button class="bg-blue-500">文化</button>
                    <button class="bg-blue-600">吃貨</button>
                    <button class="bg-blue-600">宗教</button>
                    <button class="bg-blue-600">購物</button>
                    <button class="bg-blue-600">吃貨</button>
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
                  >{{item.Childre}} 人</p>
                </div>
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 text-base s font-bold mb-2">備註 :</label>
                <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                  <p class="text-sm text-gray-600 leading-relaxed px-5 pt-5">大人體力不好，無法一直走路希望能休閒一點</p>
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
                <div class="flex justify-center">
              
                  <el-button 
                    class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                  >完成訂單</el-button>
                </div>
              </div>
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
       Oneorders: {}, //model資料
       dialogVisible: false
    };
  },

  methods: {
    ...mapActions(["checkOrder"],['getOrder']),
    ...mapMutations(["GETORDER"], ["UPDATE_USER"]),
      getOrder(id) {//單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      // http://localhost:3000/posts/${vm.OrderId}
        vm.orderId = this.$route.params.id;
      let api = `http://findtrip.rocket-coding.com/api/order/loadsingle/${id}`;
      this.$http.get(api, { headers }).then(res => {
       
        if (res.data.success) {
          vm.Oneorders = res.data.result;
          vm.dialogVisible =true
          console.log( vm.Oneorders);
        }
      });
    }

  },
  computed: {
    ...mapState(["orders"])
  },
  created() {
    this.checkOrder();
  
  }
};
</script>