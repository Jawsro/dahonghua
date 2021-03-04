import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shopping from "../views/Shopping.vue";
import CallPhone from "../views/CallPhone.vue";
import Navigation from "../views/Navigation.vue";
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: Shopping
  },{
    path: "/callphone",
    name: "CallPhone",
    component: CallPhone
  },{
    path: "/navigation",
    name: "Navigation",
    component: Navigation
  },{
    path: "/products",
    name: "Products",
    component: Products
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
