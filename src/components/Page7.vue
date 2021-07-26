<template>
    <div>
        <el-card style="margin-top:-30px">
            <p>
                该商品已查询过
            </p>
            <h2 style="color:red;">{{check_times}}</h2>
            <p>次</p>
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
            check_times:7,

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