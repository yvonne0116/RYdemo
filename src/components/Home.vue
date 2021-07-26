<template>
    <!-- 导航区域 -->
    <div>
    <!-- 可以考虑用走马灯的组件，多放几个图片 -->
    <!-- <el-image :src="require('../assets/header.png')"/> -->
    <el-carousel :interval="4000" type="demonstration" height="150px">
        <el-carousel-item v-for="item in imgList" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <el-image :src="item.img" style="width:100%;height: 100%" fit="fit"></el-image>
        </el-carousel-item>
    </el-carousel>
    <div style="width:100%;">
    <!-- <el-scrollBar style="width:100%" max-width="350px"> -->
    <el-menu 
    :default-active="$route.path"
    class="el-menu-demo" 
    mode="horizontal" 
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    >

        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.path" @click="goTo(item.path)" class='menu-item'>
            <template slot="title">
                <div style="height: 70px;width:80px;">
                    <div class='item-icon icon'>
                        <i :class="item.class"></i>
                    </div>
                    <div class="item-text">
                    <span style="width:50px;height:30px;text-align:center;padding-top:-30px;">{{item.navItem}}</span>
                    </div>
                </div>
            </template>
        </el-menu-item>

    </el-menu>
    <div class="line"></div>
    </div>
    <el-main class="detailed-content">
    </el-main>
    </div>
</template>

<script>

export default{
    name:"Home",
    data(){
        return{
            activeIndex: '1',
            imgUrl: '/static/header.png',
            navList:[
                {path:'/Home/product',navItem:'产品信息',i:1,class:"el-icon-tableware"},
                {path:'/Home/plant',navItem:'道地种植',i:2,class:"el-icon-place"},
                {path:'/Home/factory',navItem:'破壁生产',i:3,class:"el-icon-shopping-cart-2"},
                {path:'/Home/quality',navItem:'产品质检',i:4,class:"el-icon-document"},
                {path:'/Home/save',navItem:'仓储信息',i:5,class:"el-icon-truck"},
                {path:'/Home/company',navItem:'品牌故事',i:6,class:'el-icon-medal'},
                {path:'/Home/fake',navItem:'防伪查询',i:7,class:'el-icon-medal'}
            ],
            imgList:[
                {
                    img:require('../assets/header1.png')
                },
                {
                    img:require('../assets/header2.png')
                },
                {
                    img:require('../assets/header3.jpeg')
                },
                {
                    img:require('../assets/header4.png')
                },
            ]
        }
    },
    methods:{
    handleOpen(key,keyPath){
        console.log(key,keyPath);
    },
    handleClose(key,keyPath){
        console.log(key,keyPath);
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    goTo(path){
        this.$router.replace(path);
    }
    }

}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 2px;
}
#header{
    margin-left: 60px;
    display: flex;
    width: 500px;
}
.item-icon{
    /* display: flex; */
    /* padding-top: -10px; */
    /* margin-top:10px; */
    margin:10px auto;
    /* margin: 0 auto; */
    display: flex;
}
.item-text{
    margin-top:-20px;
    margin-left:3px;
    display: flex;
    position: relative;
    /* margin-right:10px; */
}
.icon{
    padding: 0 auto;
    margin-left:20px;
    position: relative;
}
.menu-item{
    height: 70px;
    width: 100px;
    display: flex;
}
</style>
