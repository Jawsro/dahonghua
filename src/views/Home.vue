<template>
  <div class="home">
    <nav-banner></nav-banner>
    <products-list :iconIshow="iconIshow" :productsImg ='productsImg'></products-list>
    <about-us></about-us>
    <about-news></about-news>
  </div>
</template>

<script>
import NavBanner from "@/components/Home/NavBanner.vue";
import ProductsList from "@/components/ProductsList.vue";
import AboutUs from "@/components/AboutUs.vue";
import AboutNews from "@/components/AboutNews.vue";
import {getProductType} from "../assets/js/api.js";
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
      iconIshow:true,
      productsImg:[],//产品列表
      
    }
  },
  created(){
    this._getProductType();
  },
  methods:{
    //首页产品列表
    _getProductType(){
      getProductType({}).then( res =>{
        if(res.status == true ){
          this.productsImg = res.data.product_list
        }
      })
    },
    
   
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.home
  margin-bottom:$margin-bottom
</style>
