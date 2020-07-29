import { createApp } from 'vue';
import App from './App.vue';
import './index.scss';

import Home from "./views/Home.vue"    // ts只能引入ts文件
import Doc from './views/Doc.vue'

import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        { path: "/document", component: Doc }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app');
