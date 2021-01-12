<template>
  <div class="bili-carousel">
    <div class="bili-carousel-container">
      <a
        v-for="item in list"
        :key="item.id"
        :href="item.linkTo"
        target="_blank"
      >
        <img :src="item.imgUrl" />
      </a>
    </div>
    <div class="bili-carousel-button bili-carousel-button_prev">&lt;</div>
    <div class="bili-carousel-button bili-carousel-button_next">&gt;</div>
    <ul class="bili-carousel-nav">
      <li v-for="item in list" :key="item"></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {
      list: [
        {
          id: 1,
          imgUrl: "../../../assets/cover.jpg",
          linkTo: "https://www.bilibili.com",
        },
        {
          id: 2,
          imgUrl: "../../../assets/cover.jpg",
          linkTo: "https://www.bilibili.com",
        },
        {
          id: 3,
          imgUrl: "../../../assets/cover.jpg",
          linkTo: "https://www.bilibili.com",
        },
      ],
    };
  },
};
</script>
 <style lang="scss">
.bili-carousel {
  box-sizing: border-box;
  position: relative;
  width: 460px;
  height: 200px;
  margin: 0 5px;
  background: rgba(115, 201, 229, 0.5);

  &-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 28px;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    margin: 0 5px;
    &:hover {
      color: #73c9e5;
    }

    &_prev {
      left: 0;
    }
    &_next {
      right: 0;
    }
  }

  &-nav {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 12px;
      height: 12px;
      margin: 0 8px;
      cursor: pointer;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);

      &:hover {
        background: #73c9e5;
      }
    }
  }

  &-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
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
}
</style>