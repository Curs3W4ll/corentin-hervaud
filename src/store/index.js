import { reactive } from "vue";
import Cookies from "js-cookie";

const store = ({
  state: reactive({
    useDarkTheme: null,
  }),
  getters: {
    getTheme() {
      return store.state.useDarkTheme;
    },
  },
  mutations: {
    setTheme(darkTheme) {
      store.state.useDarkTheme = darkTheme;
    },
    saveThemeInCookies(darkTheme) {
      Cookies.set("useDarkTheme", darkTheme);
    },
    changeTheme(darkTheme) {
      console.log("Change theme to " + darkTheme + "(" + typeof(darkTheme) + ")");
      store.mutations.setTheme(darkTheme);
      store.mutations.saveThemeInCookies(darkTheme);
    },
  },
  actions: {
    initializeTheme(darkTheme = false) {
      const cookie = Cookies.get("useDarkTheme");

      console.log("Cookie: " + cookie + "(" + typeof(cookie) + ")");
      if (cookie) {
        store.state.useDarkTheme = cookie === "true";
      } else {
        store.state.useDarkTheme = darkTheme;
      }
      console.log("Theme initialized to " + store.state.useDarkTheme + "(" + typeof(store.state.useDarkTheme) + ")");
    },
  },
})

export default store;
