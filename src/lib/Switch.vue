<template>
    <section v-if="type === 'text'">
        <button @click="toggle" :class="['switch',{'switch-on' : value}]">
            <span
                :class="['switch-inner', value ? 'inner-on': 'inner-off']"
            >{{value ? onOff[0] : onOff[1]}}</span>
            <span :class="['switch-icon', value ? '' : 'iconOff']"></span>
        </button>
    </section>
    <section v-else-if="type === 'tv'">
        <button @click="toggle" :class="['switch',{'switch-on' : value}]">
            <span class="switch-icon icon-tv">
                <svg class="icon tv-off">
                    <use xlink:href="#icon-tv" />
                </svg>
            </span>
        </button>
    </section>
    <section v-else>
        <button @click="toggle" :class="['switch',{'switch-on' : value}]">
            <span class="switch-icon"></span>
        </button>
    </section>
</template>

<script lang="ts">
import { ref, reactive, nextTick } from "vue";
export default {
    name: "Switch",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "default",
        },
        onOff: {
            type: Array,
            default: ["开", "关"],
        },
    },

    setup(props, context) {
        const toggle = (e) => {
            context.emit("update:value", !props.value);
        };
        return { toggle };
    },
};
</script>

<style lang="scss">
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
    box-shadow: 0 0 0 3px rgba(#fb7299, 0.1);
    transition: all 0.3s;

    &-on {
        background: #fb7299;
    }

    &-on > .switch-icon {
        left: calc(100% - #{$h2} - 2px);
    }
    &-on:active {
        > .switch-icon {
            width: $h2 + 8px;
            margin-left: -8px;
        }
    }
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
    .iconOff {
        background: rgb(#1296db, 0.8);
    }
    .icon-tv {
        background: none;
        border-radius: 0;
    }
    .icon {
        transform: scale(2, 2);
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

    &:active {
        > .switch-icon {
            width: $h2 + 4px;
        }
        box-shadow: 0 0 0 6px rgba(24, 144, 255, 0.8);
    }
}
</style>