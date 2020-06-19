import Vue from 'vue'
import App from './App.vue'
import router from './router'

//删除line5 ~ line16
//1.引入第三方组件库 mint-ui
//1.1 完成引入所有组件
import MintUI from "mint-ui"
//1.2 单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3将mint-ui 注册vue
Vue.use(MintUI);

//1.4:引入图标字体文件
import "./font/iconfont.css"


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
