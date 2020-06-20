<template>
  <div>
    <!-- NavBar Component v-for="item in traveler" :key="item.id" -->
    <NavBar />

    <!-- banner -->
    <div class="hero h-64 bg-cover h-112 overflow-hidden">
      <div class="container mx-auto flex max-w-5xl flex-col items-center"></div>
    </div>
    <div>
      <div class="my-2 lg:ml-10 ml-2">
        <div class="container flex max-w-7xl mx-auto">
          <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
            <ul class="list-inline inline-flex hover:underlines">
              <li class="pr-2">
                <router-link to="/home">
                  <i class="fa fa-home hover:text-blue-500"></i>
                </router-link>
                <span class="mx-1">/</span>
              </li>
              <li class="pr-2">
                <router-link to="/product" class="hover:text-blue-500">旅行規劃師</router-link>
                <span class="mx-1">/</span>
              </li>
              <li class="pr-3">{{traveler.PlannerName}} 旅行規劃師</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex container max-w-7xl mx-auto">
        <div class="w-full flex flex-row flex-wrap justify-center">
          <div class="w-full lg:w-3/5">
            <div class="py-2">
              <div class="flex rounded-lg bg-white shadow-sm -my-2">
                <!--右邊資訊 max-w-3xl-->
                <div class="w-full px-8 lg:px10">
                  <div class="flex items-center text-xs my-5">
                    <div class="icon icon001"></div>
                    <h3 class="text-xl text-blue-500 font-medium">簡介</h3>
                  </div>

                  <div class="text-lg text-gray-700 ml-1 leading-8">
                    <div class="mb-2" v-html="traveler.TPExperience"></div>
                  </div>

                  <hr class="border-grey-light border-t my-6" />
                  <!-- step2 -->
                  <div class="flex items-center text-xs my-5">
                    <div class="icon icon002"></div>
                    <h3 class="text-xl text-blue-500 font-medium">經歷</h3>
                  </div>

                  <p class="text-lg text-gray-700 leading-8 ml-1" v-html="traveler.TravelPlanIntro"></p>

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
                  <div class="mb-8 px-2" v-if="!traveler.rating">尚無其他評價</div>
                  <div class="mb-8 px-2" v-else>
                    <div
                      class="flex flex-wrap -mx-3"
                      v-for="(el,index) in  traveler.rating"
                      :key="index"
                    >
                      <!--v-for="(el,index) in  traveler.rating"
                      :key="index"-->
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
                        <p class="text-gray-900 leading-none text-base">
                          {{el.buyerName}}
                          <el-rate
                            v-model="el.star"
                            disabled
                            text-color="#ff9900"
                            class="inline-block"
                          ></el-rate>
                        </p>

                        <div class="mt-2 mb-8 py-2 text-gray-700">
                          <div class="font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                            <p class="text-sm leading-relaxed px-5 pt-5">{{ el.RatingContent}}</p>
                            <p
                              class="text-xs text-gray-500 px-5 pt-5"
                            >{{ el.CreateOn.slice(0,10) }} 評價</p>
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
                          <a href="#" @click.prevent="toggleHeart">
                            <i
                              class="ml-2 far fa-heart text-2xl align-items"
                              :class="{ 'text-red-500  fas' : isStar, '' : !isStar}"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mx-auto relative flex justify-center">
                      <img
                        :src="traveler.manpic"
                        alt
                        srcset
                        class="border-2 border-blue-200 bg-white w-48 h-48 rounded-full overflow-hidden"
                      />
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
                      <span class="star">
                        <el-rate
                          v-model="traveler.stars"
                          disabled
                          text-color="#ff9900"
                          class="inline-block text-xl"
                        ></el-rate>
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
                      <!-- :href="`mailto:${item.PlannerEmail[0].Email}`" -->
                      <a
                        href="https://m.facebook.com/messages/thread/230134660393770"
                        target="_blank"
                        class="text-center cursor-pointer bg-blue-500 hover:bg-blue-400 text-white rounded-lg mt-3 w-full py-2 font-medium text-lg tracking-wider shadow font-huninn"
                      >聯絡諮詢</a>
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
    <el-dialog :visible.sync="dialogVisible" top="8vh" width="65%">
      <div class>
        <div class="flex container max-w-7xl mx-auto ">
          <div class="w-full flex flex-row flex-wrap justify-center">
            <div class="container mx-auto max-w-3xl round-xll overflow-hidden bg-white relative shadow-lgㄒ">
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
              <ValidationObserver>
                <div class="p-10 px-22">
                  <div class="md:flex mb-8">
                    <div class="md:flex-1 md:pr-3">
                      <div class="md:flex-1 md:pr-3">
                        <label class="order_title">規劃國家:</label>
                        <p class="order_text">{{traveler.country}}</p>
                        <input v-model="form.country" />
                      </div>
                      <!-- <label
                      class="block uppercase tracking-wide text-gray-700 text-md font-bold"
                      >國家 :</label>-->
                      <!-- <ValidationProvider 
                     v-slot="{ errors, classes }"
                     name="country"  
                     rules="required" 
                     class="relative">
                      <select
                        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                        id="grid-state" name="country" :class="classes"
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
                       <div class="text-sm text-red-600">{{ errors[0] }}</div>
                      </ValidationProvider>-->

                      <!--<div class="text-xs text-gray-600">Help text</div>-->
                    </div>
                    <div class="md:flex-1 md:pl-3">
                      <label class="order_title">規劃城市旅遊 :</label>
                      <p class="order_text">{{traveler.city}}</p>
                      <input v-model="form.city" />
                      <!-- <div class="relative">
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
                      </div>-->
                    </div>
                  </div>

                  <div class="md:flex mb-8">
                    <div class="md:flex-1 md:pr-3">
                      <ValidationProvider v-slot="{ errors, classes }" name="行程日期" rules="required">
                        <label
                          class="order_title"
                        >行程的日期 範圍 :</label>
                        <div :class="classes" class="calerdar">
                          <el-date-picker
                            v-model="startTime"
                            name="行程日期"
                            type="daterange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="開始日期"
                            end-placeholder="结束日期"
                            format="yyyy - MM - dd "
                            value-format="yyyy-MM-dd"
                            class="bg-white relative focus:outline-none focus:border-gray-400 focus:bg-white border border-gray-300 rounded-lg py-8 px-4 mt-2 block w-full appearance-none leading-normal"
                          ></el-date-picker>
                        </div>
                        <div class="text-sm text-red-600">{{ errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                    <div class="md:flex-1 md:pl-3">
                      <ValidationProvider v-slot="{ errors, classes }" name="預算" rules="required">
                        <label class="order_title">預算 :</label>
                        <div class="relative">
                          <select
                            class="text-base focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                            name="預算"
                            v-model="form.Budget"
                            :class="classes"
                          >
                            <option value="-  預算範圍 -" selected disabled>- 預算範圍 -</option>
                            <option value="＄10,000~＄30,000">＄10,000 ~ ＄30,000</option>
                            <option value="＄30,000~＄50,000">＄30,000 ~ ＄50,000</option>
                            <option value="＄50,000~＄80,000">＄50,000 ~ ＄80,000</option>
                            <option value="＄80,000 ~ 以上">＄80,000 ~ 以上</option>
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
                        <div class="text-sm text-red-600">{{ errors[0] }}</div>
                        <div class="text-sm text-red-600" v-if="isBudget">預算範圍不能為空</div>
                      </ValidationProvider>
                    </div>
                  </div>

                  <div class="mb-8">
                    <fieldset class="border-0">
                      <legend class="order_title mb-2">旅行喜好類型 （可多選）</legend>
                      <label class="mr-1 text-gray-700 font-bold mb-2 inline-flex items-center">
                        <input
                          class="mr-1 leading-tight form-checkbox h-6 w-6"
                          type="checkbox"
                          v-model="form['Act']"
                          value="冒險"
                          name="type"
                        />
                        <span class="text-sm mx-4">冒險</span>
                      </label>
                      <label class="mr-1 text-gray-700 font-bold mb-2 inline-flex items-center">
                        <input
                          class="mr-1 leading-tight form-checkbox h-6 w-6"
                          type="checkbox"
                          name="type"
                          v-model="form['Secret']"
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
                        />
                        <span class="text-sm mx-4">宗教</span>
                      </label>
                    </fieldset>
                  </div>

                  <div class="md:flex mb-8">
                    <div class="md:flex-1 md:pr-3">
                      <label class="block mb-2 tracking-wide text-gray-700 text-md font-bold">大人 :</label>
                      <el-input-number class v-model="form.Adult" :min="0" :max="10" label="大人人數"></el-input-number>
                      <div class="text-sm text-red-600" v-if="isVaild">人數都不可為零</div>
                      <!--<div class="text-xs text-gray-600">Help text</div>-->
                    </div>
                    <div class="md:flex-1 md:pl-3">
                      <label class="block mb-2 tracking-wide text-gray-700 text-md font-bold">小孩 :</label>

                      <el-input-number
                        v-model="form.Children"
                        :min="0"
                        :max="10"
                        name="小孩人數"
                        label="小孩人數"
                      ></el-input-number>

                      <div class="text-sm text-red-600" v-if="isVaild">人數都不可為零</div>
                    </div>
                  </div>

                  <div class="mb-6">
                    <label class="block text-gray-700 text-base font-bold mb-2">
                      備註 :
                      <textarea
                        class="h-32 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                        type="input"
                        row="5"
                        placeholder="提交您的旅行願望，我們會盡快與您聯繫"
                        v-model="form.Remark"
                      ></textarea>
                    </label>
                    <!--<div class="text-sm text-red-600">Error message</div>-->
                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                  </div>

                  <p class="text-right text-base text-gray-700 font-semibold mb-8">
                    本次將扣除
                    <span class="text-xl text-blue-500">{{traveler.points}}</span>
                    <span
                      class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-1"
                    >點數</span> 購買後將剩餘
                    <span class="text-xl text-blue-500">{{Number(price)}}</span>
                    <span
                      class="ml-1 text-xs text-gray-700 font-semibold transform translate-y-4"
                    >點數</span>
                  </p>
                  <div class="mb-8">
                    <div class="flex justify-around">
                      <el-button
                        @click="dialogVisible = false"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                      >取消</el-button>
                      <el-button
                        type="primary"
                        @click="createdOrder"
                        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                      >確認送出</el-button>
                    </div>
                  </div>
                </div>
              </ValidationObserver>

              <div
                class="bg-blue-800 bg-cover bg-right h-20 p-4 flex justify-end items-center form-head"
                style="background-image: url(https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)"
              ></div>
            </div>

            <!-- </div> -->
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- dialog -->

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

// import Order from "@/components/peopleorder.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "people",

  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      isStar: false,
      dialogVisible: false,
      startTime: "",
      rating: [],
      traveler: {}, //旅行家個人資料
      checkOrder: {},

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
      },
      isVaild: false,
      isBudget: false,
      pickerOptions : { 
        // disabledDate是一個函數,參數是當前選中的日期值,這個函數需要返回一個Boolean值,
        disabledDate : ( time ) => {   
          // 如果函數處理比較簡單,可以直接在這裡寫邏輯方法
          // return time.getTime() < Date.now() - 8.64e7
 
          // 如果函數里處理的數據比較麻煩,也可以單獨放在一個函數里,避免data數據太臃腫
          return this . dealDisabledDate ( time ) 
        }
      }, //日期設置對象 
    };
  },
  methods: {
     dealDisabledDate ( time ) { 
      // time.getTime是把選中的時間轉化成自1970年1月1日00:00:00 UTC到當前時間的毫秒數
      // Date.now()是把今天的時間轉化成自1970年1月1日00:00:00 UTC到當前時間的毫秒數,這樣比較好比較
      // return的值,true是不可以操作選擇,false可以操作選擇,比如下面這個判斷就只能選擇今天之後的時間
      return time . getTime () < Date . now ()  
 
      // 這裡減8.64e7的作用是,讓今天的日期可以選擇,如果不減的話,今天的日期就不可以選擇,判斷中寫<= 也是沒用的,一天的毫秒數就是8.64e7
      // return time.getTime() <= Date.now()
      // return time.getTime() < Date.now() - 8.64e7
    },
    toggleHeart() {
      this.isStar = !this.isStar;
    },
    selectTime(val) {
      this.startTime = val;
      console.log(val);
    },
    //api 動作
    ...mapActions(["getProjects"], ["LookPlan"], ["getOneUser"]),
    ...mapMutations(["setProjectInfo"], ["LOOKPLAN"], ["GETORDER"]),
    getOrder() {
      if (!this.$store.state.token) {
        this.$notify.info({
          title: "提醒",
          message: "請先登入或是註冊會員"
        });
        this.dialogVisible = false;
      } else if (
        this.$store.state.userInfo.PlannerId == this.traveler.PlannerId
      ) {
        this.$notify.error({
          title: "提醒",
          message: "旅行規劃師不能購買自己規劃的行程"
        });
        this.dialogVisible = false;
      } else if (this.traveler.points > this.$store.state.userInfo.points) {
        this.$notify.error({
          title: "提醒",
          message: "點數不足無法購買,請先儲值"
        });
        this.dialogVisible = false;
      } else {
        this.dialogVisible = true;
      }
    },

    // handleChange(value) {
    //   // console.log(value);
    // },
    close() {
      this.dialogVisible = true;
    },

    createdOrder() {
      //創建訂單
      if (
        this.form.Children == 0 &&
        this.form.Adult == 0 &&
        this.form.Budget == "" &&
        this.startTime == ""
      ) {
        this.$message("不可全都不填");
      } else if (this.form.Children == 0 && this.form.Adult == 0) {
        this.$message("人數不可都為零");
        this.isVaild = true;
      } else if (this.form.Budget == "") {
        this.$message("預算範圍不能為空");
        this.isBudget = true;
      } else {
        this.$alert(" 確定訂單內容無誤？ ", "", {
          confirmButtonText: "確定",
          callback: action => {
            this.$message({
              type: "info",
              message: `訂單建立成功: ${action}`
            });
          }
        });

        let token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`
        };

        const vm = this;

        const api = `${process.env.VUE_APP_APIPATH}/order/create`;
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
              TravelPlan_id: vm.$route.params.id
            },
            { headers: headers }
          )
          .then(res => {
            if (res.data.success) {
              console.log("訂單建立", res.data.result);
              this.dialogVisible = false;

              vm.checkOrder = res.data.result;
              console.log(vm.checkOrder);
              this.$store.dispatch("checkOrder");
              // vm.checkPlan();
              vm.$router.push(`/order/${res.data.result[0].id}`);
              //跳到訂單頁面
            } else {
              console.log("失敗");
              this.$store.dispatch("checkOrder");
              // vm.checkPlan();
            }
          });
      }
    },
    LookPlan() {
      //檢視旅行家內頁
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}plan/inner/${this.$route.params.id}`;
      this.$http.get(api).then(res => {
        if (res.data.success) {
          vm.traveler = res.data.result;
          vm.rating = res.data.result.rating;

          // console.log(vm.traveler);
        }
      });
    }
  },
  computed: {
    ...mapState(["projects"], ["userInfo"]),
    price() {
      return this.$store.state.userInfo.points - this.traveler.points;
    }

    // tomorrow() {
    //   const dt = new Date();
    //   return new Date(dt.getTime() + 1000 * 60 * 60 * 24);
    // },
    // endDate() {
    //   const dt = new Date();
    //   return new Date(dt.getTime() + 1000 * 60 * 60 * 24 * 90);
    // }
  },
  created() {
    this.getProjects();
    this.LookPlan();
  }
};
</script>
<style scoped>
.form-head:before, .form-head:after {
display: none;
  
}
.el-dialog {
  background-color: #ebf8ff;
}
.el-dialog__wrapper .el-dialog {
  border-radius: 20px;

  width: 80%;
}
.el-dialog__headerbtn .el-dialog__close {
  font-size: 2rem;
}
.el-date-editor--daterange.el-input__inner {
  width: 100%;
}
.el-date-editor .el-range-separator {
  line-height: 31px;
  padding: 0;
}
.el-range-editor--small .el-range-input {
  font-size: 0.9rem;
}
.el-range-editor--small.el-input__inner {
  min-height: 40px;
}
.is-invalid.calerdar span {
  position: relative;
  border: crimson;
}
</style>