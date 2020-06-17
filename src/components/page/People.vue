<template>
  <div>
    <!-- NavBar Component v-for="item in traveler" :key="item.id" -->
    <NavBar />

    <!-- banner -->
    <div class="hero h-64 bg-cover h-112 overflow-hidden">
      <div class="container mx-auto flex max-w-5xl flex-col items-center"></div>
    </div>
    <div >
      <div class="my-2 lg:ml-10 ml-2">
        <div class="container flex max-w-7xl mx-auto">
          <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
            <ul class="list-inline inline-flex hover:underlines">
              <li class>
                <i class="fa fa-home">/</i>
              </li>
              <li>旅行規劃師 /</li>
              <li>{{traveler.PlannerName}} 旅行規劃師</li>
            </ul>
          </div>
        </div>
      </div>

     <div class="flex container max-w-7xl mx-auto">
        <div class="w-full flex flex-row flex-wrap justify-center">
          <div class="w-full md:w-3/4 lg:w-3/5">
            <div class="py-2">
              <div class="flex rounded-lg bg-white shadow-sm -my-2">
                 <!--右邊資訊 max-w-3xl-->
              <div class="w-full      px-8 lg:px10">
                  <div class="flex items-center text-xs my-5">
                    <div class="icon icon001"></div>
                    <h3 class="text-xl text-blue-500 font-medium">簡介</h3>
                  </div>
                  <div class>
                    <ul class="list-inside font-base text-gray-600 leading-5 ml-1">
                      <li class="mb-2" v-html='traveler.TPExperience'></li>
                 
                    </ul>
                  </div>
                  <hr class="border-grey-light border-t my-6" /> 
                  <!-- step2 -->
                  <div class="flex items-center text-xs my-5">
                    <div class="icon icon002"></div>
                    <h3 class="text-xl text-blue-500 font-medium">經歷</h3>
                  </div>

                  <p class="font-base text-gray-700 leading-6 ml-1" v-html='traveler.TravelPlanIntro'></p>

                  <hr class="border-grey-light border-t my-6" />

                  <div class="flex items-center text-xs my-5">
                    <div class="icon icon003"></div>
                    <h3 class="text-xl text-blue-500 font-medium">專長</h3>
                  </div>
                  <div class="px-2">
                    <div class="flex flex-wrap -mx-3 ml-1">
                      <div
                        class="w-full lg:w-1/2 bg-cover h-48"
                        :style="{backgroundImage:`url(${traveler.Cpicture ? traveler.Cpicture : 'https://picsum.photos/600/400?random=1' })`}"
                      ></div>

                      <div class="w-full lg:w-1/2 px-0 lg:px-4 flex flex-col justify-between">
                        <h3 class="text-xl text-blue-500 font-medium my-2 px:0 lg:px-2">
                          國家：
                          <span class="text-gray-500 text-base font-mono">{{ traveler.country}}</span>
                        </h3>
                        <h3 class="text-xl text-blue-500 font-medium my-2 px:0 lg:px-2">
                          城市：
                          <span class="text-gray-500 text-base font-mono">{{ traveler.city}}</span>
                        </h3>
                        <div
                          class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
                        >
                          <button class="bg-blue-500" :class="{'hidden' : !traveler['Act']}">冒險</button>
                          <button class="bg-blue-500" :class="{'hidden' : !traveler['Secret']}">秘境</button>
                          <button class="bg-blue-500" :class="{'hidden' : !traveler['Culture']}">文化</button>
                          <button class="bg-blue-600" :class="{'hidden' : !traveler['Food']}">吃貨</button>
                          <button class="bg-blue-500" :class="{'hidden' :!traveler['Religion']}">宗教</button>
                          <button class="bg-blue-600" :class="{'hidden' : !traveler['Shopping']}">購物</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr class="border-grey-light border-t my-6" />
                  <div class="flex items-center text-xs my-5">
                    <div class="icon icon004"></div>
                    <h3 class="text-xl text-blue-500 font-medium">旅行家評價</h3>
                  </div>
                  <div class="mb-8 px-2" v-if="traveler.rating.length == 0">尚無其他評價</div>
                  <div class="mb-8 px-2" v-else>
                    <div
                      class="flex flex-wrap -mx-3"
                      v-for="(el,index) in  traveler.rating"  :key='index'
                    >
                         <!--v-for="(el,index) in  traveler.rating"
                      :key="index" -->
                      <div class="md:1/6 lg:w-1/12">
                        <div class="w-12 h-12 rounded-full bg-white p-1 mb-3 ml-1">
                          <img
                            :src="el.buyerPic"
                            alt
                            class="mx-auto object-cover w-10 h-10 rounded-full"
                          />
                        </div>
                      </div>

                      <div class="text-sm md:4/6 lg:w-10/12 ml-2">
                        <!-- <p class="text-gray-900 leading-none text-base">
                          {{el.buyerName}}
                          <el-rate
                            v-model="el.star"
                            disabled
                            text-color="#ff9900"
                            score-template="{{el.star}}"
                            class="inline-block"
                          ></el-rate>
                        </p> -->

                        <div class="mt-2 mb-8 py-2 text-gray-700">
                          <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                            <p class="text-sm leading-relaxed px-5 pt-5">
                              {{ el.RatingContent}}   
                              <span
                                class="text-xs text-gray-500 px-5 pt-5"
                              > {{ el.CreateOn.slice(0,10) }}     評價</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-2/5 text-gray-600 mt-6">
            <div class="px-2">
              <div class="bg-white -mx-2">
                <div class="px-10">
                  <div class="mb-5 border rounded-lg shadow-lg px-5">
                    <div class="flex items-center justify-center">
                      <h2
                        class="text-center font-semibold text-gray-700 text-xl text-blue-500 mt-10 my-5"
                      >關於規劃師 {{traveler.PlannerName}}</h2>
                      <ul class="list-none">
                        <li class="w-1 h-2">
                          <i class="ml-2 far fa-heart text-2xl align-items"></i>
                        </li>
                      </ul>
                    </div>
                    <div class="mx-auto relative flex justify-center">
                      <img
                        :src="traveler.manpic"
                        alt
                        srcset
                      class="border-2 border-blue-200 bg-white  w-48 h-48 rounded-full overflow-hidden">
                    </div>
                    <div class="mx-auto flex justify-center my-5">
                      <a :href="traveler.PlannerSocial1" :title="traveler.PlannerSocial3">
                        <img src="../../assets/img/ic-facebook.svg" alt srcset class="w-6 b-6 mr-3" />
                      </a>
                        <a :href="traveler.PlannerSocial2 " :title="traveler.PlannerSocial4 ">
                          <img class="w-6 b-6" src="../../assets/img/ic-line@.svg" alt srcset />
                        </a>
                    </div>
                    <div class="flex justify-center my-3">
                      <span class="text-sm pr-2">評價 ({{traveler.ratings}} )</span>
                      <span class="star text-xl">
                                    <!-- <el-rate
              v-model="traveler.stars"
              disabled
             
              text-color="#ff9900"
              score-template="{value}"
              class="inline-block text-lg"></el-rate> -->
                   
                      </span>
                    </div>
                    <p class="font-normal mb-3 text-sm leading-6 px-12">{{traveler.PlannerIntro}}</p>
                    <div class="px-12">
                      <h2 class="font-semibold text-gray-700 text-xl mb-3">服務售價</h2>
                    </div>
                    <div class="flex px-10 justify-start mb-10">
                      <img src="../../assets/img/coin.png" alt class="w-12 h-12 mr-2" />
                      <span class="text-3xl text-gray-700 font-extrabold">{{traveler.points}}</span>
                      <span
                        class="ml-1 text-sm text-gray-700 font-semibold transform translate-y-4"
                      >Point</span>
                    </div>

                    <div class="flex px-12">
                      <button
                        class="bg-blue-500 hover:bg-blue-400 text-white rounded-lg mt-3 w-full py-2 font-medium text-lg tracking-wider shadow font-huninn focus:outline-none select-none"
                      >聯絡諮詢</button>
                    </div>
                    <div class="flex mb-20 px-12 mt-4">
                      <el-button
                        class="bg-orange-500 hover:bg-orange-400 text-white rounded-lg mt-3 w-full py-3 font-medium text-lg tracking-wider shadow font-huninn focus:outline-none select-none"
                        @click="getOrder"
                      >立即下單</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog :visible.sync="dialogVisible" top="8vh" width="80%">
      <div class>
        <div class="flex container max-w-7xl mx-auto">
          <div class="w-full flex flex-row flex-wrap justify-center">
            <div
              class="container mx-auto max-w-3xl round-xll overflow-hidden bg-white relative border"
            >
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
              <div class="p-10 px-22">
                <div class="md:flex mb-8">
                  <div class="md:flex-1 md:pr-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                    >國家 :</label>
                    <div class="relative">
                      <select
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                        id="grid-state"
                        v-model="form.country"
                      >
                        <option disabled>-請選擇國家-</option>
                        <option value="日本">日本</option>
                        <option value="美國">美國</option>
                        <option value="義大利">義大利</option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
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
                    <!--<div class="text-sm text-red-600">Error message</div>-->
                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                  </div>
                  <div class="md:flex-1 md:pl-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                    >城市 :</label>
                    <div class="relative">
                      <select
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                        id="grid-state"
                        v-model="form.city"
                      >
                        <option disabled>-請選擇城市-</option>
                        <option value="大阪">大阪</option>
                        <option value="京都">京都</option>
                        <option value="神戶">神戶</option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
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
                  </div>
                </div>

                <div class="md:flex mb-8">
                  <div class="md:flex-1 md:pr-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                    >行程的日期 範圍 :</label>
                    <!-- <input
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                    type="date"
                    />-->
                    <div class="calendar">
                      <el-date-picker
                        v-model="startTime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                      ></el-date-picker>

                      <!--  :disabledDates="getBooking" -->
                    </div>
                  </div>
                  <div class="md:flex-1 md:pl-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                    >預算 : {{form.DepartureTime1}}</label>
                    <div class="relative">
                      <select
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                        id="grid-state"
                        v-model="form.Budget"
                      >
                        <option disabled>-預算範圍-</option>
                        <option value="＄10,000~＄30,000">＄10,000~＄30,000</option>
                        <option value="＄30,000~＄50,000">＄30,000~＄50,000</option>
                        <option value="＄50,000~＄80,000">＄50,000~＄80,000</option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
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

                    <!--<div class="text-sm text-red-600">Error message</div>-->
                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                  </div>
                </div>

                <div class="mb-8">
                  <fieldset class="border-0">
                    <legend class="text-gray-700 mb-2 font-bold">旅行喜好類型 （可多選）</legend>
                    <label class="mr-1 text-gray-700 font-bold mb-2 inline-flex items-center">
                      <input
                        class="mr-1 leading-tight form-checkbox h-6 w-6"
                        type="checkbox"
                        v-model="form['Act']"
                        value="冒險"
                        :true-value="1"
                        :false-value="0"
                        name="type"
                      />
                      <span class="text-sm mx-4">冒險</span>
                    </label>
                    <label class="mr-1 text-gray-700 font-bold mb-2 inline-flex items-center">
                      <input
                        class="text-indigo-600 mr-1 leading-tight form-checkbox h-6 w-6"
                        type="checkbox"
                        name="type"
                        v-model="form['Secret']"
                        :true-value="1"
                        :false-value="0"
                        value="秘境"
                      />
                      <span class="text-sm mx-4">秘境</span>
                    </label>
                    <label class="text-gray-700 font-bold mb-2 inline-flex items-center">
                      <input
                        class="mr-1 leading-tight form-checkbox h-6 w-6"
                        type="checkbox"
                        name="type"
                        v-model="form['Culture']"
                        value="文化"
                        :true-value="1"
                        :false-value="0"
                      />
                      <span class="text-sm mx-4">文化</span>
                    </label>
                    <label class="text-gray-700 font-bold mb-2 inline-flex items-center">
                      <input
                        class="mr-1 leading-tight form-checkbox h-6 w-6"
                        type="checkbox"
                        name="type"
                        v-model="form['Food']"
                        value="吃貨"
                        :true-value="1"
                        :false-value="0"
                      />
                      <span class="text-sm mx-4">吃貨</span>
                    </label>
                    <label class="text-gray-700 font-bold mb-2 inline-flex items-center">
                      <input
                        class="mr-1 leading-tight form-checkbox h-6 w-6"
                        type="checkbox"
                        v-model="form['Shopping']"
                        name="type"
                        value="購物"
                        :true-value="1"
                        :false-value="0"
                      />
                      <span class="text-sm mx-4">購物</span>
                    </label>
                    <label class="text-gray-700 font-bold mb-2 inline-flex items-center">
                      <input
                        class="mr-1 leading-tight form-checkbox h-6 w-6"
                        type="checkbox"
                        v-model="form['Religion']"
                        name="type"
                        value="宗教"
                        :true-value="1"
                        :false-value="0"
                      />
                      <span class="text-sm mx-4">宗教</span>
                    </label>

                    <!--<div class="text-sm text-red-600">Error message</div>-->
                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                  </fieldset>
                </div>

                <div class="md:flex mb-8">
                  <div class="md:flex-1 md:pr-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                    >大人 :</label>
                    <el-input-number
                      class
                      v-model="form.Adult"
                      @change="handleChange"
                      :min="0"
                      :max="10"
                      label="大人人數"
                    ></el-input-number>
                    <!--<div class="text-sm text-red-600">Error message</div>-->
                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                  </div>
                  <div class="md:flex-1 md:pl-3">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                    >小孩 :</label>
                    <el-input-number
                      class
                      v-model="form.Children"
                      @change="handleChange"
                      :min="0"
                      :max="10"
                      label="小孩人數"
                    ></el-input-number>
                  
                    <!--<div class="text-sm text-red-600">Error message</div>-->
                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                  </div>
                </div>

                <div class="mb-6">
                  <label class="block text-gray-700 text-md font-bold mb-2">
                    備註 :
                    <textarea
                      class="h-32 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                      type="input"
                      row="5"
                      v-model="form.Remark"
                    ></textarea>
                  </label>
                  <!--<div class="text-sm text-red-600">Error message</div>-->
                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>

                <p class="text-right text-base text-gray-700 font-semibold mb-8">
                  本次將扣除
                  <span class="text-xl text-blue-500">{{traveler.points}}</span>
                  <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-1">點數</span> 購買後將剩餘
                  <span class="text-xl text-blue-500">{{$store.state.userInfo - traveler.points}}</span>
                  <span class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-4">點數</span>
                </p>
                <div class="mb-8">
                  <div class="flex justify-around">
                    <el-button
                      @click="dialogVisible = false"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    >上一步</el-button>
                    <el-button
                      type="primary"
                      @click="createdOrder"
                      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    >確認送出</el-button>
                  </div>
                </div>
              </div>
            </div>

            <!-- </div> -->
          </div>
        </div>
        <!-- <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      </div>
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>

    <!-- dialog -->

    <!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
    <dialog/>-->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
