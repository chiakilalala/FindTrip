<template>
  <div>
    <!-- NavBar Component -->
    <NavBar />

    <!-- banner -->
    <div class="hero bg-cover h-112 overflow-hidden" />
    <!--search  -->

    <div
      class="search-box container mx-auto max-w-5xl flex flex-col items-center h-112 lg:h-64 h-auto my-2 px-2 lg:px-0"
    >
      <div
        class="shadow-lg flex flex-wrap w-full max-w-5xl h-112 lg:h-64 bg-white rounded-lg z-30 relative search-box_inner"
      >
        <div class="pt-0 bg-blue-prod h-1 0 px-5 py-12 w-full rounded-t-lg">
          <div class="flex justify-between lg:mt-2 mt-4 text-gray-200">
            <div class="lg:text-lg text-sm lg:tracking-xl md:tracking-normal font-bold">
              Find-Trip
            </div>
            <h3 class="lg:text-2xl text-md font-extrabold">
              <i class="fas fa-plane text-md pr-2 text-gray-300" />BOARDING PASS
            </h3>
          </div>
        </div>

        <div class="w-full md:w-1/4 h-auto right-0">
          <div class="w-full lg:w-4/5">
            <div class="barcode sm:w-50">
              <img
                src="https://www.barcoding.com/wp-content/uploads/2016/09/Picture-111.png"
                alt
              >
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/4 h-auto ticket">
          <div class="flex flex-wrap lg:mb-2 mb-0">
            <div class="relative w-full px-6 mb-1 lg:mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                for="grid-state"
              >帶你深入探索有趣又獨特的旅遊體驗行程</label>
              <select
                id="grid-state"
                v-model="filter"
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="country"
              >
                <option
                  value
                  disabled
                  selected
                >
                  --請選擇你想要去的國家--
                </option>
                <option value="all">
                  全部國家
                </option>
                <option
                  v-for="item in county"
                  :key="item.id"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>

              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 select-arrow"
              >
                <svg
                  class="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

            <!-- <div class="relative w-full md:w-2/6 lg:px-3 lg:px-4 px-6 mb-1 lg:mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                for="grid-state"
              >城市</label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="city"
                v-model="selected.city"
            >-->
            <!--   @change="list" -->
            <!-- <option value="  " disabled selected>-- 請選擇 --</option>
                <option v-for="el in city" :key="el.id" :value="el.city">{{ el.city[0] }}</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 select-arrow"
              >
                <svg
                  class="fill-current h-6 w-6"
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
      </div>
    </div>

    <div class="my-2 lg:ml-10 ml-2">
      <div class="container flex max-w-7xl mx-auto -mt-32">
        <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
          <ul class="list-inline inline-flex hover:underlines">
            <li class="pr-2">
              <router-link
                to="/home"
                class="hover:text-blue-500"
              >
                <i class="fa fa-home" />
              </router-link>
              <span class="mx-1">/</span>
            </li>
            <li>
              <router-link
                to="/product"
                class="hover:text-blue-500"
              >
                旅行規劃師
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 熱門規劃師 -->
    <section class="bg-chiaki-blue py-10">
      <!-- filter -->
      <div class="container mx-auto max-w-7xl px-4 sm:px-5">
        <div class="py-5 flex">
          <div class="relative mr-8 flex">
            <!-- search 功能 -->
            <input
              v-model.trim="searchText"
              type="search"
              class="rounded-r-none w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              placeholder="請輸入關鍵字..."
              @keyup.enter="KeysearchData"
            >
            <div class="absolute top-0 left-0 inline-flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-400"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  stroke="none"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="7"
                />
                <line
                  x1="21"
                  y1="21"
                  x2="15"
                  y2="15"
                />
              </svg>
            </div>

            <button
              class="rounded-l-none rounded-lg items-center flex bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline hover:bg-darken text-white py-2 px-4 cursor-pointer"
              @click="KeysearchData"
            >
              <i class="fas fa-search fa-lg" />
            </button>
            <button
              class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white hover:border-transparent cursor-pointer py-2 px-4"
              @click="clearText"
            >
              <i class="fas fa-sync-alt fa-lg" />
            </button>
          </div>

          <button
            class="shadow-lg bg-white mr-4 xs:mr-8 hover:text-gray-900 hover:font-medium focus:outline-none hover:shadow-xs px-4"
            @click="sort('rating','asc')"
          >
            熱 門 評 價
          </button>
          <button
            class="shadow-lg bg-white mr-4 xs:mr-8 hover:text-gray-900 hover:font-medium focus:outline-none hover:shadow-xs px-4"
            @click="sort('points','asc')"
          >
            點 數 高 低
          </button>
          <button
            class="hover:text-gray-900 hover:font-medium focus:outline-none text-lg"
            @click="sort(null, true)"
          >
            ⇅
          </button>
        </div>
        <!-- 類型挑選 -->
        <div class="container mx-auto max-w-7xl px-4 xs:px-4 mb-5">
          <div class="people_wrap my-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center">
            <button
              class="bg-blue-500"
              :class="tagDisplay('act')"
              @click="selectTag('act')"
            >
              冒險
            </button>
            <button
              class="bg-blue-500"
              :class="tagDisplay('secret')"
              @click="selectTag('secret')"
            >
              秘境
            </button>
            <button
              class="bg-blue-500"
              :class="tagDisplay('culture')"
              @click="selectTag('culture')"
            >
              文化
            </button>
            <button
              class="bg-blue-500"
              :class="tagDisplay('food')"
              @click="selectTag('food')"
            >
              吃貨
            </button>
            <button
              class="bg-blue-500"
              :class="tagDisplay('religion')"
              @click="selectTag('religion')"
            >
              宗教
            </button>
            <button
              class="bg-blue-500"
              :class="tagDisplay('shopping')"
              @click="selectTag('shopping')"
            >
              購物
            </button>
            <button
              class="toolBtn bg-teal-500"
              @click="selectTag('all')"
            >
              全部
            </button>
            <button
              class="toolBtn bg-teal-500"
              @click="tags = []"
            >
              清除
            </button>
          </div>
        </div>

        <product-card :projects="filterData" />

        <!-- <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4 px-2"> -->
        <!-- Column -->

        <!-- </div> -->
      </div>
    </section>
    <Footer />
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/products/ProductCard.vue";
import _ from "lodash";

