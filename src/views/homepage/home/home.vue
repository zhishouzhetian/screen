<template>
  <div class="wrapper">
    <section>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banderList" :key="item.id">
          <div
            class="bg"
            :style="{'backgroundImage': 'url(' + item.url + ')'}"
            data-v-358824a4
          ></div>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class='content_container'>
        <active-page></active-page>
    </section>
  </div>
</template>

<script>
import activePage from './active/activePage';
export default {
  components: {
      activePage
  },
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
          id: 2,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/2f4cf88bc24842d3be1735650daddc06.png"
        },
        {
          id: 3,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/83de83ec898f41aeb0b3425f080829cd.jpg"
        },
        {
          id: 4,
          url:
            "https://wdx.blob.core.chinacloudapi.cn/huiyixing-event-container/2f4cf88bc24842d3be1735650daddc06.png"
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