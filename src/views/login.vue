<template>
  <div class="login-container">
    <section class="title">
      <h3>后台管理系统</h3>
      <el-form label-width="20px">
        <el-form-item>
          <span>
                                <i
                                  class='iconfont icon-Userpersonavtar'
                                  style="color: gainsboro;"
                                ></i>
                              </span>
          <el-input name="username" v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <i class='iconfont icon-wodemima' style="color: gainsboro;"></i>
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
  import userService from '@/api/user'
  import router from '@/router/index'
  import { getCookie,setCookie} from '@/utils/cookie'
  import {
    mapActions
  } from 'vuex'
  export default {
    async asyncData() {},
    data() {
      return {
        username: "",
        password: "",
      };
    },
    created(){
      setCookie('12345')
    },
    methods: {
      ...mapActions([
        'appendMenu'
      ]),
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
        console.log(getCookie());
        userService.login({
          username: name,
          password: paw
        }).then((response) => {
          if (response.data) {
            var info = response.data
            if (info.errCode && info.data.length === 0) {
              this.$message.error('登录失败：' + info.msg)
            } else {
              console.log(info.data[0])

              // 模拟后端返回菜单
              var a = [ //菜单
                {
                  path: '/menu',
                  name: '菜单',
                  component: '/layout',
                  redirect: '/menu/1',
                  children: [{
                      path: '/menu/1',
                      name: '菜单1',
                      redirect: '',
                      component: '/menu/1'
                    },
                    {
                      path: '/menu/2',
                      name: '菜单2',
                      component: '/menu/2'
                    },
                    {
                      path: '/menu/3',
                      name: '菜单3',
                      component: '/menu/3'
                    }
                  ]
                },
                //用户
                {
                  path: '/user',
                  name: '用户',
                  component: '/layout',
                  redirect: '/user/1',
                  children: [{
                      path: '/user/1',
                      name: '用户1',
                      component: '/user/1'
                    },
                    {
                      path: '/user/2',
                      name: '用户2',
                      component: '/user/2'
                    },
                    {
                      path: '/user/3',
                      name: '用户3',
                      component: '/user/3'
                    }
                  ]
                },
                //角色
                {
                  path: '/role',
                  name: '角色',
                  component: '/layout',
                  redirect: '/role/1',
                  children: [{
                      path: '/role/1',
                      name: '角色1',
                      component: '/role/1'
                    },
                    {
                      path: '/role/2',
                      name: '角色2',
                      component: '/role/2'
                    },
                    {
                      path: '/role/3',
                      name: '角色3',
                      component: '/role/3'
                    }
                  ]
                }
              ];
              //动态添加路由
              this.appendMenu(a);
              //跳转到应用界面
              this.$router.push({
                path: '/'
              });
              // this.$router.push({
              //   path: '/'
              // })
            }
          }
        })
      },
      cancel() {
        this.username = '';
        this.password = '';
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
