<demo>
普通开关
</demo>

<template>
    <Switch v-model:value="isOp"></Switch>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
    components: {
        Switch,
    },
    setup() {
        const isOp = ref(false);
        return {
            isOp,
        };
    },
};
</script>