<demo>
进度条
</demo>
<template>
    <div>
        <Progress />
    </div>
    <div>
        <Progress v-model:percentage="percentage1" />
    </div>
    <div>
        <Progress v-model:percentage="percentage2" />
    </div>
    <Button @click="add">+</Button>
    <Button @click="zero">归零</Button>
</template>

<script lang="ts">
import { ref } from "vue";
import { Progress, Button } from "../lib/index";
export default {
    components: {
        Progress,
        Button,
    },

    setup() {
        const percentage1 = ref(60);
        const percentage2 = ref(40);
        const add = () => {
            percentage2.value += 10;
            if (percentage2.value > 100) {
                percentage2.value = 100;
            }
        };
        const zero = () => {
            percentage2.value = 0;
        };

        return {
            percentage1,
            percentage2,
            add,
            zero,
        };
    },
};
</script>
<style lang="scss" scoped>
div {
    margin: 20px 0;
}
</style>
