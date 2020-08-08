<template>
    <template v-if="type === 'link'">
        <a class="button" :href="href" :class="classes" :target="target">
            <slot />
        </a>
    </template>

    <template v-else>
        <button class="button" :class="classes" :disabled="autoDisabled">
            <span v-if="loading" class="loading"></span>
            <slot />
        </button>
    </template>
</template>

<script lang="ts">
import { ref, watchEffect } from "vue";
export default {
    props: {
        type: String,
        herf: String,
        target: String,
        level: {
            type: String,
            default: "default",
        },
        loading: Boolean,
        disabled: Boolean,
    },
    setup(props) {
        const classes = ref(null);
        const autoDisabled = ref(null);
        watchEffect(() => {
            classes.value = { [`button-${props.level}`]: props.level };
        });
        watchEffect(() => {
            autoDisabled.value = props.disabled;
        });
        return { classes, autoDisabled };
    },
};
</script>

<style lang="scss" scoped>
$blue: #1890ff;
.button {
    font: initial;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    line-height: 32px;
    padding: 0 12px;
    background: $blue;
    color: white;
    border: none;
    border-radius: 4px;
    vertical-align: middle;
    cursor: pointer;
    & + & {
        margin-left: 8px;
    }
    

    .loading {
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        position: relative;
        border: 2px dotted transparent;
        border-bottom-color: red;
        border-left-color: blue;
        border-radius: 50%;
        animation: loading 1s infinite linear;
    }
    &-primary {
        background: $blue;
        border: 1px solid transparent;
        &:hover {
            background: lighten($blue, 10%);
        }
        .loading {
            border-left-color: white !important;
            border-bottom-color: white !important;
        }
    }
    &-default {
        background: white;
        color: #595959;
        border: 1px solid #d9d9d9;
        &:hover {
            color: $blue;
            border-color: $blue;
        }

        .loading {
            border-left-color: $blue !important;
        }
    }
    &-text {
        background: transparent;
        border-color: transparent;
        color: inherit;
        &:hover {
            color: $blue;
            border-color: $blue;
            background: #fafafa;
        }
    }
    &-danger {
        background: #ff4d4f !important;
    }
    &:focus {
        outline: none;
    }

    &:disabled {
        color: #ccc;
        background: #f5f5f5;
        border-color: #d9d9d9;
        cursor: not-allowed;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>