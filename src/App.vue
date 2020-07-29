<template>
    <router-view />
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import { ref, provide } from "vue";
import { router } from "./router";

export default {
    name: "App",
    setup() {
        const screenWith = document.documentElement.clientWidth;
        const menuVisible = ref(screenWith <= 500 ? false : true);
        provide("xxx", menuVisible);
        router.afterEach(() => {
            if (screenWith <= 500) {
                menuVisible.value = false;
            }
        });
    },
};
</script>