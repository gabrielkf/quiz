<template>
  <div id="app">
    <TopBar />
    <div id="nav">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
  components: {
    TopBar
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

.container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto, Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-top: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
