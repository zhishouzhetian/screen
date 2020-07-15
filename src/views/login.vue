<template>
  <div class="login-container">
    <section class="title">
      <h3>后台管理系统</h3>
      <el-form label-width="20px">
        <el-form-item>
          <span>
            <i class="iconfont icon-Userpersonavtar" style="color: gainsboro;"></i>
          </span>
          <el-input name="username" v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <i class="iconfont icon-wodemima" style="color: gainsboro;"></i>
          <el-input name="psw" type="password" v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div style="text-align:right">
          <el-button type="primary" @click="login">登录</el-button>
          <!-- <el-button @click='cancel'>取消</el-button> -->
        </div>
      </el-form>
    </section>
  </div>
</template>
<style>
.login-container {
  top: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 300px;
  width: 450px;
  height: 300px;
}
.login-container h3 {
  color: white;
  font-size: 26px;
  font-weight: 700;
  margin: 0 auto 40px;
  text-align: center;
}
.login-container .el-form-item {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 5px;
  color: #454545;
}
.login-container .el-input {
  display: inline-block;
  height: 47px;
  width: 90%;
}
.login-container .el-input input {
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0;
  caret-color: #fff;
  color: #eee;
  height: 47px;
  padding: 12px 5px 12px 15px;
}
.login-container .el-button {
  width: 100%;
  padding: 12px 40px;
}
</style>
<script scope>
import loginService from "@/api/login";
import menuService from "@/api/menu";
import router from "@/router/index";
import { setCookie } from "@/utils/cookie";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  methods: {
    ...mapActions(["appendMenu"]),
    login() {
      var name = this.username;
      var paw = this.password;
      if (!name) {
        this.$message.error("用户名不能为空!");
        return;
      }
      if (!paw) {
        this.$message.error("密码不能为空!");
        return;
      }

      loginService
        .login({
          username: name,
          password: paw
        })
        .then(response => {
          if (response.data) {
            var info = response.data;
            if (!response.data.success) {
              this.$message.error("登录失败：" + info.message);
              return;
            } else {
              console.log(info);
              setCookie(info.jwtToken);
              menuService.selectMenuByUser().then(req => {
                //动态添加路由
                if (req.data.success) {
                  this.appendMenu(req.data.data);
                  //跳转到应用界面
                  this.$router.push({
                    path: "/"
                  });
                }
              });
              return;
            }
          }
        });
    },
    cancel() {
      this.username = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
.title {
  margin: 30px 0;
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
</style>
