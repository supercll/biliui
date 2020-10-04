<demo>
加载中按钮
</demo>
<template>
    <div>
        <Button loading>loading</Button>
        <Button @click="onLoad" :loading="loading">{{status}}</Button>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
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