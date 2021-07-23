import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index.vue'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/product',
      name: 'Home',
      component:Page1,
      children:[{
        path:'/Page1',
        name:'plant',
        component:Page1
      },
    {
      path:'/Page2',
      name:'product',
      component:Page2
    },
    {path:'/Page3',
    name:'quality',
    component:Page3}]
    }
  ]
})
