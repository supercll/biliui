<template>
    <div
        class="bili-progress"
        ref="progressRef"
        @mouseenter="showIcon"
        @mousedown="onMouseDown($event)"
        @touchstart="onMouseDown($event)"
    >
        <div class="bili-progress-wrap">
            <div class="bili-progress-bar" :style="barStyle"></div>
        </div>
        <div class="bili-progress-icon-wrap" :style="barStyle">
            <svg class="icon bili-progress-icon">
                <use :xlink:href="`#icon-${xh}`" />
            </svg>
        </div>
        {{percentage}}
    </div>
</template>

<script lang="ts" scoped>
import { computed, nextTick, onMounted, reactive, ref, watch, watchEffect } from "vue";

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = /ipad/.test(sUserAgent);
    var bIsIphoneOs = /iphone os/.test(sUserAgent);
    var bIsAndroid = /android/.test(sUserAgent);
    var bIsWM = /windows mobile/.test(sUserAgent);
    if (bIsIpad || bIsIphoneOs || bIsAndroid || bIsWM) {
        return true; // 移动设备
    } else {
        return false; // PC
    }
}

const isMobile = browserRedirect();

export default {
    props: {
        percentage: {
            type: Number,
            default: 20,
        },
        xh: {
            type: String,
            default: "progress_tv",
        },
    },
    setup(props) {
        const percentageC = ref(props.percentage);
        const progressRef = ref(null);
        const moveData = {
            progressStart: 0,
            mouseStartX: 0,
            mouseStartY: 0,
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
                transform: `translateX(-${100 - percentageC.value}%)`,
            };
        });

        const onMouseMove = e => {
            let event = e;
            if (isMobile) {
                event = e.touches[0];
            }
            if (moveData.isPress) {
                const dx = event.clientX - moveData.mouseStartX; //
                const dy = event.clientY - moveData.mouseStartY;
                if (dx > dy) {
                    e.preventDefault();
                }
                percentageC.value = moveData.progressStart + dx / moveData.times;

                if (percentageC.value < 0) percentageC.value = 0;
                if (percentageC.value > 100) percentageC.value = 100;
            }
        };
        const onMouseDown = e => {
            moveData.isPress = true;
            let event = e;
            if (isMobile) {
                console.log(e);
                event = e.touches[0];
            }
            moveData.mouseStartX = event.clientX;
            moveData.mouseStartY = event.clientY;
            if (/[svg|use]/.test(event.target.tagName)) {
                moveData.progressStart = percentageC.value;
            } else {
                moveData.progressStart =
                    (moveData.mouseStartX - moveData.offsetLeft) / moveData.times;
                percentageC.value = moveData.progressStart;
            }
            if (isMobile) {
                document.addEventListener("touchmove", onMouseMove, { passive: false });
                document.addEventListener("touchend", onMouseUp);
            } else {
                document.addEventListener("mousemove", onMouseMove, { passive: false });
                document.addEventListener("mouseup", onMouseUp);
            }
        };

        const onMouseUp = () => {
            moveData.isPress = false;
            document.removeEventListener("touchmove", onMouseMove);
            document.removeEventListener("touchend", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
        watchEffect(() => {});
        return {
            barStyle,
            onMouseDown,
            progressRef,
            percentageC,
        };
    },
};
</script>

<style lang="scss" scoped>
.bili-progress {
    position: relative;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    cursor: pointer;

    &:hover,
    &:active {
        transform: scaleY(1.5);
    }

    &:hover &-icon {
        transform: scaleX(1.5) translateY(-50%) translateX(50%);
    }

    &-wrap {
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: rgba(173, 176, 190, 0.4);
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
        text-align: right;
    }

    &-icon {
        position: absolute;
        top: 50%;
        right: 0;
        width: 15px;
        height: 15px;
        transition: all 300ms;
        transform: scale(1) translateY(-50%) translateX(50%);

        &:active {
            transform: scale(1) translateY(-50%) translateX(50%);
        }
    }
    @media (max-width: 500px) {
        .bili-progress-icon {
            transform: scale(1) translateY(-50%) translateX(50%);
        }
    }
}
</style>
