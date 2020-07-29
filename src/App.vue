<template>
    <div>导航</div>
    <router-link to="/">test</router-link>|
    <router-link to="/test2">test2</router-link>
    <hr />
    <router-view />
</template>

<script>
import Test from "./components/Test.vue";

export default {
    name: "App",
    components: {
        Test,
    },
};
</script>
