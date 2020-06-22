<template>
   <div>
       <h1>底部导航栏</h1>
       <!--父元素-->
       <mt-tab-container v-model="active">
           <mt-tab-container-item id="tab1"> 
                首页
           </mt-tab-container-item>
           <mt-tab-container-item id="tab2"> 
                购物车
           </mt-tab-container-item>
       </mt-tab-container>


       <!--底部导航栏-->
       <mt-tabbar fixed v-model="active">
           <!--按钮-->
           <mt-tab-item  id="tab1">
               <!--为图片添加属性：插槽-->
                <img slot="icon" src="../../assets/home.png" />
                首页
           </mt-tab-item> 
           <mt-tab-item id="tab2">
                <img slot="icon" src="../../assets/cart.png"/>
                购物车
           </mt-tab-item> 
       </mt-tabbar>
   </div>
</template>
<script>
export default {
    data(){
        return {
            active:"tab1"
        }
    }
}
</script>