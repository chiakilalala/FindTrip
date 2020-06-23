<template>
  <div>
    <!-- 訂單資料 -->
    <div class="flex-1 text-gray-700 text-left mb-20 mt-10">
      <div class="lg:flex">
        <!-- 書籤 -->
        <div class="min-w-full shadow-md rounded-lg block w-full overflow-x-auto">
          <table class="border-collapse table-auto w-full leading-normal text-left">
            <thead>
              <tr class="whitespace-no-wrap">
                <th
                  class="px-3 py-3 border-b-2 border-gray-300 bg-gray-300 text-left text-lg font-semibold text-gray-700 tracking-wider"
                >旅行規劃師</th>

                <th
                  class="px-2 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-lg font-semibold text-gray-700 tracking-wider"
                >國家</th>
                <th
                  class="px-2 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-lg font-semibold text-gray-700 tracking-wider"
                >城市</th>
                   <th
                  class="px-2 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-lg font-semibold text-gray-700 tracking-wider"
                >評價</th>
                <th
                  class="px-2 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider"
                >內容</th>
              </tr>
            </thead>
            <tbody>
              <tr class="whitespace-no-wrap" v-for='(item,index)  in star' :key='index'>
                <td class="px-3 py-3 border-b border-gray-200 bg-white text-base">{{item.PlannerName}}</td>
                <td class="px-2 py-3 border-b border-gray-200 bg-white text-base font-semibold">{{item.country}}</td>
                <td class="px-2 py-3 border-b border-gray-200 bg-white text-base font-semibold">{{item.city}}</td>
                 <td class="px-2 py-3 border-b border-gray-200 bg-white text-base font-semibold">     <el-rate
                          v-model="item.stars"
                          disabled
                          text-color="#ff9900"
                          class="inline-block text-xl"
                        ></el-rate></td>
                <td class="px-2 py-3 border-b border-gray-200 bg-white text-base">
                  <span
                    class="relative inline-block px-4 py-1 font-normal text-white leading-tight"
                  >
                    <span class="shadow absolute inset-0 bg-blue-500  hover:bg-blue-700 rounded-full"></span>
                    <span class="relative cursor-pointer" @click="$router.push({ name: 'people', params: { id: item.id } })">前往</span>
                  </span>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
return{

}
  },
  computed: {
    star(){
      return this.$store.state.started
    }
  },
  created() {
    // console.log(this.$store.state.started);
 
  },
}
</script>