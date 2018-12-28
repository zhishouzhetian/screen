<template>
  <div id='myChart' :style="{width: '100%', height: '100%'}">{{msg}}</div>
</template>
<style scope>

</style>
<script>
// import echarts from 'echarts'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'menu3'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      // let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      // myChart.setOption(option)
    }
  }
}
</script>
