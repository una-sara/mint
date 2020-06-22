import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//1:引入自定义组件 Exam01.vue
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Exam04 from "./components/exam/Exam04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam06 from "./components/exam/Exam06.vue"
import Exam07 from "./components/exam/Exam07.vue"
import Fa08 from "./components/exam/Fa08.vue"
import Fa09 from "./components/exam/Fa09.vue"
//微信消息项目
//(1)消息项目入口文件
import Home3 from "./components/message/Home.vue"
//(2)临时全局组件
import MessageList from "./components/message/common/MessageList.vue"


Vue.use(Router)
export default new Router({
  routes: [
    //2:配置自定义组件路径
    //浏览器：http://127.0.1:5050/#/Exam01
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Exam05',component:Exam05},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam07',component:Exam07},
    {path:'/Fa08',component:Fa08},
    {path:'/Fa09',component:Fa09},
    {path:'/Home3',component:Home3},
    {path:'/MessageList',component:MessageList},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
