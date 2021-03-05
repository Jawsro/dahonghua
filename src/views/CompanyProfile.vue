<template>
  <div class="company-profile">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">公司介绍</p>
    </h4>
    <div class="main">
      <div class="text">
        <p>湖北大红花商用设备有限公司是宜都市政府于2000年招商引资项目。我公司是-家专业从事设计、生产、销售超市果蔬架、不锈钢系列及其它配套产品的专业生产厂家。可以根据客户要求,设计出适合用户使用的布局方案。</p>
        <p>公司成立七年来,本着立足全国,放眼世界的创业理念,引进了国内外先进技术及工艺,所生产的豪华型果蔬架、冷气保鲜展示柜、超市生鲜柜台、不锈钢生鲜设备,已成功地被世界一流的法国</p>
      </div>
      <div class="img">
        <img src="@/assets/img/about.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CompanyProfile",
  data(){
    return{}
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
.company-profile
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
    .text
      p
        font-size:$font-size-medium
        text-indent: 2em
        line-height:200%
        text-align:justify
        text-justify:distribute-all-lines
</style>
