<template>
  <div class="bg-blue-100">
    <div class="loading">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
</template>
<script>
export default {
  name:'Loading'
}
</script>

<style>
/* .loading {

  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(#e1e1e1, 0.8);
  background-image: url('../assets/ajax-loader.gif');
  background-repeat: no-repeat;
  background-position: 50% 50%;
} */

.loading {
  width: 120px;
  height: 50px;
  margin: 20px auto;
  position: relative;
}

.loading span {
  display: block;
  position: absolute;
  bottom: 0;
  left:11px;
  height: 5px;
  width: 15px;
  background-color: #000;
  border-radius:30%;
  animation: waving 1.5s infinite ease-in-out
}

.loading span:nth-of-type(2) {
  left: 33px;
  animation-delay: .2s
}

.loading span:nth-of-type(3) {
  left: 55px;
  animation-delay: .4s
}

.loading span:nth-of-type(4) {
  left: 77px;
  animation-delay: .6s
}

.loading span:last-of-type {
  left: 99px;
  animation-delay: .8s
}

@keyframes waving {

  0%, 50%, 100% {
    height: 5px;
    transform: translateY(0);
    background-color: #000
  }

  25% {
    height: 35px;
    transform: translateY(15px);
    background-color:dodgerblue
  }

}




</style>