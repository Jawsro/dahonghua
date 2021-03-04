<template>
  <div class="products">
    <products-list :iconIshow="iconIshow"></products-list>
  </div>
</template>
<script>
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "Products",
  components: {
    ProductsList,
  },
  data(){
    return{
      iconIshow:false
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.products-list
  margin-top:0
.products
  margin-bottom:$margin-bottom
</style>