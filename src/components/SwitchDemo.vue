<template>
<h1 class="doc-header">Switch 示例</h1>
<div class="componentShow">
    <h2>普通开关</h2>
    <Switch type="default" />
</div>
<div class="componentShow">
    <h2>文字开关</h2>
    <Switch type="text" checked="true" />
</div>
</template>

<script lang="ts" scoped>
import Switch from "../lib/Switch.vue";
import {
    ref
} from "vue";
export default {
    name: "SwitchDemo",
    components: {
        Switch
    },
};
</script>

<style>
</style>
