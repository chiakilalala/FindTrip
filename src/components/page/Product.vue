<template>
  <div>
    <!-- NavBar Component -->
    <NavBar />
    <!-- banner -->
    <div class="hero bg-cover h-112 overflow-hidden"></div>
    <!--search  -->
    <!--search  -->
    <div
      class="search-box container mx-auto max-w-7xl flex flex-col items-center h-112 lg:h-64 h-auto my-2 px-2 lg:px-0"
    >
      <div
        class="shadow-lg flex flex-wrap w-full lg:w-1/2 h-112 lg:h-64 bg-white rounded-lg z-30 relative search-box_inner"
      >
        <div class="pt-0 bg-blue-prod h-1 0 px-5 py-12 w-full rounded-t-lg">
          <div class="flex justify-between lg:mt-2 mt-4 text-gray-200">
            <div class="lg:text-xl text-sm lg:tracking-xl md:tracking-normal font-light">Find-Trip</div>
            <h3 class="lg:text-2xl text-md font-extrabold">
              <i class="fas fa-plane text-md pr-2 text-gray-300"></i>BOARDING PASS
            </h3>
          </div>
        </div>

        <div class="w-full md:w-1/4 h-auto right-0">
          <div class="w-full lg:w-4/5">
            <div class="barcode sm:w-50">
              <img src="https://www.barcoding.com/wp-content/uploads/2016/09/Picture-111.png" alt />
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/4 h-auto ticket">
          <div class="flex flex-wrap -mx-3 lg:mb-2 mb-0">
            <div class="relative w-full md:w-3/6 lg:px-4 px-6 mb-1 lg:mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                for="grid-state"
              >國家</label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="country"
                v-model="selected.country"
                @change="selected.city = null"
              >
                <option value disabled selected>--請選擇你想要去的國家--</option>
                <option v-for="item in county" :key="item._id" :value="item">{{item}}</option>
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

            <div class="relative w-full md:w-2/6 lg:px-3 lg:px-4 px-6 mb-1 lg:mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                for="grid-state"
              >城市</label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="city"
                v-model="selected.city"
                @change="list"
              >
                <option :value="null" selected>-- 請選擇 --</option>
                <option v-for="el in cities[0]" :key="el._id" :value="el">{{ el }}</option>
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
          </div>
        </div>
      </div>
    </div>

    <div class="my-2 lg:ml-10 ml-2">
      <div class="container flex max-w-7xl mx-auto -mt-32">
        <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
          <ul class="list-inline inline-flex hover:underlines">
            <li class>
              <i class="fa fa-home">/</i>
            </li>
            <li>旅行規劃師</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 熱門規劃師 -->
    <section class="bg-chiaki-blue py-10">
      <!-- filter -->
      <div class="container mx-auto max-w-7xl px-4 sm:px-5">
        <div class="py-5 flex">
          <div class="relative mr-8">
            <!-- search 功能 -->
            <input
              type="search"
              class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              placeholder="請輸入關鍵字..."
              v-model="search"
            />
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
                <rect x="0" y="0" width="24" height="24" stroke="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select
              class="w-full lg:w-32 min-w-32 appearance-none h-full rounded-md border-solid block appearance-none shadow bg-white border-gray-600 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-blue-200 focus:border-gray-500"
            >
              <option>最多評價</option>
              <option>價錢高低</option>
            </select>
            <div
              class="filter-arrow pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
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
        <!-- 類型挑選 -->
        <div class="container mx-auto max-w-7xl px-4 xs:px-4 mb-5">
          <div class="people_wrap my-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center">
            <button class="bg-blue-500">冒險</button>
            <button class="bg-blue-500">秘境</button>
            <button class="bg-blue-500">文化</button>
            <button class="bg-blue-500">吃貨</button>
            <button class="bg-blue-500">宗教</button>
            <button class="bg-blue-500">購物</button>
          </div>
        </div>

        <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4 px-2">
          <!-- Column -->
          <product-card :projects="list" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ProductCard from "@/components/products/ProductCard.vue";

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
      product: "",
      selected: {
        country: "",
        city: null
      },
      search: ""
    };
  },
  computed: {
    ...mapState(["projects"]),
    county() {
      return this.projects
        .map(item => item.country) //篩出國家
        .filter((item, index, arr) => arr.indexOf(item) === index);
    },
    cities() {
      return this.projects //篩出城市
        .filter(item => item.country === this.selected.country)
        .map(item => item.city)
        .filter((item, index, arr) => arr.indexOf(item) === index);
    },
    list() {
      return this.projects.filter(item => {
        if (!this.selected.city) {
          return item.country.includes(this.selected.country);
        }
        return (
          item.country.includes(this.selected.country) ||
          item.country.includes(this.selected.city)
          // item.country.toLowerCase().indexOf(this.searchWord.toLowerCase())!== -1 ||
          //  item.city.toLowerCase().indexOf(this.searchWord.toLowerCase())!== -1
        );
      });
    }
  },
  watch: {
    search(val) {
      // console.log(this.projects);
      this.searchp(val);

    }
  },

  methods: {
    //api 動作
    ...mapActions(["getProjects"]),
    ...mapMutations(["setProjectInfo"]),
    getList() {
      if (!this.selected.city) {
        return; //如果沒選到特定特定的城市
      }
    },
    searchp() {
      if (this.search.trim() !== "") {
        this.projects.filter(item => {
          console.log(item);
          return (
            item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          );
        });
      } else {
        return this.projects;
      }
    }

    // searchProject() {
    //         let vm = this;

    // let api = `https://next.json-generator.com/api/json/get/4y_gTejsO?search=${this.search}`;
    // if (this.search === "") {
    //   api = "https://next.json-generator.com/api/json/get/4y_gTejsO";
    // } else {
    //   fetch(api)
    //     .then(rs => rs.json())
    //     .then(data => {
    //       this.projects = data;
    //     });
    // }
    // const { data }  = await this.axios.get(api);
    // console.log(data)
    // return this.projects.filter(item => item.)
  },
  mounted() {
    this.getProjects(); // 曲德api
  }
};
</script>

<style scoped>
.search-box {
  position: relative;
  top: -121px;
  height: 13rem;
  margin-bottom: -126px;
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
</style>