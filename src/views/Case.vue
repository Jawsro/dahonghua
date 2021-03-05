<template>
  <div class="case">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">案例锦集</p>
    </h4>
    <div class="case-list">
      <div class="items" v-for="(item,index) in Case" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Case",
  data(){
    return{
      Case:[
        "http://weixin.gxshangyou.com/Uploads/_image/20160125/1453711515681380.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160125/1453711519234412.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160125/1453711524435282.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160125/1453711534892602.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160125/1453711545899180.jpg",
        "http://weixin.gxshangyou.com/Uploads/_image/20160125/1453711555327027.jpg"
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
.case
  margin-bottom:$margin-bottom
  .title
    padding:$padding-small
    font-size:$font-size-large
    background:$color-banckground
    display:flex
    justify-content:center
    align-items: center
    color:$color-text-f 
    .icon-fanhui
      flex:0 0 30px
    .name 
      text-align:center
      flex:1
  .case-list
    margin-top:$padding-small
    padding:0 $main-padding
    .items
      margin-bottom:$padding-small-s
</style>
