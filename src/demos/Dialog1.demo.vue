<demo>
默认 Dialog
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="bool" :closeOnClickOverlay="false" :ok="confirm" :cancel="cancel">
            <template v-slot:content>
                <strong>hi</strong>
                <div>hi2</div>
            </template>
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts">
import { Dialog } from "../lib/index";
import { Button } from "../lib/index";
import { ref } from "vue";
import { openDialog } from "../lib/index";
export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const bool = ref(false);
        const toggle = () => {
            bool.value = !bool.value;
        };
        const confirm = () => {
            return true;
        };
        const cancel = () => {};
        return {
            bool,
            toggle,
            confirm,
            cancel,
        };
    },
};
</script>