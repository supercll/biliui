<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    name: "MarkDown",
    props: {
        content: {
            type: String,
            required: true,
        },
    },
};
</script>

<style>
</style>