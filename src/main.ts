import "./assets/index.css";
import "iconify-icon";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// handle errors at top most level todo:(JM)
// app.config.errorHandler = (error) => {}

app.mount("#app");
