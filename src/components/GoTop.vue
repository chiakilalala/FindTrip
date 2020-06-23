<template>
  <div>
    <!-- top -->

    <div
      class="e-backtop-btn js-e-backtop-btn"
      @click="goTop"
    >
      <i class="fas fa-arrow-up" />
      <span>TOP</span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },
  created() {
    window.addEventListener("scroll,click", this.goTop);
  },
  methods: {
    goTop() {
      // 至頂按鈕
      const backtopBtn = $(".js-e-backtop-btn");

      backtopBtn.hide();
      backtopBtn.on("click", function() {
        $("html,body").animate({ scrollTop: 0 }, "slow");
        return false;
      });

      $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
          backtopBtn.fadeIn();
        } else {
          backtopBtn.fadeOut();
        }
      });
    }
  }
};
</script>