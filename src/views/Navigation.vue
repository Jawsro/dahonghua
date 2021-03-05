<template>
  <div class="navigation">
    <h4 class="title">
      <span>联系地址</span>
    </h4>
    <div class="main">
      <img src="../assets/img/map.png" alt="">
    </div>
    <div @click="goNavigation" class="adress">
      <span style="margin-right:8px">地址：</span>
      <span class="adress-text">武汉市硚口区操场角6号汉华花园b座11- 5号</span>
    </div>
  </div>
</template>
<script>

export default {
  name: "Navigation",
  methods:{
    goNavigation(){
      window.location.href="https://m.amap.com/search/mapview/keywords=%E6%B1%89%E5%8D%8E%E8%8A%B1%E5%9B%ADB%E5%BA%A7&city=420104&poiid=B0FFH1GFI7"
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.navigation
  margin-bottom:$margin-bottom
  padding:$main-padding
  .title
    padding:$padding-small $padding-small $padding-small 0
    font-size:$font-size-large
    border-bottom:1px solid #E6E6E6
  .main
    padding:$padding-small 0
  .adress
    font-size:$font-size-medium
    .adress-text
      color:#129044
      display:inline-block
      border-bottom:1px #129044 dashed
      margin-right:$padding-small
</style>