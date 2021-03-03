<template>
  <div class="about-us">
    <div class="title">
      <h6 class="left-text"> 
        <span class="margin-r">公司介绍<span class="iconfont icon-Italic"></span></span>
        <span>About Us</span>
      </h6>
      <div class="rigth-icon">
        <span class="iconfont icon-jiahao"></span>
      </div>
    </div>
    <div class="main">
      <div class="text">
        <p>湖北大红花商用设备有限公司是宜都市政府于2000年招商引资项目。我公司是-家专业从事设计、生产、销售超市果蔬架、不锈钢系列及其它配套产品的专业生产厂家。可以根据客户要求,设计出适合用户使用的布局方案。</p>
        <p>公司成立七年来,本着立足全国,放眼世界的创业理念,引进了国内外先进技术及工艺,所生产的豪华型果蔬架、冷气保鲜展示柜、超市生鲜柜台、不锈钢生鲜设备,已成功地被世界一流的法国...</p>
      </div>
      <div class="img">
        <img src="@/assets/img/about.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutUs",
  data() {
    return {
     
    };
  },
};
</script>
<style scoped lang="stylus">
@import '../assets/css/common.styl'
.about-us
  margin-top:$padding-small
  .title
      background:$color-banckground
      display:flex
      justify-content:center
      align-items: center
      color:$color-text-f 
      padding:$padding-small 0
      .left-text
        flex:3
        text-align:left
        padding-left:$padding-small
        font-size:$font-size-large
        .margin-r
          margin-right:$padding-small-s
          .icon-Italic
            font-size:20px
      .rigth-icon
        flex:1
        text-align:right
        padding-right:$padding-small
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