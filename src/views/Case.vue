<template>
  <div class="case">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">案例锦集</p>
    </h4>
    <div class="case-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="items" v-for="(item,index) in Case" :key="index">
          <img :src="item.image_url" alt="">
        </div>
      </van-list>
      
    </div>
  </div>
</template>

<script>
import {getCaseList} from "../assets/js/api.js";
export default {
  name: "Case",
  data(){
    return{
      Case:[],
      page:1,
      loading: false,
      finished: false,
    }
  },
  created(){
    this._getCaseList()
  },
  methods:{
    gobanck(){
      this.$router.go(-1);
    },
    _getCaseList(){
      let data = {
        page_count:4,
        page:this.page
      }
      getCaseList(data).then(res => {
        this.finished = false;
        if(res.status == true){
          this.Case = this.Case.concat(res.data.list)
          this.loading = false;
          
          if( this.Case.length>=res.data.total){
              this.finished = true;
          }
        }
      })
    },
    onLoad(){
      this.page ++;
      this._getCaseList();
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
