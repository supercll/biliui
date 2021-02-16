<template>
    <h1 class="doc-header">走马灯/轮播图 示例</h1>
    <Demo :component="Carousel1Demo" />
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import Carousel1Demo from "../demos/Carousel1.demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Carousel1Demo,
        };
    },
};
</script>
