<template>
  <div class="bili-carouselItem">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bili-carouselItem {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(115, 201, 229, 0.1);
  img {
    width: 100%;
    height: 100%;
  }
  a { 
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>