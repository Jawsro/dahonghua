<template>
  <div class="product-center">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">{{sortName}}</p>
    </h4>
    <div class="products-detaild-list">
      <div class="item" v-for="(item,index) in productsDetaildList" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "ProductCenter",
  data(){
    return{
      iconIshow:false,
      sortName:'',
      productsDetaildList:[
        "http://weixin.gxshangyou.com/Uploads/_image/20160602/1464837129375322.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160602/1464837164153622.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160602/1464837186213282.jpg",
      ]
    }
  },
  created(){
    this.sortName = this.$route.query.name
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
.product-center /deep/ .products-list
  margin-top:0
.product-center
  margin-bottom:$margin-bottom
  padding:$main-padding
  .title
    padding:0 $padding-small $padding-small 0
    font-size:$font-size-large
    border-bottom:1px solid #E6E6E6
    display:flex
    justify-content:center
    align-items: center
    .icon-fanhui
      flex:0 0 30px
    .name 
      text-align:center
      flex:1
  .products-detaild-list
    margin-top:$padding-small
    .item
      margin-bottom:$padding-small-s
</style>