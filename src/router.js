import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import classIfy from './views/classify.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/classIfy',component: classIfy},
  ]
})
