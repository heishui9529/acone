import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import axios from "axios"
//发送请求时保存session信息
axios.defaults.withCredentials=true
//设置基础路径            |服务器端口|        
axios.defaults.baseURL="http://127.0.0.1:3000/"
//将axios注册vue实例
Vue.prototype.axios=axios
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
Vue.config.productionTip = false
import 'lib-flexible'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
