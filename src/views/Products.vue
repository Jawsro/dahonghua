<template>
  <div class="products">
    <h4 class="title">
      <span class="iconfont icon-fanhui" @click="gobanck"></span>
      <p class="name">产品中心</p>
    </h4>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="product-sort">
      <van-tabs v-model="active" @click='changeNewsTitle'>
        <van-tab :title="item.type_name" 
          v-for="(item,index) in productsSortList" 
          :key="index">
            <van-tabs  @click='changeLevel2'>
              <van-tab v-for="sortitem in sortList" :title="sortitem.type_name" :key="sortitem.id">
                <van-grid :border="false" :column-num="3">
                    <van-grid-item  v-for="(item,index) in productsImg" 
                    :key="index" >
                    <van-image :src="item.image_url" />
                    <p style='padding:10px 0'>{{item.name}}</p>
                  </van-grid-item>
                </van-grid>
              </van-tab>
            </van-tabs>
          </van-tab>
      </van-tabs>
      <div class="pages">
        <van-pagination v-model="page" :page-count="total" mode="simple" @change='changePage'/>
     </div>
    </div>
  </div>
</template>
<script>
import {getProductType,getProductList} from "../assets/js/api.js";
export default {
  name: "Products",
  data(){
    return{
        active:0,//当前显示的一级分类
        sortList:[],//二级分类
        productsSortList:[],//产品一级分类
        productsImg:[],//产品列表
        type_level2Id:0,
        page:1,
        total:0,
        images: [
         require("@/assets/img/products.jpg"),
         require("@/assets/img/products2.jpg"),
         require("@/assets/img/products3.jpg"),
         require("@/assets/img/products4.jpg"),
         require("@/assets/img/products5.jpg"),
         require("@/assets/img/products6.jpg"),
      ],
    }
  },
  created(){
    this._getProductType()
  },
  methods:{
    gobanck(){
      this.$router.go(-1);
    },
    //获取产品分类
    _getProductType(){
      getProductType({}).then( res => {
        if(res.status == true){
          this.productsSortList = res.data.type_level1
          this.sortList = res.data.type_level1[this.active].type_level2;
          let id = res.data.type_level1[0].type_level2[0].id;
          this.type_level2Id = id;
          this._getProductList(id)
        }
      })
    },
     //产品列表
    _getProductList(id){
      let data = {
        type_id :id,
        page_count:9,
        page:this.page
      }
      getProductList(data).then( res =>{
         if(res.status == true){
           this.productsImg = res.data.list
           this.total = Math.ceil(parseInt(res.data.total)/10);
         }
      })
    },
    changeNewsTitle(name){
      this.active =name;
      this.page = 1;
      this.sortList = this.productsSortList[this.active].type_level2 || []
      this.type_level2Id = this.sortList[0].id
      this._getProductList(this.type_level2Id)
    },
    changeLevel2(name){
      this.type_level2Id = this.sortList[name].id;
      this.page = 1;
      this._getProductList(this.type_level2Id)
    },
    changePage(val){
      this.page = val;
      this._getProductList(this.type_level2Id)
    },
  }
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/common.styl'
.products /deep/ [class*=van-hairline]::after
  border:none
.products /deep/ .van-swipe
  height:250px
.products
  margin-bottom:$margin-bottom
  .title
    padding:$padding-small
    font-size:$font-size-large
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
  .swiper
    img
      height:100%
  .product-sort
    .product-sort-img
      width:65px
      height:65px
      border-radius:50%
      margin-bottom:$padding-small-s
    .product-sort-name
      font-size:$font-size-medium
</style>