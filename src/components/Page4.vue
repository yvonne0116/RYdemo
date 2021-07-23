<template>
    <div>
        <el-card style="margin-top:-30px">
            <el-row>
                <el-col :span="16">
                        <div >
                            <h2 class="card-title">质检报告</h2>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="vertical-align:middle;position:relative;">
                            <h6 class="card-principal">负责人：王王</h6>
                        </div>
                    </el-col>
                </el-row>
            <img :src="require('../assets/质检报告.jpg')" class="image"/>
        </el-card>
    </div>
</template>
<script>

export default{};
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