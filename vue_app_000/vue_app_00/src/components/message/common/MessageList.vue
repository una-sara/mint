<template>
   <div>
       <!-- <h1>多条消息组件MessageList.vue</h1>
       <h1>将MessageList.vue临时修改为全局组件</h1>
       <h1>给组件分配访问路径/MessageList</h1> -->
       <!--3.调用子组件-->
       <message 
       sendtime="上午 10:31"
       title="今天涨价了"
       subtitle="其实今天没涨"
       :imgUrl="require('../../../assets/home.png')"></message>

   </div>
</template>
<script>
//1.引入子组件
import Message from "./Message.vue"
export default{
    //2.注册子组件
    components:{
        "message":Message
    }

}
</script>