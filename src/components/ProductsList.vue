<template>
  <div class="products-list">
    <div class="title">
      <h6 class="left-text"> 
        <span class="margin-r">产品中心<span class="iconfont icon-Italic"></span></span>
        <span>Products</span>
      </h6>
      <div class="rigth-icon" @click="goProducts" v-show="iconIshow">
        <span class="iconfont icon-jiahao"></span>
      </div>
    </div>
    <div class="main">
      <div class="item" v-for="(item,index) in productsList" :key="index"
        @click="goProductsDetadil(item.id,item.text)">
        <img :src="item.src" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductsList",
  data() {
    return {
      productsList:[
        {id:1,src:require("@/assets/img/q.png"),text:"果蔬堆码"},
        {id:2,src:require("@/assets/img/q.png"),text:"不锈钢蔬果架"}
      ]
    };
  },
  props:{
    iconIshow:Boolean
  },
  methods:{
    goProducts(){
      this.$router.push('/products')
    },
    goProductsDetadil(id,name){
      this.$router.push({path:'/productcenter',query:{id,name}})
    }
  }
};
</script>
<style scoped lang="stylus">
@import '../assets/css/common.styl'
.products-list
  margin-top:$padding-small
  .title
    background:$color-banckground
    display:flex
    justify-content:center
    align-items: center
    color:$color-text-f 
    padding:$padding-small 0
    .left-text
      flex:3
      text-align:left
      padding-left:$padding-small
      font-size:$font-size-large
      .margin-r
        margin-right:$padding-small-s
        .icon-Italic
          font-size:20px
    .rigth-icon
      flex:1
      text-align:right
      padding-right:$padding-small
  .main
    padding:$main-padding
    display:flex
    .item
      flex:1
      border:1px solid #E6E6E6
      border-radius:6px
      padding:5px
    .item + .item
      margin-left:18px
</style>