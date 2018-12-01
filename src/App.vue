<template>
  <div id="app">
    <section class="header">
      <img src="./img/img_name.png"/>
    </section>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  background-image: url("./img/img_title.png");
  text-align: center;
  img {
    height: 65px;
    padding: 10px;
  }
}
</style>
