<template>
   <div>
       <h1>src/components/exam/Exam01.vue</h1>
       <h1>自定义组件Exam组件</h1>
   </div>
</template>
<script>
  //#调用短消息组件
  export default {
      created(){
          //vue组件生命周期事件,表示当前组件创建成功
          //立即调用函数
          this.$toast({message:"添加成功"});
          //http://127.0.0.1:5050/#/Exam01
      }
  }
</script>