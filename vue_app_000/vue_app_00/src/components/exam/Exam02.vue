<template>
 <div>
      <h2>Exam02组件</h2>
      <button @click="handle1">点击按钮显示</button>
  </div>
</template>
<script>
export default {
    methods:{
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