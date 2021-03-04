<template>
  <div class="call-phone">
    <h4 class="title">
      <span>湖北大红花商用设备有限公司</span>
    </h4>
    <div class="main">
      <div class="contact ">
        <span class="text">电话：</span>
        <span class="number" @click='callTelephone(Landline)'>{{Landline}}</span>
      </div>
      <div class="contact ">
        <span class="text">电话：</span>
        <span class="number" @click='callTelephone(Phone1)'>{{Phone1}}</span>
        <span class="number" @click='callTelephone(Phone2)'>{{Phone2}}</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "CallPhone",
  data(){
    return{
      Landline:"0717-4880251",
      Phone1:"13986804328",
      Phone2:"13986776714",
    }
  },
  methods:{
    callTelephone(callNum){
      window.location.href = 'tel://' + callNum
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.call-phone
  margin-bottom:$margin-bottom
  padding:$main-padding
  .title
    padding:$padding-small $padding-small $padding-small 0
    font-size:$font-size-large
    border-bottom:1px solid #E6E6E6
  .main
    font-size:$font-size-medium-x
    .contact
      padding:$padding-small 0
      .text
        margin-right:$padding-small-s
      .number
        color:#129044
        display:inline-block
        border-bottom:1px #129044 dashed
        margin-right:$padding-small
</style>