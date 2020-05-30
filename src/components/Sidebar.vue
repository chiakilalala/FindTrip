<template>
  <div>
    <div
      class="mt-10 sticky inset-0 hidden py-5 lg:rounded-lg shadow-sm w-full inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-0 bg-white shadow lg:shadow-lg z-20"
      style="top:5em;"
      id="menu-content"
    >
      <ul class="list-reset">
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/account"
            class="block align-middle lg:text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:border-blue-500 lg:hover:border-blue-500"
          >
            <span class="pb-1 md:pb-0 text-base text-gray-900 font-bold">
              <i class="text-gray-500 hover:text-blue-500 pr-3 fas fa-cog"></i>帳戶設定
            </span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/point"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-base">
              <i class="text-gray-500 hover:text-blue-500 pr-3 fa fa-coins"></i>儲值點數
            </span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/order"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-base">
              <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-list-alt"></i>訂單記錄
            </span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/message"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-base">
              <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-comment"></i>訊息記錄
            </span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/project"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-base">
              <i class="text-gray-500 hover:text-blue-100 pr-3 far fa-clipboard"></i>旅行計劃
            </span>
          </router-link>
        </li>
        <li class="py-2 md:my-0 text-center hover:bg-blue-400 lg:hover:bg-transparent">
          <router-link
            to="/member/favorite"
            class="block align-middle text-gray-700 no-underline hover:text-blue-500 border-l-4 border-transparent lg:hover:border-gray-400"
          >
            <span class="pb-1 md:pb-0 text-base">
              <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-heart"></i>我的收藏
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>