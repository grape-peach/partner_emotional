import Vue from 'vue'
import Router from 'vue-router'

//import Home from "./components/weixin/Home.vue"
Vue.use(Router)
// 为Exam01.vue 组件指定访问路径
// 1.在router.js 引入组件

// 微信消息列表组件
import HomeExc from "./components/message/HomeExc.vue"
// import MessageList from "./components/message/common/MessageList.vue"

Vue.use(Router)
export default new Router({
  routes: [
   
    {path:'/HomeExc',component:HomeExc},
    // {path:'/MessageList',component:MessageList}
  ]
})
