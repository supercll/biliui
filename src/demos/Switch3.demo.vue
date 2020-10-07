<demo>logo开关</demo>
<template>
    <Switch type="logo" v-model:value="isOp1"></Switch>
    <Switch type="logo" xh="lemon" v-model:value="isOp2"></Switch>
</template>

<script lang="ts">
import { Switch } from "../lib/index";
import { ref } from "vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const isOp1 = ref(true);
        const isOp2 = ref(false);
        return {
            isOp1,
            isOp2,
        };
    },
};
</script>