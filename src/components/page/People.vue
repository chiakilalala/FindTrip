<template>
  <div>
        <!-- NavBar Component -->
    <NavBar />

      <!-- banner -->
    <div class="hero h-64 bg-cover h-112  overflow-hidden ">
        <div class="container mx-auto flex max-w-5xl  flex-col items-center">


        </div>
    </div>


    <div class=" my-2 lg:ml-10 ml-2">
        <div class="container flex max-w-7xl mx-auto ">
            <div class=" py-2  lg:px-0 px-2 text-gray-600 text-sm">
                <ul class="list-inline inline-flex hover:underlines">
                    <li class=""><i class="fa fa-home"> /</i>
                    </li>
                    <li>旅行規劃師 /</li>
                    <li>名字 個人資訊</li>

                </ul>
            </div>
        </div>

    </div>

     <div class="">
        <div class="flex container  max-w-7xl  mx-auto">
            <div class="w-full  flex flex-row flex-wrap justify-center">
                <div class="w-full md:w-3/4 lg:w-3/5">
                    <div class="py-2 ">
                        <div class="flex rounded-lg bg-white shadow-sm -my-2">

                            <div class="  max-w-3xl    px-8 lg:px10">
                                <div class="flex items-center text-xs my-5">
                                    <div class="icon icon001"></div>
                                    <h3 class="text-xl text-blue-500 font-medium ">簡介</h3>
                                </div>
                                <div class="">
                                    <ul class=" list-inside font-base text-gray-600 leading-5 ml-1">

                                        <li class="mb-2">暱稱：警長先生</li>
                                        <li class="mb-2">服務經驗：10年</li>
                                        <li class="mb-2">常駐城市：台灣</li>
                                        <li class="mb-3">服務語言：中文、英語</li>
                                    </ul>

                                </div>
                                <hr class="border-grey-light border-t my-6">
                                <!-- step2 -->
                                <div class="flex items-center text-xs my-5">
                                    <div class="icon icon002"></div>
                                    <h3 class="text-xl text-blue-500 font-medium ">經歷</h3>
                                </div>

                                <p class=" font-base text-gray-700 leading-6 ml-1">
                                    旅遊專業畢業，曾從事導遊、領隊、OP、銷售等行業內各種工作，累計超過8年專業服務經驗，善於理解用戶需求，並提供對應解決方案。 以自由行、包車自駕等形式在東南亞、北美等地近20個國家深度旅行，旅行經驗豐富。多次為家庭出遊、親朋好友以及地產公司、科技公司、科研院所等機構提供定制旅行服務。 </p>

                                <hr class="border-grey-light border-t my-6">

                                <div class="flex items-center text-xs my-5">
                                    <div class="icon icon003"></div>
                                    <h3 class="text-xl text-blue-500 font-medium ">專長</h3>
                                </div>
                                <div class="px-2">
                                    <div class="flex flex-wrap -mx-3 ml-1">
                                        <div class="w-full lg:w-1/2 bg-cover h-48 " style="background-image: url('../../assets/img/jp001.jpg')">
                                        </div>

                                        <div class="w-full lg:w-1/2 px-0 lg:px-4 flex flex-col justify-between">
                                            <h3 class="text-xl text-blue-500 font-medium my-2  px:0 lg:px-2"> 國家：<span class="text-gray-500 text-base font-mono"> 日本</span></h3>
                                            <h3 class="text-xl text-blue-500 font-medium my-2 px:0 lg:px-2"> 區域：<span class="text-gray-500 text-base font-mono"> 大阪 神戶 京都 名古屋</span></h3>
                                            <div class="people_wrap mt-6 lg:mt-4 flex flex-wrap leading-sm inline-flex items-center">
                                                <button class="bg-blue-500">
                                                    冒險</button><button class="bg-blue-500">景點</button><button class="bg-blue-500">文化</button><button class="bg-blue-600">吃貨</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <hr class="border-grey-light border-t my-6">
                                <div class="flex items-center text-xs my-5">
                                    <div class="icon icon004"></div>
                                    <h3 class="text-xl text-blue-500 font-medium ">旅行家評價</h3>
                                </div>
                                <div class="mb-8 px-2">
                                    <div class="flex flex-wrap -mx-3">
                                        <div class="md:1/6 lg:w-1/12 ">
                                            <div class="w-12 h-12 rounded-full bg-blue-500 p-1 mb-3 ml-1">
                                                <img src="../../assets/img/user001.png" alt="" class="mx-auto object-cover w-10 h-10 rounded-full">
                                            </div>
                                        </div>

                                        <div class="text-sm md:4/6 lg:w-10/12 ml-2">

                                            <p class="text-gray-900 leading-none text-base ">圈圈人 <span class="star text-yellow-500 text-xs ">
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i></span></p>

                                            <div class="mt-2 mb-8 py-2 text-gray-700">
                                                <div class="  font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                                                    <p class="text-sm  leading-relaxed px-5 pt-5">
                                                        這是第一次到日本遊玩，並在FindTrip訂購烤肉行程，還有規劃師幫忙行程真的太好了， 餐廳超級很好吃喔！下次還會預定喔！


                                                        <span class="text-xs text-gray-500 px-5 pt-5"> 2020.6.4 評價 </span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                    <div class="flex flex-wrap -mx-2">
                                        <div class="md:1/6 lg:w-1/12 ">
                                            <div class="w-12 h-12 rounded-full bg-blue-500 p-1 mb-3 ml-1">
                                                <img src="../../assets/img/man002.svg" alt="" class="mx-auto object-cover w-10 h-10 rounded-full">
                                            </div>
                                        </div>

                                        <div class="text-sm md:4/6 lg:w-10/12 ml-2">

                                            <p class="text-gray-900 leading-none text-base ">名偵探<span class="star text-yellow-500 text-xs ">
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i>
                                                    <i class="fa fa-star text-orange-500"></i></span></p>

                                            <div class="mt-2 mb-8 py-2 text-gray-700">
                                                <div class="  font-medium mb-7 bg-gray-200 rounded-lg h-auto pb-5">
                                                    <p class="text-sm  leading-relaxed px-5 pt-5">
                                                        這是第一次到日本遊玩，並在FindTrip訂購烤肉行程，還有規劃師幫忙行程真的太好了， 餐廳超級很好吃喔！下次還會預定喔！


                                                        <span class="text-xs text-gray-500 px-5 pt-5"> 2020.6.4 評價 </span>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full  lg:w-2/5   text-gray-600 mt-6">
                    <div class="px-2">
                        <div class=" bg-white  -mx-2">
                            <div class=" px-10">
                                <div class=" mb-5 border  rounded-lg shadow-lg px-5">
                                    <div class="flex  items-center justify-center">
                                        <h2 class="text-center font-semibold text-gray-700 text-xl  text-blue-500 mt-10 my-5">
                                            關於規劃師 Jack Smith
                                        </h2>
                                        <ul class="list-none">
                                            <li class="w-1 h-2">
                                                <i class="ml-2 far fa-heart text-2xl align-items  "></i></li>
                                        </ul>
                                    </div>
                                    <div class="mx-auto  relative flex justify-center">
                                        <img src="../../assets/img/user001.png" alt="" srcset="" class="bg-blue-500 p-2 w-48 h-48 object-contain    rounded-full overflow-hidden">

                                    </div>
                                    <div class="mx-auto   flex justify-center my-5">
                                        <img src="../../assets/img/ic-facebook.svg" alt="" srcset="" class="w-6 b-6 mr-3"> <img class="w-6 b-6" src="../../assets/img/ic-line@.svg" alt="" srcset="">
                                    </div>
                                    <div class="  flex justify-center my-3">
                                        <p class="text-sm pr-2"> 評價 (1 )
                                        </p>
                                        <span class="star  text-xl ">
                                            <i class="fa fa-star text-orange-500"></i>
                                            <i class="fa fa-star text-orange-500"></i>
                                            <i class="fa fa-star text-orange-500"></i>
                                            <i class="fa fa-star text-orange-500"></i>
                                            <i class="fa fa-star text-orange-500"></i></span>
                                    </div>
                                    <p class="font-normal mb-3 text-sm  leading-6 px-12">熱愛旅遊，認為「工作要拼，玩樂也要對得起自己」。 在馬來西亞居住超過十年，目前去過十多個國家，於印度、尼泊爾、土耳其深度旅遊超過一個月，並曾經爬上喜馬拉雅山基地營。
                                    </p>
                                    <div class="px-12">
                                        <h2 class="font-semibold text-gray-700 text-xl mb-3">服務售價</h2>
                                    </div>
                                    <div class="flex  px-10 justify-start mb-10">
                                        <img src="../../assets/img/coin.png" alt="" class="w-12 h-12 mr-2">
                                        <span class="text-3xl text-gray-700  font-extrabold">300 </span>
                                        <span class="ml-1 text-sm text-gray-700  font-semibold transform translate-y-4">Point
                                        </span>
                                    </div>

                                    <div class="flex px-12">
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white rounded-lg mt-3 w-full
        py-2 font-medium text-lg tracking-wider shadow font-huninn focus:outline-none
        select-none">
                                            聯絡諮詢
                                        </button>
                                    </div>
                                    <div class="flex mb-20 px-12 mt-4">

                                        <button class="bg-orange-500 hover:bg-orange-400 text-white rounded-lg mt-3 w-full
        py-2 font-medium text-lg tracking-wider shadow font-huninn focus:outline-none
        select-none">
                                            立即下單
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>

 <!-- Footer -->
       <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
    name:'people',

    components: {
    NavBar,
    Footer,
    }
  
}
</script>