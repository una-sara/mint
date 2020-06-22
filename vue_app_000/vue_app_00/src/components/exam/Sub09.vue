<template>
    <div>
        <h1>Sub09子组件</h1>
        <!--1.显示父组件数据-->
        <!-- <h3>{{msg}}</h3> -->
        <!--为h3绑定点击事件，事件处理函数-->
        <!--函数是由父组件传入-->
        <h3 @click="add3">{{msg}}</h3>
        <!--(3)接收图片-->
        <img :src="img3"/>
        
    </div>
</template>
<script>
export default{
    //2.声明接收父组件数据   msg类型字符串
    props:{
        img3:{default:""},//图片路径
        msg:{default:""},//显示文字
        add3:{tyep:Function}//type接收类型
                            //Function函数类型
    }
   
}
</script>