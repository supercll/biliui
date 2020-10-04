<template>
    <h1>组件总览</h1>
    <div class="demo">
        <ButtonDemo />
    </div>
    <div class="demo">
    </div>
    <div class="demo">
        <DialogDemo />
    </div>
    <div class="demo">
        <TabsDemo />
    </div>
</template>

<script lang="ts" scoped>
import ButtonDemo from "./ButtonDemo.vue";
import DialogDemo from "./DialogDemo.vue";
import SwitchDemo from "./SwitchDemo.vue";
import TabsDemo from "./TabsDemo.vue";
export default {
    name: "SwitchDemo",
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