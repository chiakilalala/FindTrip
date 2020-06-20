<template>
  <div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
    <div class="block lg:hidden sticky inset-0">
      <div class="relative mt-5">
        <div class="dropdown" :class="{open: is_open}">
          <a
            href="#"
            class="shadow font-bold py-4 lg:pb-6 text-gray-700 lg:hidden"
            @click.prevent="toggleOpen"
          >
            Menu
            <span class="caret-down">&blacktriangledown;</span>
          </a>
          <ul class="dropdown-menu">
            <li class="md:my-0 text-center" @click.prevent="toggleOpen">
              <router-link
                to="/member/account"
                class="block align-middle lg:text-gray-700 no-underline"
              >
                <span class="pb-1 md:pb-0 text-lg text-gray-900 hover:text-blue-500">
                  <i class="text-gray-500 hover:text-blue-500 pr-3 fas fa-cog"></i>帳戶設定
                </span>
              </router-link>
            </li>
            <li class="md:my-0 text-center" @click.prevent="toggleOpen">
              <router-link
                to="/member/order"
                class="block align-middle lg:text-gray-700 no-underline"
              >
                <span class="pb-1 md:pb-0 text-lg text-gray-900 hover:text-blue-500">
                  <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-list-alt"></i>訂單記錄
                </span>
              </router-link>
            </li>
            <li
              class="md:my-0 text-center"
              v-if=" $store.state.Permission == '02' "
              @click.prevent="toggleOpen"
            >
              <router-link
                to="/member/project"
                class="block align-middle lg:text-gray-700 no-underline"
              >
                <span class="pb-1 md:pb-0 text-lg text-gray-900 hover:text-blue-500">
                  <i class="text-gray-500 hover:text-blue-100 pr-3 far fa-clipboard"></i>旅行計劃
                </span>
              </router-link>
            </li>
            <li class="md:my-0 text-center" @click.prevent="toggleOpen">
              <router-link
                to="/member/favorite"
                class="block align-middle lg:text-gray-700 no-underline hover:text-blue-500"
              >
                <span class="pb-1 md:pb-0 text-lg text-gray-900">
                  <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-heart"></i>我的收藏
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- <button
        id="menu-toggle"
        class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-blue-500 appearance-none focus:outline-none"
      >
        <svg
          class="fill-current h-3 float-right"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>-->
    </div>
    <!-- right-col -->
    <div
      class="sticky inset-0 hidden py-5 lg:rounded-lg shadow-sm w-full inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-0 bg-white shadow lg:shadow-lg z-20"
      style="top:5em;"
      id="menu-content"
    >
      <ul class="list-reset">
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/account"
            @click.native="actClass='account'"
            :class="{'activeleft':actClass == 'account'}"
            class="block align-middle lg:text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-blue-500"
          >
            <span class="pb-1 md:pb-0 text-lg text-gray-900">
              <i class="text-gray-500 hover:text-blue-500 pr-3 fas fa-cog"></i>帳戶設定
            </span>
          </router-link>
        </li>
        <!-- <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/point" @click.native="actClass='point'" :class="{'activeleft':actClass == 'point'}" 
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-base">
              <i class="text-gray-500 hover:text-blue-500 pr-3 fa fa-coins"></i>儲值點數
            </span>
          </router-link>
        </li>-->
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/order"
            @click.native="actClass='order'"
            :class="{'activeleft' :actClass == 'order' }"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-lg">
              <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-list-alt"></i>訂單記錄
            </span>
          </router-link>
        </li>
        <!-- <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/message"  @click.native="actClass='message'"  :class="{'activeleft':actClass == 'message'}" 
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-lg">
              <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-comment"></i>訊息記錄
            </span>
          </router-link>
        </li>-->
        <li
          class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent"
          v-if=" $store.state.Permission == '02' "
        >
          <router-link
            to="/member/project"
            @click.native="actClass='project'"
            :class="{'activeleft':actClass == 'project'}"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-lg">
              <i class="text-gray-500 hover:text-blue-100 pr-3 far fa-clipboard"></i>旅行計劃
            </span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/favorite"
            @click.native="actClass='favorite'"
            :class="{'activeleft':actClass == 'favorite'}"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-lg">
              <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-heart"></i>我的收藏
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actClass: "account",
      is_open: false
    };
  },

  methods: {
    toggleOpen() {
      this.is_open = !this.is_open;
    }
  }
};
</script>
<style scoped>
.activeleft {
  /* lg:border-blue-500  font-bold*/
  border-left: 4px solid #007ace;
  font-weight: bold;
}

.dropdown {
  max-width: 100%;
}
.dropdown-menu {
  background: #f5f5f5;
  width: 100%;
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 1px 2px 4px rgb(211, 209, 209);
  box-sizing: border-box;
}
.dropdown-menu > li {
  display: block;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
}

.dropdown.open .dropdown-menu {
  display: block;
}

.dropdown > a {
  display: inline-block;
  position: relative;
  width: 100%;
  background: #ddd;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
}

.caret-down {
  position: absolute;
  right: 15px;
}
</style>