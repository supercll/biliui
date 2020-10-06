<demo>
function 功能型图标按钮
</demo>
<template>
    <div>
        <Button theme="func" xh="praise"></Button>
        <Button theme="func" xh="coin"></Button>
        <Button theme="func" xh="collection"></Button>
        <Button theme="func" xh="dongtai"></Button>
        <Button theme="func" xh="qq"></Button>
        <Button theme="func" xh="weibo"></Button>
        <Button theme="func" xh="tieba"></Button>
    </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
import { ref } from "vue";
export default {
    components: {
        Button,
    },
    setup() {},
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: space-between;
}
</style>