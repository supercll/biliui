<template>
    <article class="markdown-body" v-html="md"></article>
</template>

<script>
import md from "../markdown/start.md";
export default {
    name: "start",
    data() {
        return { md };
    },
};
</script>

<style>
</style>