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
  position: relative;
  width: 100%;
  height: 100%;
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