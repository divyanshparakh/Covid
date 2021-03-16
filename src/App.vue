<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000106;
  background-image: linear-gradient(-120deg, #01050e 90%, #38025d 150%);
  background: #000;
}
// &.router-link-exact-active
</style>
