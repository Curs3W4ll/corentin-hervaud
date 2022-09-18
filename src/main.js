import { createApp } from 'vue';

import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import slugger from "@/plugins/slugger.js";

const app  = createApp(App);

// app.config.globalProperties.globvar = "coucou";
store.actions.initializeTheme();

app.use(router);
app.use(slugger);
app.mount("#app");
