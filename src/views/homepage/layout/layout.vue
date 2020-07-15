<template>
  <div class="wrapper">
    <section class='topColor'>
      <homeheader class='content_container'></homeheader>    
    </section>
    <section>      
      <homemenu class='content_container'></homemenu>
    </section>    
    <router-view></router-view>
  </div>
</template>

<script>
import homeheader from "./homeheader";
import homemenu from "./homemenu";
export default {
  components: {
    homeheader,
    homemenu
  },
  props: [],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {}
};
</script>
<style>
*{
    margin: 0;
    padding: 0
}
a, a:hover {
    text-decoration: none;
}
a {
    color: #646464;
}
.content_container{
    max-width: 1200px;
    margin: auto ;
}

.topColor{  
  background-color: #445158;
}
</style>