<template>
  <div class="main">
      <section class="page-title">
          <strong>最新</strong>活动
          <span>NEWEST</span>       
          <a href="www.baodu.com">更多</a>
      </section>
      <section class="page-content">
          <active-item class="page-item" v-for="item in 4" :key="item"></active-item> 
      </section>
  </div>
</template>
<style scoped>
.page-title{
    font-size: 20px;
    color: #393939;
    letter-spacing: .44px;
    line-height: 80px;
}
.page-title strong{
    font-weight: 700;
}
.page-title span{
    margin-left: 12px;
    font-size: 12px;
}
.page-title a{
    float: right;
    font-size: 12px;
}

.page-content{
    display: flex;
    justify-content: space-between;
}

.page-item{
    flex: 1 1 auto;
}
</style>
<script>
import activeItem from './activeItem'
export default {
  data() {
      return {

      }
  },
  components:{
    activeItem
  },
  methods: {

  }
};
</script>

