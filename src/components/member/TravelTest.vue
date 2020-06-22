<template>
  <div>
   <loading loader="bars" :active.sync="isLoading"></loading>
    <div class="flex max-w-6xl mx-auto">
      <div class="pb-2 lg:px-0 px-2 text-gray-600 text-sm">
        <ul class="list-inline inline-flex hover:underlines">
          <li class="pr-2">
            <router-link to="/home" class="hover:text-blue-500">
              <i class="fa fa-home"></i>
            </router-link>
            <span class="mx-1">/</span>
          </li>

          <li class="pr-2">訂單記錄</li>
        </ul>
      </div>
    </div>
    <!-- 書籤表示旅行家和規劃師 -->
    <div class="mb-10">
      <ul class="flex border-b" v-if=" $store.state.Permission == '02' ">
        <li class="-mb-px mr-1">
          <router-link
            to="/member/Order"
            class="inline-block py-2 px-4 text-gray-500 hover:text-blue-800"
            href="#"
          >旅行家</router-link>
        </li>
        <li class="mr-1">
          <router-link
            to="/member/traveler"
            class="border-b-2 border-teal-400 font-semibold inline-block py-2 px-4 text-teal-400 font-normal hover:text-blue-800"
            href="#"
          >規劃師</router-link>
        </li>
      </ul>
    </div>

    <!--   v-for="item in  sellOrders"
    :key="item.id "@click="getOrder(item.id)"$router.push({ name: 'orderlist', params: { id: item.id } })-->
    <!-- 訂單資料 -->
    <div class="flex-1 text-gray-700 text-left mb-20">
      <div class="lg:flex">
        <!-- 書籤 -->
        <div class="min-w-full shadow-md rounded-lg block w-full overflow-x-auto">
          <table class="border-collapse table-auto w-full leading-normal text-left">
            <thead>
              <tr class="whitespace-no-wrap">
                <th class="traveler_th">編號</th>
                <th class="traveler_th">客戶名字</th>
                <th class="traveler_th">國家</th>
                <th class="traveler_th">訂購時間</th>
                <th class="traveler_th">訂單狀態</th>
                <th class="traveler_th">詳細內容</th>
                <th class="traveler_th"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="whitespace-no-wrap" v-for="item in  sellOrders" :key="item.id ">
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">{{item.id}}</td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-baitemse">{{item.name}}</td>
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">{{item.country}}</td>

                <td
                  class="px-5 py-3 border-b border-gray-200 bg-white text-base"
                >{{item.CreateOn.slice(0,10)}}</td>
                <!-- 創建日期 -->
                <td
                  class="px-5 py-3 border-b border-gray-200 bg-white text-base"
                  :class="[
                    item.Status == 1
                    ? 'text-teal-600' : item.Status === 2 
                    ? 'text-blue-500' : item.Status === 3
                    ? 'text-gray-500 ' : 'text-blue-500'
                    ]"
                >{{item.Status | status }}</td>
                <!-- 單子狀態 -->
                <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">
                  <span
                    class="cursor-pointer text-blue-100 relative inline-block px-4 py-1 font-normal text-white leading-tight"
                    @click="sellOrder(item.id)"
                  >
                    <span
                      class="shadow absolute inset-0 bg-blue-500 hover:bg-blue-200 rounded-full"
                    ></span>
                    <span class="relative">查看</span>
                  </span>
                </td>
                <td class="cursor-pointer px-5 py-3 border-b border-gray-200 bg-white text-base">
                  <i class="fas fa-trash-alt text-lg" title="刪除" @click="deleteDialogModal(item)"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="80%">
      <div class="container mx-auto max-w-2xl round-xll overflow-hidden bg-white relative">
        <div
          class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head bg-blue-300"
        >
          <h3 class="lg:text-2xl text-gray-100 text-md font-extrabold">
            <i class="fas fa-plane text-md pr-2 text-gray-100"></i>BOARDING PASS
          </h3>
        </div>
        <div class="bg-gray-200 p-12 px-22" v-for="(item) in OneTraveler" :key="item.id">
          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">會員姓名:</label>
              <p class="order_text">{{item.name}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">電子信箱:</label>
              <p class="order_text">{{item.Email}}</p>
            </div>
          </div>
          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">聯絡電話:</label>
              <p class="order_text">{{item.Tel}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">創建日期:</label>
              <p
                v-if="item.CreateOn !=undefined && item.CreateOn.length >= 1"
                class="order_text"
              >{{item.CreateOn.slice(0,10)}} {{item.CreateOn.slice(14,19)}}(GTM+8)</p>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">國家:</label>
              <p class="order_text">{{item.country}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">城市區域:</label>
              <p class="order_text">{{item.city}}</p>
            </div>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">行程的日期 範圍 :</label>
              <p class="order_text">{{item.DepartureTime1}} ~ {{item.DepartureTime2}}</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">預算:</label>
              <p class="order_text">{{item.Budget}}</p>
            </div>
          </div>

          <div class="mb-8">
            <fieldset class="border-0">
              <legend class="text-gray-700 mb-2 text-xl font-bold">旅行喜好類型 :</legend>
              <div
                class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center"
              >
                <button class="bg-blue-500" :class="{'hidden' : !item['Act']}">冒險</button>
                <button class="bg-blue-500" :class="{'hidden' : !item['Secret']}">秘境</button>
                <button class="bg-blue-500" :class="{'hidden' : !item['Culture']}">文化</button>

                <button class="bg-blue-600" :class="{'hidden' : !item['Religion']}">宗教</button>
                <button class="bg-blue-600" :class="{'hidden' : !item['Shopping']}">購物</button>
                <button class="bg-blue-600" :class="{'hidden' : !item['Food']}">吃貨</button>
              </div>
            </fieldset>
          </div>

          <div class="md:flex mb-8">
            <div class="md:flex-1 md:pr-3">
              <label class="order_title">大人:</label>
              <p class="order_text">{{item.Adult}} 人</p>
            </div>
            <div class="md:flex-1 md:pl-3">
              <label class="order_title">小孩:</label>
              <p class="order_text">{{item.Children}} 人</p>
            </div>
          </div>

          <div class="mb-6">
            <label class="text-gray-700 text-xl font-bold mb-2">備註 :</label>
            <div class="my-5 font-medium mb-7 bg-white rounded-lg h-auto pb-5">
              <p class="text-sm text-gray-600 leading-relaxed px-5 pt-5">{{item.Remark}}</p>
            </div>
          </div>

          <div class="mb-8">
            <div class="flex justify-center">
              <!-- <el-button
                
               @click="changeState(item.id)"
           
              >確認點擊訂單 switchState(item.id){{count}}</el-button>-->
              <el-button
                @click="changeDialogModal(item)"
                :class="[
                    item.Status == 1
                    ? 'bg-teal-600' : item.Status === 2 
                    ? 'bg-blue-500' : item.Status === 3
                    ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-500'
                    ]"
                class="hover:opacity-75 text-white font-bold py-2 px-4 rounded-full mx-4"
              >{{ item.Status | status }}</el-button>
            </div>
          </div>
        </div>
        <div
          class="relative bg-blue-500 bg-cover bg-center h-20 p-4 flex justify-end items-center form-head"
        >
          <div class="sbarcode"></div>
        </div>
      </div>
    </el-dialog>

    <!-- 修改訂單狀態 dialog -->

    <el-dialog :visible="commentVisible" :before-close="beforeClose">
      <!-- 下面是留言格式 -->
      <span class="text-xl text-center font-extrabold">確定是否修改訂單狀態？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="commentVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeStatus">确 定</el-button>
      </span>
    </el-dialog>
    <!-- delete model -->
    <!-- 刪除modal -->

    <el-dialog :visible="deleteModal" :before-close="beforeClose" center>
      <p class="text-xl text-center font-extrabold">不得擅自取消，請確定已經跟客戶告知原因,才可繼續？</p>
      <p></p>
      <div slot="footer" class="dialog-footer">
        <el-button @click=" deleteModal = false">取消刪除</el-button>
        <el-button type="primary" @click="deleteOrder">确定刪除</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters,mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      value: 3,
      count: 1,
      OneTraveler: {
        Status: 1
      }, //model資料
      state: {},
      dialogVisible: false,
      commentVisible: false,
      deleteModal: false, //旅行家刪除訂單
      isTraveler: "all",
      Statuscomment: {},
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  },

  methods: {
    changeDialogModal(item) {
      const vm = this;

      if (item.Status == 3) {
        this.$notify.info({
          title: "消息",
          message: "訂單完成不能再按"
        });
      } else {
        vm.commentVisible = true;
        vm.Statuscomment = Object.assign({}, item); //資料傳參特性
      }

      // console.log(vm.Statuscomment);
    },
    beforeClose(done) {
      this.dialogVisible = false;
      this.commentVisible = false;
      this.deleteModal = false;
      done();
    },

    switchState(item) {
      this.$forceUpdate();
      if (this.OneTraveler[0].Status == 0) {
        this.$alert("訂單狀態", "标题名称", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `訂單狀態修改成功: ${action}`
            });
          }
        });
        this.$set(this.OneTraveler, "Status", 1);

        console.log(this.OneTraveler.Status);
      } else if (this.OneTraveler[0].Status == 1) {
        this.$alert("確定訂接受此訂單", "訂單狀態", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `訂單狀態修改成功: ${action}`
            });
          }
        });
        this.$set(this.OneTraveler, "Status", 2);
        console.log(this.OneTraveler.Status);
      } else if (this.OneTraveler[0].Status == 2) {
        this.$alert("確定訂單已經完成了", "訂單狀態", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `訂單狀態修改成功: ${action}`
            });
          }
        });

        this.$set(this.OneTraveler, "Status", 3);
        console.log(this.OneTraveler.Status);
      }

      console.log(item); //看id
      this.travelOrder(item); //更新api

      //單筆訂單整理
    },
    changeStatus() {
      const vm = this;
      vm.$forceUpdate();
      if (this.Statuscomment.Status == 0) {
        vm.$set(this.Statuscomment, "Status", 1);

        vm.commentVisible = false;
        vm.travelOrder(this.Statuscomment.id);
        // console.log(this.Statuscomment.Status);
      } else if (this.Statuscomment.Status == 1) {
        vm.$set(this.Statuscomment, "Status", 2);
        // console.log(this.Statuscomment.Status);
        vm.travelOrder(this.Statuscomment.id);
        vm.commentVisible = false;
      } else if (this.Statuscomment.Status == 2) {
        vm.$set(this.Statuscomment, "Status", 3);
        vm.commentVisible = false;
        vm.travelOrder(this.Statuscomment.id);
      }
      console.log(this.Statuscomment.id); //看id
       //單筆訂單整理
      //全部訂單跑～

      vm.dialogVisible = false;
    },

    deleteDialogModal(item) {
      //旅行家刪除訂單詢問
      const vm = this;
      vm.state = item;
      // console.log(vm.state);
      vm.deleteModal = true;
    },

    ...mapActions(["sellerOrder"], ["getOrder"], ["getProjects"]),
    ...mapMutations(
      ["SELLORDER"],
      ["UPDATE_USER"],
      ["changeLogin"],
      ["setProjectInfo"]
    ),

    sellOrder(id) {
      //規劃師是單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;

      vm.orderId = this.$route.params.id;
      let api = `${process.env.VUE_APP_APIPATH}order/sellersingle/${id}`;
      this.$http.get(api, { headers }).then(res => {
        if (res.data.success) {
          vm.OneTraveler = res.data.result;
          // console.log(vm.OneTraveler);
          vm.dialogVisible = true;
        }
      });
    },
    travelOrder(id) {
      //修改單一訂單
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      // let httpMethod = "patch";

      let api = `${process.env.VUE_APP_APIPATH}order/update/${id}`;
      console.log(api);
      this.$http
        .patch(
          api,
          {
            Status: vm.Statuscomment.Status
          },
          { headers }
        )
        .then(res => {
          if (res.data.success) {
            console.log(res.data.message);
            // console.log(vm.sellerOrder());
            this.$notify({
              title: "成功",
              message: "修改訂單狀態成功",
              type: "success"
            });
            vm.sellerOrder(); //重新全部取得資料一次
          } else {
            console.log("更新失敗");
            vm.sellerOrder(); //重新全部取得資料一次
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    },

    //刪除api 檔案
    deleteOrder() {
      let token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`
      };
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}order/delete/${vm.state.id}`;
      console.log(api, "deleteOrder");

      vm.axios
        .delete(api, { headers })
        .then(response => {
          // console.log(response);
          if (response.data.success) {
            this.$notify({
              title: "成功",
              message: "刪除成功",
              type: "success"
            });
            vm.deleteModal = false;
            vm.sellerOrder();
          } else {
            this.$notify({
              title: "失敗",
              message: "刪除失敗",
              type: "warning"
            });
            vm.deleteModal = false;
            vm.sellerOrder();
          }
        })
        .catch(response => {
          console.log(response);
          this.$notify.info({
            title: "消息",
            message: "取消刪除"
          });
          vm.deleteModal = false;
          vm.sellerOrder();
        });
    }
  },
  computed: {
     ...mapGetters(['isLoading']),
    ...mapState(["sellOrders"], ["userInfo"], ["projects"])
  },
  updated() {
    // 讓我們可以知道組件有被更新
  },
  created() {
    this.$store.dispatch("getProjects");
    this.sellerOrder();
  }
};
</script>
<style>
.form-head:before,
.form-head:after {
  background-color: #fff;
}
/*  border-b-2 border-teal-400 font-semibold #4fd1c5;*/
a.active {
  border-bottom: 2px solid #4fd1c5;
  font-weight: 700;
  color: #4fd1c5;
}
.liBackground {
  background: darkcyan;
}
</style>