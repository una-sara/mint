import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//1:引入自定义组件 Exam01.vue
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Exam04 from "./components/exam/Exam04.vue"

Vue.use(Router)
export default new Router({
  routes: [
    //2:配置自定义组件路径
    //浏览器：http://127.0.1:5050/#/Exam01
    {path:'/Exam01',component:Exam01},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
