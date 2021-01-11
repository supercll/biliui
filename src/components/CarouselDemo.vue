<template>
    <h1 class="doc-header">Carousel 示例</h1>
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
