<template>
    <div class="topnav">
        <div class="logo" @click="toggleMenu">
            <img src="../assets/bilibili.svg" alt />
        </div>
        <span class="toggleAside" @click="toggleMenu"></span>
    </div>
</template>

<script lang="ts" scpoed>
import { inject, Ref } from "vue";
export default {
    name: "Topnav",
    setup() {
        const menuVisible = inject<Ref<boolean>>("xxx");
        // console.log("topnav", menuVisible);

        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value;
        };

        return {
            toggleMenu,
        };
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    z-index: 10;
    display: flex;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
    > .toggleMenu {
    }
    > .toggleAside {
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url("../assets/menu.svg") no-repeat;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        &:hover {
            color: #fb7299;
        }
    }
    @media (max-width: 500px) {
        > .menu {
            display: none;
        }
        > .logo {
            margin: 0 auto;
        }
        > .toggleAside {
            display: inline-block;
        }
    }
}
</style>