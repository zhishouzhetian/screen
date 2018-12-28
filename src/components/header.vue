<template>
  <div class="main">
    <div class='logo'>
      <img src="../assets/logo.png" />
      <span>后台管理系统</span>
    </div>
    <div class="user">
      <img src="../assets/logo.png" />
      <span>用户名</span>
      <span class='logout' @click="logOut">注销</span>
    </div>
  </div>
</template>
<style scoped>
.main {
  background-color: lightslategray;
}
.user {
  float: right;
}

.logo,
.user {
  display: inline-block;
  padding: 18px;
  color: white;
}

.logo img,
.user img {
  height: 30px;
  width: 30px;
  float: left;
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

