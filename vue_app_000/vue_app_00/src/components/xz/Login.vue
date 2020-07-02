<template>
   <div>
      <!--用户名输入框-->
     <mt-field label="用户名" v-model="uname" placeholder="请输入用户名"></mt-field>
      <!--用户密码输入框-->
     <mt-field label="密码" v-model="upwd" placeholder="请输入密码"></mt-field>
      <!--登录按钮 绑定事件-->
      <mt-button size="large" @click="login">登录</mt-button>
   </div>
</template>
<script>
export default{
    data(){
        return {
            uname:"",//用户名
            upwd:""//密码
        }
    },
    methods:{
        login(){
            //功能一:完成用户登录操作
            //1.获取用户名和密码
            var u=this.uname;
            var p=this.upwd;
            // console.log(u+":"+p);
            //2.创建正则表达式 3~12位 字母数字
            var reg=/^[a-z0-9]{3,12}$/i;
            //3.判断如何错误 用户名提示
            if(!reg.test(u)){
                this.$toast("用户名格式不正确");
                return;
            }
            //4.判断如何错误 密码提示
            if(!reg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            //5.发送ajax
            //6.接收服务器返回数据
            //7.失败 提示
            //8.成功 跳转
        }
    }
}
</script>