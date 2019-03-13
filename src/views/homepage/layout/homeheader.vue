<template>
  <div class="main">
    <div class='logo'>
      <img src="/static/logo.png" />
      <span>开心每一天~</span>
    </div>
    <div class="user">
      <img src="/static/logo.png" />
      <span>用户名</span>
      <span class='logout' @click="logOut">注销</span>
    </div>
  </div>
</template>
<style scoped>
.main {
  height: 40px;
  line-height: 40px;
  background-color: #445158;
  /* border-image: linear-gradient(to right, #26a8e6 0, #46ad35 13%, #f9d400 25%, #dd071b 39%, #8c1e5e 52%, #e61f18 64%, #f9d400 77%, #46ad35 88%, #26a8e6 100%) 6;
    border-width: 0;
    border-bottom: solid 2px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; */
}
.user {
  float: right;
}

.logo,
.user {
  display: inline-block;
  padding: 0 18px;
  color: white;
}

.logo img,
.user img {
  height: 30px;
  width: 30px;
  position: relative;
    top: 6px;
}
.logo span,
.user span {
  font-size: 15px;
}

.logout {
  color: gainsboro;
  cursor: pointer;
}
</style>
<script>
export default {
  methods: {
    logOut() {
      this.$message({
          showClose: true,
          message: '暂时没做，请耐心等耐！',
          type:'warning'
        });
    }
  }
};
</script>

