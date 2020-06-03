<template>
  <div>
    <div class="main">
      <!-- <div class=" my-2 lg:ml-10 ml-2">
            <div class="flex max-w-6xl mx-auto ">
                <div class=" py-2  lg:px-0 px-2 text-gray-600 text-sm">
                    <ul class="list-inline inline-flex hover:underlines">
                        <li class=""><i class="fa fa-home"> /</i>
                        </li>
                        <li>旅行規劃師 /</li>
                        <li>名字 個人資訊/</li>
                        <li>訂單資料</li>
                    </ul>
                </div>
            </div>

      </div>-->

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
            <form class="p-10 px-22" @submit.prevent="createdOrder">
              <div class="md:flex mb-8">
                <div class="md:flex-1 md:pr-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-md font-bold">國家 :</label>
                  <div class="relative">
                    <select
                      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                      id="grid-state"
                      v-model="form.county"
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
                  <label class="block uppercase tracking-wide text-gray-700 text-md font-bold">城市 :</label>
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
                    <HotelDatePicker
                      format="DD/MM/YYYY"
                      :i18n="messages"
                      :maxNights="10"
                      :startDate="tomorrow"
                      :endDate="endDate"
                      :enableCheckout="true"
                    ></HotelDatePicker>
                    <!--  :disabledDates="getBooking" -->
                  </div>
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-md font-bold">預算 :</label>
                  <div class="relative">
                    <select
                      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                      id="grid-state"
                      v-model="form.money"
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
                      v-model="form.type['act']"
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
                      v-model="form.type['secrect']"
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
                      v-model="form.type['culture']"
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
                      v-model="form.type['food']"
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
                      v-model="form.type['shopping']"
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
                      v-model="form.type['religion']"
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
                  <label class="block uppercase tracking-wide text-gray-700 text-md font-bold">大人 :</label>
                  <el-input-number
                    class
                    v-model="form.adult"
                    @change="handleChange"
                    :min="0"
                    :max="10"
                    label="大人人數"
                  ></el-input-number>
                  <!--<div class="text-sm text-red-600">Error message</div>-->
                  <!--<div class="text-xs text-gray-600">Help text</div>-->
                </div>
                <div class="md:flex-1 md:pl-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-md font-bold">小孩 :</label>
                  <el-input-number
                    class
                    v-model="form.child"
                    @change="handleChange"
                    :min="0"
                    :max="10"
                    label="小孩人數"
                  ></el-input-number>
                  <!-- <input
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                    type="text"
                    name="address_number"
                    placeholder="#3"
                  />-->
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
                    v-model="form.messages"
                  ></textarea>
                </label>
                <!--<div class="text-sm text-red-600">Error message</div>-->
                <!--<div class="text-xs text-gray-600">Help text</div>-->
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
                   <button @click="close"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                  >上一步</button>
                  <button
                    class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4"
                    
                  >確認送出</button>
                </div>
              </div>
            </form>
          </div>

          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HotelDatePicker from "vue-hotel-datepicker";
// import store from "@/store";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    HotelDatePicker
  },
  data() {
    return {
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
        Rid: "a01",
        county: "日本",
        city: ["大阪", "關西", "神戶", "京都"],
        data: "2020.6.22 ~2020.7.8",
        money: "",
        type: {
          //checkbox
          act: false,
          secrect: false,
          culture: false,
          fun: false,
          food: false,
          shopping: false,
          religion: false
        },
        adult: 1,
        child: 0,
        messages: "沒有啦啦啦啊啊啊啊"
      }
    };
  },
  name: "order",
  computed: {
    ...mapState(["projects"]),
    // ...mapGetters(["city"], ["county"]),
    tomorrow() {
      const dt = new Date();
      return new Date(dt.getTime() + 1000 * 60 * 60 * 24);
    },
    endDate() {
      const dt = new Date();
      return new Date(dt.getTime() + 1000 * 60 * 60 * 24 * 90);
    }
  },
  methods: {
    //api 動作
    ...mapActions(["getProjects"]),
    ...mapMutations(["setProjectInfo"]),
    handleChange(value) {
      console.log(value);
    },
    close(){
        this.dialogVisible = true;
    },
    createdOrder() {
      const vm = this;
      const headers = {
        "Content-Type": "application/json"
      };
      const api = `http://localhost:3000/posts`;
      const order = vm.form;
      this.$http
        .post(api, { data: order }, { headers: headers })
        .then(response => {
          if (response.status == 201) {
            console.log("訂單建立", response);
            this.dialogVisible = false;
            this.$swal({
              icon: "success",
              title: "確定接受這個訂單喔"
            });
            this.$router.push({ name: "orderlist", params: { id: this.OrderId } });
          }
        });
    },
   
  },
  created() {
    this.getProjects();
  }
};
</script>
<style>
.datepicker__dummy-wrapper {
  margin-top: 5px;
  border-radius: 10px;
}
.datepicker__input:focus {
  outline: 1px dashed #409eff;
  outline-offset: -9px;
}
.datepicker__month-day:focus {
  outline: 1px dashed #0d5d9f;
}
.datepicker__month-day--first-day-selected,
.datepicker__month-day--last-day-selected {
  background: #0d5d9f;
}
.datepicker__input:first-child {
}
.datepicker__clear-button svg {
  stroke-width: 10px;
  stroke: #999;

  top: -17px;
}
.datepicker__month-day--selected {
  background-color: rgba(66, 153, 225, 0.4);
}
.datepicker__month-day--allowed-checkout:hover,
.datepicker__month-day--valid:hover {
  color: #3a65c8;
}
/*計數器 */

.el-input--small .el-input__inner {
  height: 33px;
}
</style>