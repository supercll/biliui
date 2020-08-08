<template>
    <section v-if="type === 'text'">
        <button class="switch" @click="toggle" :class="{checked}">
            <span class :class="['switch-inner', onOff]">{{inner}}</span>
            <span class="switch-icon"></span>
        </button>
    </section>
    <section v-else>
        <button class="switch" @click="toggle" :class="{checked}">
            <span class="switch-icon"></span>
        </button>
    </section>
</template>

<script lang="ts" scoped>
import { ref, watchEffect, onMounted } from "vue";
export default {
    name: "Switch",
    props: {
        checked: Boolean,
        type: {
            type: String,
            default: "default",
        },
    },

    setup(props, context) {
        const checked = ref(props.checked);
        const inner = ref(props.checked ? "开" : "关");
        const onOff = ref(props.checked ? "inner-on" : "inner-off");
        watchEffect(() => {});
        const toggle = (e) => {
            checked.value = !checked.value;
            inner.value = checked.value ? "开" : "关";
            onOff.value = `inner-${checked.value ? "on" : "off"}`;
        };
        return { toggle, checked, inner, onOff };
    },
};
</script>

<style lang="scss" scoped>
$h: 24px;
$h2: $h - 4px;
.switch {
    cursor: pointer;
    height: $h;
    width: $h * 2.2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
    box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
    transition: all 0.3s;

    &-icon {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: rgb(255, 255, 255, 0.8);
        border-radius: 50%;
        transition: all 300ms;
    }

    &-inner {
        font-size: 14px;
        color: #fff;
        transition: 0.4s;
    }
    .inner-on {
        margin-left: -20px;
    }
    .inner-off {
        margin-left: 15px;
    }

    &:focus {
        outline: none;
    }

    &.checked {
        background: #1890ff;
    }

    &.checked > span {
        left: calc(100% - #{$h2} - 2px);
    }
    &:active {
        > .switch-icon {
            width: $h2 + 4px;
        }
        box-shadow: 0 0 0 6px rgba(24, 144, 255, 0.8);
    }
    &.checked:active {
        > .switch-icon {
            width: $h2 + 8px;
            margin-left: -8px;
        }
    }
}
</style>