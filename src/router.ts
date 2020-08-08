import Home from "./views/Home.vue"    // ts只能引入ts文件
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'

import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    linkExactActiveClass: "doc-active",
    strict: true,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc", component: Doc, children: [
                { path: "", component: DocDemo },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        }
    ]
});

router.afterEach(() => {

})