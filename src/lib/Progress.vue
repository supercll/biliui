<template>
    <div
        class="bili-progress"
        ref="progressRef"
        @mousedown="onMouseDown($event)"
        @mouseenter="showIcon"
    >
        <div class="bili-progress-wrap">
            <div class="bili-progress-bar" :style="barStyle"></div>
        </div>
        <div class="bili-progress-icon-wrap" :style="barStyle">
            <svg class="icon bili-progress-icon">
                <use :xlink:href="`#icon-${xh}`" />
            </svg>
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
        xh: {
            type: String,
            default: "tv",
        },
    },
    setup(props) {
        const { xh } = props;
        const percentage = ref(props.percentage);
        const progressRef = ref(null);
        const moveData = {
            progressStart: 0,
            mouseStart: 0,
            times: 0,
            isPress: false,
            offsetLeft: 0,
        };

        nextTick(() => {
            moveData.times = progressRef.value.offsetWidth / 100;
            moveData.offsetLeft = progressRef.value.getBoundingClientRect().left;
        });

        let barStyle = computed(() => {
            return {
                transform: `translateX(-${100 - percentage.value}%)`,
            };
        });

        const onMouseMove = e => {
            e.preventDefault();
            if (moveData.isPress) {
                let x = moveData.progressStart + (e.clientX - moveData.mouseStart) / moveData.times;
                percentage.value = x;
                if (percentage.value < 0) percentage.value = 0;
                if (percentage.value > 100) percentage.value = 100;
            }
        };
        const onMouseDown = e => {
            moveData.isPress = true;
            moveData.mouseStart = e.clientX;
            if (e.target.tagName === "svg") {
                moveData.progressStart = percentage.value;
            } else {
                moveData.progressStart =
                    (moveData.mouseStart - moveData.offsetLeft) / moveData.times;
                percentage.value = moveData.progressStart;
            }
        };

        const onMouseUp = () => {
            moveData.isPress = false;
        };

        watchEffect(() => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
        return {
            barStyle,
            onMouseDown,
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
    height: 6px;
    cursor: pointer;
    &:hover &-icon {
        transform: scale(1) translateY(-50%);
    }

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
        line-height: 100%;
        right: 0;
        width: 15px;
        height: 15px;
        transition: all 300ms;

        transform: scale(0) translateY(-50%);

        &:active {
            transform: scale(1) translateY(-50%);
        }
    }
}
</style>
