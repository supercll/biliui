<template>
    <h1 class="doc-header">Card 示例</h1>
    <Demo :component="Card1Demo" />
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import Card1Demo from "../demos/Card1.demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Card1Demo,
        };
    },
};
</script>
