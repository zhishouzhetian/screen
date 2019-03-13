<template>
    <div class="wrapper">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">风采展</el-menu-item>
            <el-menu-item index="3">新闻公告</el-menu-item>
            <el-menu-item index="4">联系我们</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        components: {},
        props: [],
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created() {},
        mounted() {},
        computed: {},
    }
</script>
<style scoped>

</style>