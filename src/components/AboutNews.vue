<template>
  <div class="about-news"> 
    <div class="title">
      <h6 class="company-news" 
        v-for="(item,index) in newsTitle" 
        :key="item.id"
        :class="titleIndex==index?'active' :'inactive'"
        @click="changeNewsTitle(index,item.id)"> 
        {{item.type_name}} 
      </h6>
    </div>
    <!-- 公司新闻-->
    <div class="news-list" v-show='CompanyNews.length>0'>
      <div class="item"
      v-for="(item,index) in CompanyNews"
      :key="item.id"
      v-show ='index <5'
      @click="changeNews(item.id)">
        <span class="iconfont icon-dayuhao"></span>
        <p class="news-title">{{item.title}}</p>
      </div>
    </div>
    <div class="news-list" v-show='CompanyNews.length<1'>
      <div class="item">
        暂无数据
      </div>
    </div>
    <div class="morenews" v-show='CompanyNews.length>0'>
      <span @click="goNewsCenter">查看更多</span>
      <span class="iconfont icon-dayuhao" @click="goNewsCenter"></span>
    </div>
  </div>
</template>
<script>
import {getNewsList,getNewsType} from "../assets/js/api.js";
export default {
  name: "AboutNews",
  data() {
    return {
      titleIndex:0,//控制新闻标题
      CompanyNews:[],//新闻列表
      newsTitle:[],//新闻类型
    };
  },
  created(){
    this._getNewsType();
  },
  methods:{
    //首页新闻类型，列表
     _getNewsType(){
      getNewsType({}).then( res => {
        if(res.status == true){
          this.CompanyNews = res.data.news_list;
          this.newsTitle = res.data.type_list
        }
      })
    },
    _getNewsList(id){
      let data ={
        type_id:id,
        page_count:10,
        page:1
      }
      this.CompanyNews = [];
      getNewsList(data).then(res =>{
        if(res.status == true){
          this.CompanyNews = res.data.list;
        }
      })
    },
    changeNewsTitle(index,id){
      this.titleIndex = index;
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
<style scoped lang="stylus">
@import '../assets/css/common.styl'
.about-news
  margin-top:$padding-small
  .title
    display:flex
    justify-content:center
    align-items: center
    text-align:center
    .company-news
      flex:1
      font-size:$font-size-large
      padding:$padding-small 0
    .active
      background:$color-banckground
      color:$color-text-f 
    .inactive
      color:#6D6B6C
      border-bottom:1px solid #E6E6E6
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
  .morenews
    background:#E6E6E6
    padding:$padding-small 
    font-size:$font-size-medium
    text-align:right
</style>