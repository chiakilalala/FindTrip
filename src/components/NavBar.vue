<template>
  <div>
    <!--Nav-->
    <nav
      id="header"
      class="md:bg-white fixed w-full z-30 top-0 text-white"
      :class="{'active': isBurgerActive}"
      @scroll="scrollhandle"
    >
      <div
        class="w-full container mx-auto flex flex-wrap max-w-7xl items-center justify-between my-2 py-2"
      >
        <div class="pl-4 flex items-center">
          <router-link
            id="changeLogo"
            to="/home"
            class="bg-cover bg-no-repeat toggleColour no-underline font-bold text-2xl lg:text-4xl flex relative h-10 w-40 logo"
            href="#"
          />
        </div>

        <div class="block lg:hidden pr-4">
          <!-- mobile -->
          <button
            id="burger"
            class="cursor-pointer flex items-center px-3 py-2 text-gray-500 hover:text-blue-100 hover:text-gray-800 appearance-none focus:outline-none"
            @click="toggleNav"
          >
            <slot>
              <button
                type="button"
                class="burger-button"
                title="Menu"
              >
                <span class="burger-bar burger-bar--1" />
                <span class="burger-bar burger-bar--2" />
                <span class="burger-bar burger-bar--3" />
              </button>
            </slot>
            <!-- <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>-->
          </button>
        </div>

        <!-- desktop -->
        <div
          id="nav-content"
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-transparent text-black p-4 lg:p-0 z-20"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <ul
            class="list-reset text-lg lg:flex justify-end flex-1 items-center"
            :class="{'active': isBurgerActive}"
          >
            <li class="mr-3  sm:hover:bg-red-100 lg:hover:bg-transparent">
              <router-link
                class-active="active"
                tag="li"
                to="/product"
                class="inline-block lg:text-lg py-2 px-4 text-black no-underline sm:text-xl"
              >
                尋找旅行規劃師
              </router-link>
            </li>
            <li class="mr-3 sm:hover:bg-red-100 lg:hover:bg-transparent">
              <router-link
                class-active="active"
                tag="li"
                to="/wish"
                class="inline-block lg:text-lg text-black no-underline py-2 px-4 sm:text-xl"
              >
                進入許願池
              </router-link>
            </li>
          </ul>

          <div
            class="p-4 text-center"
            :class="isOpen ? 'block' : 'hidden'"
          >
            <button
              v-if="!$store.state.token"
              id="navAction"
              class="hover:bg-blue-300 text-center outline-none mx-auto lg:mx-0 hover:shadow-lg bg-blue-100 text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow opacity-75"
              @click="$router.push('/login')"
            >
              <i class="fas fa-user-astronaut pr-3" />登入
            </button>
            <!--     v-if="!$store.state.token" -->

            <div
              v-else
              class="relative px-5 border-t-2 border-gray-200"
            >
              <router-link
                to="/member/account"
                class-active="active"
                class="block w-full px-4 py-2 text-xl text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
              >
                <i class="text-gray-500 hover:text-blue-500 pr-3 fas fa-cog" /> 帳戶設定
              </router-link>

              <!-- <router-link
                        to="/member/point" class-active="active"
                        class="block w-full px-4 py-2  text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                      >
                        <i class="text-gray-500 hover:text-blue-500 pr-3 fa fa-coins"></i>儲值點數
              </router-link>-->

              <router-link
                class-active="active"
                to="/member/order"
                class="block w-full px-4 py-2 text-xl text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
              >
                <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-list-alt" />訂單記錄
              </router-link>

              <router-link
                v-if=" $store.state.Permission == '02' "
                class-active="active"
                to="/member/project"
                class="block w-full px-4 py-2 text-xl text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
              >
                <i class="text-gray-500 hover:text-blue-100 pr-3 far fa-clipboard" />旅行計劃
              </router-link>

              <!-- <router-link class-active="active"
                        to="/member/message"
                        class="block w-full px-4 py-2  text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                      >
                        <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-comment"></i>訊息記錄
              </router-link>-->

              <a
                href="#"
                class="block w-full px-4 py-2 text-xl text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                @click.prevent="logout"
              >
                <i class="text-gray-500 hover:text-blue-500 pr-3 -ml-8 fas fa-sign-out-alt" />
                <span class>登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</span>
              </a>
            </div>
          </div>
          <div class="lg:block sm:hidden">
            <button
              v-if="!$store.state.token"
              id="navAction"
              class="outline-none mx-auto lg:mx-0 hover:shadow-lg bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-8 shadow opacity-75"
              @click="$router.push('/login')"
            >
              <i class="fas fa-user-astronaut pr-3" />登入
            </button>
            <!-- 登入化緣狀態 -->
            <div
              v-else
              class="flex items-center text-blue-700"
            >
              <!-- <span class="mx-4 fas fa-comment text-2xl" style></span> -->
              <!-- <span class="mx-3 fas fa-bell text-2xl" style></span> -->
              <div
                class="dropdown relative items-center"
                @mouseover="$store.state.isVisble = true"
                @mouseleave="$store.state.isVisble = false"
                @click="$store.state.isVisble = true"
              >
                <button class="inline-flex items-center justify-between">
                  <div
                    class="bg-white h-12 w-12 rounded-full overflow-hidden border-2 border-gray-500 focus:outline-none focus:border-white"
                  >
                    <img
                      :src=" $store.state.userInfo.manpic ? $store.state.userInfo.manpic : './assets/img/man002.svg' "
                      alt
                      srcset
                      class="shadow object-cover h-full w-full"
                    >
                  </div>
                  <!-- <div class="shadow bg-center bg-cover  bg-white bg-no-repeat rounded-full inline-block h-12 w-12 ml-2" :style="background-image: url(../../assets/img/man001.svg)"></div> -->
                  <svg
                    class="hidden md:block md:flex flex-shrink-0 w-5 h-5 ml-1 text-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      :class="{ 'rotate-180': $store.state.isVisble }"
                      class="transition duration-300 ease-in-out origin-center transform"
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition duration-300 ease-out transform"
                  enter-class="-translate-y-3 scale-95 opacity-0"
                  enter-to-class="translate-y-0 scale-100 opacity-100"
                  leave-active-class="transition duration-150 ease-in transform"
                  leave-class="translate-y-0 opacity-100"
                  leave-to-class="-translate-y-3 opacity-0"
                >
                  <div
                    v-show="$store.state.isVisble"
                    class="dropdown-menu absolute pt-2"
                  >
                    <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
                      <div
                        class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
                      />
                      <div class="relative px-5">
                        <router-link
                          to="/member/account"
                          class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                        >
                          <i class="text-gray-500 hover:text-blue-500 pr-3 fas fa-cog" /> 帳戶設定
                        </router-link>

                        <!-- <router-link
                        to="/member/point"
                        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                      >
                        <i class="text-gray-500 hover:text-blue-500 pr-3 fa fa-coins"></i>儲值點數
                        </router-link>-->

                        <router-link
                          to="/member/order"
                          class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                        >
                          <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-list-alt" />訂單記錄
                        </router-link>

                        <router-link
                          v-if=" $store.state.Permission == '02' "
                          to="/member/project"
                          class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                        >
                          <i class="text-gray-500 hover:text-blue-100 pr-3 far fa-clipboard" />旅行計劃
                        </router-link>

                        <!-- <router-link
                        to="/member/message"
                        class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                      >
                        <i class="text-gray-500 hover:text-blue-500 pr-3 far fa-comment"></i>訊息記錄
                        </router-link>-->

                        <a
                          href="#"
                          class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-200 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
                          @click.prevent="logout"
                        >
                          <i class="text-gray-500 hover:text-blue-500 pr-3 fas fa-sign-out-alt" />登出
                        </a>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
