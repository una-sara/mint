<template>
    <div>Exam03.vue
        <!--表单输入框 密码年龄 提交按钮-->
       <mt-field label="用户名"
       placeholder="请输入用户名"
       :attr="{maxlength:10}"
       v-model="uname">
       </mt-field>

       <mt-field label="密码" 
       placeholder="请输入密码"
       type="password"
       v-model="upwd"></mt-field>

       <mt-field label="年龄"
       placeholder="请输入年龄"
       type="number" v-model="age">
       </mt-field>

       <mt-button size="large" @click="reg">用户注册</mt-button>
    </div>
</template>
<script>
export default{
    data(){
        return {uname:"",upwd:"",age:""}
    },
    methods:{
        reg(){
            //功能:验证用户输入表单
            //1.创建正则表达式一 用户名和密码 
            //3~12位字母数字
            
            //2.创建正则表达式二 年龄
            //2 位 数字


        }
    }
}
</script>