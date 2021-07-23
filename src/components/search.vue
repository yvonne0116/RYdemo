<template>
    <div class="bg" :style='bg'>
        <div style="width:100%">
            <div class='form'>
            <h1>
                瑞药金方溯源系统
            </h1>
        <el-input
            placeholder="请输入溯源码"
            v-model="input_code"
            class="input"
            >
            <!-- 导入iconfont图标 -->
            <el-image :src="require('../assets/Scan.png')" class='scan-icon'/>
        </el-input>

        
        <el-button type="danger" icon="el-icon-search" @click="goToSearch()" style="width:75%;margin-top:20px;">查询</el-button>
                <p>
            扫码查询
        </p>
            </div>
        </div>
    </div>
</template>
<script>
export default({
    data(){
        return{
            input_code:'',
            bg:{
                backgroundImage: "url(" + require("../assets/back-img2.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize:"100% 100%"
                }
        }
    },
    methods:{
    ScanCode(){
        //扫描二维码
    },
    goToSearch(){
        this.$router.push('/Home/product')
    }
    },

})
// let isOverflow = this.$refs.isOverflow;
// for (let i in isOverflow){
//     let cWidth = isOverflow[i].clientWidth;
//     let sWidth = isOverflow[i].scrollWidth;
//     console.log(cWidth,sWidth)
//     if (sWidth > cWidth) { //超过 
//         this.$set(this.isEllipsis, i, true);
//     } else {
//         this.$set(this.isEllipsis, i, false);
//     }
// }

</script>
<style scoped>
.form{
    position:relative;
    top:40%;
    width:100%;
    /* display: inline-flex; */
    vertical-align: middle;
}
.bg{
    
    margin-top: 0;
    margin-left:0;
    margin-right:0;
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-flex;
    vertical-align: middle;
}
.input{
    width: 75%;
}
.input .el-input__inner{
    background: require('../assets/Scan.png') no-repeat 10px center;
    padding: 0 20px;
    width: 80px;

}
.scan-icon{
    position: relative;
    width: 20px;
    height: 20px;
    display: flex;
}
</style>

