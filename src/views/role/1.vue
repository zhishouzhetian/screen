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
      msg: '这是角色1'
    }
  }
}
</script>
