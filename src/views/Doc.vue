<template>
    <div class="layout">
        <Topnav class="nav" />
        <div class="content">
            <aside v-if="menuVisible">
                <h2>文档</h2>
                <ul>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/start">开始</router-link>
                    </li>
                </ul>
                <h2>组件列表</h2>
                <ul>
                    <li>
                        <router-link to="/doc">组件总览</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>

                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/progress">Progress 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/">Progress 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/">Progress 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/">Progress 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/">Progress 组件</router-link>
                    </li>
                </ul>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts" scoped>
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
    name: "Doc",
    components: { Topnav },
    setup() {
        const menuVisible = inject<Ref<boolean>>("xxx");
        // console.log("Doc", menuVisible);
        return {
            menuVisible,
        };
    },
};
</script>

<style lang="scss">
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .nav {
        flex-shrink: 0;
    }
    > .content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;
        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}
.content {
    display: flex;
    > aside {
        flex-shrink: 0;
    }
    > main {
        flex-grow: 1;
        padding: 16px;
    }
}
aside {
    z-index: 9;
    background: #ffffff;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    height: 100%;
    border-right: solid 1px #ddd;
    overflow: scroll;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 1px rgba(136, 136, 136, 0.3);
        background-color: rgb(238, 241, 245);
    }
    > h2 {
        margin-bottom: 4px;
        padding-left: 32px;
    }
    > ul {
        > li {
            background: white;
            padding: 8px 0;
            > a {
                border-radius: 4px;
                padding: 8px 0 8px 32px;
                display: block;
                height: 100%;
            }
        }
    }
}
main {
    overflow: auto;
}
</style> 