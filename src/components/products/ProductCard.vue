<template>
  <div
    is="transition-group"
    class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4 px-2  cursor-pointer"
    name="fade-list"
  >
    <div
      v-for="item in randomProject"
      :key="item.id"
      class="my-4 px-4 w-full lg:w-1/3 mb-8 transition duration-500 ease-in-out transform hover:-translate-y-8"
    >
      <!-- Article @click="$router.push({ name: 'people', params: { id: item.id } }) -->
      <router-link :to="{ name: 'people', params:{ id: item.id }}">
        <article class=" min-cardHeight overflow-hidden rounded-lg shadow-lg bg-white">
          <a href="#">
            <img
              alt="Placeholder"
              class="min-h-180 object-cover block h-auto w-full"
              :src="item.TPBGImg ? item.TPBGImg : 'https://picsum.photos/300/200?random=1' "
            >
          </a>
          <div class="flex justify-content-end relative people">
            <img
          
              class="w-12 h-12 block rounded-full border-white border-2 shadow object-cover bg-gray-100"
              :src="item.manpic ? item.manpic : 'https://picsum.photos/600/400/?random'"
            >
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
              />
              <span class="tracking-wider text-xs text-gray-500">({{ item.rating }})</span>
            </span>
            <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">
              {{ item.country }}
            </div>
            <p class="text-gray-600 text-sm mt-2">
              {{ item.city }}
            </p>
          <!-- 辛格維利爾 海克拉山 蘭德納曼卡 黃金圈 this city -->
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
          
          <!-- 吃貨 秘境 冒險 文化 購物 宗教 -->
          </div>

          <footer class="flex items-center justify-between leading-none px-6 py-4">
            <a
              class="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <p class="font-semibold text-md">{{ item.name }}</p>
            </a>

            <!-- end star -->

            <span class="flex items-center text-lg text-blue-500">
              {{ item.points }}
              <i class="fa fa-coin" />
            </span>
          </footer>
        </article>
      </router-link>
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
    },
   

  },
 
  computed: {
     randomProject(){
      const projects = [...this.projects]
      return projects.sort(() => Math.random() - 0.5).splice(0, 6)
      // return rooms.sort((a, b) => b.holidayPrice - a.holidayPrice).splice(0, 3)
     }
    // 使用展開運算符將 mapGetters 混合到外部物件中


  }
};
</script>
<style scoped>
.min-cardHeight{
  min-height:400px
}
.min-h-180{
  max-height: 180px;
}
.fade-list-move {
	transition: transform 0.25s ease;
}

.fade-list-leave-to {
	transition: all 0.5s ease;
	opacity: 0.8;
}
</style>