<template>
    <h1 class="doc-header">Switch 示例</h1>
    <div class="demo">
        <h2>普通开关</h2>
        <div class="demo-component">
            <Switch1Demo />
        </div>
    </div>
    <div class="demo">
        <h2>文字开关</h2>
        <div class="demo-component">
            <Switch2Demo />
        </div>
        <div class="demo-actions">
            <Button>查看代码</Button>
        </div>
        <div class="demo-code">
            <pre v-text="Switch2Demo.__demo"></pre>
        </div>
    </div>
    <div class="demo">
        <h2>图标开关</h2>
        <div class="demo-component">
            <Switch3Demo />
        </div>
    </div>
</template>

<script lang="ts" scoped>
import Switch from "../lib/Switch.vue";
import Button from "../lib/button.vue";
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import Switch3Demo from "../components/Switch3.demo.vue";
import { ref } from "vue";
import Switch1DemoVue from '../components/Switch1.demo.vue';
console.log(Switch1Demo.__)
export default {
    name: "SwitchDemo",
    components: {
        Switch,
        Button,
        Switch1Demo,
        Switch2Demo,
        Switch3Demo,
    },
    setup() {
        return {
            Switch1Demo,
            Switch2Demo,
            Switch3Demo,
        };
    },
};
</script>

<style lang="scss">
.demo {
    div {
        margin: 10px 0;
    }
}
</style>
