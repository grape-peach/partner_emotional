<template>
    <div class="page-head">
       <!-- 顶部的导航条 -->
       <!-- (1)左侧保存三个a标签 -->
       <span>{{leftTitlea1}}</span>
       <span>{{leftTitlea2}}</span>
       <span>{{leftTitlea3}}</span>

       <div class="right-head">
       <!-- (2)右侧一个搜索框 -->
       <input type="text" placeholder="林深时见鹿">
       <img src="../../../assets/sousuo.png" alt="">
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
         
        }
    },
    //声明接收父组件传递数据
    props:{
       leftTitlea1:{default:""},
       leftTitlea2:{default:""},
       leftTitlea3:{default:""},
        // search:{
        //     type:Function
        // },//声明函数:类型检测
        // add:{
        //     type:Function
        // }//类型检测
    }
}
</script>
<style scoped>

  /* 1.scoped 防止样式冲突，自动为选择器加一随机数 */
  /* 2.最外层父元素 */
  .page-head{
      display: flex; /* 移动端项目首选布局flex */
      position:fixed;
      z-index: 999;/* 显示在元素上面 */
      width:100%;/* 宽度与父元素相同 */
      justify-content: space-between;/* 子元素两端对齐 */
      align-items: center;/* 垂直居中 */
      background-color:#5577AA;
      height:48px;
      padding-left:7px;
      padding-right:7px;
      
      color:#fff;
      font-size:14px;
  }
  /* 3.右侧搜索框 */
  .right-head{
    display: flex;
    position:relative;
    top:1px;
    height:28px;
    width:170px;
    padding: 0;
  }
  .right-head input{
      border-radius: 15px;
      background-color:#fdf5de;
      color:#000; 
      padding:0 0 0 7px;
  }
  .right-head img{
      display: block;
      position: relative;
      right:31px;
      top:4px;
      width:20px;
      height:20px;
  }

</style>
