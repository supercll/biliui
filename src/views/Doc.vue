<template>
    <div>
        <Topnav />
        <div class="content">
            <aside>边栏</aside>
            <aside>
                <h2>组件列表</h2>
                <ol>
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
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script>
import Topnav from "../components/Topnav.vue";
export default {
    name: "Doc",
    components: { Topnav },
};
</script>

<style>
</style>