<template>
  <div class="wrapper">
    <section class='topColor'>
      <homeheader class='header_container'></homeheader>    
    </section>
    <section>      
      <homemenu class='header_container'></homemenu>
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
.header_container{
    max-width: 1200px;
    margin: auto ;
}

.topColor{  
  background-color: #445158;
}
</style>