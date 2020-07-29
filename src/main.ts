import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import Test from "./components/Test.vue"    // ts只能引入ts文件
import Test2 from "./components/Test2.vue"

import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Test },
        { path: "/test2", component: Test2 }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app');
