<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
  </div>
</template>

<script>
import Navigator from 'components/nav/nav'
export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<style>

</style>
