import search from './components/search.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'
import Page5 from './components/Page5.vue'
import Page6 from './components/Page6.vue'
import Page7 from './components/Page7.vue'
export default[
    {
        path:'/',
        component:search,
        meta:{keepAlive:false}
    },
    // {
    //     path:'/Home',
    //     component:HomeBar,
    //     meta:{keepAlive:false}
    // },
    {
        path:'/Home/product',
        component:Page1,
        meta:{keepAlive:true}
    },
    {
        path:'/Home/plant',
        component:Page2,
        meta:{keepAlive:true}
    },
    {
        path:'/Home/factory',
        component:Page3,
        meta:{keepAlive:true}
    },
    {
        path:'/Home/quality',
        component:Page4,
        meta:{keepAlive:true}
    },
    {
        path:'/Home/save',
        component:Page5,
        meta:{keepAlive:true}
    },
    {
        path:'/Home/company',
        component:Page6,
        meta:{keepAlive:true}
    },
    {
        path:'/Home/fake',
        component:Page7,
        meta:{keepAlive:true}
    }
]