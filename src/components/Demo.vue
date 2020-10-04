<template>
    <div class="demo">
        <h2>{{component.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <component :is="component" />
        </div>
        <div class="demo-actions">
            <Button @click="toggle">查看代码</Button>
        </div>
        <div class="demo-code" ref="codeRefs">
            <pre
                class="language-html"
                v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
const Prism = (window as any).Prism;
export default {
    props: {
        component: Object,
    },
    setup() {
        const route = useRoute();
        const routePath = route.path;
        const codeRefs = ref(null);
        let code, codeHight;
        onMounted(() => {
            code = codeRefs.value;
            codeHight = code.offsetHeight;
            if (routePath === "/doc") {
                code.style.height = "0px";
            } else {
                code.style.height = `${codeHight}px`;
            }
        });
        const toggle = () => {
            if (code.style.height === "0px") {
                code.style.height = `${codeHight}px`;
            } else {
                code.style.height = "0";
            }
        };
        return {
            Prism,
            Button,
            codeRefs,
            toggle,
            routePath,
        };
    },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }
    &-component {
        padding: 16px;
    }
    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }
    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        > pre {
            line-height: 1.1;
            font-family: Consolas, "Courier New", Courier, monospace;
            margin: 0;
        }
    }
}
</style>