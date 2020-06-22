<template>
  <div class="page-head">
     <!--组件：顶部导航条子组件-->
     <!--左侧文字-->
     <span>{{leftTitle}}</span>
     <!--右侧两张图片-->
     <div class="right-head">
         <div @click="search" class="searchdiv">
             <img :src="rightFirstImg" style="width:25px"/>
         </div>
         <div @click="add3" class="searchdiv" style="margin-left:20px">
             <img :src="rightSecondImg" style="width:25px;margin-right:18px"/>
         </div>
     </div>
  </div>
</template>
<script>
export default{
    //声明接收父组件的数据
    props:{
        leftTitle:{default:""},//1.左侧文字
        rightFirstImg:{default:""},//2:第一张图片
        rightSecondImg:{default:""},//3.第二张图片
        search:{type:Function},//4.事件处理函数
        add3:{type:Function}//5.事件处理函数 搜索 添加
    }
}
</script>
<style scoped>
 /*1:最外层父元素*/
 .page-head{
   display: flex;/*当前父元素弹性布局*/
   position: fixed;/*固定定位*/
   z-index: 999;/*浮动所有元素上方*/
   width:100%;
   justify-content: space-between;/*两端对齐*/
   align-items: center;/*垂直居中*/
   background-color:#393a3e;/*灰色背景*/
   padding-left:7px;  /*内边距*/
   padding-right:7px;
   height:48px;       /*高度*/
   color:#fff;      /*文字颜色*/
   font-size:18px;
 }
 /*2:右侧图片区域*/
 .right-head{
   display: flex;
 }
 /*3:图片div*/
 .searchdiv{    /*图片外层父元素*/
   display: flex;       /*弹性布局*/
   align-items: center; /*垂直居中*/
   height:48px;
 }
</style>