<template>
  <div class="home">
    <nav-banner></nav-banner>
    <products-list :iconIshow="iconIshow"></products-list>
    <about-us></about-us>
    <about-news></about-news>
  </div>
</template>

<script>
import NavBanner from "@/components/Home/NavBanner.vue";
import ProductsList from "@/components/ProductsList.vue";
import AboutUs from "@/components/AboutUs.vue";
import AboutNews from "@/components/AboutNews.vue";

export default {
  name: "Home",
  components: {
    NavBanner,
    ProductsList,
    AboutUs,
    AboutNews
  },
  data(){
    return{
      iconIshow:true
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.home
  margin-bottom:$margin-bottom
</style>
