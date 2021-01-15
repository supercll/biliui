<demo>
走马灯-轮播图
</demo>
<template>
    <div>
        <Carousel>
            <carousel-item class="container">1</carousel-item>
            <carousel-item class="container">2</carousel-item>
            <carousel-item class="container">3</carousel-item>
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
        }
    }
};
</script>
<style lang="scss" scoped>
    .container {
        text-align: center;
    }
</style>
