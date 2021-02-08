<demo>
走马灯-轮播图
</demo>
<template>
    <div>
        <Carousel :speed="speed" :autoDelay="autoDelay" :timingFunction="timingFunction">
            <carousel-item class="container">1</carousel-item>
            <carousel-item class="container">2</carousel-item>
            <carousel-item class="container">3</carousel-item>
            <carousel-item class="container">4</carousel-item>
            <carousel-item class="container">5</carousel-item>
        </Carousel>
    </div>
</template>

<script lang="ts">
import { Carousel } from "../lib/index";
import { CarouselItem } from "../lib/index";
export default {
    components: {
        Carousel,
        CarouselItem
    },

    setup() {
        return {
            speed: 0.45,
            autoDelay: 2500,
            timingFunction: "ease-in-out"
        }
    }
};
</script>
<style lang="scss" scoped>
    .container {
        text-align: center;
    }
</style>
