<template>
  <div id="app">
    <navigator :class="{topBarInclude: routeName === 'Index'}"></navigator>
    <router-view/>
  </div>
</template>

<script>
import Navigator from "components/nav/nav";
export default {
    name: "App",
    data(){
      return {
        routeName: this.$route.path
      }
    },
    watch: {
      '$route'(){
        this.routeName = this.$route.name
      }
    },
    components: {
        Navigator
    }
};
</script>

<style lang="stylus">
#app
    width: 100%;
    max-width: 1920px;
    min-width: 1200px;
    height: 100%;
    position: relative;
.topBarInclude
  z-index 9999
  position fixed
</style>
