<demo>
不同 大小
</demo>
<template>
    <div>
        <div>
            <Button size="big">big</Button>
            <Button>default</Button>
            <Button size="small">小</Button>
        </div>
        <div>
            <Button theme="link" size="big">big</Button>
            <Button theme="link">default</Button>
            <Button size="small" theme="link">小</Button>
        </div>
        <div>
            <Button size="big" theme="text">big</Button>
            <Button theme="text">default</Button>
            <Button size="small" theme="text">小</Button>
        </div>
    </div>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
    components: {
        Button,
    },
};
</script>