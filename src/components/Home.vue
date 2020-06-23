
/* eslint-disable vue/valid-template-root */
  <!-- 不可以有兩個以上的根節點 -->
<template>
  <div
    id="wrapper"
    @scroll="handleScroll"
  >
    <transition
      v-if="show"
      name="fade"
    >
      <!-- v-if="show" -->
      <div class="sky">
        <img
          src="https://upload.cc/i1/2020/06/22/CX8Hzr.png"
          class="plane"
        >
        <img
          src="https://i.imgur.com/6tncGeG.png"
          class="cloud1"
        >
        <img
          src="https://i.imgur.com/6tncGeG.png"
          class="cloud2"
        >
        <img
          src="https://i.imgur.com/6tncGeG.png"
          class="cloud3"
        >
        <img
          src="https://i.imgur.com/6tncGeG.png"
          class="cloud4"
        >
        <img
          src="https://i.imgur.com/6tncGeG.png"
          class="cloud5"
        >
        <div class="loadingText">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </transition>

    <div class="text-white">
      <!-- NavBar Component -->
      <NavBar />
      <!-- hero -->
      <div class="hero-bg relative overflow-hidden">
        <section
          class="w-full container mx-auto flex flex-wrap max-w-6xl lg:h-screen -mt-1 lg:pt-24"
        >
          <!--Left Col-->
          <div class="main-congent h-12 w-full lg:w-1/2 flex lg:justify-start align-start justify-center mt-32 lg:mt-32">
            <div class="mt-0 max-w-xl px-10 lg:px-6 -ml-3 lg:pr-2 pt-5 lg:pt-0">
              <h1
                class="main-title my-4 text-5xl text-center lg:text-left font-semibold leading-snug text-gray-700 lg:text-gray-700 mb-4"
              >
                Travel More Plan Less
              </h1>
              <p
                class="subtitle text-center lg:text-left font-thin leading-normal text-xl mb-4 md:text-gray-200 lg:text-gray-700"
              >
                專人量身打造行程，滿足您的旅行願望 ，省時旅遊超容易
              </p>

              <div class="my-10">
                <div class="relative overflow-hidden flex">
                  <div
                    class="search-box container mx-auto max-w-6xl flex flex-col items-center h-112 lg:h-64 h-auto my-2 px-2 lg:px-0"
                  >
                    <div
                      class="shadow-lg flex flex-wrap w-full max-w-5xl h-112 lg:h-64 bg-white rounded-lg z-30 relative search-box_inner"
                    >
                      <div class="pt-0 bg-blue-prod h-1 0 px-5 py-12 w-full rounded-t-lg">
                        <div class="flex justify-between lg:mt-2 sm:mt-2 text-gray-200">
                          <div
                            class="lg:text-xl sm:text-2xl lg:tracking-xl md:tracking-normal font-bold"
                          >
                            Find-Trip
                          </div>
                          <h3 class="lg:text-2xl text-md font-extrabold">
                            <i class="fas fa-plane text-md pr-2 text-gray-300" />BOARDING PASS
                          </h3>
                        </div>
                      </div>

                      <!--shadow-lg rounded-lg <div class="w-full md:w-1/4 h-auto right-0">
         
                      </div>   md:w-3/4-->
                      <div class="w-full h-auto ticket sm:h-20">
                        <div class="flex flex-wrap lg:mb-2 mb-0">
                          <div class="relative w-full px-6 mb-1 lg:mb-6 md:mb-0">
                            <label
                              class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                              for="grid-state"
                            >請輸入體驗國家 或城市..</label>
                            <div class="relative flex w-full">
                              <input
                                v-model="searchText"
                                type="search"
                                class="rounded-r-none h-12 w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                placeholder="請輸入國家 或城市..."
                              >
                              <div class="absolute top-0 left-0 inline-flex items-center p-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-6 h-6 text-gray-400"
                                  viewBox="0 0 24 24"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <rect
                                    x="0"
                                    y="0"
                                    width="24"
                                    height="24"
                                    stroke="none"
                                  />
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="7"
                                  />
                                  <line
                                    x1="21"
                                    y1="21"
                                    x2="15"
                                    y2="15"
                                  />
                                </svg>
                              </div>

                              <button
                                class="items-center rounded-l-none rounded-lg flex bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline hover:bg-darken text-white py-2 px-4 cursor-pointer"
                                @click="searchData"
                              >
                                <i class="fas fa-search fa-lg" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 滑鼠下滑 icon-->
       
                <!-- <Mouse /> -->
              </div>
            </div>
          </div>

          <!--Right Col-->
          <div class="sm:h-20 h-screen w-full lg:h-full lg:w-1/2 relative">
            <div class="absolute inset-0 lg:mt-10 mt-8 airplane">
              <img
                src="../assets/img/airplane.png"
                alt
                class="w-1/4 lg:w-2/5"
              >
            </div>
          </div>
        </section>
     

        <div class="clouds">
          <img
            src="../assets/img/cloud1.png"
            alt
            style="--i:1;"
          >
          <img
            src="../assets/img/cloud2.png"
            alt
            style="--i:2;"
          >
          <img
            src="../assets/img/cloud3.png"
            alt
            style="--i:3;"
          >
          <img
            src="../assets/img/cloud4.png"
            alt
            style="--i:4;"
          >
          <img
            src="../assets/img/cloud5.png"
            alt
            style="--i:5;"
          >
        </div>
      </div>
      <div class="relative -mt-0 lg:-mt-1 transform rotate-180">
        <!--lg:-mt-24-->
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              />
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              />
              <path
                id="Path-4"
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                opacity="0.200000003"
              />
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
              />
            </g>
          </g>
        </svg>
      </div>

      <!-- feature -->
      <section class="bg-white py-8 pb-0 gradient-blue relative">
        <div class="w-full mb-5">
          <div
            class="mx-auto bg-blue-200 border-4 border-white w-20 h-20 my-0 py-0 rounded-full flex items-center"
          >
            <img
              src="../assets/img/section01.png"
              alt
            >
          </div>
        </div>
        <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4">
          <h1
            v-scroll-reveal.reset
            class="w-full my-2 text-4xl lg:text-5xl font-bold leading-tight text-center text-gray-300"
          >
            How to Start ?
          </h1>
          <div class="w-full mb-5">
            <p class="leading-tight text-base text-center tracking-widest relative heading-sub">
              如何使用
            </p>
          </div>

          <div
            v-scroll-reveal.reset="{ delay: 250 }"
            class="-ml-3 w-full md:w-1/4 py-6 px-4 flex flex-col flex-grow flex-shrink relative"
          >
            <div class="flex-1 bg-white rounded-lg overflow-hidden shadow arrow-step">
              <div class="flex items-center justify-center">
                <div
                  class="mx-auto lg:mx-0 bg-blue-600 text-white rounded-full mt-6 mb-4 py-2 px-8"
                >
                  Step 01
                </div>
              </div>
              <div class="flex items-center justify-center mb-3 w-46 mx-auto">
                <img
                  src="../assets/img/feature001.png"
                  alt="feature001.png"
                >
              </div>

              <div
                class="w-full font-bold text-base text-center text-gray-800 px-6 pb-6"
              >
                決定好旅行的區域、預算
              </div>
            </div>
          </div>
          <!-- step01 -->

          <div
            v-scroll-reveal.reset="{ delay: 450 }"
            class="w-full md:w-1/4 py-6 px-4 flex flex-col flex-grow flex-shrink relative"
          >
            <div class="flex-1 bg-white rounded-lg overflow-hidden shadow arrow-step">
              <div class="flex items-center justify-center">
                <div
                  class="mx-auto lg:mx-0 bg-blue-600 text-white rounded-full mt-6 mb-4 py-2 px-8"
                >
                  Step 02
                </div>
              </div>
              <div class="flex items-center justify-center mb-3 w-46 mx-auto">
                <img
                  src="../assets/img/feature002.png"
                  alt="feature002.png"
                >
              </div>

              <div
                class="w-full font-bold text-base text-center text-gray-800 px-6 pb-6"
              >
                尋找專屬您的旅行規劃師
              </div>
            </div>
          </div>
          <!-- step02 -->
          <div
            v-scroll-reveal.reset="{ delay: 650 }"
            class="w-full md:w-1/4 py-6 px-4 flex flex-col flex-grow flex-shrink relative"
          >
            <div class="flex-1 bg-white rounded-lg overflow-hidden shadow">
              <div class="flex items-center justify-center">
                <div
                  class="mx-auto lg:mx-0 bg-orange-600 text-white rounded-full mt-6 mb-4 py-2 px-8"
                >
                  Step 03
                </div>
              </div>
              <div class="flex items-center justify-center mb-3 w-46 mx-auto">
                <img
                  src="../assets/img/feature003.png"
                  alt="feature003.png"
                >
              </div>

              <div class="w-full font-bold text-base text-center text-gray-800 px-6 pb-6">
                享受量身打造旅程
              </div>
            </div>
          </div>

          <!-- step03 -->
        </div>

        <div class="relative -mt-12 lg:-mt-10">
          <!--lg:-mt-24-->
          <svg
            id="data-bg-top"
            viewBox="0 0 3000 760"
            preserveAspectRatio="none"
          >
            <path
              d="M0 760h3000V68.7C2930 36.5 2825.1.2 2712.3 0c-155.9-.3-370.4 59.3-513.3 180.5-206.7 175.1-472 143.6-554 124-182.6-43.8-156.4-143.2-450-140-212.8 2.3-263.7 120.5-491 243-179.3 96.6-580.1 65.8-704-41.8V760z"
            />
          </svg>
        </div>
      </section>

      <!-- 熱門規劃師 Component -->
      <section
        v-scroll-reveal.reset="{ delay: 250 }"
        class="bg-chiaki-blue"
      >
        <div class="w-full mb-5">
          <div
            class="mx-auto bg-blue-200 border-4 border-white w-20 h-20 my-0 py-0 rounded-full flex items-center"
          >
            <img
              src="../assets/img/section02.png"
              alt
            >
          </div>
        </div>
        <div class="container mx-auto flex max-w-7xl flex-wrap pb-12 sm:px-4">
          <h1
            class="w-full my-2 font-bold leading-tight text-center text-blue-600 text-4xl lg:text-5xl"
          >
            Recommend
          </h1>
          <div class="w-full mb-5">
            <p
              class="leading-tight text-base text-center tracking-widest text-gray-700 relative heading-sub"
            >
              熱門規劃師
            </p>
          </div>
          <Travel-card
            v-scroll-reveal.reset="{ delay: 250 }"
            :project="recommends"
          />
        </div>
      </section>

      <!-- 網站特色 -->

      <section class="bg-chiaki-blue pt-24">
        <div class="w-full mb-5">
          <div
            class="mx-auto bg-blue-200 border-4 border-white w-20 h-20 my-0 py-0 rounded-full flex items-center"
          >
            <img
              src="../assets/img/section03.png"
              alt
            >
          </div>
        </div>
        <div class="container mx-auto flex max-w-7xl flex-wrap pb-12">
          <h1
            v-scroll-reveal.reset="{ delay: 250 }"
            class="w-full my-2 text-4xl lg:text-5xl font-bold leading-tight text-center text-blue-600"
          >
            Feature
          </h1>
          <div class="w-full mb-5">
            <p
              class="leading-tight text-base text-center tracking-widest text-gray-700 relative heading-sub"
            >
              打造您的完美旅行
            </p>
          </div>

          <div class="mt-12 sm:flex items-start justify-between sm:-mx-2">
            <div
              v-scroll-reveal.reset="{ delay: 450 }"
              class="max-h-350 w-full bg-white rounded-lg shadow-lg py-8 px-4 sm:w-1/3 sm:mx-2 lg:mx-6"
            >
              <div class="h-24">
                <img
                  src="../assets/img/icon_home-01.png"
                  alt
                  class="w-32 mx-auto"
                >
              </div>
              <h4 class="text-center text-xl text-gray-800 font-bold mt-10">
                為什麼選擇尋旅？
              </h4>
              <p
                class="text-base text-gray-600 mt-2 leading-loose"
              >
                擁有各路旅遊大師精選秘境景點 ，不用透過旅行社花大錢 ，只要小額購買旅行規劃師時間， 也可小資玩全球，省時又簡單！
              </p>
            </div>

            <div
              v-scroll-reveal.reset="{ delay: 550 }"
              class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6"
            >
              <div class="h-24">
                <img
                  src="../assets/img/icon-home-02.png"
                  alt
                  class="w-32 mx-auto"
                >
              </div>
              <h4 class="text-center text-xl text-gray-800 font-bold mt-10">
                嚴格謹慎的規劃師篩選
              </h4>
              <p
                class="text-base text-gray-600 mt-2 leading-loose"
              >
                成為旅行大師們可不是說說而已 ，尋旅上的每個規劃師都是透過嚴謹的內部審核， 才能提供好玩又有趣的旅行計劃
              </p>
            </div>

            <div
              v-scroll-reveal.reset="{ delay: 650 }"
              class="w-full bg-white rounded-lg shadow-lg py-8 px-4 mt-6 sm:mt-0 sm:w-1/3 sm:mx-2 lg:mx-6"
            >
              <div class="h-24">
                <img
                  src="../assets/img/icon-home-03.png"
                  alt
                  class="w-32 mx-auto"
                >
              </div>
              <h4 class="text-center text-xl text-gray-800 font-bold mt-10">
                小額費用享用完善服務
              </h4>
              <p
                class="text-base text-gray-600 mt-2 leading-loose leading-loose"
              >
                尋旅不只提供專屬你的規劃師服務， 也能找尋最適合您的交通規劃與住宿，讓旅行規劃師幫您完善打理您的旅途
              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="relative -mt-12 lg:-mt-10 pb-12">
        <svg
          id="life-bg-bottom"
          viewBox="0 0 3000 210"
          preserveAspectRatio="none"
        >
          <path
            d="M3000 0H0v149c7-.3 14.7 0 23.1 1.1 60.3 8 94.4 48.7 161.6 50.8 171.8 5.3 192-70.9 304-70.5 116.5.5 187.2 76.4 401 79.5 155.3 2.2 146.8-43.7 286-52 115.5 7.8 132.2 49.8 300.5 49.8 83.4 0 172.2-43.8 328.5-43.8 106 0 155.3 43 254.1 43 98.8 0 196.3-81.2 279-110 110-38.3 231.4 46.2 317.9 43 66.8-2.5 104.2-27.9 178-26 85.4 2.3 106.9 54.7 166.4 76.6V0z"
          />
        </svg>
      </div>

      <!-- 許願池  Component-->
      <section class="gradient-blue">
        <div
          v-scroll-reveal.reset="{ delay: 250 }"
          class="w-full mb-5 mt-2"
        >
          <div
            class="mx-auto bg-blue-200 border-4 border-white w-20 h-20 my-0 py-0 rounded-full flex items-center"
          >
            <img
              src="../assets/img/section04.png"
              alt
            >
          </div>
        </div>
        <div class="container mx-auto flex max-w-7xl flex-wrap pb-12">
          <h1
            class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-100"
          >
            Wishing board
          </h1>
          <div class="w-full mb-5">
            <p
              class="leading-tight text-base text-center tracking-widest text-gray-100 relative heading-sub"
            >
              許下理想行程
            </p>
          </div>
          <!-- wishboard -->
          <div
            v-for="item in homeWish"
            :key="item.id"
            class="w-full md:w-1/2 lg:w-1/4 flex flex-col mb-8 mt-4 px-3 cursor-pointer"
            @click="getWish(item.id)"
          >
            <div
              class="min-h-180 overflow-hidden bg-white round-xll shadow hover:shadow-md transition duration-500 ease-in-out transform hover:bg-gray-200 hover:-translate-y-8"
            >
              <div class="p-6 flex flex-col justify-between">
                <div class="flex items-center">
                  <div class="flex items-center">
                    <img
                      class="border-gray-500 shadow border-2 w-10 h-10 rounded-full mr-3 flex-1"
                      :src=" item.manpic ? item.manpic : 'https://picsum.photos/50/50/?people=4'"
                      alt="people"
                    >
                  </div>

                  <span class="font-medium text-gray-600 font-bold leading-normal">{{ item.name }}</span>
                </div>

                <p class="inline-flex items-center py-4">
                  <span class="text-gray-700 text-sm">我想去{{ item.Comment1 }} 想做 {{ item.Comment2 }}</span>
                </p>

                <!-- 評論點數 -->
                <div class="flex items-center justify-end py-2">
                  <div class="text-gray-600 flex hover:text-blue-500 items-center mr-2">
                    <span
                      class="w-8 h-8 hover:bg-blue-200 rounded-full flex items-center justify-center hover:text-blue-500"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                      >
                        <g>
                          <path
                            d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span class="ml-1">{{ item.CommentTotal }}</span>
                  </div>

                  <div class="text-gray-600 flex hover:text-red-500 items-center mr-2">
                    <span
                      class="w-8 h-8 hover:bg-red-200 rounded-full flex items-center justify-center hover:text-red-500"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        class="w-4 h-4 fill-current"
                      >
                        <g>
                          <path
                            d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span class="ml-0">{{ item.LikeTotal }}</span>
                  </div>

                  <!-- 收藏功能 -->
                  <!-- <div
              class="text-gray-600 flex hover:text-red-500 items-center justify-content-end mx-2"
            >
              <a
                href="#"
                class="w-4 h-4 hover:bg-gray-300 rounded-full flex items-center justify-center hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-4 h-4 fill-current stroke-1"
                >
                  <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z" />
                </svg>
              </a>
                  </div>-->
                </div>
              </div>
            </div>
          </div>
          <!-- <WishBoard v-scroll-reveal.reset="{ delay: 450 }" :wishList="homeWish"   /> -->

          <div class="py-5 mx-auto outline-none">
            <router-link
              to="/wish"
              class="bg-orange-500 outline-none hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
            >
              更多內容
            </router-link>
          </div>

          <ZDialog
            v-if="commentVisible"
            :z-dialog="commentVisible"
            :wish-message="wishMessage"
            @dialog-cancel="closeManage"
          />
        </div>
      </section>

      <!-- 成為旅行規劃師 -->

      <section class="bg-white py-8">
        <div class="flex-col-reverse lg:flex-row container max-w-7xl mx-auto my-8">
          <div class="flex flex-wrap flex-col-reverse lg:flex-row">
            <div class="lg:visible w-full sm:w-1/2 mt-6 relative">
              <img
                src="../assets/img/bg_day.svg"
                alt="bg_day.svg"
                class="Sday"
              >
              <div class="car">
                <svg
                  width="307"
                  height="210"
                  viewBox="0 0 307 210"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M153.424 201.22c84.677 0 153.424-.013 153.424 4.39 0 4.404-68.747 4.39-153.424 4.39S0 210.044 0 205.61c0-4.433 68.747-4.39 153.424-4.39z"
                      fill="#DDD"
                    />
                    <path
                      d="M280.472 182.785c0-2.908-2.49-5.268-5.56-5.268H41.608c-3.068 0-5.559 2.36-5.559 5.268 0 2.907 2.49 5.267 5.559 5.267h233.306c3.069 0 5.559-2.36 5.559-5.267z"
                      fill="#138184"
                    />
                    <path
                      d="M208.376 95.871c0-7.268-5.89-13.168-13.144-13.168h-88.013c-7.254 0-13.142 5.9-13.142 13.168 0 7.268 5.888 13.169 13.142 13.169h88.013c7.254 0 13.144-5.9 13.144-13.169z"
                      fill="#FFF"
                    />
                    <path
                      d="M242.665 120.453c0-7.268-5.89-13.169-13.142-13.169h-88.014c-7.253 0-13.143 5.901-13.143 13.169 0 7.268 5.89 13.169 13.143 13.169h88.014c7.253 0 13.142-5.901 13.142-13.169z"
                      fill="#FFF"
                    />
                    <path
                      d="M192.55 38.366c0-7.51-5.95-13.606-13.279-13.606H95.046c-7.329 0-13.278 6.096-13.278 13.606v2.638c0 7.51 5.949 13.605 13.278 13.605h84.225c7.33 0 13.279-6.096 13.279-13.605v-2.638z"
                      fill="#F0AEA8"
                    />
                    <path
                      d="M176.724 11.383c0-6.183-4.974-11.204-11.1-11.204h-57.81c-6.125 0-11.1 5.021-11.1 11.204v2.173c0 6.184 4.975 11.204 11.1 11.204h57.81c6.126 0 11.1-5.02 11.1-11.204v-2.173z"
                      fill="#88D4DA"
                    />
                    <path
                      d="M192.55 38.366c0-7.51-5.93-13.606-13.235-13.606h-73.762c-7.305 0-13.235 6.096-13.235 13.606v2.638c0 7.51 5.93 13.605 13.235 13.605h73.762c7.305 0 13.235-6.096 13.235-13.605v-2.638z"
                      fill="#E4968F"
                    />
                    <path
                      d="M177.603 11.383C177.603 5.2 172.605.18 166.449.18h-50.668c-6.155 0-11.154 5.021-11.154 11.204v2.173c0 6.184 4.999 11.204 11.154 11.204h50.668c6.156 0 11.154-5.02 11.154-11.204v-2.173z"
                      fill="#65C0C0"
                    />
                    <path
                      d="M73.696 45.83c-.398 0-.72.394-.72.879v1.755c0 .485.322.878.72.878H202.38c.397 0 .72-.393.72-.878v-1.755c0-.485-.323-.879-.72-.879H73.696z"
                      fill="#999"
                    />
                    <path
                      d="M78.25 58.962c0 .505.493.915 1.1.915h2.198c.607 0 1.099-.41 1.099-.915V49.38c0-.505-.492-.915-1.1-.915H79.35c-.607 0-1.1.41-1.1.915v9.583zM192.55 58.962c0 .505.492.915 1.098.915h2.199c.606 0 1.099-.41 1.099-.915V49.38c0-.505-.493-.915-1.099-.915h-2.199c-.606 0-1.098.41-1.098.915v9.583z"
                      fill="#999"
                    />
                    <path
                      d="M280.472 109.024c0-22.53-24.413-55.095-43.9-55.292H79.705c-40.518 0-44.537 17.706-44.537 58.063v40.043c0 18.05 14.708 32.703 32.824 32.703h179.655c18.117 0 32.824-14.654 32.824-32.703v-42.814z"
                      fill="#E9E9E9"
                    />
                    <path
                      d="M241.392 125.72c-38.56.005-206.223.044-206.223.044v32.014c0 2.625.465 5.164 1.33 7.562 4.007 11.093 16.599 19.2 31.495 19.2l184.977-.37c10.67 0 16.93-1.265 21.792-7.624 5.567-7.282 5.831-10.56 5.68-26.522-.03-3.23-6.846-12.053-12.835-15.991-5.988-3.939-13.42-8.314-26.216-8.313z"
                      fill="#26BEC9"
                    />
                    <path
                      d="M272.838 86.75c-2.86-5.351-7.356-11.922-7.356-11.922l-68.4-.027c-5.414 0-9.808 4.23-9.808 9.438v18.875c0 5.209 4.394 9.438 9.807 9.438l81.61-.019s.161-4.78-.38-8.675c-.92-6.637-2.849-12.198-5.473-17.109zM178.482 85.117c0-5.209-4.204-9.438-9.383-9.438h-48.935c-5.178 0-9.382 4.23-9.382 9.438v18.875c0 5.209 4.204 9.438 9.382 9.438H169.1c5.179 0 9.383-4.23 9.383-9.438V85.117z"
                      fill-opacity="0.5"
                      fill="#FFF"
                    />
                    <path
                      d="M181.12 85.117c0-5.209-4.204-9.438-9.383-9.438h-48.935c-5.178 0-9.382 4.229-9.382 9.438v18.875c0 5.209 4.204 9.438 9.382 9.438h48.935c5.179 0 9.383-4.23 9.383-9.438V85.117z"
                      fill-opacity="0.5"
                      fill="#BCBCBC"
                    />
                    <path
                      d="M100.231 85.117c0-5.209-4.247-9.438-9.48-9.438H55.2c-5.232 0-9.48 4.229-9.48 9.438v18.875c0 5.209 4.248 9.438 9.48 9.438h35.553c5.232 0 9.48-4.23 9.48-9.438V85.117z"
                      fill-opacity="0.5"
                      fill="#FFF"
                    />
                    <path
                      d="M103.748 85.117c0-5.209-4.249-9.438-9.48-9.438H58.716c-5.232 0-9.48 4.23-9.48 9.438v18.875c0 5.209 4.248 9.438 9.48 9.438h35.552c5.231 0 9.48-4.23 9.48-9.438V85.117z"
                      fill-opacity="0.5"
                      fill="#BCBCBC"
                    />
                    <path
                      d="M51.845 133.622c-.469 0-.85.393-.85.877v1.756c0 .485.381.878.85.878h35.226c.47 0 .851-.393.851-.878V134.5a.865.865 0 0 0-.851-.877H51.845zM51.845 140.645c-.469 0-.85.393-.85.878v1.756c0 .484.381.878.85.878h35.226c.47 0 .851-.394.851-.878v-1.756a.865.865 0 0 0-.851-.878H51.845z"
                      fill-opacity="0.404"
                      fill="#FFF"
                    />
                    <path
                      d="M274.27 86.903c-2.839-5.348-7.012-11.2-7.012-11.2l-67.603-.024c-5.378 0-9.743 4.226-9.743 9.433v18.868c0 5.207 4.365 9.434 9.743 9.434l80.781.016s.198-4.872-.339-8.767c-.916-6.634-3.22-12.85-5.827-17.76z"
                      fill-opacity="0.5"
                      fill="#BCBCBC"
                    />
                    <path
                      fill="#C77D76"
                      d="M81.768 40.563H192.55v-2.634H81.768z"
                    />
                    <path
                      fill="#C5E5E7"
                      d="M96.714 14.225h80.01v-2.633h-80.01z"
                    />
                    <path
                      d="M271.68 145.912c2.912 0 5.275 4.721 5.275 10.535 0 5.815-2.363 10.535-5.275 10.535-2.912 0-5.276-4.72-5.276-10.535 0-5.814 2.364-10.535 5.276-10.535z"
                      fill="#E6C06D"
                    />
                    <path
                      d="M276.076 183.663c0-1.938-1.632-3.512-3.641-3.512h-32.283c-2.01 0-3.641 1.574-3.641 3.512s1.63 3.511 3.64 3.511h32.284c2.01 0 3.64-1.573 3.64-3.511zM80.888 182.785c0-1.938-1.599-3.512-3.568-3.512H41.375c-1.97 0-3.568 1.574-3.568 3.512s1.599 3.511 3.568 3.511H77.32c1.97 0 3.568-1.573 3.568-3.511z"
                      fill="#138184"
                    />
                    <g id="wheel-1">
                      <path
                        d="M225.52 158.203c12.86 0 23.3 10.425 23.3 23.265s-10.44 23.265-23.3 23.265c-12.858 0-23.299-10.425-23.299-23.265s10.441-23.265 23.3-23.265z"
                        fill="#666"
                      />
                      <path
                        d="M226.4 166.982c8.492 0 15.386 6.884 15.386 15.364s-6.894 15.363-15.386 15.363c-8.491 0-15.387-6.884-15.387-15.363 0-8.48 6.896-15.364 15.387-15.364z"
                        fill="#999"
                      />
                      <path
                        d="M232.099 185.276c3.145-5.469-4.096-15.586 1.351-12.429 5.447 3.158 7.316 10.161 4.172 15.63-3.146 5.468-10.12 7.345-15.568 4.188-5.447-3.158 6.9-1.92 10.045-7.39z"
                        fill="#B8B7B7"
                      />
                    </g>
                    <path
                      d="M273.438 147.668c2.426 0 4.396 4.13 4.396 9.218s-1.97 9.218-4.396 9.218-4.396-4.13-4.396-9.218c0-5.087 1.97-9.218 4.396-9.218z"
                      fill="#EDCC86"
                    />
                    <path
                      d="M156.501 37.93c0-.97-.766-1.757-1.71-1.757h-34.385c-.945 0-1.711.787-1.711 1.756v3.512c0 .969.766 1.756 1.71 1.756h34.386c.944 0 1.71-.787 1.71-1.756v-3.512z"
                      fill="#C45F56"
                    />
                    <path
                      d="M151.226 11.372c0-.847-.66-1.536-1.474-1.536h-25.187c-.814 0-1.474.69-1.474 1.536v3.073c0 .848.66 1.536 1.474 1.536h25.187c.814 0 1.474-.688 1.474-1.536v-3.073z"
                      fill="#5EA1A6"
                    />
                    <g id="wheel-2">
                      <path
                        d="M87.482 158.203c12.86 0 23.3 10.425 23.3 23.265s-10.44 23.265-23.3 23.265c-12.859 0-23.299-10.425-23.299-23.265s10.44-23.265 23.3-23.265z"
                        fill="#666"
                      />
                      <path
                        d="M87.482 166.982c8.493 0 15.387 6.884 15.387 15.364s-6.894 15.363-15.387 15.363c-8.491 0-15.386-6.884-15.386-15.363 0-8.48 6.895-15.364 15.386-15.364z"
                        fill="#999"
                      />
                      <path
                        d="M92.303 185.276c3.145-5.469-4.096-15.586 1.351-12.429 5.447 3.158 7.316 10.161 4.171 15.63-3.145 5.468-10.12 7.345-15.567 4.188-5.447-3.158 6.9-1.92 10.045-7.39z"
                        fill="#B8B7B7"
                      />
                    </g>
                    <path
                      d="M35.169 144.742c0-.323-.296-.585-.66-.585h-1.318c-.364 0-.66.262-.66.585v14.632c0 .323.296.585.66.585h1.318c.364 0 .66-.262.66-.585v-14.632z"
                      fill="#CCC"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="w-full sm:w-1/2 mt-6">
              <div class="ml-10">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  如何成為旅行規劃師？
                </h3>
                <p
                  class="text-gray-600 mb-8 text-base leading-loose"
                >
                  想跟更多的人分享您的旅行感悟嗎?想通過智力服務獲取不菲的經濟收入嗎?想看到遊客旅行之後露出滿意的微笑嗎? 加入Find Trip 吧!
                </p>
                <div class="outline-none">
                  <button
                    class="bg-orange-500 outline-none hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    申請成為旅行規劃師
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Footer Component-->
      <!-- 海浪特效 -->
      <Footer />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import $ from "jquery";
