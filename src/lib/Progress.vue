<template>
    <div class="bili-progress" ref="progressRef" @mousedown="onMouseDown($event)">
        <div class="bili-progress-wrap">
            <div class="bili-progress-bar" :style="barStyle"></div>
        </div>
        <div class="bili-progress-icon-wrap" :style="barStyle">
            <div class="bili-progress-icon"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, nextTick, reactive, ref, watch, watchEffect } from "vue";
export default {
    props: {
        percentage: {
            type: Number,
            default: 20,
        },
    },
    setup(props) {
        const percentage = ref(props.percentage);
        const progressRef = ref(null);
        let progressStart = 0;
        let mouseStart = 0;
        let times = 0;
        let isPress = false;
        let offsetLeft = 0;

        nextTick(() => {
            times = progressRef.value.offsetWidth / 100;
            offsetLeft = progressRef.value.getBoundingClientRect().left;
        });

        let barStyle = computed(() => {
            return {
                transform: `translateX(-${100 - percentage.value}%)`,
            };
        });

        const onMouseMove = e => {
            e.preventDefault();
            if (isPress) {
                let x = progressStart + (e.clientX - mouseStart) / times;
                percentage.value = x;
                if (percentage.value < 0) percentage.value = 0;
                if (percentage.value > 100) percentage.value = 100;
            }
        };
        const onMouseDown = e => {
            isPress = true;
            mouseStart = e.clientX;
            progressStart = (mouseStart - offsetLeft) / times;
            percentage.value = progressStart;
        };

        const onMouseUp = () => {
            isPress = false;
        };

        watchEffect(() => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
        return {
            barStyle,
            onMouseDown,
            onMouseMove,
            onMouseUp,
            progressRef,
            percentage,
        };
    },
};
</script>

<style lang="scss" scoped>
.bili-progress {
    position: relative;
    background: rgba(173, 176, 190, 0.4);
    width: 500px;
    height: 4px;
    cursor: pointer;

    &-wrap {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    &-bar {
        width: 100%;
        height: 100%;
        background: #00a1d6;
    }

    &-icon-wrap {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    }

    &-icon {
        position: absolute;
        right: 0;
        top: -50%;
        width: 10px;
        height: 10px;
        background: red;
        transform: scale(1);
        transition: all 300ms;
    }
}
</style>
