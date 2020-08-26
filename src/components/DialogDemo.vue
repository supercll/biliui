<template>
<h1 class="doc-header">Dialog 示例</h1>
<div class="bili-div">
    <h2>切换</h2>
    <Button @click="toggle">toggle</Button>
</div>
<Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
    </template>
    <template v-slot:title>
        <strong>加粗的标题</strong>
    </template>
</Dialog>
<div class="bili-div">
    <h2>通过按钮显示</h2>
    <Button @click="showDialog">show</Button>
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
    ref,
    h
} from "vue";
import {
    openDialog
} from "../lib/openDialog";
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const f1 = () => {
            return false;
        };
        const f2 = () => {};
        const showDialog = () => {
            openDialog({
                title: h("strong", {}, "标题"),
                content: "你好",
                ok() {
                    console.log("ok");
                },
                cancel() {
                    console.log("cancel");
                },
            });
        };
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog,
        };
    },
};
</script>
