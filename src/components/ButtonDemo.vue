<template>
    <h1 class="doc-header">Button 示例</h1>
    <div class="demo">
        <h3>类型</h3>
        <Button theme="button">default</Button>
        <Button @click="onClick">click</Button>
        <Button theme="link">link</Button>
        <Button theme="text">test</Button>
    </div>
    <div class="demo">
        <h3>大小</h3>
        <div>
            <Button size="big">big</Button>
            <Button>middle</Button>
            <Button size="small">small</Button>
        </div>code
        <div>
            <Button theme="link" size="big">big</Button>
            <Button theme="link">middle</Button>
            <Button size="small" theme="link">small</Button>
        </div>
        <div>
            <Button size="big" theme="text">big</Button>
            <Button theme="text">middle</Button>
            <Button size="small" theme="text">small</Button>
        </div>
    </div>
    <div class="demo">
        <h3>颜色</h3>
        <dir>
            <Button level="main">main</Button>
            <Button>default</Button>
            <Button level="danger">danger</Button>
        </dir>
        <dir>
            <Button theme="link" level="main">main-link</Button>
            <Button theme="link">default-link</Button>
            <Button theme="link" level="danger">danger-link</Button>
        </dir>
        <dir>
            <Button theme="text" level="main">main-text</Button>
            <Button theme="text">default-text</Button>
            <Button theme="text" level="danger">danger-text</Button>
        </dir>
    </div>
    <div class="demo">
        <h3>禁用按钮</h3>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <div class="demo">
        <h3>加载按钮</h3>
        <Button loading>loading</Button>
        <Button @click="onLoad" :loading="loading">{{status}}</Button>
    </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
    components: {
        Button,
    },
    setup() {
        const loading = ref(false);
        const status = ref("click me");
        const onLoad = () => {
            loading.value = true;
            status.value = "loading";
            let timer = setTimeout(() => {
                clearTimeout(timer);
                timer = null;
                loading.value = false;
                status.value = "click me";
            }, 2000);
        };
        const onClick = () => {
            alert("点击了");
        };
        return {
            onLoad,
            loading,
            status,
            onClick,
        };
    },
};
</script>
