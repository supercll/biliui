<demo>
文字开关
</demo>

<template>
    <Switch type="text" v-model:value="isOp"></Switch>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
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