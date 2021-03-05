<template>
  <div class="products">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">产品中心</p>
    </h4>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="product-sort">
      <van-grid  :column-num="4">
        <van-grid-item v-for="item in productSort" :key="item.id" :to="{path:'/productcenter',query:{id:item.id,name:item.text}}">
           <img :src="item.src" alt="" class="product-sort-img">
           <p class="product-sort-name">{{item.text}}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>

export default {
  name: "Products",
  data(){
    return{
       images: [
         require("@/assets/img/products.jpg"),
         require("@/assets/img/products2.jpg"),
         require("@/assets/img/products3.jpg"),
         require("@/assets/img/products4.jpg"),
         require("@/assets/img/products5.jpg"),
         require("@/assets/img/products6.jpg"),
      ],
      productSort:[
        {id:1,src:"http://weixin.gxshangyou.com/Uploads/_image/20160126/1453777306426798.jpg",text:"钢木果蔬架"},
        {id:2,src:"http://weixin.gxshangyou.com/Uploads/f/fxqjts1453703358/4/4/3/9/thumb_5754eaa8a0806.jpg",text:"情景促销堆"},
        {id:3,src:"http://weixin.gxshangyou.com/Uploads/_image/20160606/1465180237997860.jpg",text:"五谷杂粮区"},
        {id:4,src:"http://weixin.gxshangyou.com/Uploads/f/fxqjts1453703358/8/c/4/a/thumb_5754eb42cca08.JPG",text:"散称干货区"},
        {id:5,src:"http://weixin.gxshangyou.com/Uploads/f/fxqjts1453703358/1/b/6/d/thumb_5754ea516d472.JPG",text:"冰鲜台区"}
      ]
    }
  },
  methods:{
    gobanck(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.products /deep/ [class*=van-hairline]::after
  border:none
.products /deep/ .van-swipe
  height:250px
.products
  margin-bottom:$margin-bottom
  .title
    padding:$padding-small
    font-size:$font-size-large
    display:flex
    justify-content:center
    align-items: center
    background:$color-banckground
    color:$color-text-f 
    .icon-fanhui
      flex:0 0 30px
    .name 
      text-align:center
      flex:1
  .swiper
    img
      height:100%
  .product-sort
    .product-sort-img
      width:65px
      height:65px
      border-radius:50%
      margin-bottom:$padding-small-s
    .product-sort-name
      font-size:$font-size-medium
</style>