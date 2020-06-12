<template>
  <div>
       <!-- 新增按鈕 -->
    <div class="mt-1 mb-3 flex justify-end">
      <el-button
        type="primary"
        
        class="bg-blue-600 rounded px-5 py-3 text-white hover:bg-blue-400 cursor-pointer"
      >
        前 往 儲 值 
        <i class="fa fa-money"></i>
      </el-button>
    </div>
     <div class="flex-1 text-gray-700 text-left  mb-20">
                                <div class="lg:flex ">


                                    <!-- 書籤 -->
                                    <div class=" min-w-full shadow-md rounded-lg block w-full overflow-x-auto">
                                        <table class="border-collapse  table-auto w-full leading-normal  text-left">
                                            <thead>
                                                <tr class="whitespace-no-wrap">
                                                    <th class="px-5 py-3 border-b-2 border-gray-300 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider">
                                                        日期</th>
                                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider">
                                                        時間</th>
                                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-300 text-left text-base font-semibold text-gray-700 tracking-wider">
                                                        項目</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="whitespace-no-wrap">
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">2020.5.5</td>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">14:00</td>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">600 點數</td>

                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">2020.5.5</td>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">14:00</td>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">600 點數</td>

                                                </tr>
                                                <tr>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">2020.5.5</td>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">14:00</td>
                                                    <td class="px-5 py-3 border-b border-gray-200 bg-white text-base">600 點數</td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

  </div>
</template>