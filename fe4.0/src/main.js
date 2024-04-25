import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import { store } from "@/stores";
import "ant-design-vue/dist/reset.css";
import "mapbox-gl/dist/mapbox-gl.css";
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(VueFullPage)
app.use(store);

app.mount("#mountedPoint");
