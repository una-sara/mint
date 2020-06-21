<template>
<div>
    <h1>Exam04.vue</h1>
        <!--开关组件:移动端项目使用-->
        <mt-switch v-model="val2" @change="handle2">
            开关选项
        </mt-switch>
    </div>
</template>
<script>
export default{
    data(){
        return {val2:true}//状态原始值
    },
    methods:{
        handle2(){//处理状态变化的函数
            //当组件状态发生改变，触发事件执行
            console.log(this.val2);//状态
        }
    }
}
</script>