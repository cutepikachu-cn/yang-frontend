import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./modules/axiosConfig";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
import "./main.scss";
import "@/assets/FontAwesome/css/fontawesome.min.css";
import "@/assets/FontAwesome/css/regular.min.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);

app.mount("#app");