// import { Slide } from "vue-burger-menu";
import $ from "jquery";
export default {
  components: {
    // Slide // Register your component
  },
  data() {
    return {
      isOpen: false,
      isSticky: true
    };
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/home");
    },
    handleScroll(e) {
      this.isSticky = window.screenY > window.innerHeight / 2; // 瀏覽器視窗窗空
    },
    scrollhandle() {
      const setFixed = $("#header");
      const setbutton = $("#navAction");

      const changeLogo = $("#changeLogo");
      let menuTop = setFixed.height();
      let $scrollTop = $(window).scrollTop();

      if ($scrollTop > menuTop) {
        setFixed.addClass("is-fixtop");
        setbutton.addClass("bg-blue-500 text-white");
        // setbutton.removeClass('text-gray-800');

        changeLogo.addClass("changeLogo");
      } else if ($scrollTop == 0) {
        setFixed.removeClass("is-fixtop");
        setbutton.removeClass("bg-blue-500 text-white");
        // setbutton.addClass('text-gray-800');

        changeLogo.removeClass("changeLogo");
      }
    }
  },
  computed: {
    isBurgerActive() {
      return this.isOpen;
    }
  },
  created() {
    window.addEventListener("scroll", this.scrollhandle, true);
  }
};
</script>

<style >
#nav-content li:hover,
#nav-content li:active {
  border-bottom: 1px solid #333;
  transition: all 0.35s ease-in-out;
  cursor: pointer;
}
#nav-content ul.active {
  text-align: center;
  margin: 12px 0px;
  font-size: 1.3rem;
}
/* #header.active{
  background:#fff;
} */
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropmenu-enter-active {
  transition: all 0.3s ease;
}
.dropmenu-leave-active {
  transition: all 0.8s ease;
}
.dropmenu-enter,
.dropmenu-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

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

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #130f40;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

@media screen and (max-width: 768px) {
  /* #burger {
    display: none;
  } */

  /* #header{
    background: #bdc3c7;
    height: 40vh;
  } */
}
</style>

