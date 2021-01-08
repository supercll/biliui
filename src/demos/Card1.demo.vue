<demo>
卡片
</demo>
<template>
  <section>
    <div>
      <Card title="video1" />
    </div>
    <div>
      <Card title="video1" type="normal" />
    </div>
    <div>
      <Card title="video1" type="normal" shadow="awalys" />
    </div>
    <div>
      <Card title="video1" type="normal" shadow="never" />
    </div>
  </section>
</template>

<script lang="ts">
import { Card } from "../lib/index";
export default {
  components: {
    Card,
  },

  setup() {},
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 20px;
  }
}
</style>
