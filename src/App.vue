<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <Home></Home>
      <router-view></router-view>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import search from './components/search.vue'
import HomeBar from './components/Home.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'

export default {
  name: 'App',
  components:{
    "search":search,
    "Home":HomeBar,
    "factory":Page3,
    "plant":Page2,
    "product":Page1,
    "quality":Page4,
  },
  methods:{


  },
  mounted(){
    // const { NODE_ENV} =process.env;
    // document.documentElement.className=NODE_ENV;
  }
}

</script>

<style>
html,body,#app{
  height:100%;
}
body{
  margin-top:0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  /* height: 100%; */
  width:400px;
  margin:0 auto;
  text-align: center;
}
</style>
<style>
/* // // @import "~@assets/global.less"; */
</style>
