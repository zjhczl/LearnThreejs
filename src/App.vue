<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  /* overflow: hidden; */
  /* margin: 0; */
  height: 100vh;
  padding: 0.5rem 0.5rem;
}
</style>
