<template>
    <h1>button 文档</h1>

    <hr />
    <Button type="link">默认链接</Button>
    <Button level="default" type="link" href="javascript:;" target="_blank">链接1</Button>
    <Button level="primary" type="link" href="javascript:;">链接2</Button>
    <Button level="text" type="link" href="javascript:;">链接3</Button>
    <hr />
    <Button>默认按钮</Button>
    <Button level="danger">按钮1</Button>
    <Button level="primary" loading="true">按钮2</Button>
    <Button level="text" disabled="true">按钮3</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    name: "ButtonDemo",
    components: { Button },
};
</script>

<style lang="scss" scoped>
hr {
    margin: 16px 0;
}
</style>