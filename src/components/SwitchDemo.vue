<template>
    <h1 class="doc-header">Switch 示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch4Demo" />
    <Demo :component="Switch2Demo" />
    <Demo :component="Switch3Demo" />
</template>

<script lang="ts">
import Switch1Demo from "../demos/Switch1.demo.vue";
import Switch2Demo from "../demos/Switch2.demo.vue";
import Switch3Demo from "../demos/Switch3.demo.vue";
import Switch4Demo from "../demos/Switch4.demo.vue";
import Demo from "../components/Demo.vue";
import { ref } from "vue";
export default {
    name: "SwitchDemo",
    components: {
        Demo,
    },
    setup() {
        return {
            Switch1Demo,
            Switch2Demo,
            Switch3Demo,
            Switch4Demo,
        };
    },
};
</script>

