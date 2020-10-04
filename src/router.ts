import Home from "./views/Home.vue"; // ts只能引入ts文件
import Doc from "./views/Doc.vue";
import MarkDown from "./components/MarkDown.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";

import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";

const history = createWebHashHistory();
const md = filename => h(MarkDown, { path: `../markdown/${filename}.md`, key: filename });
export const router = createRouter({
    history: history,
    linkExactActiveClass: "doc-active",
    strict: true,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", component: DocDemo },
                {
                    path: "intro",
                    component: md("intro"),
                },
                {
                    path: "install",
                    component: md("install"),
                },
                {
                    path: "start",
                    component: md("start"),
                },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
            ],
        },
    ],
});

router.afterEach(() => {});
