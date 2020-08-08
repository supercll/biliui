<template>
    <div class="dialog-wrapper" @click="onClickMask"></div>
    <div class="dialog">
        <header>
            提示
            <span class="close" @click="close">x</span>
        </header>

        <main>
            <slot />
        </main>
        <footer>
            <button v-for="action in actions" @click="action.fn">{{action.text}}</button>
        </footer>
    </div>
</template>

<script>
import { onMounted } from "vue";
export default {
    name: "Dialog",
    props: {
        colseClickMask: Boolean,
        closeOnESC: Boolean,
        actions: Array,
    },
    setup(props, context) {
        const close = () => {
            context.emit("close");
        };
        const onClickMask = () => {
            props.colseClickMask && close();
        };

        const onKeyUp = (e) => {
            e.keyCode === 27 && close();
        };

        onMounted(() => {
            document.addEventListener("keyup", onKeyUp);
        });

        onMounted(() => {
            document.removeEventListener("keyup", onKeyUp);
        });

        return {
            close,
            onClickMask,
        };
    },
};
</script>

<style lang="scss" scoped>
.dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 200px;
    min-height: 120px;
    background: white;
    border-radius: 5px;
    &-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: 0.5);
    }

    > header {
        border-bottom: solid 1px #ddd;
        padding: 4px 8px;
        > .close {
            position: absolute;
            right: -5px;
            top: -5px;
            background: #ddd;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    > main {
        padding: 4px 8px;
    }
    > footer {
        border-top: solid 1px #ddd;
        padding: 4px 8px;
        position: absolute;
        width: 100%;
        right: 0;
        bottom: 0;
    }
}
</style>