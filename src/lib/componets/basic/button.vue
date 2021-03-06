<template>
    <button v-if="theme === 'func'" class="bili-button-func">
        <svg :class="['icon', `icon-${xh}`]">
            <use :xlink:href="`#icon-${xh}`" />
        </svg>
    </button>
    <button v-else class="bili-button" :class="classes" :disabled="disabled">
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
        xh: {
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
        const { theme, size, level, xh } = props;
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
$h: 28px;
$border-color: #d9d9d9;
$color: #333;
$bili_blue: #73c9e5;
$bili_pink: #fb7299;
$radius: 4px;
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
    box-shadow: 0 1px 0 fade-out($bili_pink, 0.95);
    transition: 250ms;
    & + & {
        margin-left: 8px;
    }
    &:hover,
    &:focus {
        color: $bili_blue;
        border-color: $bili_blue;
    }
    &:focus {
        outline: none;
    }
    &::-moz-focus-inner {
        border: 0;
    }
    &-func {
        cursor: pointer;
        background: none;
        border: none;
        transition: 150ms;
        padding: 0;
        svg {
            height: $h;
            width: $h;
            fill: #757575;
            &:hover {
                fill: #00a1d6;
            }
        }
        &:focus {
            outline: none;
        }
    }
    &.bili-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $bili_blue;
        &:hover,
        &:focus {
            color: lighten($bili_blue, 10%);
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
            background: $bili_blue;
            color: white;
            border-color: $bili_blue;
            &:hover,
            &:focus {
                background: darken($bili_blue, 10%);
                border-color: darken($bili_blue, 10%);
            }
        }
        &.bili-level-danger {
            background: $bili_pink;
            border-color: $bili_pink;
            color: white;
            &:hover,
            &:focus {
                background: darken($bili_pink, 10%);
                border-color: darken($bili_pink, 10%);
            }
        }
    }
    &.bili-theme-link {
        &.bili-level-danger {
            color: $bili_pink;
            &:hover,
            &:focus {
                color: darken($bili_pink, 10%);
            }
        }
    }
    &.bili-theme-text {
        &.bili-level-main {
            color: $bili_blue;
            &:hover,
            &:focus {
                color: darken($bili_blue, 10%);
            }
        }
        &.bili-level-danger {
            color: $bili_pink;
            &:hover,
            &:focus {
                color: darken($bili_pink, 10%);
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
        border-color: $bili_blue $bili_blue $bili_blue transparent;
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