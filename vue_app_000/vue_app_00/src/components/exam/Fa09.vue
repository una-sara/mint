<template>
  <div>
      <h1>Fa09.vue父组件</h1>
      <!--3.调用子组件-->
      <sub09></sub09>
  </div>
</template>
<script>
//1.引入子组件
import Sub09 from "./Sub09.vue"
export default{
    //2.注册子组件
    components:{
        "sub09":Sub09
    }
}
</script>