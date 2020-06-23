<template>
  <div>
    <!-- 新增按鈕 -->
    <div
      class="mt-1 mb-3 flex justify-end"
      @click="dialogVisible = true"
    >
      <el-button
        type="primary"
        class="bg-blue-600 rounded px-5 py-3 text-white hover:bg-blue-400 cursor-pointer"
      >
        前 往 儲 值
        <i class="fa fa-money" />
      </el-button>
    </div>
    <div class="flex-1 text-gray-700 text-left mb-20">
      <div class="lg:flex">
        <!-- 書籤 -->
        <div class="min-w-full shadow-md rounded-lg block w-full overflow-x-auto">
          <table class="border-collapse table-auto w-full leading-normal text-left">
            <thead>
              <tr class="whitespace-no-wrap">
                <th
                  class="px-5 py-3 border-b-2 border-gray-300 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider"
                >
                  日期
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider"
                >
                  時間
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider"
                >
                  項目
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in points"
                :key="index"
                class="whitespace-no-wrap"
              >
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">
                  {{ item.CreateOn.slice(0,10) }}
                </td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">
                  {{ item.CreateOn.slice(11,16) }}
                </td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">
                  {{ item.Product }}點數
                </td>
              </tr>
              <!-- 2020-06-14T16:47:48.243 -->
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <el-dialog
      title="點數儲值"
      :visible.sync="dialogVisible"
      width="80%"
    >
      <ul class="mt-2">
        <li class>
          <a
            href="#"
            class="block p-5 bg-gray-200 rounded shadow"
          >
            <div class="flex justify-between">
              <p class="text-2xl font-medium leading-snug text-gray-900 text-left">500點</p>
            </div>
            <div class="flex justify-between items-baseline">
              <div class="mt-2">
                <span class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                  <svg
                    class="h-2 w-2 text-teal-500"
                    viewBox="0 0 8 8"
                    fill="currentColor"
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </li>
        <li class="mt-3">
          <a
            href="#"
            class="block p-5 bg-gray-200 rounded shadow"
          >
            <div class="flex justify-between">
              <p class="text-2xl font-bold leading-snug text-gray-900 text-left">1000點</p>
            </div>
            <div class="flex justify-between items-baseline">
              <div class="mt-2">
                <span class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                  <svg
                    class="h-2 w-2 text-teal-500"
                    viewBox="0 0 8 8"
                    fill="currentColor"
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </li>
        <li class="mt-3">
          <a
            href="#"
            class="block p-5 bg-gray-200 rounded shadow"
          >
            <div class="flex justify-between">
              <p class="text-2xl font-medium leading-snug text-gray-900 text-left">1500點</p>
            </div>
            <div class="flex justify-between items-baseline">
              <div class="mt-2">
                <span class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                  <svg
                    class="h-2 w-2 text-teal-500"
                    viewBox="0 0 8 8"
                    fill="currentColor"
                  >
                    <circle
                      cx="4"
                      cy="4"
                      r="3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </li>
        <li class="mt-3">
          <a
            href="#"
            class="block p-5 bg-gray-200 rounded shadow"
          >
            <div class="flex justify-between">
              <p class="text-2xl font-medium leading-snug text-gray-900 text-left">2000點</p>
            </div>
            <div class="flex justify-between items-baseline">
              <div class="mt-2">
                <span class="px-2 py-1 leading-tight inline-flex items-center bg-teal-100 rounded">
                  <img
                    src="../../assets/img/coin.png"
                    class="w-8 h-8 mr-2"
                    alt
                    srcset
                  >
                </span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <p
        class="bg-white focus:outline-none border-b border-gray-300 py-2 px-0 mt-2 block w-full appearance-none leading-normal"
      >
        擁有點數 ：
      </p>

      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>

  <!--  -->
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false,
      points: [],
      point:{}
    };
  },
  methods: {
    ...mapActions(["getOneUser"]),
    handleOpen() {
      // 當選單被打開時執行...
    },
    getPoints() {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}points/history`;
      this.$http.get(api, { headers }).then(res => {
        if (res.data.success) {
          vm.points = res.data.result;

          console.log(vm.points);
        }
      });
    },
 
  },
  computed: {
    ...mapState(["userInfo"])
  },

  created() {
    this.getOneUser();
    this.getPoints();
  }
};
</script>