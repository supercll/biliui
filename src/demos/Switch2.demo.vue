<demo>文字开关</demo>

<template>
    <Switch type="text" v-model:value="isOp" :onOff="onOff"></Switch>
</template>

<script lang="ts">
import { Switch } from "../lib/index";
import { ref } from "vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const isOp = ref(false);
        const onOff = ["on", "off"];
        return {
            isOp,
            onOff,
        };
    },
};
</script>

