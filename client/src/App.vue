<template>
  <navigation-bar type="header"/>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
import NavigationBar from './components/base/NavigationBar.vue';

export default ({
  name: 'App',
  components: {
    NavigationBar,
  },
});
</script>

<style lang="scss">

#app {
  font-family: 'DM Serif Display', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
}

.main{
  height: 100vh;
  background-color: #fff;
}
</style>
