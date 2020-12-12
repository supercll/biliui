<template>
    <h1 class="doc-header">Progress 示例</h1>
    <Progress />
</template>

<script lang="ts">
import Progress from "../lib/Progress.vue";
import Demo from "../components/Demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Progress
        };
    },
};
</script>
