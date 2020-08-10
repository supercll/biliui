<template>
    <button class="bili-button" :class="classes" :disabled="disabled">
        <span v-if="loading" class="bili-loadingIndicator"></span>
        <slot />
    </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
    props: {
        theme: {
            type: String,
            default: "button",
        },
        size: {
            type: String,
            default: "normal",
        },
        level: {
            type: String,
            default: "normal",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const { theme, size, level } = props;
        const classes = computed(() => {
            return {
                [`bili-theme-${theme}`]: theme,
                [`bili-size-${size}`]: size,
                [`bili-level-${level}`]: level,
            };
        });
        return { classes };
    },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$biliPink: #fb7299;
$radius: 4px;
$red: red;
$grey: grey;
.bili-button {
    vertical-align: middle;
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(#fb7299, 0.95);
    transition: 250ms;
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $biliPink;
        border-color: $biliPink;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &.bili-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $biliPink;
        &:hover,
        &:focus {
            color: lighten($biliPink, 10%);
        }
    }
    &.bili-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }
    &.bili-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }
    &.bili-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    &.bili-theme-button {
        &.bili-level-main {
            background: $biliPink;
            color: white;
            border-color: $biliPink;
            &:hover,
            &:focus {
                background: darken($biliPink, 10%);
                border-color: darken($biliPink, 10%);
            }
        }
        &.bili-level-danger {
            background: $red;
            border-color: $red;
            color: white;
            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }
    }
    &.bili-theme-link {
        &.bili-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
    &.bili-theme-text {
        &.bili-level-main {
            color: $biliPink;
            &:hover,
            &:focus {
                color: darken($biliPink, 10%);
            }
        }
        &.bili-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }
    &.bili-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
            &:hover {
                border-color: $grey;
            }
        }
    }
    &.bili-theme-link,
    &.bili-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }
    > .bili-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $biliPink $biliPink $biliPink transparent;
        border-style: solid;
        border-width: 2px;
        animation: bili-spin 1s infinite linear;
    }
}
@keyframes bili-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>