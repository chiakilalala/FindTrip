<template>
  <div>
    <ValidationObserver>
      <div
        class="lg:px-10 pt-3 pb-5 px-2 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <div class="lg:flex flex-col">
          <span class="text-right">
            <span class="text-red-500 text-lg">*</span>為必填項目
          </span>
          <div
            class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
          >
            上傳背景圖
          </div>
          <div class="relative lg:p-4 p-6 lg:flex-shrink-0 w-full">
            <div class="lg:flex-shrink-0 w-full">
              <div
                id=" empty-cover-art"
                class="relative rounded w-full h-auto py-16 px-0 text-center bg-gray-300 md:border-solid md:border-2 md:border-gray-400"
              >
                <img
                  class="absolute inset-y-0 w-full max-h-full object-cover"
                  :src="temPlans.TPBGImg"
                >

                <svg
                  class="mx-auto feather feather-image"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                  />
                  <polyline points="21 15 16 10 5 21" />
                </svg>

                <div class="py-4">
                  Add Cover Art
                </div>
              </div>
            </div>

            <!-- <img  :src="templans.TPBGImg ? templans.TPBGImg : 'https://picsum.photos/600/400/?random' " /> -->
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->

            <div class="flex justify-center mt-2">
              <!-- <input
                type="file"
                name="fileupload-c"
                class="form-control bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white font-thin py-2 px-6 rounded-full lg:ml-4 ml-0 mt-0 text-sm shadow-md"
                ref="fileupload"
                @change="uploadImg"
                />-->

              <div class="flex items-center justify-center border-blue-500 mt-2">
                <label
                  class="w-28 flex items-end py-1 px-3 rounded-full shadow-md bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white cursor-pointer"
                >
                  <svg
                    class="w-6 h-6 pr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                    />
                  </svg>
                  <span class="mt-2 text-sm leading-normal">上傳圖片</span>
                  <input
                    ref="fileupload"
                    type="file"
                    name="fileupload-c"
                    class="hidden"
                    @change="uploadImg"
                  >
                </label>
              </div>
              <!-- 上傳圖片
                <i class="fa fa-upload"></i>-->
            </div>
            <p class="lg:visible hidden text-xs leading-normal">
              上傳背景圖
            </p>
          </div>
        </div>
      </div>

      <div
        class="lg:px-12 px-6 lg:py-5 py-3 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <div class="lg:flex flex-col">
          <div class="lg:flex-shrink-0 p-2 w-full">
            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >簡介</div>

              <quill-editor
                id="fir"
                ref="quillEditorA"
                v-model="temPlans.TravelPlanIntro"
                :options="editorOption"
              />
            </label>

            <label class="block mb-6">
              <div
                class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
              >經歷</div>
              <quill-editor
                id="qq"
                ref="quillEditorB"
                v-model="temPlans.TPExperience"
                :options="editorOption02"
              />
            </label>

            <ValidationProvider
              v-slot="{ errors, classes }"
              rules="required"
              name="點數"
            >
              <label class="block mb-6">
                <div
                  class="text-xl text-gray-600 font-medium mb-3 border-l-4 border-transparent border-blue-400 pl-3"
                >
                  <span class="text-red-500 text-md">*</span>點數設定
                </div>
                <div :class="classes">
                  <input
                    v-model="temPlans.points"
                    class="h-10 bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded px-4 py-1 mt-2 block w-full lg:w-40 appearance-none leading-normal"
                    type="text"
                    name="點數"
                    placeholder="請設定點數"
                  >
                </div>
              </label>
              <div class="text-sm text-red-400">
                {{ errors[0] }}
              </div>
            </ValidationProvider>
          </div>
        </div>
      </div>

      <div
        class="lg:px-10 pt-3 pb-5 px-6 flex-1 text-gray-700 text-left bg-white rounded-lg shadow-lg mb-10"
      >
        <p class="pt-5 text-gray-600 leading-normal text-lg">
          以上資料可以幫助旅行家更了解你的規劃內容
        </p>
        <div class="lg:flex flex-col">
          <div class="lg:flex-shrink-0 py-4 w-full lg:flex">
            <div class="w-full lg:w-1/2 text-xl text-gray-800 leading-normal flex-1">
              <div class="lg:flex-shrink-0 w-full">
                <div
                  id=" empty-cover-art"
                  class="relative rounded w-full h-auto py-16 px-0 text-center bg-gray-300 md:border-solid md:border-2 md:border-gray-400"
                >
                  <img
                    :src="temPlans.Cpicture"
                    alt
                    class="absolute inset-y-0"
                  >
                  <svg
                    class="mx-auto feather feather-image"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />
                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="1.5"
                    />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <div class="py-4">
                    Add Cover Art
                  </div>
                </div>
              </div>
              <div class="lg:mt-4 mt-0 flex items-center mt-4 lg:flex-0 justify-center">
                <p class="lg:visible hidden text-xs leading-normal">
                  上傳圖片
                </p>

                <!-- <input
                  type="file"
                  name="pic-to-upload"
                  ref="files"
                  @change="uploadPic"
                  class="mt-3 bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:bg-blue-500 text-white font-thin py-2 px-4 rounded-full lg:ml-4 ml-0 text-sm shadow-md"
                  />-->

                <div class="flex items-center justify-center border-blue-500 mt-2">
                  <label
                    class="w-28 flex items-end py-1 px-3 rounded-full shadow-md bg-blue-500 border border-blue-500 hover:bg-transparent hover:shadow-xl hover:text-blue-500 text-white cursor-pointer"
                  >
                    <svg
                      class="w-6 h-6 pr-2"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                      />
                    </svg>
                    <span class="mt-2 text-sm leading-normal">上傳圖片</span>
                    <input
                      ref="files"
                      type="file"
                      name="pic-to-upload"
                      class="hidden"
                      @change="uploadPic"
                    >
                  </label>
                </div>
              </div>
            </div>
            <div class="ml-0 lg:ml-10 w-full lg:w-1/2 text-xl text-gray-800 leading-normal">
              <label class="block mb-6">
                <div class="text-md text-gray-600 font-medium mb-3">
                  <span class="text-red-500 text-md">*</span>國家 :
                  <span class="text-gray-500 text-md font-mono">{{ temPlans.country }}</span>
                </div>
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  rules="required"
                  name="國家"
                >
                  <div
                    class="relative inline-block w-full lg:w-48"
                    :class="classes"
                  >
                    <input
                      v-model="temPlans.country"
                      type="text"
                      name="國家"
                      class="max-w-6xl block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                  </div>
                  <div class="text-sm text-red-400">{{ errors[0] }}</div>
                </ValidationProvider>
              </label>

              <label class="block mb-6">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  rules="required"
                  name="城市"
                >
                  <div class="text-md text-gray-600 font-medium mb-3">
                    <span class="text-red-500 text-md">*</span>城市
                    <span class="text-gray-500 text-md font-mono">{{ temPlans.city }}</span>
                  </div>

                  <div
                    class="relative inline-block w-full lg:w-48"
                    :class="classes"
                  >
                    <input
                      v-model="temPlans.city"
                      type="text"
                      name="城市"
                      class="max-w-6xl block appearance-none w-full bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                  </div>
                  <div class="text-sm text-red-400">{{ errors[0] }}</div>
                </ValidationProvider>
              </label>
              <!-- 旅遊類型 -->
              <div class="mb-3">
                <fieldset class="border-0">
                  <legend class="text-gray-600 mb-3 font-bold">
                    制定行程擅長類型 （最多可選3個）
                  </legend>

                  <label class="mr-1 text-gray-600 mb-2 inline-flex items-center">
                    <input
                      v-model="temPlans['Act']"
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                      value="冒險"
                    >
                    <span class="text-base">冒險</span>
                  </label>
                  <label class="mr-1 text-gray-600 mb-2 inline-flex items-center">
                    <input
                      v-model="temPlans['Secret']"
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      value="秘境"
                      name="group"
                    >
                    <span class="text-base">秘境</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      v-model="temPlans['Culture']"
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      value="文化"
                      type="checkbox"
                      name="group"
                    >
                    <span class="text-sm">文化</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      v-model="temPlans['Food']"
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      name="group"
                    >
                    <span class="text-base">吃貨</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      v-model="temPlans['Shopping']"
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      value="購物"
                      type="checkbox"
                      name="group"
                    >
                    <span class="text-base">購物</span>
                  </label>
                  <label class="text-gray-600 mb-2 inline-flex items-center">
                    <input
                      v-model="temPlans['Religion']"
                      class="mr-1 leading-tight form-checkbox h-6 w-6"
                      type="checkbox"
                      value="宗教"
                      name="group"
                    >
                    <span class="text-base">宗教</span>
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <!-- 訂單資料 -->
      </div>

      <div class="mb-12">
        <div
          slot="footer"
          class="flex justify-center dialog-footer"
        >
          <el-button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mx-4"
            @click="dialogVisible = false"
          >
            取消
          </el-button>
          <el-button
            class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full mx-4"
            @click="updatePlan"
          >
            確認送出
          </el-button>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  
}
</script>