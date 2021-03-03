<template>
  <div class="hello">
    <div class="top">
      <div class="left-nav">
        <span class="iconfont icon-daohang"></span>
        <div class="nav-text">导航</div>
      </div>
      <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="shopping">
        <span class="iconfont icon-edit"></span>
        <div class="nav-text">立即订购</div>
      </div>
    </div>
    <div class="banner">
      <img src="@/assets/img/banner.jpg" alt="">
    </div>
   
  </div>
</template>

<script>
export default {
  name: "NavBanner",
  data() {
    return {
      value: '',
    };
  },
};
</script>
<style scoped lang="stylus">
@import '../../assets/css/common.styl'
.top /deep/ .van-search
  height:100%
  border-radius:6px
  padding:4px 12px
.top
  display:flex
  justify-content:center
  align-items: center
  background:$color-banckground
  color:$color-text-f 
  padding:$padding-small-s 0
  .left-nav
    flex:1
    text-align:center
    .icon-daohang
      font-size:$font-size-large-x
    .nav-text
      font-size:$font-size-medium
  .search
    flex:3
  .shopping
    flex:1
    text-align:center
    .icon-edit
      font-size:$font-size-large-x
    .nav-text
      font-size:$font-size-medium
.banner
  img
    width:100%
</style>
