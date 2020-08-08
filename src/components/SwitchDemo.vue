<template>
    <h1>Switch 文档</h1>
    <br />
    <h2>普通开关</h2>
    <Switch type="default" />
    <br />
    <h2>文字开关</h2>
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