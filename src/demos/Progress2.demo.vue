<demo>
进度条图标
</demo>
<template>
    <div>
        <Progress />
    </div>
    <div>
        <Progress :percentage="percentage1" xh="run" />
    </div>
    <div>
        <Progress :percentage="percentage2" xh="lemon" />
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Progress } from "../lib/index";
export default {
    components: {
        Progress,
    },

    setup() {
        const percentage1 = ref(60);
        const percentage2 = ref(100);
        return {
            percentage1,
            percentage2,
        };
    },
};
</script>
<style lang="scss" scoped>
div {
    margin: 20px 0;
}
</style>
