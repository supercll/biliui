<template>
    <h1 class="doc-header">Progress 示例</h1>
    <Demo :component="ProgressDemo"/>
</template>

<script lang="ts">
import Progress from "../lib/Progress.vue";
import ProgressDemo from "../demos/Progress.demo.vue";
import Demo from "../components/Demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            ProgressDemo
        };
    },
};
</script>
