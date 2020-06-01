<template>
  <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4">
    <!-- Column -->
    <div
      class="my-4 px-6 w-full lg:w-1/3 ml-0"
      v-scroll-reveal.reset="{ delay: 450 }"
      v-for="item in project"
      :key="item._id"
    >
      <!-- Article -->
      <article class="overflow-hidden rounded-lg shadow-lg bg-white">
        <a href="#">
          <img alt="Placeholder" class="block h-auto w-full" :src="item.Cpicture" />
        </a>
        <div class="flex justify-content-end relative people">
          <img
            alt="Placeholder"
            class="block rounded-full border-white border-2 shadow"
            :src="item.manpic"
          />
        </div>
        <header class="px-6 pb-4 -mt-10">
          <!-- start star -->
          <span class="star text-yellow-500 text-xs">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>

            <!-- <span class="tracking-wider text-xs text-gray-500">({{item.rating}})</span> -->
          </span>
          <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">{{item.country}}</div>
          <p class="text-gray-600 text-sm mt-2">{{ item.city.join( ' , ') }}</p>
        </header>
        <div class="px-6 pb-4">
          <span
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >{{item.tags[0]}}</span>
          <span
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >{{item.tags[1]}}</span>
          <span
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white tracking-wider"
          >{{item.tags[2]}}</span>
        </div>

        <footer class="flex items-center justify-between leading-none px-6 py-4">
          <a class="flex items-center no-underline hover:underline text-black" href="#">
            <p class="font-semibold text-md">{{item.name}}</p>
          </a>

          <!-- end star -->

          <span class="flex items-center text-lg text-blue-500">
            {{item.point}}
            <i class="fa fa-coin"></i>
          </span>
        </footer>
      </article>
      <!-- END Article -->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

// import { Rate } from 'element-ui';
export default {
  props: {
    project: {
      type: Array,
      default() {
        return [];
      },
      // value:{
      //   type:Number,
      //   default: 0
      // }
    }
  },
  data() {
    return {
      value: 4.9
    };
  },
  computed: {
    ...mapState(["projects"]),
    // value() {
    //   // return this.projects.map((item,index) => {
    //   //   console.log(item.rating,index)
    //   //   return item.rating[index]
    //   // });
    // }
  },

};
</script>