<template>
    <div class="rootstyle">
       <!--一条消息-->
       <!--(1)左侧图片与标题-->
       <div class="leftimgtxt">
           <img :src="imgUrl" 
           class="imgStyle"/>
           <!--1.2标题和子标题-->
           <div class="rightOfImg">
               <span class="titleable">{{title}}</span>
               <span class="subtitle">{{subtitle}}</span>
           </div>
       </div>
       <!--(2)右侧时间-->
       <span class="sendtime">{{sendtime}}</span>
    </div>
</template>
<script>
export default{
    // (1)在模板中创建四个变量接收父元素数据
    props:{
        imgUrl:{default:""},//左侧图片
        title:{default:""},//标题
        subtitle:{default:""},//子标题
        sendtime:{default:""}//发送时间
    }
    // 图片 标题 子标题 发送时间
    // (2)添加属性声明接收父元素
    // imgUrl/title/subtitle/sendtime
    // (3)修改MessageList.vue 传递四个数据
}
</script>
<style scoped>
  /**1.为根元素添加样式 弹性布局 */
  .rootstyle{
      display: flex;
      justify-content: space-around;/**子元素两端对齐 */
      align-items: center;/**垂直居中 */
  }
  /**2.左侧图片与文字区域 */
  .leftimgtxt{
      display:flex;
      align-items: center;
  }
  /**3.图片 */
  .imgStyle{
      width: 50px;
      height:50px;
  }
  /**4.标题与子标题按列排放 */
  .rightOfImg{
      display: flex;/**弹性布局 */
      flex-direction: column;/**按列排放子元素 */
      justify-content: center;
      margin-left:7px/** 与左侧图标间距*/
  }
  /**5.标题 */
  .titleable{
      color:#000;
      font-size:17px;
  }
  /**6:子标题 */
  .subtitle{
      color:gray;
      margin-top:4px;
  }
</style>