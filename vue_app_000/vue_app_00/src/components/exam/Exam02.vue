<template>
 <div>
      <h2>Exam02组件</h2>
      <button @click="handle1">点击按钮显示</button>
      <button @click="handle2">显示交互式提示框</button>
      <button @click="handle3">显示确认框</button>
  </div>
</template>
<script>
export default {
    methods:{
        handle2(){
            //显示交互式提示框 简写
            // this.$messagebox("消息","数据加载成功");
            this.$messagebox("","数据加载成功");
        },
        handle3(){
            //确认提示框:确认 取消按钮 异步
            this.$messagebox
                .confirm("是否删除指定数据")//确认内容
                .then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
        },
        handle1(){
            //按钮事件处理函数
            // console.log(123);
            this.$toast(
                {
                    message:'删除成功',//消息内容
                    position:'bottom',//消息位置
                    iconClass:'iconfont icon-chenggong1'//显示图标
                });
        }
    }
    
}
</script>