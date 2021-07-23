<template>
    <div>
    
    <el-card style="margin-top:-30px">
        <el-table
        :data="tableData"
        border
        style="width: 90%;margin-left:5%;">
        <el-table-column
            prop="name"
            label='产品参数'>
        </el-table-column>
        <el-table-column
            prop="data"
            label="产品信息">
        </el-table-column>
        </el-table>

        <div style="width:90%;margin-left:5%;margin_top:-6px;">
            <el-image :src="require('../assets/product.png')"/>
        </div>
    </el-card>
    </div>
</template>
<script>
import index from './Home.vue';

export default{
components: { index },
    data(){
        return{
            img:[{
                image:'../assets/header.png'
            }],
            tableData:[{
                name:"产品名称",
                data:'荷叶破壁饮片'
            },
            {
                name:'产品批号',
                data:'A1000001',
            },
            {
                name:'生产日期',
                data:'2020年1月30日'
            },
            {
                name:'溯源码',
                data:'1H0RVUD4T'
            },
            {
                name:'产地',
                data:'中国云南'
            },
            {
                name:'包装规格',
                data:'2g×10包'
            },
            {
                name:'功能主治',
                data:'111111111111111111111111111'
            },
            {
                name:'用法用量',
                data:'1111111111111111111111111'
            }]
        }
    }
};
</script>
<style  scoped>

</style>
