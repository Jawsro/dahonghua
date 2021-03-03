<template>
  <div id="app">
    <van-tabbar v-model="active"  active-color="#871654" inactive-color="#6D7174">
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <span class="iconfont icon-shouye" :class="props.active ? 'avtive' : 'inactive'"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>拨号</span>
        <template #icon="props">
          <span class="iconfont icon-dianhua" :class="props.active ? 'avtive' : 'inactive'"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>地址</span>
        <template #icon="props">
          <span class="iconfont icon-dizhi" :class="props.active ? 'avtive' : 'inactive'"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/shopping">
        <span>订购</span>
        <template #icon="props">
          <span class="iconfont icon-edit" :class="props.active ? 'avtive' : 'inactive'"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>

    <router-view />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0
      };
    },
  };
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color:#000
.avtive
  color #882D60
  font-size:20px !important
.inactive
  color #6D7174
  font-size:20px !important
</style>
