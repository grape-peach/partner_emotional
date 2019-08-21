import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入第三方组件库mint ui
// 1.完整引入mint-ui组件库中所有组件
import MintUI from "mint-ui"
// 2.单独引入mint-ui组件库中样式文件
import "mint-ui/lib/style.css"
// 3.将mint-ui注册vue实例中
Vue.use(MintUI)
// 4.将字体图标引入到当前项目中
import "./font/iconfont.css"
// 5.引入axios第三方模块
import axios from "axios"
// 6.配置axios 基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
// 7.配置axios 保存session信息
axios.defaults.withCredentials=true
// 8.将axios 注册vue 实例中
Vue.prototype.axios = axios;//由于axios不支持use将实例添加vue原型
// 9.引入vuex 第三方模块
import Vuex from "vuex";//!!
// 11.注册Vuex
Vue.use(Vuex);
// 10.创建Vuex存储实例对象
var store=new Vuex.Store({
  state:{//保存多个组件共享数据
    cartCount:0
  },//共享数据
  mutations:{//添加修改共享数据函数
    increment(state){
      state.cartCount++;
    },
    clear(state){ //清空购物车
      state.cartCount=0;//购物车数量清零
    }   //清空购物车
  },//添加修改数据函数
  getters:{//添加函数通过函数获取共享数据
    getCartCount(state){
      return state.cartCount;
    }
  },
  actions:{//添加函数通过函数调用使用异步操作?

  }
})//!!

// 12.将实例对象添加到Vue中
new Vue({
  router,
  render:h=>h(App),
  store    //!!!
}).$mount('#app')

