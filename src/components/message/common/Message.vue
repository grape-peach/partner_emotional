<template>
    <div class="rootstyle">
        <!--Message.vue 消息子组件 -->
        <!-- 一张图片暂时 -->
        <img :src="imgurl" class="imgstyle"/>
        <!-- <div class="leftimgandtxt"> -->
        <!-- 1.左侧图片 -->
        <!-- <img :src="imgurl" class="imgstyle"/> -->
        <!-- 2.左侧标题与子标题 -->
        <!-- <div class="titlestyle">
            <span class="title">{{title}}</span>
            <span class="subtitle">{{subtitle}}</span>
        </div>
        </div> -->
        <!-- 3.右侧时间 -->
        <!-- <span class="sendtime">
            {{sendtime}}
        </span> -->
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    // 声明接收父元素传递数据
    props:{
      imgurl:{default:""},
    //   title:{default:""},
    //   subtitle:{default:""},
    //   sendtime:{default:""}
    }
}
</script>
<style scoped>

  /* 1.根元素的样式 */
  /* 2.图片与样式 */
  .rootstyle{
      display: flex;
      justify-content: space-between;
      align-items:center;
      background-color: #5577AA;
      
  }
  /* 3.图片与样式 */
  /* .leftimgandtxt{
    display:flex; 
  } */
  /* 图片样式 */
  .imgstyle{
      width:350px;
      /* height:700px; */
      padding:49px 3px 9px 11px;
  }
  /* 5.标题 */
  /* .titlestyle{
      display:flex;
      flex-direction: column; 
       弹性布局，按列排放子元素 
      justify-content: center;
      margin-left: 15px;
  }
  .title{
      color:#000;
      font-size:17px;
  } */
  /* 子标题 */
  /* .subtitle{
      color:rgb(177, 171, 171);
      margin-top:4px;
  } */
  /* 发送时间 */
  /* .sendtime{
      color:rgb(177, 171, 171);
  } */
</style>
