<template>
    <h1 class="doc-header">Switch 示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Demo :component="Switch3Demo" />
</template>

<script lang="ts">
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import Switch3Demo from "../components/Switch3.demo.vue";
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
        };
    },
};
</script>

