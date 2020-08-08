<template>
    <h1>组件总览</h1>
    <div class="demo">
        <ButtonDemo />
    </div>
    <div class="demo">
        <DialogDemo />
    </div>
</template>

<script lang="ts" scoped>
import ButtonDemo from "./ButtonDemo.vue";
import DialogDemo from "./DialogDemo.vue";
export default {
    name: "SwitchDemo",
    components: {
        ButtonDemo,
        DialogDemo,
    },
};
</script>

<style lang="scss" scoped>
.demo {
    padding: 45px 0;
}
</style>