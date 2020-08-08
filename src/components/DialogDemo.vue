<template>
    <h1>Dialog 文档</h1>
    <h1>示例1</h1>
    <div>
        <button @click="visible = true">显示</button>
        <button @click="visible = false">隐藏</button>
        <Dialog
            v-if="visible"
            @close="visible = false"
            :colseClickMask="false"
            :closeOnESC="true"
            :actions="actions"
        >你好</Dialog>
    </div>
    <h1>示例2</h1>
    <div @click="open">
        <button>显示</button>
    </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import { ref, createApp, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
    name: "SwitchDemo",
    components: {
        Dialog,
    },
    setup() {
        const visible = ref(false);
        const actions = [
            {
                text: "确定",
                fn: () => (visible.value = false),
            },
            {
                text: "取消",
                fn: () => (visible.value = false),
            },
        ];
        const open = () => {
            const close = openDialog([
                {
                    text: "确定",
                    fn: () => close(),
                },
            ]);
        };
        return {
            visible,
            actions,
            open,
        };
    },
};
</script>

<style>
</style>