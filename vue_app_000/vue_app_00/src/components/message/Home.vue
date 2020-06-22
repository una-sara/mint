<template>
   <div class="page-tabbar">
       <div class="page-wrap">
            <!--父组件-->
            <!-- <h1>父组件</h1> -->
            <!--3.调用子组件-->
            <titlebar leftTitle="微信(111)"
            :rightFirstImg="require('../../assets/ic_search.png')"
            :rightSecondImg="require('../../assets/ic_add.png')"
            :search="mysearch"
            :add3="myadd3"></titlebar>
       </div>
   </div>
</template>
<script>
//1.引入子组件
import TitleBar from "./common/TitleBar"
export default{
    //2.注册子组件
    components:{
        "titlebar":TitleBar
    },
    methods:{
        //父组件定义函数,将其传递子组件
        mysearch(){console.log("搜索")},
        myadd3(){console.log("添加")}
    }
}
</script>