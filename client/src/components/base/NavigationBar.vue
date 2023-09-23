<!-- eslint-disable max-len -->
<template>
  <nav :class="styles">
    <router-link class="navbar__link" v-for="item in links" :key="item.id" :to=item.path>{{ item.title }}</router-link>
  </nav>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  props: {
    type: String,
  },
  data() {
    return {
      links: store.getters.getLINKS,
    };
  },
  computed: {
    styles() {
      if (this.type === 'header') {
        return ['navbar_header'];
      }
      if (this.type === 'footer') {
        return ['navbar_footer'];
      }
      return 'style-class-none';
    },
  },
});
</script>

<style lang="scss" scoped>
.navbar{

  &_header{
  display: flex;
  gap: 20px;
  }

  &_footer{
    display: flex;
    flex-direction: column;
    gap: 20px; //!TODO
  }

  &__link {
  color: #292F36;
  text-align: center;
  font-family: 'Jost';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  transition: all .15s;
&.router-link-exact-active {
    color: #42b983;
  }
 }
}

</style>
