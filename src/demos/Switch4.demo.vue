

<demo>单文字开关（例如弹幕）</demo>

<template>
    <Switch type="textin" v-model:value="isOp">弹</Switch>
</template>

<script lang="ts">
import { Switch } from "../lib/index";
import { ref } from "vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const isOp = ref(true);
        return {
            isOp,
        };
    },
};
</script>