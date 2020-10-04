<demo>
普通按钮
</demo>
<template>
    <div>
        <Button>default</Button>
        <Button theme="link">default</Button>
        <Button theme="text">default</Button>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button,
    },
};
</script>