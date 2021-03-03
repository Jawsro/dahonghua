<template>
  <div class="shopping">
    <h4 class="title">在线订购</h4>
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
          v-model="subject"
          name="主题"
          label="主题：">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="userName"
          name="姓名"
          label="姓名：">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="phone"
          name="电话"
          label="电话：">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="email"
          name="邮箱"
          label="邮箱：">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="companyName"
          name="公司名称"
          label="公司名称：">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="adress"
          name="联系地址"
          label="联系地址：">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="message"
          rows="3"
          maxlength="200"
          show-word-limit
          name="订购信息"
          label="订购信息："
          type="textarea">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <div class="submit-btn"><van-button block  native-type="submit" size="normal">提交</van-button> </div>
      </van-form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Shopping",
  data(){
    return{
      subject:'',
      companyName:'',
      userName:'',
      email:'',
      phone:'',
      adress:'',
      message:''
    }
  },
   methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.shopping /deep/ .van-button--default
  background:$color-banckground
  color:#fff
  font-size:$font-size-medium-x
.shopping /deep/ .van-cell::after
  border:none
.shopping /deep/ .van-cell
  color:#000
  font-size:$font-size-medium-x
.shopping /deep/ .van-cell__value
  border:1px solid #E6E6E6
.shopping /deep/ .van-field__label
  width:5em
.icon-required
  color:red
.shopping
  padding:$main-padding
  .title
    padding:$padding-small
    font-size:$font-size-large
    border-bottom:1px solid #E6E6E6
  .submit-btn
    width:40%
    margin:20px auto
</style>
