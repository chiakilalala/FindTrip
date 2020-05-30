<template>
  <div>
        <!-- NavBar Component -->
    <NavBar />
        <!-- banner -->
    <div class="hero bg-cover h-112 overflow-hidden"></div>
    <!-- 麵包屑 -->
       <div class="my-2 lg:ml-10 ml-2">
      <div class="container flex max-w-7xl mx-auto -mt-32">
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
      <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
    NavBar,
    Footer,
  
  },
}
</script>

