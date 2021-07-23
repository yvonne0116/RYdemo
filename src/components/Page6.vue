<template>
    <div>
        <el-card style="margin-top:-30px">
            <el-row>
                <el-col :span="16">
                        <div >
                            <h2 class="card-title">瑞药金方现代中药有限公司</h2>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="vertical-align:middle;position:relative;">
                            <!-- <h6 class="card-principal">负责人：王王</h6> -->
                        </div>
                    </el-col>
            </el-row>
            <div style="width:90%;text-align:left;margin-left:5%;">
                <p>
                    云南瑞药金方现代中药有限公司，成立于2014年6月23日，是一家集天然中草药、中药(民族药)饮片研究、生产和销售于一体的高品质、综合性制药企业，是云南省首家中药（民族药）破壁饮片配方颗粒的研究和生产单位，破壁饮片研究规范的制定者。公司以云南天然植物王国的道地中草药为企业核心竞争优势，拥有国内外一流生产设备，严格按照国家GMP要求进行生产质量管理，利用低温气流破壁粉碎技术和无辅料添加成型技术制成鹿仙草、龙血树叶、余甘子、红曲、玫瑰花等53个中药破壁饮片品种。公司秉承“全生命周期健康人文关怀”的企业使命，将社会责任放第一位，扎根于中医药事业，以中药服务体系建设为核心，创新企业管理模式，完善公司系统化与信息化管理，注重企业文化建设，提高自主创新能力，构建完善的中药研究体系，用科学的管理保障药品安全，旨在打造百年瑞药金方品牌！
                </p>
            </div>
            <div v-for="(i) in imgList" :key='i'>
                <img :src="i.imgUrl" class="image"/>
            </div>
            <el-row>
                <el-col :span="16">
                        <div >
                            <h2 class="card-title">发展历程</h2>
                        </div>
                    </el-col>
            </el-row>
            <div>
                <img :src="require('../assets/experience.jpeg')" class="image2"/>
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
                imgUrl:require('../assets/header4.png')
            },{
                i:1,
                imgUrl:require('../assets/header3.jpeg')
            }
        ]
        }

    }
};
</script>
<style scoped>
.image{
    width: 90%;
    /* margin-left: 10%; */
}
.image2{
    width:90%;
}
.card-title{
    text-align: left;
    position: relative;
    margin-left: 6%;
}
</style>