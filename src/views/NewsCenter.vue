<template>
  <div class="news-center">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">新闻中心</p>
    </h4>
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="公司新闻">
          <div class="news-list">
            <div class="item"
              v-for="item in CompanyNews"
              :key="item.id">
              <span class="iconfont icon-dayuhao"></span>
              <p class="news-title">{{item.title}}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="行业新闻">
          <div class="news-list">
            <div class="item"
              v-for="item in IndustryNews"
              :key="item.id">
              <span class="iconfont icon-dayuhao"></span>
              <p class="news-title">{{item.title}}</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCenter",
  data(){
    return{
      active: 1,
      CompanyNews:[
       {id:1,title:"热烈祝贺湖北大红花商用设备有限公司改版成功改版成功!"},
       {id:2,title:"热烈祝贺湖北大红花商用设备有限公司改版成功!"}
     ],
    IndustryNews:[
       {id:1,title:"湖北大红花商用设备有限公司!"},
       {id:2,title:"湖北大红花商用设备有限公司!"}
     ],
    }
  },
  created(){
    this.active = parseInt(this.$route.query.index);
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
.news-center
  margin-bottom:$margin-bottom
  .title
    padding:$padding-small
    font-size:$font-size-large
    border-bottom:1px solid #E6E6E6
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
  .main
    padding:$main-padding
    .news-list
      padding:$main-padding
      .item
        padding:$padding-small 0
        display:flex
        justify-content:center
        align-items: center
        .icon-dayuhao
          flex:0 0 25px
        .news-title
          flex:1
          font-size:$font-size-medium
          overflow: hidden
          text-overflow:ellipsis 
          white-space: nowrap
      .item + .item
        border-top:1px dashed #E6E6E6
      .news-avtive
        color:$color-banckground
</style>
