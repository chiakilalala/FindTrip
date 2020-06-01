<template>
  <div>
     <div class="main pt-12 md:pt-16 bg-blue-100">

        <!-- <div class=" my-2 lg:ml-10 ml-2">
            <div class="flex max-w-6xl mx-auto ">
                <div class=" py-2  lg:px-0 px-2 text-gray-600 text-sm">
                    <ul class="list-inline inline-flex hover:underlines">
                        <li class=""><i class="fa fa-home"> /</i>
                        </li>
                        <li>旅行規劃師 /</li>
                        <li>名字 個人資訊/</li>
                        <li>訂單資料</li>
                    </ul>
                </div>
            </div>

        </div> -->

       
            <div class="flex container  max-w-6xl  mx-auto ">
                <div class="w-full  flex flex-row flex-wrap justify-center">
                    <div class="container mx-auto  max-w-2xl round-xll overflow-hidden bg-white relative">
                        <div class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head" style="background-image: url(https://content.api.news/v3/images/bin/11990db1d540d5c13ea8ca3e01f2083c)">
                            <p class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">
                                DFW <span class="tracking-normal">--&gt;</span> SEA</p>
                        </div>
                        <div class="p-12 px-22 ">


                            <div class="md:flex mb-8">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">國家 :</label>
                                    <div class="relative">
                                        <select class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal" id="grid-state">
                                    <option>Please select</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                  </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                    <!--<div class="text-sm text-red-600">Error message</div>-->
                                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                                </div>
                                <div class="md:flex-1 md:pl-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">區域 :</label>
                                    <div class="relative">
                                        <select class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal" id="grid-state">
                                      <option>Please select</option>
                                      <option>Option 1</option>
                                      <option>Option 2</option>
                                    </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="md:flex mb-8">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">行程的日期 範圍 :</label>
                                    <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 
                                    px-4 mt-2 block w-full appearance-none leading-normal" type="date">
                                    <!--<div class="text-sm text-red-600">Error message</div>-->
                                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                                </div>
                                <div class="md:flex-1 md:pl-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">預算 :</label>
                                    <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 
                                    px-4 mt-2 block w-full appearance-none leading-normal" type="text" name="address_number" placeholder="#3">

                                    <!--<div class="text-sm text-red-600">Error message</div>-->
                                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                                </div>
                            </div>


                            <div class="mb-8">
                                <fieldset class="border-0 ">
                                    <legend class=" text-gray-700 mb-2 font-bold">
                                        旅行喜好類型 （可多選）
                                    </legend>
                                    <label class="mr-1 text-gray-700 font-bold mb-2 inline-flex items-center">
                    <input class="mr-1 leading-tight form-checkbox h-6 w-6" type="checkbox" name="group">
                    <span class="text-sm">
                     冒險
                    </span>
                  </label>
                                    <label class="mr-1  text-gray-700 font-bold mb-2 inline-flex items-center">
                    <input class="text-indigo-600 mr-1 leading-tight form-checkbox h-6 w-6" type="checkbox" name="group">
                    <span class="text-sm">
                      秘境
                    </span>

                  </label>
                                    <label class=" text-gray-700 font-bold mb-2 inline-flex items-center">
                    <input class="mr-1 leading-tight form-checkbox h-6 w-6" type="checkbox" name="group">
                    <span class=" text-sm">
                     文化
                    </span>

                  </label>
                                    <label class=" text-gray-700 font-bold mb-2 inline-flex items-center">
                    <input class="mr-1 leading-tight form-checkbox h-6 w-6" type="checkbox" name="group">
                    <span class="text-sm">
                    吃貨
                    </span>
                  </label>
                                    <label class=" text-gray-700 font-bold mb-2 inline-flex items-center">
                    <input class="mr-1 leading-tight form-checkbox h-6 w-6" type="checkbox" name="group">
                    <span class="text-sm">
                     購物
                    </span>
                  </label>
                                    <label class=" text-gray-700 font-bold mb-2 inline-flex items-center">
                    <input class="mr-1 leading-tight form-checkbox h-6 w-6" type="checkbox" name="group">
                    <span class="text-sm">
                     宗教
                    </span>
                    </label>

                                    <!--<div class="text-sm text-red-600">Error message</div>-->
                                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                                </fieldset>
                            </div>


                            <div class="md:flex mb-8">
                                <div class="md:flex-1 md:pr-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">大人 : </label>
                                    <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 
                                    px-4 mt-2 block w-full appearance-none leading-normal" type="text" name="address_number" placeholder="#3">
                                    <!--<div class="text-sm text-red-600">Error message</div>-->
                                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                                </div>
                                <div class="md:flex-1 md:pl-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">小孩 :</label>
                                    <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 
                                    px-4 mt-2 block w-full appearance-none leading-normal" type="text" name="address_number" placeholder="#3">
                                    <!--<div class="text-sm text-red-600">Error message</div>-->
                                    <!--<div class="text-xs text-gray-600">Help text</div>-->
                                </div>
                            </div>



                            <div class="mb-6">
                                <label class="block text-gray-700 text-base font-bold mb-2">
                  備註 :
                  <textarea
                    class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mt-2 block w-full appearance-none leading-normal"
                    type="input"></textarea>
                </label>
                                <!--<div class="text-sm text-red-600">Error message</div>-->
                                <!--<div class="text-xs text-gray-600">Help text</div>-->
                            </div>

                            <p class="text-right text-base text-gray-700 font-semibold mb-8"> 本次將扣除 <span class="text-xl text-blue-500">300</span> <span class="ml-1 text-xs text-gray-700  font-semibold transform translate-y-1">點數</span> 購買後將剩餘 <span class="text-xl  text-blue-500">700</span> <span class="ml-1 text-xs text-gray-700  font-semibold transform translate-y-4">點數</span></p>
                            <div class="mb-8">
                                <div class="flex justify-around">
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mx-4">上一步 </button>
                                    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4 ">確認送出 </button>

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- </div> -->
                </div>

            </div>

    

    </div>
  </div>
</template>
<script>
export default {
  
}
</script>