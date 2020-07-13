<template>
  <div class="wrapper">
    <div>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <div
            class="bg"
            style="background-image:url();"
            data-v-358824a4
          ></div>
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
    return {
      banderList: [
        {
          id: 1,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/83de83ec898f41aeb0b3425f080829cd.jpg"
        },
        {
          id: 1,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/83de83ec898f41aeb0b3425f080829cd.jpg"
        },
        {
          id: 1,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/83de83ec898f41aeb0b3425f080829cd.jpg"
        },
        {
          id: 1,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/83de83ec898f41aeb0b3425f080829cd.jpg"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style scoped>
.bg{
 height:350px;background-size:cover;background-position:center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>