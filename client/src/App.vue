<template>
  <div class="container">
  <header-comp/>
    <main class="content">
      <router-view/>
    </main>
  <footer-comp/>
  </div>
</template>

<script>
import HeaderComp from './components/base/HeaderComp.vue';
import FooterComp from './components/base/FooterComp.vue';

export default ({
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
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
