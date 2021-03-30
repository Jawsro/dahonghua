<template>
  <div class="shopping">
    <h4 class="title">在线订购</h4>
    <div class="from">
      <van-form @submit="onSubmit">
        <van-field
          v-model="subject"
          name="subject"
          label="主题："
          :rules="[{ required: true, message: '请填写主题' }]">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="username"
          name="username"
          label="姓名："
          :rules="[{ required: true, message: '请填写姓名' }]">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="tel_num"
          type="tel"
          name="tel_num"
          label="电话："
          :rules="[{ pattern, message: '请填写正确手机号' }]">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="email"
          name="email"
          label="邮箱："
          :rules="[{ required: true, message: '请填写正确邮箱' }]">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="company_name"
          name="company_name"
          label="公司名称："
          :rules="[{ required: true, message: '请填写公司名称' }]">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="address"
          name="address"
          label="联系地址："
          :rules="[{ required: true, message: '请填写联系地址' }]">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <van-field
          v-model="order_info"
          rows="3"
          maxlength="200"
          show-word-limit
          name="order_info"
          label="订购信息："
          :rules="[{ required: true, message: '请填写订购信息' }]"
          type="textarea">
          <template v-slot:left-icon><span class="iconfont icon-required"></span></template>
        </van-field>
        <div class="submit-btn">
          <van-button block  
            native-type="submit" 
            size="normal"
            :disabled="submitDisabled">提交</van-button> 
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
let submitLocks =false;
import {setOrderForm} from "../assets/js/api.js";
import {Dialog} from 'vant';
export default {
  name: "Shopping",
  data(){
    return{
      subject:'',
      username:'',
      tel_num:'',
      email:'',
      company_name:'',
      address:'',
      order_info:'',
      submitDisabled:false,
      pattern:/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/,
    }
  },
   methods: {
    onSubmit(values) {
      console.log('submit', values);
      if(submitLocks){
        return false ;
      }
      let data = {
        subject:values.subject,
        username:values.username,
        tel_num:values.tel_num,
        email:values.email,
        company_name:values.company_name,
        address:values.address,
        order_info:values.order_info
      }
      submitLocks = true;
      this.submitDisabled = true;
      setOrderForm(data).then(res =>{
        console.log(res)
        if(res.status == true){
          Dialog.alert({
            title: '提示',
            message: res.msg,
          }).then(() => {
              setTimeout(()=>{
                location.reload();
                submitLocks = false;
                this.submitDisabled = false;
              },2000)
            })
        }
      })
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.shopping /deep/ .van-field__left-icon
  padding:5px 0
.shopping /deep/ .van-field__control
  padding:5px
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
  padding:5px 0
.icon-required
  color:red
.shopping
  padding:$main-padding
  margin-bottom:$margin-bottom
  .title
    padding:$padding-small $padding-small $padding-small 0
    font-size:$font-size-large
    border-bottom:1px solid #E6E6E6
  .submit-btn
    width:40%
    margin:20px auto
</style>
