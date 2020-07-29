<template>
  <router-view />
</template>

<script>
import Home from "./views/Home.vue";

export default {
    name: "App",
    components: {
        Home,
    },
};
</script>