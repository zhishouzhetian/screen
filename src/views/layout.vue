<template>
  <div class="main">
    <div class='top'>
      <myhead></myhead>
    </div>
    <div class='left'>
        <myleft></myleft>
      </div>
    <div class='right'>
      <router-view class="myview"></router-view>
    </div>
    <div class="bottom">
      <div>
        <!-- <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-Userpersonavtar"></use>
            </svg> -->
        <i class='iconfont icon-Userpersonavtar'></i>
      </div>
    </div>
  </div>
</template>

<script>
  import myhead from "@/components/header";
  import myleft from "@/components/leftmenu";
  import requset from "@/api/request";
  // requset({
  //     method: "get",
  //     url: "/url",
  //     data: {}
  //   })
  //   .then(function(res) {
  //     console.log(res);
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });
  export default {
    name: "index",
    components: {
      myhead,
      myleft
    },
    data() {
      return {
        msg: "Welcome to Your Vue.js App"
      };
    }
  };
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .main {
    height: 100%;
    width: 100%;
    position: relative;
  }
  .top {
    height: 60px;
  }
  .left {
    background-color: rgb(84, 92, 100);
    position: absolute;
    width: 217px;
    overflow-y:auto;overflow-x:hidden;
    top: 60px;
    bottom: 60px;
  }
  .right {
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0;
    bottom: 60px;
    padding: 12px;
    box-sizing: border-box;
    overflow: hidden;
    background: #ebeff2;
  }
  .bottom {
    position: absolute;
    bottom: 0px;
    overflow: hidden;
    height: 60px;
    width: 100%;
    background: black;
    color: white;
    text-align: center;
    line-height: 60px;
  }
  .myview {
    background: white;
    border: 1px solid gray;
    padding: 10px;
    box-sizing: border-box;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
