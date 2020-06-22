<template>
   <div>
       <h2>Fa08.vue父组件</h2>
       <!--3.调用子组件-->
       <sub08></sub08>
   </div>
</template>
<script>
//1.引入子组件
import Sub08 from "./Sub08.vue"
export default {
    dara(){
       return {}
    },
    //2.注册子组件
    components:{
        "sub08":Sub08
    }
}
</script>