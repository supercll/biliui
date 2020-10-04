<template>
    <h1 class="doc-header">Dialog 示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import Demo from "./Demo.vue";
import Dialog1Demo from "../demos/Dialog1.demo.vue";
import Dialog2Demo from "../demos/Dialog2.demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Dialog1Demo,
            Dialog2Demo,
        };
    },
};
</script>