import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Product",
  components: {
    NavBar,
    Footer,
    ProductCard
  },
  data() {
    return {
      show: true,
      filter: "all",
      searchText: "",
      tags: [],

      priceSelect: null,
      orderBy: "position",
      orderOption: "asc"
    };
  },
  computed: {
    ...mapState(["projects"], ["countries"], ["SearchPlans"], ["userInfo"]),

    county() {
      //篩出國家
      return this.projects
        .map(item => item.country)
        .filter((item, index, arr) => arr.indexOf(item) === index);
    },

    // city() {
    //   return this.$store.state.countries //篩出城市
    //   .filter(item => item.country === this.selected.country)
    //   // .map(item => item.city)
    //   // .filter((item, index, arr) => arr.indexOf(item) === index);
    // },
    filterData() {
      if (this.filter == "all") {
        return this.sortedRod;
      }

      return this.sortedRod.filter(item => item.country === this.filter);
    },
    sortedRod() {
      return _.orderBy(this.projects, this.orderBy, this.orderOption);
    },
    filterproject() {
      const tagFilterArr = this.sortedRod.filter(item => {
        if (
          this.tags.includes("all") ||
          this.tags.includes(item.tags) ||
          !this.tags.length
        ) {
          return item;
        }
        return false;
      });

      return tagFilterArr;
    },
    // keywordSearch() {
    //   if (this.searchText) {
    //     return this.filterData.filter(item => {
    //       //item為變數 存放篩選後資料
    //       // console.log(item);
    //       let name = item.name.toLowerCase();
    //       // let county = item.county;
    //       // let city = item.city.toLowerCase();
    //       let keyword = this.searchText.toLowerCase();
    //       return name.indexOf(keyword) != -1;
    //     });
    //   } else {
    //     return this.filterData;
    //   }
    // },
    tagDisplay() {
      return tagName => {
        if (this.tags.includes(tagName) || this.tags.includes("all")) {
          return "activeTag";
        }
      };
    }
  },

  methods: {
    //api 動作
    ...mapActions(["getProjects"], ["getOneUser"]),
    ...mapMutations(["setProjectInfo"], ["UPDATE_USER"], ["Setcounty"]),
    handleSearch: _.debounce(function() {
      this.keywordSearch;
    }, 500),
    selectTag(tagName) {
      if (tagName === "all") {
        this.tags = [
          "Food",
          "Culture",
          "Act",
          "Shopping",
          "Religion",
          "Secret"
        ];
        return;
      }
      if (!this.tags.includes(tagName)) {
        this.tags.push(tagName);
      } else {
        this.tags.splice(this.tags.indexOf(tagName), 1);
      }
    },

    sort: function(by, option) {
      if (this.orderBy == by) {
        if (this.orderOption == "asc") {
          this.orderOption = "desc";
        } else if (this.orderOption == "desc") {
          this.orderOption = "asc";
        }
      } else {
        this.orderOption = option;
        this.orderBy = by;
      }
    },
    searchData(query) {
      let api = `${process.env.VUE_APP_APIPATH}plan/search?search=${query}`;
      this.$http
        .get(api)
        .then(res => {
          console.log(res);
          if (res.data.success) {
            //  this.porjects = res.data.result;

            this.$store.commit("setProjectInfo", res.data.result);
            // console.log(res.data.result);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    KeysearchData() {
      if (this.searchText == "") {
        this.getProjects();
      } else {
        let api = `${process.env.VUE_APP_APIPATH}plan/search?search=${this.searchText}`;
        this.$http
          .get(api)
          .then(res => {
            // console.log(res);
            if (res.data.success) {
              this.$store.commit("setProjectInfo", res.data.result);

              // this.$store.commit('setProjectInfo', res.data.result);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    clearText() {
      this.searchText = "";
      this.filter = "all";
      this.getProjects();
    }
  },
  mounted() {},
  created() {
    this.$store.dispatch("getOneUser");
    const query = this.$route.query.search;
    // console.log(query);
    if (!query) {
      this.getProjects();
    } else {
      this.searchData(query);
    }
    // 取得api
  }
};
</script>

<style>
.barcode {
  top: 8px;
}
.search-box {
  position: relative;
  top: -121px;
  height: 18rem;
  /* margin-bottom: -126px; */
  margin: 0 auto;
  margin-top: -79px;
}

.search-box_inner:before {
  content: "";
  background-image: url(../../assets/img/map_bg.png);
  background-size: cover;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: bottom center;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 24%;
  width: 80%;
  height: 80%;
}
.activeTag {
  background-color: #90cdf4;
}
.activeTag:hover {
  background-color: #bee3f8;
}
.barcode img {
  max-width: 190px;
  object-fit: cover;
}
.ticket:before {
  height: 16rem;
}
</style>