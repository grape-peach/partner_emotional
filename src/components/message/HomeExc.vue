<template>
   <div>
      <!--Home.vue-->
      <!--1:顶部标题子组件-->      
      <titlebar
       leftTitlea1="签到" leftTitlea2="广场" leftTitlea3="迷鹿"
      >
      
      </titlebar>
      <!--2:div保留(标题)48px高度-->
      <!-- <div style="margin-top:48px;">
      </div> -->
      <!--Home.vue 入口全局组件-->
      <!--3:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
         <messagelist>
         </messagelist>
        </mt-tab-container-item>
        
      </mt-tab-container>
      <!--4:tabbar列表-->
      <!--为每个按钮绑定点击事件-->
      <!--当前按钮isSelect:true-->
      <!--其它按钮isSelect:false-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
         <tabbaricon
          :selectedImage="require('../../assets/shouye_selected.png')"
          :normalImage="require('../../assets/shouye_normal.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
        <!-- 首页 -->
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
         <tabbaricon
         :normalImage="require('../../assets/fabu_normal.png')"
         :selectedImage="require('../../assets/fabu_selected.png')"
         :focused="currentIndex[1].isSelect">
         </tabbaricon>
         <!-- 发布 -->
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
          <tabbaricon
          :normalImage="require('../../assets/xiaoxi_normal.png')"
          :selectedImage="require('../../assets/xiaoxi_selected.png')"
          :focused="currentIndex[2].isSelect">
          </tabbaricon>
          <!-- 消息 -->
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
           :normalImage="require('../../assets/wode_normal.png')"
           :selectedImage="require('../../assets/wode_selected.png')"
           :focused="currentIndex[3].isSelect"
          ></tabbaricon>
          <!-- 我的 -->
        </mt-tab-item>
      </mt-tabbar>
   </div>
   
</template>
<script>
import TitleBar from "./common/TitleBar.vue"
import MessageList from "./common/MessageList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
export default {
  data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:true},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods: {
    // mysearch(){console.log("搜索");},
    // myadd(){console.log("+")},
    changeState(n){
      //函数功能:将当前参数下标
      //对应数组值修改true其它修改false
      //1:创建循环,循环数组中内容
      for(var i=0;i<this.currentIndex.length;i++){
       //2:判断如果循环下标与n相等 20
       if(n==i){
        //3:当前下标元素true 10:22
        this.currentIndex[i].isSelect=true;
       }else{
        //4:其它元素修改false
        this.currentIndex[i].isSelect=false;
       }
       
      }

    }
  },
  components:{
    "titlebar":TitleBar,
    "messagelist":MessageList,
    "tabbaricon":TabBarIcon
  }
}
</script>
<style  scoped>
/*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
.mint-tabbar>.mint-tab-item{
  background:#5577aa;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: #5577aa;
}

.page-wrap{
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px;
}
</style>


