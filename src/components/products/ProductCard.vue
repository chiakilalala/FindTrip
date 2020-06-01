<template>
  <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4 px-2">
    <div class="my-4 px-4 w-full lg:w-1/3 mb-8" v-for="(item) in projects" :key="item._id" @click="$router.push({ name: 'people', params: { id: item._id } })">
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
            <i class="fa fa-star fa-1x"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star text-gray-300"></i>
            <span class="tracking-wider text-xs text-gray-500">({{item.rating}})</span>
          </span>
          <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">{{item.country}}</div>
          <p class="text-gray-600 text-sm mt-2">{{ item.city.join( ' , ')}}</p>
          <!-- 辛格維利爾 海克拉山 蘭德納曼卡 黃金圈 this city -->
        </header>
        <div class="px-6 pb-4">
          <span
            class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
          >{{item.tags[0]}}</span>
          <!-- 吃貨 秘境 冒險 文化 購物 宗教 -->
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
// import { mapGetters, mapMutations } from 'vuex';


export default {
  props: {
    projects: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    // 使用展開運算符將 mapGetters 混合到外部物件中
   

  }
};
</script>