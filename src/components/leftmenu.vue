<template>
    <div>
        <div style="width:200px">
            <el-menu :router='true' :default-active="activeIndex" class="el-menu-vertical-demo" background-color="#2F3538" text-color="#c6cbce" active-text-color="#ffd04b">
                <el-submenu :index="menuItem.path" :key="menuItem.path" v-for="menuItem in menuitems">
                    <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>{{menuItem.name}}</span>
</template>
                <el-menu-item v-for="cmenuItem in menuItem.children" :key="cmenuItem.path" :index="cmenuItem.path">{{cmenuItem.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
        </div>
    </div>
</template>
<style scope>
    .el-menu {
        border: none;
    }
    .el-submenu__title:hover,
    .el-menu-item:hover,
    .el-menu-item.is-active {
        color: #409EFF;
        background-color: #151f23 !important;
        color: #26a8e6 !important;
    }
    .el-menu-item.is-active {
        border-left: solid 1px #FF8A00;
    }
</style>
<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        data() {
            return {
                activeIndex: ''
            };
        },
        created() {
            let currentIndex = this.$route.path;
            this.activeIndex = currentIndex;
            console.log(this.$route.path);
        },
        computed: {
            ...mapGetters(["menuitems"])
        },
        mounted() {
            console.log(this.menuitems)
        }
    };
</script>
