<template>
  <div>
    <!--Nav-->
    <nav id="header" class="fixed w-full z-30 top-0 text-white ">
      <div
        class="w-full container mx-auto flex flex-wrap max-w-7xl items-center justify-between my-5 py-2"
      >
        <div class="pl-4 flex items-center">
          <a
            id="changeLogo"
            class="bg-cover bg-no-repeat toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex relative h-10 w-40 logo"
            href="#"
          ></a>
        </div>

        <div class="block lg:hidden pr-4">
            <Slide  @closeMenu="open = false;" right>
                    <ul class="">
            <li class="mr-3">
              <a class="inline-block py-2 px-4 text-black no-underline" href="#">尋找旅行規劃師</a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >進入許願池</a>
            </li>
          </ul>
          <button
            id="navAction"
            class="outline-none mx-auto lg:mx-0 hover:shadow-lg bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow opacity-75"
          >
            <i class="fas fa-user-astronaut pr-3"></i>登入
          </button>
              </Slide>
          <!-- mobile -->
          <!-- <button @click='isOpen = !isOpen' 
            id="nav-toggle"
            class="cursor-pointer flex items-center px-3 py-2 text-gray-500 hover:text-blue-100 hover:text-gray-800 appearance-none focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> -->
        </div>
        <!-- desktop -->
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto  mt-2 lg:mt-0 bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content" :class="isOpen ? 'block' : 'hidden'"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a class="inline-block py-2 px-4 text-black no-underline" href="#">尋找旅行規劃師</a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >進入許願池</a>
            </li>
          </ul>
          <button
            id="navAction"
            class="outline-none mx-auto lg:mx-0 hover:shadow-lg bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow opacity-75"
          >
            <i class="fas fa-user-astronaut pr-3"></i>登入
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

    /* eslint-disable */
import { Slide } from 'vue-burger-menu'

export default {
    components: {
        Slide // Register your component
    },
  data(){
    return{
      isOpen:false,
    }
  }
}
</script>

<style scoped>
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
</style>
