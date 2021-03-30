<template>
  <div class="news-center">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">新闻中心</p>
    </h4>
    <div class="main">
      <van-tabs v-model="active" @click='changeNewsTitle'>
        <van-tab :title="item.type_name" v-for="(item,index) in newsTitle" 
          :key="index"
          @click='changeNewsTitle(item.id,index)'>
          <div class="news-list" v-show='CompanyNews.length>0'>
            <div class="item"
              v-for="item in CompanyNews"
              :key="item.id"
              @click ='changeNews(item.id)'>
              <p class="news-title">{{item.title}}</p>
              <p class="news-time">{{item.createtime}}</p>
            </div>
          </div>
         </van-tab>
      </van-tabs>
      <div class="more-text" v-show='CompanyNews.length<1'>
         <van-divider dashed>暂无数据</van-divider>
     </div>
     <div class="pages">
        <van-pagination v-model="page" :page-count="pageCount" mode="simple" @change='changePage'/>
     </div>
    </div>
  </div>
</template>

<script>
import {getNewsList,getNewsType} from "../assets/js/api.js";
export default {
  name: "NewsCenter",
  data(){
    return{
      active: 0,
      CompanyNews:[],//新闻列表
      newsTitle:[],//新闻类型
      page:1,
      pageCount:0
    }
  },
  created(){
    this.active = parseInt(this.$route.query.index)||0;
    this._getNewsType()
  },
  methods:{
    gobanck(){
      this.$router.go(-1);
    },
    //新闻类型
     _getNewsType(){
      getNewsType({}).then( res => {
        if(res.status == true){
          this.newsTitle = res.data.type_list;
          let id = res.data.type_list[this.active].id;
          this._getNewsList(id)
        }
      })
    },
    //获取新闻列表
    _getNewsList(id){
      let data ={
        type_id:id,
        page_count:10,
        page:this.page
      }
      this.CompanyNews = [];
      getNewsList(data).then(res =>{
        if(res.status == true){
          this.CompanyNews = res.data.list;
          this.pageCount = Math.ceil(parseInt(res.data.total)/10);
        }
      })
    },
    changeNewsTitle(name){
      let id =  this.newsTitle[name].id;
      this.page = 1;
      this._getNewsList(id)
    },
    changePage(val){
      let id =  this.newsTitle[this.active].id;
      this.page = val;
      this._getNewsList(id)
    },
    changeNews(id){
      this.$router.push({
        path:`/contendetail`,
        query:{
          id:id
        }
     })
    },
    goNewsCenter(){
      this.$router.push({path:"/newscenter",query:{index:this.index}})
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
        .news-time
          flex:0 0 80px
          text-align:right
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
    .more-text
      text-align:center
    .pages
      position:fixed
      width:100%
      bottom:50px
</style>
