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
            <!--空div 48px高度-->
            <div style="margin-top:48px"></div>
            
            <!--(2)面板 父面板 子面板-->
                <!--父面板-->
            <mt-tab-container v-model="active">
                <!--子面板-->
                <mt-tab-container-item id="message">
                   <!--(2)引入消息列表子组件-->
                   <messagelist></messagelist>
                </mt-tab-container-item>
            </mt-tab-container>
            <!--(3)tabbar列表-->
            <mt-tabbar fixed v-model="active">
               <mt-tab-item id="message" 
                  @click.native="changeState(0)">
                  <tabbaricon 
                  :selectedImage="require('../../assets/ic_weixin_selected.png')" 
                  :normalImage="require('../../assets/ic_weixin_normal.png')"
                  :focused="currentIndex[0].isSelect"></tabbaricon>
                   微信
               </mt-tab-item>
               <mt-tab-item id="contact" 
                @click.native="changeState(1)">
                  <tabbaricon 
                  :selectedImage="require('../../assets/ic_contacts_selected.png')" 
                  :normalImage="require('../../assets/ic_contacts_normal.png')"
                  :focused="currentIndex[1].isSelect"></tabbaricon>   
                   通讯录
               </mt-tab-item>
               <mt-tab-item id="find"
               @click.native="changeState(2)">
                    <tabbaricon 
                  :selectedImage="require('../../assets/ic_find_selected.png')" 
                  :normalImage="require('../../assets/ic_find_normal.png')"
                  :focused="currentIndex[2].isSelect"></tabbaricon>
                   发现
               </mt-tab-item>
               <mt-tab-item id="me" 
               @click.native="changeState(3)">
                    <tabbaricon 
                  :selectedImage="require('../../assets/ic_me_selected.png')" 
                  :normalImage="require('../../assets/ic_me_normal.png')"
                  :focused="currentIndex[3].isSelect"></tabbaricon>
                   我的
               </mt-tab-item>
            </mt-tabbar>
            <!--按钮[图片/文字]-->
            <!--图片:子组件/点击切换-->
       </div>
   </div>
</template>
<script>
//1.引入顶部标题子组件
import TitleBar from "./common/TitleBar"
//2.引入消息列表子组件
import MessageList from "./common/MessageList"
//3.引入底部导航条图片组件
import TabBarIcon from "./common/TabBarIcon"

export default{
    data(){
      return {
      //面板中显示子组件id
       active:"message",
       //创建数组保存所有(底部导航条)图片状态
       currentIndex:[
           {isSelect:true},//与第一个按钮图片相关
           {isSelect:false},//与第二个按钮图片相关
           {isSelect:false},//与第三个按钮图片相关
           {isSelect:false},//与第四个按钮图片相关
       ]
       //为按钮绑定点击事件
       //当前按钮图片,选中状态true其他元素false
    }
},
//2.注册子组件
    components:{
        "titlebar":TitleBar,//顶部标题
        "messagelist":MessageList,//消息列表
        "tabbaricon":TabBarIcon//tabbar图片组件
    },
    methods:{
        //父组件定义函数,将其传递子组件
        mysearch(){console.log("搜索")},
        myadd3(){console.log("添加")},
        changeState(idx){
            //功能：当点底部按钮切换图片状态
            //当前图片训中其他默认 
            //参数index:表示按钮下标
            console.log(idx);
            //功能:当点底部按钮切换图片状态
            //当前图片选中其他默认
            //参数idx：表示按钮下标
            //1：创建循环遍历状态数组中所有值
            for(var i =0;i<this.currentIndex.length;i++){
                //2:判断如果参数与当前元素下标相同
                if(i==idx){
                    //3:当前元素状态修改true
                    this.currentIndex[i].isSelect=true;
                }else{
                    //4:其他元素状态修改为false
                    this.currentIndex[i].isSelect=false;       
                 }
            }

        }
    }
}
</script>
<style scoped>
 /**1：添加二个样式 */
 .page-tabbar{
     overflow:hidden;/**元素溢出隐藏 */
 }
  .page-wrap{
      overflow:auto;/**溢出数据显示滚动条 */
      padding-bottom:60px;/**底部导航条 */
  }
 /*home.vue*/
 /*覆盖原组件中样式 tabbar按钮中文字颜色*/
 /*(1)覆盖原组件中样式 默认文字颜色*/
 .mint-tabbar>.mint-tab-item{
   color:#999;
 }
 /*(2)覆盖原组件中样式 选中文字颜色*/
 .mint-tabbar>.mint-tab-item.is-selected{
    background-color:transparent;/*透明*/
    color:#45c018;/*文字颜色*/
 }
 
</style>
