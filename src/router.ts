import Home from "./views/Home.vue"; // ts只能引入ts文件
import Doc from "./views/Doc.vue";
import MarkDown from "./components/MarkDown.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import ProgressDemo from "./components/ProgressDemo.vue";
import CardDemo from "./components/CardDemo.vue";
import CarouselDemo from "./components/CarouselDemo.vue";
import DocDemo from "./components/DocDemo.vue";

import { createWebHashHistory, createRouter } from "vue-router";
import { h } from "vue";

import intro from "./markdown/intro.md";
import start from "./markdown/start.md";
import install from "./markdown/install.md";

const history = createWebHashHistory();
const md = string => h(MarkDown, { content: string, key: string });
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
                    component: md(intro),
                },
                {
                    path: "install",
                    component: md(install),
                },
                {
                    path: "start",
                    component: md(start),
                },
                { path: "intro", component: md(intro) },
                { path: "start", component: md(start) },
                { path: "install", component: md(install) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "progress", component: ProgressDemo },
                { path: "card", component: CardDemo },
                { path: "carousel", component: CarouselDemo },
            ],
        },
    ],
});

router.afterEach(() => {});
