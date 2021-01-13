<demo>
走马灯-轮播图
</demo>
<template>
    <div>
        <Carousel>
            <carousel-item></carousel-item>
            <carousel-item></carousel-item>
            <carousel-item></carousel-item>
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
