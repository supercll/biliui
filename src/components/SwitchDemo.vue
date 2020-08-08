<template>
    <h1>Switch 文档</h1>
    <Switch type="default" />
    <br />
    <Switch type="text" checked="true" />
</template>

<script lang="ts" scoped>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
    name: "SwitchDemo",
    components: { Switch },
};
</script>

<style>
</style>