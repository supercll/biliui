<template>
  <div
    v-if="type === 'normal'"
    :class="['bili-card', `bili-card-shadow_${shadow}`]"
  >
    <header class="bili-card-header">{{title}}</header>
    <div class="bili-card-body">
      <slot />
    </div>
  </div>
  <div
    v-else-if="type === 'wrap'"
    :class="['bili-card', `bili-card-shadow_${shadow}`]"
  >
    <div class="bili-card-wrap">
      <header class="bili-card-wrap-header">{{title}}</header>
      <div class="bili-card-wrap-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    shadow: {
      type: String,
      default: "cursor",
    },
    type: {
      type: String,
      default: "wrap",
    },
  },

  setup(props) {},
};
</script>

<style lang="scss">
.bili-card {
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  height: 200px;
  width: 260px;
  border: solid 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover &-wrap{
      transform: translateY(0);
  }

  &-shadow {
    &_cursor {
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      }
    }
    &_awalys {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    &_never {
      box-shadow: none;
    }
  }

  &-wrap {
    // position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    transform: translateY(80%);
    transition: all ease-out 0.3s;

    &-header {
      padding: 5px 10px;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      box-sizing: border-box;
      color: white;
    }
  }

  &-header {
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
}
</style>