// import HotelDatePicker from "vue-hotel-datepicker";
// import Order from "@/components/peopleorder.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "people",

  components: {
    NavBar,
    Footer
    // HotelDatePicker
  },
  data() {
    return {
      dialogVisible: false,
      startTime: "",
      rating: [],
      traveler: {}, //旅行家個人資料
      checkOrder: {},
      messages: {
        "day-names": ["日", "一", "二", "三", "四", "五", "六"],
        "month-names": [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        night: "Night",
        nights: "Nights",
        "check-in": "開始日期",
        "check-out": "結束日期"
      },
      OrderId: this.$route.params.id,
      num: 0,
      bignum: 0,
      form: {
        Budget: 0,
        county: "",
        city: "",
        DepartureTime1: null,
        // DepartureTime2: null,
        tags: {
          //checkbox
          Act: false,
          Secrect: false,
          Culture: false,
          Food: false,
          Shopping: false,
          Religion: false
        },
        Adult: 0,
        Children: 0,
        Remark: ""
      }
    };
  },
  methods: {
 
    selectTime(val) {
      this.startTime = val;
      console.log(val);
    },
    //api 動作
    ...mapActions(["getProjects"], ["LookPlan"]),
    ...mapMutations(["setProjectInfo"], ["LOOKPLAN"], ["GETORDER"]),
    getOrder() {
      if (!this.$store.state.token) {
        this.$notify.info({
          title: "提醒",
          message: "請先登入或是註冊會員"
        });
        this.dialogVisible = false;
      }else{
           this.dialogVisible = true;
      }
     
    },

    handleChange(value) {
      console.log(value);
    },
    close() {
      this.dialogVisible = true;
    },

    checkPlan() {
      //
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };

      let api = `${process.env.VUE_APP_APIPATH}order/load`;

      console.log(api);
      // const vm = this;
      // vm.isLoading = true;
      this.$http
        .get(api, { headers })
        .then(res => {
          // vm.isLoading = false;
          if (res.data.success) {
            console.log(res.data);
            this.$store.commit("loginStart");
            this.$store.commit("GETORDER", res.data.result);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
      //  this.$store.dispatch('getApi');
    },
    createdOrder() {
      const vm = this;

      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const api = `http://findtrip.rocket-coding.com/api/order/create`;

      this.$http
        .post(
          api,
          {
            Budget: vm.form.Budget,

            country: vm.form.country,
            city: vm.form.city,
            DepartureTime1: vm.startTime[0],
            DepartureTime2: vm.startTime[1],
            Adult: vm.form.Adult,
            Children: vm.form.Children,
            Remark: vm.form.Remark,
            Act: vm.form["Act"],
            Culture: vm.form["Culture"],
            Food: vm.form["Food"],
            Shopping: vm.form["Shopping"],
            Secret: vm.form[" Secret"],
            Religion: vm.form["Religion"],
            TravelPlan_id: this.$route.params.id
          },
          { headers: headers }
        )
        .then(res => {
          console.log(res);

          if (res.data.success) {
            console.log("訂單建立", res.data.result);
            this.dialogVisible = false;
            // this.$swal({
            //   icon: "success",
            //   title: "確定接受這個訂單喔"
            // });
            vm.checkOrder = res.data.result;
            console.log(vm.checkOrder);
            vm.checkPlan();
            vm.$router.push(`/order/${res.data.result[0].id}`);
            //跳到訂單頁面
          } else {
            console.log("失敗");
            vm.checkPlan();
          }
        });
    },
    LookPlan() {
      //檢視旅行家內頁

      // let token = localStorage.getItem("token");
      // const headers = {
      //     Authorization: `Bearer ${token}`
      // };

      const vm = this;
      let api = `http://findtrip.rocket-coding.com/api/plan/inner/${this.$route.params.id}`;
      this.$http.get(api).then(res => {
        if (res.data.success) {
          vm.traveler = res.data.result;
          vm.rating = res.data.result.rating;

          console.log(vm.traveler);
        }
      });
    }
  },
  computed: {
    ...mapState(["projects"]),

    tomorrow() {
      const dt = new Date();
      return new Date(dt.getTime() + 1000 * 60 * 60 * 24);
    },
    endDate() {
      const dt = new Date();
      return new Date(dt.getTime() + 1000 * 60 * 60 * 24 * 90);
    }
    // bookingDate(){
    //    let arr = []
    //    retrun {
    //      arr = this.DepartureTime1 + this.DepartureTime2
    //    }
    // }
  },
  created() {
    this.getProjects();
    this.LookPlan();
    this.checkPlan();
    console.log(this.$store.state.token);
  }
};
</script>
<style>
.el-dialog__wrapper .el-dialog {
  border-radius: 20px;

  width: 80%;
}
.el-dialog__headerbtn .el-dialog__close {
  font-size: 2rem;
}
</style>