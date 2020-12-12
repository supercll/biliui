<template>
    <h1 class="doc-header">Progress 示例</h1>
    <Demo :component="ProgressDemo1"/>
    <Demo :component="ProgressDemo2"/>
</template>

<script lang="ts">
import Progress from "../lib/Progress.vue";
import ProgressDemo1 from "../demos/Progress1.demo.vue";
import ProgressDemo2 from "../demos/Progress2.demo.vue";
import Demo from "../components/Demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            ProgressDemo1,
            ProgressDemo2,
        };
    },
};
</script>
