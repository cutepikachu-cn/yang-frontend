import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.scss";
import "@/assets/FontAwesome/css/fontawesome.min.css";
import "@/assets/FontAwesome/css/duotone.min.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
