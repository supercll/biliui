<demo>
不同 level
</demo>
<template>
    <div>
        <div>
            <Button level="main">main</Button>
            <Button>default</Button>
            <Button level="danger">danger</Button>
        </div>
        <div>
            <Button theme="link" level="main">main链接</Button>
            <Button theme="link">default链接</Button>
            <Button theme="link" level="danger">danger</Button>
        </div>
        <div>
            <Button theme="text" level="main">main文字</Button>
            <Button theme="text">default文字</Button>
            <Button theme="text" level="danger">danger</Button>
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