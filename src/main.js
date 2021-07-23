// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' 
import 'lib-flexible'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter)
//创建路由
const router = new VueRouter({
  routes:Routes,
  //消除地址栏中的#
  mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  router:router,
  render:h=>h(App)
})
