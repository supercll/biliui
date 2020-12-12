<template>
    <div class="bili-progress">
        <div class="bili-progress-bar" :style="barStyle"></div>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    props: {
        percentage: {
            type: Number,
            default: 1,
        },
    },
    setup(props) {
        const {percentage} = props;

        const barStyle = computed(() => {
            return {
                transform: `translateX(-${100 - percentage}%)`,
            }
        })
        return {
            barStyle
        }
    }
}
</script>

<style lang='scss' scoped>
    .bili-progress {
        position: relative;
        overflow: hidden;
        background: rgba(173, 176, 190, 0.4);
        width: 500px;
        height: 4px;

        &-bar {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #00a1d6;
        }
    }
</style>