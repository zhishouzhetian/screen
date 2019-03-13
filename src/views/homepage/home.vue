<template>
    <div class="wrapper">
        <div>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="bg" style="height:350px;background-size:cover;background-position:center;background-image:url(https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/83de83ec898f41aeb0b3425f080829cd.jpg);" data-v-358824a4=""></div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div>content</div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: [],
        data() {
            return {}
        },
        created() {},
        mounted() {},
        computed: {},
        methods: {}
    }
</script>
<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>