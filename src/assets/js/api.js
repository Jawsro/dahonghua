import {HttpRequest} from "./request.js"

//在线订购
export function setOrderForm (data){
  return HttpRequest.getRequest({
    method: "POST",
    url: "/api/order_online/order",
    data: data
  })
}
//案例
export function getCaseList (data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/cases/list",
    data: data
  })
}
//产品列表
export function getProductList(data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/product/list",
    data: data
  })
}
//产品分类
export function getProductType(data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/product/homepage_list",
    data: data
  })
}
//轮播图
export function getHomepageSwiper(data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/homepage_swiper/list",
    data: data
  })
}
//公司新闻类型
export function getNewsType(data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/news/homepage_list",
    data: data
  })
}
//公司新闻列表
export function getNewsList(data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/news/list",
    data: data
  })
}
//公司新闻详情
export function getNewsDetail(data){
  return HttpRequest.getRequest({
    method: "GET",
    url: "/api/news/detail",
    data: data
  })
}