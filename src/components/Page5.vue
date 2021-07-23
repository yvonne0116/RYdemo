<template>
    <div>
        <el-card style="margin-top:-30px">
            <el-row>
                <el-col :span="16">
                        <div >
                            <h2 class="card-title">仓储信息</h2>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="vertical-align:middle;position:relative;">
                            <h6 class="card-principal">负责人：王王</h6>
                        </div>
                    </el-col>
                </el-row>
                <div v-for="(i) in imgList" :key='i'>
                    <img :src="i.imgUrl" class="image"/>
                </div>
            
        </el-card>
    </div>
    <!-- <el-image
    :src="require('../assets/header.png')"
    /> -->
</template>
<script>

export default{
    data(){
        return{
        imgList:[
            {
                i:0,
                imgUrl:require('../assets/包装仓储.jpg')
            },{
                i:1,
                imgUrl:require('../assets/包装存储2.jpg')
            }
        ]
        }

    }
};
</script>
<style scoped>
.image{
    width: 80%;
    /* margin-left: 10%; */
}
.card-title{
    text-align: left;
    position: relative;
    margin-left: 6%;
}
</style>