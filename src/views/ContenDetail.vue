<template>
    <div class='content-detail'>
      <h4 class="title">
        <span class="iconfont icon-fanhui" @click="gobanck"></span>
        <p class="name">新闻详情</p>
      </h4>
      <div v-html='value' class='content'></div>
    </div>
</template>
<script>
import {getNewsDetail} from "../assets/js/api.js";
export default {
  name: "ContenDetail",
  
  data(){
    return{
      value:'',
      id:0
    }
  },
  created(){
    this.id = this.$route.query.id;
    this._getNewsDetail(this.id)
  },
  methods:{
    _getNewsDetail(id){
      let data={
        id
      }
      getNewsDetail(data).then(res =>{
        if(res.status ==true){
          this.value = res.data.content
        }
      })
    },
    gobanck(){
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../src/assets/css/common.styl';
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
.content
  padding:$padding-small
</style>