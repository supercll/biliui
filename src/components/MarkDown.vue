<template>
    <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
    name: "MarkDown",
    props: {
        path: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        // import md from "../markdown/install.md";
        const content = ref<string>(null);
        import(props.path).then((res) => {
            content.value = res.default;
        }); // 异步加载
        return { content };
    },
};
</script>

<style>
</style>