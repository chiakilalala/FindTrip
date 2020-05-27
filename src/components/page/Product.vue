<template>
  <div>
    <!-- banner -->
    <div class="hero h-64 bg-cover h-112 overflow-hidden"></div>
    <!--search  -->
    <div
      class="container mx-auto max-w-6xl flex flex-col items-center h-112 lg:h-64 h-auto search-box my-2 ml-0 px-2 lg:px-0"
    >
      <div
        class="shadow-lg flex flex-wrap w-full lg:w-1/2 h-112 lg:h-64 bg-white rounded-lg z-30 relative search-box_inner"
      >
        <div class="pt-0 bg-blue-prod h-1 0 px-5 py-12 w-full rounded-t-lg">
          <div class="flex justify-between lg:mt-2 mt-4 text-gray-200">
            <div
              class="lg:text-xl text-sm lg:tracking-xl md:tracking-normal logo font-light"
            >Find-Trip</div>
            <h3 class="lg:text-2xl text-md font-extrabold">
              <i class="fas fa-plane text-md pr-2 text-gray-300"></i>BOARDING PASS
            </h3>
          </div>
        </div>

        <div class="w-full md:w-1/4 h-auto right-0">
          <div class="w-full lg:w-4/5">
            <div class="barcode sm:w-50">
              <img src="https://www.barcoding.com/wp-content/uploads/2016/09/Picture-111.png" alt />
            </div>
          </div>
        </div>
        <div class="w-full md:w-3/4 h-auto ticket">
          <div class="flex flex-wrap -mx-3 lg:mb-2 mb-0">
            <div class="relative w-full md:w-3/6 lg:px-4 px-6 mb-1 lg:mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                for="grid-state"
              >國家</label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 select-arrow"
              >
                <svg
                  class="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

            <div class="relative w-full md:w-2/6 lg:px-3 lg:px-4 px-6 mb-1 lg:mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-md font-bold mb-2"
                for="grid-state"
              >區域</label>
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 select-arrow"
              >
                <svg
                  class="fill-current h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-2 lg:ml-10 ml-2">
      <div class="flex max-w-6xl mx-auto -mt-32">
        <div class="py-2 lg:px-0 px-2 text-gray-600 text-sm">
          <ul class="list-inline inline-flex hover:underlines">
            <li class>
              <i class="fa fa-home">/</i>
            </li>
            <li>旅行規劃師</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 熱門規劃師 -->
    <section class="bg-chiaki-blue py-10">
      <!-- filter -->
      <div class="container mx-auto max-w-6xl px-4 sm:px-5">
        <div class="py-5 flex">
          <div class="relative mr-8">
            <input
              type="search"
              class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
              placeholder="Search..."
            />
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
                <rect x="0" y="0" width="24" height="24" stroke="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
          </div>
          <div class="relative">
            <select
              class="w-full lg:w-32 min-w-32 appearance-none h-full rounded-md border-solid block appearance-none shadow bg-white border-gray-600 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-blue-200 focus:border-gray-500"
            >
              <option>最多評價</option>
              <option>價錢高低</option>
            </select>
            <div
              class="filter-arrow pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- 類型挑選 -->
        <div class="container mx-auto max-w-6xl px-4 xs:px-4 mb-5">
          <div class="people_wrap my-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center">
            <button class="bg-blue-500">冒險</button>
            <button class="bg-blue-500">秘境</button>
            <button class="bg-blue-500">文化</button>
            <button class="bg-blue-500">吃貨</button>
            <button class="bg-blue-500">宗教</button>
            <button class="bg-blue-500">購物</button>
          </div>
        </div>

        <div class="container mx-auto flex max-w-6xl flex-wrap pb-12 sm:px-4 px-2">
          <!-- Column -->
          <div class="my-4 px-4 w-full lg:w-1/3 mb-8">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?travel=1"
                />
              </a>
              <div class="flex justify-content-end relative people">
                <img
                  alt="Placeholder"
                  class="block rounded-full border-white border-2 shadow"
                  src="https://picsum.photos/50/50/?people=1"
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
                  <span class="tracking-wider text-xs text-gray-500">(12)</span>
                </span>
                <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">冰島</div>
                <p class="text-gray-600 text-sm mt-2">辛格維利爾 海克拉山 蘭德納曼卡 黃金圈</p>
              </header>
              <div class="px-6 pb-4">
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
                >吃貨</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
                >秘境</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white tracking-wider"
                >冒險</span>
              </div>

              <footer class="flex items-center justify-between leading-none px-6 py-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="font-semibold text-md">Author Name</p>
                </a>

                <!-- end star -->

                <span class="flex items-center text-lg text-blue-500">
                  1,000
                  <i class="fa fa-coin"></i>
                </span>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- Column -->
          <div class="my-4 px-4 w-full lg:w-1/3 mb-8">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?travel=2"
                />
              </a>
              <div class="flex justify-content-end relative people">
                <img
                  alt="Placeholder"
                  class="block rounded-full border-white border-2 shadow"
                  src="https://picsum.photos/50/50/?people=2"
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
                  <span class="tracking-wider text-xs text-gray-500">(12)</span>
                </span>
                <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">冰島</div>
                <p class="text-gray-600 text-sm mt-2">辛格維利爾 海克拉山 蘭德納曼卡 黃金圈</p>
              </header>
              <div class="px-6 pb-4">
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wide"
                >吃貨</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2"
                >秘境</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white"
                >冒險</span>
              </div>

              <footer class="flex items-center justify-between leading-none px-6 py-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="font-semibold text-md">Author Name</p>
                </a>

                <!-- end star -->

                <span class="flex items-center text-lg text-blue-500">
                  1,000
                  <i class="fa fa-coin"></i>
                </span>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- Column -->
          <div class="my-4 px-4 w-full lg:w-1/3 mb-8">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?travel=3"
                />
              </a>
              <div class="flex justify-content-end relative people">
                <img
                  alt="Placeholder"
                  class="block rounded-full border-white border-2 shadow"
                  src="https://picsum.photos/50/50/?people=3"
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
                  <span class="tracking-wider text-xs text-gray-500">(12)</span>
                </span>
                <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">冰島</div>
                <p class="text-gray-600 text-sm mt-2">辛格維利爾 海克拉山 蘭德納曼卡 黃金圈</p>
              </header>
              <div class="px-6 pb-4">
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wide"
                >吃貨</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2"
                >秘境</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white"
                >冒險</span>
              </div>

              <footer class="flex items-center justify-between leading-none px-6 py-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="font-semibold text-md">Author Name</p>
                </a>

                <!-- end star -->

                <span class="flex items-center text-lg text-blue-500">
                  1,000
                  <i class="fa fa-coin"></i>
                </span>
              </footer>
            </article>
            <!-- END Article -->
          </div>

          <!-- Column -->
          <div class="my-4 px-4 w-full lg:w-1/3 mb-8">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?travel=1"
                />
              </a>
              <div class="flex justify-content-end relative people">
                <img
                  alt="Placeholder"
                  class="block rounded-full border-white border-2 shadow"
                  src="https://picsum.photos/50/50/?people=1"
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
                  <span class="tracking-wider text-xs text-gray-500">(12)</span>
                </span>
                <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">冰島</div>
                <p class="text-gray-600 text-sm mt-2">辛格維利爾 海克拉山 蘭德納曼卡 黃金圈</p>
              </header>
              <div class="px-6 pb-4">
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
                >吃貨</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wider"
                >秘境</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white tracking-wider"
                >冒險</span>
              </div>

              <footer class="flex items-center justify-between leading-none px-6 py-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="font-semibold text-md">Author Name</p>
                </a>

                <!-- end star -->

                <span class="flex items-center text-lg text-blue-500">
                  1,000
                  <i class="fa fa-coin"></i>
                </span>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- Column -->
          <div class="my-4 px-4 w-full lg:w-1/3 mb-8">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?travel=2"
                />
              </a>
              <div class="flex justify-content-end relative people">
                <img
                  alt="Placeholder"
                  class="block rounded-full border-white border-2 shadow"
                  src="https://picsum.photos/50/50/?people=2"
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
                  <span class="tracking-wider text-xs text-gray-500">(12)</span>
                </span>
                <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">冰島</div>
                <p class="text-gray-600 text-sm mt-2">辛格維利爾 海克拉山 蘭德納曼卡 黃金圈</p>
              </header>
              <div class="px-6 pb-4">
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wide"
                >吃貨</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2"
                >秘境</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white"
                >冒險</span>
              </div>

              <footer class="flex items-center justify-between leading-none px-6 py-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="font-semibold text-md">Author Name</p>
                </a>

                <!-- end star -->

                <span class="flex items-center text-lg text-blue-500">
                  1,000
                  <i class="fa fa-coin"></i>
                </span>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- Column -->
          <div class="my-4 px-4 w-full lg:w-1/3 mb-8">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?travel=3"
                />
              </a>
              <div class="flex justify-content-end relative people">
                <img
                  alt="Placeholder"
                  class="block rounded-full border-white border-2 shadow"
                  src="https://picsum.photos/50/50/?people=s"
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
                  <span class="tracking-wider text-xs text-gray-500">(12)</span>
                </span>
                <div class="text-lg text-gray-800 font-semibold mt-2 mb-3">冰島</div>
                <p class="text-gray-600 text-sm mt-2">辛格維利爾 海克拉山 蘭德納曼卡 黃金圈</p>
              </header>
              <div class="px-6 pb-4">
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2 tracking-wide"
                >吃貨</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white mr-2"
                >秘境</span>
                <span
                  class="inline-block bg-blue-400 rounded-full px-2 py-1 text-xs font-normal text-white"
                >冒險</span>
              </div>

              <footer class="flex items-center justify-between leading-none px-6 py-4">
                <a class="flex items-center no-underline hover:underline text-black" href="#">
                  <p class="font-semibold text-md">Author Name</p>
                </a>

                <!-- end star -->

                <span class="flex items-center text-lg text-blue-500">
                  1,000
                  <i class="fa fa-coin"></i>
                </span>
              </footer>
            </article>
            <!-- END Article -->
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>