<template>
  <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4">
    <!-- Column -->
    <div
      class="my-4 px-6 w-full lg:w-1/3 ml-0"
      v-for="item in project"
      :key="item.id"
  
    >
      <!-- Article  @click="$router.push({ name: 'people', params: { id: item.id } })-->
       <router-link :to="{ name: 'people', params:{ id: item.id }}">
      <article class=" min-cardHeight  overflow-hidden rounded-lg shadow-lg bg-white">
        <a href="#">
          <img
            alt="Placeholder"
            class="block object-cover min-h-180 w-full hover:opacity-50"
            :src="item.TPBGImg ? item.TPBGImg : 'https://picsum.photos/300/200?random=1' "
          />
        </a>
        <div class="flex justify-content-end relative people">
          <img
            alt="Placeholder"
            class="w-12 h-12 block rounded-full border-white border-2 shadow"
            :src="item.manpic"
          />
        </div>
        <header class="px-6 pb-4 -mt-10">
          <!-- start star -->
          <span class="star text-yellow-500 text-xs">
            <el-rate
              v-model="item.star"
              disabled
              text-color="#ff9900"
              score-template="{value}"
              class="inline-block"
            ></el-rate>

            <span class="tracking-wider text-xs text-gray-500">({{item.rating}})</span>
          </span>
          <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">{{item.country}}</div>
          <p class="text-gray-600 text-sm mt-2">{{ item.city }}</p>
        </header>
        <div class="px-6 pb-4">
          <span
            :class="{'hidden' : !item.tags['Food']}"
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >吃貨</span>
          <span
            :class="{'hidden' : !item.tags['Secret']}"
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >秘境</span>
          <span
            :class="{'hidden' : !item.tags['Act']}"
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >冒險</span>
          <span
            :class="{'hidden' : !item.tags['Culture']}"
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >文化</span>
          <span
            :class="{'hidden' : !item.tags['Shopping']}"
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >購物</span>
          <span
            :class="{'hidden' : !item.tags['Religion']}"
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >宗教</span>
        </div>

        <footer class="flex items-center justify-between leading-none px-6 py-4">
          <a class="flex items-center no-underline hover:underline text-black" href="#">
            <p class="font-semibold text-md">{{item.name}}</p>
          </a>

          <!-- end star -->

          <span class="flex items-center text-lg text-blue-500">
            {{item.points}}
            <i class="fa fa-coin"></i>
          </span>
        </footer>
      </article>
       </router-link>
      <!-- END Article -->
    </div>
  </div>
</template>
<script>
// import { mapState } from "vuex";

// import { Rate } from 'element-ui';
export default {
  props: {
    project: {
      type: Array,
      default() {
        return [];
      },
      value: {
        type: Number,
        default: 0
      }
    }
  },
  data() {
    return {
      // value:4.5
    };
  },
 
};
</script>
<style scoped>

.min-cardHeight{
  min-height:400px
}
.min-h-180{
  max-height: 180px;
}


</style>