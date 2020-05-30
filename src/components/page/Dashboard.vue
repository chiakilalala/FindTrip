<template>
  <div class="tracking-normal bg-member">
    <div class="hero-member">
      <!-- NavBar Component -->
      <NavBar />

      <div
        class="pt-32 lg:px-5 p-6 flex container max-w-7xl mx-auto member flex flex-wrap items-center justify-around"
      >
        <div
          class="lg:py-0 py-5 flex-col lg:flex-row container max-w-7xl bg-white flex text-gray-500 rounded-lg shadow-xl items-center"
        >
          <div class="w-full lg:w-1/5 flex-1 flex justify-center">
            <div
              class="border-solid border-4 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:m-0 bg-blue-100"
            >
              <img src="../../assets/img/man001.svg" class="w-40 h-40 p-5" alt />
            </div>
          </div>
          <div class="w-full lg:w-4/5">
            <div class="sm:pl-12 sm:pt-4 flex-1 text-gray-800">
              <div
                class="flex lg:items-start sm:flex-col sm:flex-wrap justify-center flex-wrap lg:mb-6 mb-0"
              >
                <div
                  class="lg:items-start flex flex-wrap md:w-auto w-full mb-0 sm:flex-col lg:flex-col justify-center"
                >
                  <h2
                    class="lg:text-left text-center text-2xl w-full mb-3 mt-4 sm:mt-0"
                  >Chiakilalala</h2>
                  <div
                    class="flex sm:w-auto sm:mt-0 mb-0 lg:mb-3 w-full justify-center items-center"
                  >
                    <a href="#" class="text-blue-500 mr-3 hover:text-blue-500">
                      <svg
                        class="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 96.124 96.123"
                      >
                        <path
                          d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z"
                        />
                      </svg>
                    </a>
                    <a href="#" class="text-blue-500 mr-3 hover:text-blue-500">
                      <svg
                        class="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 612 612"
                      >
                        <path
                          d="M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div class="flex sm:w-auto w-full mb-0 lg:mb-3 justify-center items-center">
                    <div class="lg:text-white lg:mr-4 mr-0 tracking-wider flex items-center">
                      <span class="text-gray-500">點數：1000</span>
                      <img src="../../assets/img/coin.png" class="w-8 h-8 mr-2" alt srcset />
                    </div>
                  </div>
                  <p
                    class="lg:text-gray-500 text-center leading-normal px-4 sm:px-0"
                  >一個無憂無慮的人 一句話的簡介物長不短</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-member">
        <div class="flex container max-w-7xl mx-auto mt-10">
          <div class="w-full flex flex-row flex-wrap justify-around">
            <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
              <p class="text-base font-bold py-4 lg:pb-6 text-gray-700 lg:hidden">menu</p>
              <div class="block lg:hidden sticky inset-0">
                <button
                  id="menu-toggle"
                  class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
                >
                  <svg
                    class="fill-current h-3 float-right"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </button>
              </div>
              <!-- right-col 左邊 sidebar-->
              <Sidebar />
            </div>

            <!-- left-col -->
            <div class="lg:px-8 px-6 w-full lg:w-3/4 mt-0 lg:mt-0 text-gray-900 leading-normal">
              <div class="my-2 mt-10">
                <!-- 麵包屑 -->
                <div class="flex max-w-6xl mx-auto">
                  <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
                    <ul class="list-inline inline-flex hover:underlines">
                      <li class>
                        <i class="fa fa-home">/</i>
                      </li>

                      <li>旅行計劃</li>
                    </ul>
                  </div>
                </div>

                <!-- 書籤表示旅行家和規劃師 -->
                <!-- status :false 不存在書籤 -->
                <div class="my-2 mb-3" v-if="this.$store.state.status">
                  <ul class="flex border-b">
                    <li class="-mb-px mr-1">
                      <a
                        class="inline-block border-b-2 border-teal-400 py-2 px-4 text-teal-700 font-semibold"
                        href="#"
                      >旅行家</a>
                    </li>
                    <li class="mr-1">
                      <a
                        class="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-normal"
                        href="#"
                      >規劃師</a>
                    </li>
                  </ul>
                </div>
                <div id="member">
                  <router-view></router-view>
                </div>
                <!-- <div
                  class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5"
                >
                  <div class="lg:flex">
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
                        <span
                          class="bg-gray-500 tracking-wide text-xs text-gray-100 font-bold py-1 px-2 ml-4 lg:ml-0"
                        >訂單確認中</span>

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
                          <div class="flex justify-between">
                            <button
                              class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                            >訊息聯絡</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5"
                >
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
                <div
                  class="flex-1 text-gray-700 text-left bg-white py-5 my-2 rounded-lg shadow-lg mb-5"
                >
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
              </div>

              <!-- 訂單資料 -->
            </div>
          </div>
        </div>
      </div>

      <!--Footer Component-->
      <!-- 海浪特效 -->
      <Footer />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import { mapMutations } from "vuex";

import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  data() {},
  components: {
    NavBar,
    Footer,
    Sidebar
  },

  methods: {
    ...mapMutations(["changeLogin"], ["loginStart"]),

    getUser() {
      const api = "http://findtrip.rocket-coding.com/api/Login/Load";
      let token = localStorage.getItem("Authorization");
      console.log(token);

      this.axios
        .get(api, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: token
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  created() {
    this.getUser();
  }
};
</script>