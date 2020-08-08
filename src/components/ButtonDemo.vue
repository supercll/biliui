<template>
    <h1>Button 文档</h1>
    <hr />

    <h2>按钮类型</h2>
    <Button type="link">默认链接</Button>
    <Button level="primary" type="link" href="javascript:;">链接</Button>
    <Button level="primary">默认按钮</Button>
    <Button level="text" type="link" href="javascript:;">链接</Button>
    <hr />
    <h2>按钮等级</h2>
    <Button level="primary">默认按钮</Button>
    <Button level="text">文本</Button>
    <Button level="danger">危险</Button>
    <hr />
    <h2>按钮状态</h2>
    <Button>默认按钮</Button>
    <Button level="primary" loading="true">按钮2</Button>
    <Button level="text" disabled="true" loading="true">按钮</Button>
    <hr />
    <h2>不可用状态</h2>
    <Button level="text" disabled="true" loading="true">按钮</Button>
    <Button level="text" disabled="true">按钮</Button>
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