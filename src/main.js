import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import slugger from "@/plugins/slugger.js";

const app  = createApp(App);

app.use(router);
app.use(slugger);
app.mount("#app");
