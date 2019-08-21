<template>
    <div>
        <!-- <h1>消息列表子组件Message.vue</h1> -->
        <!-- 3.调用(一条消息)子组件 -->
        <message  :imgurl="require('../../../assets/card1.png')"></message>
       
    </div>
</template>
<script>
// <!-- 1:引入(一条消息)子组件 -->
import Message from "./Message.vue"
// 加载json文件
// import mlist from "../json/messagelist.json"
export default {
    data(){
        return {
            // 将mlist对象保存data供模板显示
            // list:mlist
        }
    },
   //  <!-- 2.注册(一条消息)子组件 -->
    components:{
        "message":Message,
    }
}
</script>
