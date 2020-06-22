<template>
   <div>
       <!--父组件-->
       <h1>Home.vue</h1>
       <!--3.调用子组件-->
       <titlebar></titlebar>
   </div>
</template>
<script>
//1.引入子组件
import TitleBar from "./common/TitleBar"
export default{
    //2.注册子组件
    components:{
        "titlebar":TitleBar
    }
}
</script>