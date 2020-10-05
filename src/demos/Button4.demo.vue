<demo>
支持 disabled
</demo>
<template>
    <Button disabled>disable</Button>
    <Button theme="link" disabled>disable链接</Button>
    <Button theme="text" disabled>disable文本</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
    components: {
        Button,
    },
};
</script>