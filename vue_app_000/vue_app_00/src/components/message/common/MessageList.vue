<template>
   <div>
       <!-- <h1>多条消息组件MessageList.vue</h1>
       <h1>将MessageList.vue临时修改为全局组件</h1>
       <h1>给组件分配访问路径/MessageList</h1> -->
       <!--3.调用子组件-->
       <!-- {{rows}} -->
       <message 
       class="itemStyle"
       v-for="(item,index) in rows.data" 
       :key="index"
       :sendtime="item.time"
       :title="item.title"
       :subtitle="item.subtitle"
       :imgUrl="require('../../../assets/a_7.png')"></message>

   </div>
</template>
<script>
//1.引入子组件
import Message from "./Message.vue"
//(1.1)引入项目模拟数据文件
import json from "../json/messagelist.json"
export default{
    data(){
        //1.3保存json中的数据
       return {rows:json}
    },
    //2.注册子组件
    components:{
        "message":Message
    }
}
</script>
<style scoped>
/**message子组件添加class */
.itemStyle{
   padding:5px;
   border-bottom:1px solid #d9d9d9;
}
</style>