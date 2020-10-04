import { createApp } from "vue";
import "./lib/bili.scss";
import "./index.scss";
import App from "./App.vue";
import { router } from "./router";
import "github-markdown-css";
import MarkDown from "./components/MarkDown.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("MarkDown", MarkDown);
