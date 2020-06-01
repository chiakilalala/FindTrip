<template>
  <div>
        <!-- NavBar Component -->
    <NavBar />

      <!-- banner -->
    <div class="hero h-64 bg-cover h-112  overflow-hidden ">
        <div class="container mx-auto flex max-w-5xl  flex-col items-center">


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