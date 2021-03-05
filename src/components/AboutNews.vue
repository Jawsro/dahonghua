<template>
  <div class="about-news"> 
    <div class="title">
      <h6 class="company-news" 
        v-for="item in newsTitle" 
        :key="item.id"
        :class="index==item.id?'active' :'inactive'"
        @click="changeNewsTitle(item.id)"> 
        {{item.text}} 
      </h6>
    </div>
    <!-- 公司新闻-->
    <div class="news-list" v-show="newsIshow">
      <div class="item"
      v-for="item in CompanyNews"
      :key="item.id"
      :class="newsId==item.id?'news-avtive' :''"
      @click="changeNews(item.id)">
        <span class="iconfont icon-dayuhao"></span>
        <p class="news-title">{{item.title}}</p>
      </div>
    </div>
    <!-- 行业新闻-->
    <div class="news-list" v-show="!newsIshow">
      <div class="item"
      v-for="item in IndustryNews"
      :key="item.id"
      @click="changeIndustryNews(item.id)"
      :class="IndustryNewsId==item.id?'news-avtive' :''">
        <span class="iconfont icon-dayuhao"></span>
        <p class="news-title">{{item.title}}</p>
      </div>
    </div>
    <div class="morenews">
      <span @click="goNewsCenter">查看更多</span>
      <span class="iconfont icon-dayuhao" @click="goNewsCenter"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutNews",
  data() {
    return {
      index:0,
      newsTitle:[
        {id:0,text:"公司新闻"},
        {id:1,text:"行业新闻"}
     ],
     newsId:1,
     CompanyNews:[
       {id:1,title:"热烈祝贺湖北大红花商用设备有限公司改版成功改版成功!"},
       {id:2,title:"热烈祝贺湖北大红花商用设备有限公司改版成功!"}
     ],
     IndustryNewsId:1,
      IndustryNews:[
       {id:1,title:"湖北大红花商用设备有限公司!"},
       {id:2,title:"湖北大红花商用设备有限公司!"}
     ],
     newsLIstanbul:[],
     newsIshow:true
    };
  },
  created(){
    this.newsLIstanbul = this.CompanyNews
  },
  methods:{
    changeNewsTitle(id){
      this.index = id;
      this.newsIshow =!this.newsIshow
    },
    changeNews(id){
      this.newsId=id;
    },
    changeIndustryNews(id){
      this.IndustryNewsId=id;
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