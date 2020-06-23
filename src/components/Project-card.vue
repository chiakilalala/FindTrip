<template>
  <div>
    <div class="lg:flex">
      <div class="lg:flex-shrink-0 relative">
        <div
          class="lg:mx-5 mx-4 h-48 lg:w-70 w-52 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l overflow-hidden"
          :style="{backgroundImage:`url(${item.TPBGImg ? item.TPBGImg : 'https://picsum.photos/300/200?random=1' })`}"
        />
      </div>
      <div class="mt-4 lg:mt-0 w-full max-w-full lg:max-w-full lg:pr-8">
        <div class="px-4 mt-8 lg:px-0 lg:mt-0 h-full flex flex-col justify-between">
          <p
            class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
          >
            國家 ：
            <span class="text-md">{{ item.country }}</span>
          </p>
          <p
            class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
          >
            區域 ：
            <!--item.city.join( ',' -->
            <span class="text-md">{{ item.city }}</span>
          </p>
          <p
            class="block lg:mb-4 lg:text-lg mt-0 text-base leading-tight font-semibold text-gray-900"
          >
            上架日期 ：
            <span class="text-md font-thin">{{ item.CreateOn }}</span>
          </p>
          <!-- item.CreateOn.substring(0,10) -->
          <div class="mt-0 lg:flex justify-between">
            <div>
              <span
                :class="{'hidden' : !item.tags['Culture']}"
                class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
              >文化</span>
              <span
                :class="{'hidden' : !item.tags['Religion']}"
                class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
              >宗教</span>
              <span
                :class="{'hidden' : !item.tags['Secret']}"
                class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
              >秘境</span>
              <span
                :class="{'hidden' : !item.tags['Shopping']}"
                class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
              >購物</span>
              <span
                :class="{'hidden' : !item.tags['Act']}"
                class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
              >冒險</span>
              <span
                :class="{'hidden' : !item.tags['Food']}"
                class="inline-block bg-transparent border border-blue-400 px-3 py-1 rounded-full text-xs font-normal text-blue-400 mr-2 tracking-wider"
              >吃貨</span>
            </div>
            <div class="lg:flex-0 flex justify-between items-center">
              <el-button
                class="bg-red-500 hover:bg-red-400 hover:shadow-xl text-white font-thin py-3 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                @click="deleteDialogModal(item)"
              >
                刪除
              </el-button>
              <button
                class="bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-4 rounded lg:ml-4 ml-0 lg:mt-0 mt-8 text-sm shadow-md"
                @click="openModel(false, item)"
              >
                編輯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>