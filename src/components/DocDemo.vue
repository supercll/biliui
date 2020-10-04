<template>
    <h1>组件总览</h1>
    <ButtonDemo />
    <SwitchDemo />
    <DialogDemo />
    <TabsDemo />
</template>

<script lang="ts" scoped>
import ButtonDemo from "./ButtonDemo.vue";
import DialogDemo from "./DialogDemo.vue";
import SwitchDemo from "./SwitchDemo.vue";
import TabsDemo from "./TabsDemo.vue";
export default {
    name: "DocDemo",
    components: {
        ButtonDemo,
        DialogDemo,
        SwitchDemo,
        TabsDemo,
    },
};
</script>

<style lang="scss" scoped>
.demo {
    padding: 45px 0;
}
</style>