<template>
  <div class="hello">
    <div class="top">
      <div class="left-nav">
        <span class="iconfont icon-daohang" v-show="!sideBar" @click="openSideBar"></span>
        <span class="iconfont icon-caidan" v-show="sideBar" @click="closeSideBar"></span>
        <div class="nav-text">导航</div>
      </div>
      <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <div class="shopping" @click="goShopping">
        <span class="iconfont icon-edit"></span>
        <div class="nav-text">立即订购</div>
      </div>
    </div>
    <div class="banner">
      <img src="@/assets/img/banner.jpg" alt="">
      <div class="sidebar" v-show="sideBar">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="产品中心" to="/products"/>
          <van-sidebar-item title="公司简介" />
          <van-sidebar-item title="新闻动态" />
          <van-sidebar-item title="案例锦集" to="/case"/>
        </van-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBanner",
  data() {
    return {
      value: '',
      activeKey: 0,
      sideBar:false
    };
  },
  methods:{
    openSideBar(){
      this.sideBar = !this.sideBar;
      console.log(this.sideBar)
    },
    closeSideBar(){
      this.sideBar = !this.sideBar;
      console.log(this.sideBar)
    },
    goShopping(){
      this.$router.push('/shopping')
    },
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/css/common.styl'
.hello /deep/ .van-search
  height:100%
  border-radius:6px
  padding:4px 12px
.hello /deep/ .van-sidebar-item
  background-color:rgba(0,0,0,0.8)
  color:#fff
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
    .icon-caidan
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
  position: relative
.sidebar
  position: absolute
  top:0
</style>
