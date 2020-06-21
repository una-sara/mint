<template>
<div>
    <h1>Exam04.vue</h1>
        <!--开关组件:移动端项目使用-->
        <mt-switch v-model="val2" @change="handle2">
            开关选项
        </mt-switch>
        <!--单选列表：移动项目使用-->
        <mt-radio title="单选列表" 
            :options="['a','b','c']"
            v-model="val3">
        </mt-radio>
        <mt-button @click="get3">
            获取用户选中值
        </mt-button>
    </div>
</template>
<script>
export default{
    data(){
        return {val2:true,val3:''}//状态原始值
    },
    methods:{
        get3(){
            //功能:获取用户选中的单选列表中值
            console.log(this.val3);
        },
        handle2(){//处理状态变化的函数
            //当组件状态发生改变，触发事件执行
            console.log(this.val2);//状态
        }
    }
}
</script>