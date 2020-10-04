import Home from "./views/Home.vue"; // ts只能引入ts文件
import Doc from "./views/Doc.vue";
import Intro from "./views/Intro.vue";
import MarkDown from "./components/MarkDown.vue";
import Install from "./views/Install.vue";
import Start from "./views/Start.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";

import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";

const history = createWebHashHistory();
const x = path => h(MarkDown, { path, key: path });
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
                    component: x("../markdown/intro.md"),
                },
                {
                    path: "install",
                    component: x("../markdown/install.md"),
                },
                {
                    path: "start",
                    component: x("../markdown/start.md"),
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