import store from "@/store";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import TravelCard from "@/components/TravelCard.vue";
import WishBoard from "@/components/WishBoard.vue";
import ZDialog from "@/components/ZDialog.vue";

import Loading from "@/components/Loading.vue";
// import Mouse from "@/components/MouceIcon.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      show: true,
      filterData: [],
      showAnimate: false,
      searchText: "",
      commentVisible: false,
      wishMessage: {}
    };
  },
  components: {
    NavBar,
    Footer,
    TravelCard,
    WishBoard,
    ZDialog,
  
  },
  computed: {
    ...mapState(["projects"], ["userInfo"], ["Permission"], ["wishList"]),

    // project(){
    //   return store.state.projects
    // },
    recommends() {
      const project = [...this.projects];
      // console.log(project);
      return project.sort((a, b) => b.star - a.star).splice(0, 3); //取亂數
      //讓星星最多在上面
    },
    homeWish() {
      const wish = [...this.$store.state.wishList];
      return wish.sort(() => Math.random() - 0.5).splice(0, 4);
    }
  },
  methods: {
    handleScroll: function() {
      let scrollHeight = $(window).scrollTop();
      //  console.log("重要参考："+scrollHeight);
      if (scrollHeight > 3500) {
        $(".car").addClass("animated");

        this.showAnimate = true;
      }
    },
    closeManage() {
      this.commentVisible = false;
    },
    beforeClose(done) {
      //dialog關掉的xx

      this.commentVisible = false;
      done();
    },
    getWish(id) {
      //旅行家觀看單一許願板

      const vm = this;

      let api = `${process.env.VUE_APP_APIPATH}wish/inner/${id}`;
      this.$http.get(api).then(res => {
        if (res.data.success) {
          vm.wishMessage = res.data.result;
          vm.commentVisible = true;
          // console.log(vm.wishMessage);
        }
      });
    },
    open() {
      this.show = true;
    },
    searchData() {
      let api = `${process.env.VUE_APP_APIPATH}plan/search?search=${this.searchText}`;
      this.$http
        .get(api)
        .then(res => {
          console.log(res);
          if (res.data.success) {
            //  this.porjects = res.data.result;
            // this.$store.commit('setProjectInfo', res.data.result);
          }
          this.$router.push({
            name: "Product",
            query: { search: this.searchText }
          });
          // this.projects =
        })
        .catch(err => {
          console.log(err);
        });
    },
    //api 動作
    ...mapActions(["getProjects"], ["getOneUser"]),
    ...mapMutations(
      ["changeLogin"],
      ["loginStart"],
      ["UPDATE_USER"],
      ["PREMISSION"],
      ["WISHMESSAGE"]
    )
  },
  mounted() {
    const vm = this;
    setTimeout(() => {
      vm.show = false;
    }, 3500);
    window.addEventListener("scroll", this.handleScroll, true);
  },
  created() {
    this.getProjects();

    this.$store.dispatch("getOneUser");
    // console.log(this.homeWish)
  }
};
</script>
<style scoped>
.search-box {
  position: relative;
  top: 0px;
  max-height: 18rem;
  /* margin-bottom: -126px; */
  margin: 0 auto;
  /* margin-top: -79px; */
}
.search-box_inner:before {
  content: "";
  background-image: url(/img/map_bg.1199acf2.png);
  background-size: cover;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: bottom center;
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: 24%;
  width: 80%;
  height: 80%;
}
.ticket:before {
  display: none;
}
.clouds img {
  max-width: 67%;
}
.hero-bg {
  height: 79vh;
  background-position: top bottom;
}
.min-h-180 {
  max-height: 215px;
}
.max-h-350 {
  max-height: 350px;
}
.form-head:before,
.form-head:after {
  background-color: #fff;
}
#wrapper {
  background: linear-gradient(90deg, #0a65c2 0%, #bee3f8 100%);
}
/* this is boat.svg css */

.cls-1 {
  fill: #fff;
}

.cls-2 {
  fill: #ebebeb;
}

.cls-3 {
  fill: #6e5541;
}

.cls-4 {
  fill: #fff0d1;
}

.cls-5 {
  fill: #f5e0b3;
}

.cls-6 {
  fill: #448cbc;
}

.cls-7 {
  fill: #32688c;
}

.cls-8 {
  fill: #2b5978;
}

.cls-9 {
  opacity: 0.5;
}
</style>