<template>
    <article class="markdown-body" v-html="md"></article>
</template>

<script>
import md from "../markdown/intro.md";
export default {
    name: "Intro",
    data() {
        return { md };
    },
};
</script>

<style>
</style>