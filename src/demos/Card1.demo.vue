<demo>
卡片
</demo>
<template>
  <section>
    <div>
      <Card title="video1" />
    </div>
    <div>
      <Card title="video2">
        <template v-slot:card_body>这是卡片主题描述</template>
        <template v-slot:card_wrap_body>这是卡片遮罩层描述</template>
      </Card>
    </div>
    <div>
      <Card title="video3" type="normal" />
    </div>
    <div>
      <Card title="video4" type="normal">
        <template v-slot:card_body>这是卡片描述</template>
      </Card>
    </div>
    <div>
      <Card title="video5" type="normal" shadow="awalys" />
    </div>
    <div>
      <Card title="video6" type="normal" shadow="never" />
    </div>
  </section>
</template>

<script lang="ts">
import { Card } from '../lib/index';
export default {
  components: {
    Card
  },

  setup() {}
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  div {
    margin: 5px;
  }
}
</style>
