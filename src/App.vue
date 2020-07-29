<template>
    <router-view />
</template>

<script lang="ts">
import Home from "./views/Home.vue";
import { ref, provide } from "vue";

export default {
    name: "App",
    setup() {
        const screenWith = document.documentElement.clientWidth;
        const menuVisible = ref(screenWith <= 500 ? false : true);
        provide("xxx", menuVisible);
    },
};
</script>