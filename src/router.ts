import Home from "./views/Home.vue"    // ts只能引入ts文件
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc", component: Doc, children: [
                { path: 'switch', component: SwitchDemo }
            ]
        }
    ]
});

router.afterEach(() => {

})