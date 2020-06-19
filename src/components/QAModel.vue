<template>
  <div>
    <el-dialog  :visible.sync="QAModel" :before-close="cancelManage">
      <transition>
      
    
      <div class="w-full  mx-auto p-8">
        <h4 class="text-lg text-center "><strong>關於Find Trip 的Ｑ＆Ａ</strong></h4>
        <div class="shadow-md">
            <div class="tab w-full overflow-hidden border-t transition-all hover:bg-blue-300 ">
                <input class="absolute opacity-0 transition-all" id="tab-multi-one" type="checkbox" name="tabs">
                <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one">Q: 在尋旅上成為旅行規劃師有什麼限制嗎?</label>
                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p class="p-5">A: 成為尋旅的旅行規劃師，您必須先提交您的規劃師申請書，待審查後我們將盡快回覆您

                    </p>
                </div>
            </div>
            <div class="tab w-full overflow-hidden border-t transition-all hover:bg-blue-300">
                <input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs">
                <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-two">Q:
                    當我收到旅行家提出諮詢訂單後，回覆的時間有限制嗎?</label>
                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p class="p-5">A: 當規劃師收到提案後，需在14天內以email方式回覆旅行計劃給旅行家</p>
                </div>
            </div>
            <div class="tab w-full overflow-hidden border-t transition-all hover:bg-blue-300">
                <input class="absolute opacity-0" id="tab-multi-three" type="checkbox" name="tabs">
                <label class="block p-4 w-full  leading-normal cursor-pointer" for="tab-multi-three">Q:
                    當我下標訂單後，多久會收到訂單回覆和訂製的旅行計畫呢</label>
                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p class="p-5">A: 規劃師須在三(3)天內確認訂單，並在十四(14)天內回傳您的旅行計畫，否則視為訂單無效，並將會全額退還點數給您。</p>
                </div>
            </div>
            <div class="tab w-full overflow-hidden border-t transition-all hover:bg-blue-300">
                <input class="absolute opacity-0" id="tab-multi-four" type="checkbox" name="tabs">
                <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-four">Q:
                    為什麼選擇尋旅上的規劃師來幫助規劃旅遊行程呢?</label>
                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p class="p-5 ">A: 因為喜愛旅遊、 熱愛旅遊，尋旅提供一個媒合平台讓有相同喜好的規劃師們可以依據您的個人需求，提供專屬於你、量身打造的旅行計畫，您也能用依照您的個人預算，尋找您喜歡的規劃師來為您規劃旅遊行程
                    </p>
                </div>
            </div>
            <div class="tab w-full overflow-hidden border-t transition-all hover:bg-blue-300">
                <input class="absolute opacity-0" id="tab-multi-five" type="checkbox" name="tabs">
                <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-five">Q:我如何訂購與規畫師的諮詢時間呢?</label>
                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p class="p-5">A: 凡註冊尋旅會員，即可免費獲得1000點數。每個規劃師會依據個人不同的旅行計畫來訂定價格，而您支付的點數會在下標諮詢後暫存於尋旅裡，並待規畫師將旅遊計畫回覆給您後點數才會給付給規劃師。
                    </p>
                </div>
            </div>


            <div class="tab w-full overflow-hidden border-t transition-all hover:bg-blue-300">
                <input class="absolute opacity-0" id="tab-multi-six" type="checkbox" name="tabs">
                <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-six"> Q: 點數用完了，該怎麼購買?</label>
                <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                    <p class="p-5">A: 在首頁頁面點選儲值點數，即可選取您欲購買的點數值並付款</p>
                </div>
            </div>
        </div>
    </div>
       </transition>
    </el-dialog>
   
  </div>
</template>
<script>
export default {
  props:{
    QAModel: {
      type: Boolean,
      default: false
    },
  },
  methods: {
     cancelManage() {
      this.$emit("dialog-cancel"); //函数接口
    },
  },
}
</script>
<style scoped>

  .tab-content {
        max-height: 0;
        -webkit-transition: max-height .35s;
        -o-transition: max-height .35s;
        transition: max-height .35s;
    }
    /* :checked - resize to full height */
    
    .tab input:checked~.tab-content {
        max-height: 100vh;
    }
    /* Label formatting when open */
    
    .tab input:checked+label {
        /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
        font-size: 1rem;
        /*.text-xl*/
        padding: 1.25rem;
        /*.p-5*/
        border-left-width: 2px;
        /*.border-l-2*/
        border-color: #4299e1;
        /*.border-indigo*/
        background-color: #f8fafc;
        /*.bg-gray-100 */
        color: #4299e1;
        /*.text-indigo*/
    }
    /* Icon */
    
    .tab label::after {
        float: right;
        right: 0;
        top: 0;
        display: block;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5;
        font-size: 1.25rem;
        text-align: center;
        -webkit-transition: all .35s;
        -o-transition: all .35s;
        transition: all .35s;
    }
    /* Icon formatting - closed */
    
    .tab input[type=checkbox]+label::after {
        content: "\25BE";
        font-weight: bold;
        /*.font-bold*/
        border-width: 1px;
        /*.border*/
        border-radius: 9999px;
        /*.rounded-full */
        border-color: #b8c2cc;
        /*.border-grey*/
    }
    
    .tab input[type=radio]+label::after {
        content: "\25BE";
        font-weight: bold;
        /*.font-bold*/
        border-width: 1px;
        /*.border*/
        border-radius: 9999px;
        /*.rounded-full */
        border-color: #b8c2cc;
        /*.border-grey*/
    }
    /* Icon formatting - open */
    
    .tab input[type=checkbox]:checked+label::after {
        transform: rotate(180deg);
        background-color: #4299e1;
        /*.bg-indigo*/
        color: #f8fafc;
        /*.text-grey-lightest*/
    }
    
    .tab input[type=radio]:checked+label::after {
        transform: rotateX(180deg);
        background-color: #4299e1;
        /*.bg-indigo*/
        color: #f8fafc;
        /*.text-grey-lightest*/
    }
</style>