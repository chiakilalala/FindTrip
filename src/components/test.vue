<template>
  <div>
   <div class="main pt-12 md:pt-16 bg-blue-100">

        <div class=" my-2 lg:ml-10 ml-2">
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

        </div>


        <div class="flex container  max-w-6xl  mx-auto ">
            <div class="w-full  flex flex-col flex-wrap justify-center">
                <h1 class="text-center text-2xl mb-3">這是妳的訂單喔喔喔喔</h1>
                <div class="container mx-auto  max-w-2xl round-xll overflow-hidden bg-white relative">
                    <div class="bg-cover bg-center h-24 p-4 flex justify-end items-center form-head" style="background-image: url(https://content.api.news/v3/images/bin/11990db1d540d5c13ea8ca3e01f2083c)">
                        <p class="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">
                            DFW <span class="tracking-normal">--&gt;</span> SEA</p>
                    </div>
                    <div class="p-12 px-22 ">

                        <div class="md:flex mb-8">
                            <div class="md:flex-1 md:pr-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">會員姓名: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">阿里巴巴ㄚ</p>
                                <!--<div class="text-sm text-red-600">Error message</div>-->
                                <!--<div class="text-xs text-gray-600">Help text</div>-->
                            </div>
                            <div class="md:flex-1 md:pl-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">電子信箱: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">chikilalal@gmail.com</p>

                            </div>
                        </div>

                        <div class="md:flex mb-8">
                            <div class="md:flex-1 md:pr-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">國家: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">日本</p>
                                <!--<div class="text-sm text-red-600">Error message</div>-->
                                <!--<div class="text-xs text-gray-600">Help text</div>-->
                            </div>
                            <div class="md:flex-1 md:pl-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">區域: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">京都 大阪 神戶</p>

                            </div>
                        </div>

                        <div class="md:flex mb-8">
                            <div class="md:flex-1 md:pr-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">行程的日期 範圍 : </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">2020.12.11 <span>~ </span>2020.12.17</p>

                            </div>
                            <div class="md:flex-1 md:pl-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">預算: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">NT$4,5000 ~ NT$6,0000</p>

                            </div>
                        </div>


                        <div class="mb-8">
                            <fieldset class="border-0 ">
                                <legend class=" text-gray-700 mb-2 font-bold">
                                    旅行喜好類型 : </legend>
                                <div class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center">
                                    <button class="bg-blue-500">
                冒險</button><button class="bg-blue-500">秘境</button><button class="bg-blue-500">文化</button><button class="bg-blue-600">吃貨</button>
                                    <button class="bg-blue-600">宗教</button><button class="bg-blue-600">購物</button><button class="bg-blue-600">吃貨</button>
                                </div>

                                <!--<div class="text-sm text-red-600">Error message</div>-->
                                <!--<div class="text-xs text-gray-600">Help text</div>-->
                            </fieldset>
                        </div>


                        <div class="md:flex mb-8">
                            <div class="md:flex-1 md:pr-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">大人: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">3 人</p>
                            </div>
                            <div class="md:flex-1 md:pl-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-base font-bold">小孩: </label>
                                <p class="bg-white focus:outline-none   border-b border-gray-300  py-2 
                                    px-0 mt-2 block w-full appearance-none leading-normal">0 人</p>
                            </div>
                        </div>



                        <div class="mb-6">
                            <label class="block text-gray-700 text-base s font-bold mb-2">
                  備註 : </label>
                            <div class="  font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                                <p class="text-sm  text-gray-600 leading-relaxed px-5 pt-5">大人體力不好，無法一直走路希望能休閒一點 </p>
                            </div>


                        </div>

                        <p class="text-right text-base text-gray-700 font-semibold mb-8"> 本次將扣除 <span class="text-xl text-blue-500">300</span> <span class="ml-1 text-xs text-gray-700  font-semibold transform translate-y-1">點數</span> 購買後將剩餘 <span class="text-xl  text-blue-500">700</span> <span class="ml-1 text-xs text-gray-700  font-semibold transform translate-y-4">點數</span></p>
                        <div class="mb-8">
                            <div class="flex justify-around">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  mx-4">上一步 </button>
                                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full mx-4 ">完成訂單 </button>

                            </div>

                        </div>
                    </div>
                </div>

                <!-- </div> -->
            </div>

        </div>














        <!--Footer-->
        <!-- 海浪特效 -->
        <div class="relative -mt-12  lg:-mt-22">
            <svg class="editorial" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 
   58-18 88-18s
   58 18 88 18 
   58-18 88-18 
   58 18 88 18
   v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="50" y="0" fill="#1983d4" />
        <use xlink:href="#gentle-wave" x="50" y="3" fill="#1983d4" />
        <use xlink:href="#gentle-wave" x="50" y="6" fill="#0a65c2" />
      </g>
    </svg>
        </div>
        <footer class="bg-blue-sea ">


            <div class="container mx-auto px-6 pt-10 pb-6">
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/4 text-center md:text-left ">
                        <h5 class="uppercase mb-6 font-bold text-3xl text-white">LOGO</h5>

                    </div>
                    <div class="w-full md:w-1/4 text-center md:text-left ">
                        <h5 class=" mb-6 font-bold text-md text-white">服務須知</h5>
                        <ul class="mb-4">
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">常見問題</a>
                            </li>
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">付款方式</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/4 text-center md:text-left ">
                        <h5 class=" mb-6 font-bold text-md text-white">給旅行家</h5>
                        <ul class="mb-4">
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">關於尋旅</a>
                            </li>
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">Points 介紹</a>
                            </li>
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">官方部落格</a>
                            </li>
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">會員好禮</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-1/4 text-center md:text-left ">
                        <h5 class=" mb-6 font-bold text-md text-white">合作夥伴</h5>
                        <ul class="mb-4">
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">部落客/攝影師合作計畫</a>
                            </li>
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">聯盟行銷</a>
                            </li>
                            <li class="mt-2">
                                <a href="#" class=" text-gray-200 text-sm ">申請成為旅行規劃師</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- top -->
        <div class="e-backtop-btn js-e-backtop-btn"> <i class="fas fa-arrow-up"></i><span>TOP </span></div>
    </div>
  </div>
</template>
<script>
export default {
    name:'orderlist'
}
</script>