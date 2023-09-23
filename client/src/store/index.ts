import { createStore } from 'vuex';

export default createStore({
  state: {
    links:
      [
        {
          title: 'Home',
          path: '/',
        },
        {
          title: 'Project',
          path: '/project',
        },
        {
          title: 'Blog',
          path: '/blog',
        },
        {
          title: 'About Vue 3',
          path: '/about',
        },
      ],
  },
  getters: {
    LINKS: (state) => state.links,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
