<template>
    <h1 class="doc-header">Switch 示例</h1>
    <div class="demo">
        <h2>普通开关</h2>
        <div class="demo-component">
            <component :is="Switch1Demo" />
        </div>
        <div class="demo-code">
            <pre
                class="language-html"
                v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')"
            />
        </div>
    </div>
    <div class="demo">
        <h2>文字开关</h2>
        <div class="demo-component">
            <component :is="Switch2Demo" />
        </div>
        <div class="demo-actions">
            <Button>查看代码</Button>
        </div>
        <div class="demo-code">
            <pre
                class="language-html"
                v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')"
            />
        </div>
    </div>
    <div class="demo">
        <h2>blibili图标开关</h2>
        <div class="demo-component">
            <component :is="Switch3Demo" />
        </div>
        <div class="demo-code">
            <pre
                class="language-html"
                v-html="Prism.highlight(Switch3Demo.__sourceCode, Prism.languages.html, 'html')"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import Button from "../lib/button.vue";
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import Switch3Demo from "../components/Switch3.demo.vue";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
const Prism = (window as any).Prism;
import { ref } from "vue";
export default {
    name: "SwitchDemo",
    components: {
        Switch,
        Button,
    },
    setup() {
        return {
            Switch1Demo,
            Switch2Demo,
            Switch3Demo,
            Prism,
        };
    },
};
</script>

<style lang="scss">
.demo {
    div {
        margin: 10px 0;
    }
}
</style>
