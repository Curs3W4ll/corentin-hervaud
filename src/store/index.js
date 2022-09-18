import { reactive } from 'vue';

const store = ({
  state: reactive({
    theme: null,
  }),
  getters: {
    getTheme() {
      return store.state.theme;
    },
  },
  mutations: {
    setTheme(newTheme) {
      if (newTheme == "dark") {
        store.state.theme = "dark";
      } else if (newTheme == "light") {
        store.state.theme = "light";
      } else {
        store.state.theme = "light";
      }
    },
  },
  actions: {
    initializeTheme(theme = "light") {
      store.state.theme = theme;
    },
  },
})

export default store;
