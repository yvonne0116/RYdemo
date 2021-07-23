<template>
    <div style="margin-top:-30px;">
    <div class="timeline"> 
    <el-timeline >
        <el-timeline-item 
        v-for="(item,index) in activities" 
        :key="index"
        :timestamp="item.date"
        placement="top">
            <el-card>
                <el-row>
                    <el-col :span="16">
                        <div >
                            <h2 class="card-title">{{item.title}}</h2>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="vertical-align:middle;position:relative;">
                            <h6 class="card-principal">负责人：{{item.principal}}</h6>
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <p class="card-content">{{item.content}}</p>
                </el-row>
                    <div v-for="(i) in item.imgList" :key='i'>
                        <img :src="i.imgUrl" class="image"/>
                    </div>
                    
            </el-card>
        </el-timeline-item>

    </el-timeline>
    </div>
    </div>

</template>
<script>
export default{
    data(){
        return{
            activities:[{
                title:'生产',
                content:'通过6道工序巴拉巴拉巴拉',
                principal:'王人',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/生产图片1.jpeg')
                    },
                    {
                        i:1,
                        imgUrl:require('../assets/生产图片2.jpeg')
                    }
                ]
            },
            {
                title:'检验',
                content:'检验',
                principal:'包装',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/检验.jpg')
                    }
                ]
            },
            {
                title:'包装',
                content:'包装',
                principal:'包装',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/包装1.jpg')
                    },
                    {
                        i:0,
                        imgUrl:require('../assets/包装2.jpg')
                    },
                ]
            },

            ]
        }
    }
}
</script>
<style scoped>
.card-title{
    text-align: left;
    position: relative;
    margin-left: 6%;
}
.card-principal{
    text-align: right;
    color:grey;
    margin-right: 10%;
    position: relative;
    justify-content:center;
    align-items: center;
    vertical-align:middle;
}
.card-content{
    margin-left: 10%;
    width: 80%;
    position: relative;
}
.image{
    width: 80%;
    /* margin-left: 10%; */
}

</style>
<style>
.el-timeline{
    padding-left:5px;
    padding-inline-start: 5px;
}
ul{
    padding-inline-start: 5px;;
}
</style>