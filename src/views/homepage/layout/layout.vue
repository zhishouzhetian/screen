<template>
    <div class="wrapper">
        <homeheader></homeheader>
        <homemenu></homemenu>
        <router-view></router-view>
    </div>
</template>

<script>
    import homeheader from "./homeheader"
    import homemenu from "./homemenu"
    export default {
        components: {
            homeheader,
            homemenu
        },
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

</style>