<template>
<!-- 显示种植信息，主要是时间轴 -->
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
                title:'地理环境',
                content:'经纬度110，192，位于云南经纬度110，192，位于云南经纬度110，192，位于云南经纬度110，192，位于云南经纬度110，192，位于云南经纬度110，192，位于云南',
                principal:'李四',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/ev.jpg')
                    }
                ]
                
            },
            {
                title:'水质报告',
                content:'',
                principal:'张三',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/water_report1.jpg')
                    },
                    {
                        i:1,
                        imgUrl:require('../assets/water_report2.jpg')
                    }
                ]
            },
            {
                title:'土壤鉴定报告',
                content:'',
                principal:'王五',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/soil_report.png')
                    }
                ]

            },
            {
                title:"基源鉴定",
                content:'种子基因与来源，湖南农业种子公司YHN0001号',
                principal:'张三',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/genic_report.jpeg')
                    }
                ]
            },
            {
                title:"种植",
                content:'',
                principal:'王1',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/中药种植1.png')
                    },
                    {
                        i:1,
                        imgUrl:require('../assets/中药种植2.png')
                    },
                    {
                        i:2,
                        imgUrl:require('../assets/中药种植3.png')
                    },
                ]
            },
            {
                title:"采收",
                content:'2020年1月11日采收，工具为自动采收机',
                principal:'赵请',
                imgList:[
                    {
                        i:0,
                        imgUrl:require('../assets/中草药采收图.jpg')
                    }
                ]
            },            
]
        }
    }
};
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