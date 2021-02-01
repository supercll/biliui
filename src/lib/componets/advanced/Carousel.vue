<template>
  <div class="bili-carousel">
    <div class="bili-carousel-container" :ref="getcontainerDom">
      <slot></slot>
    </div>
    <div @click="onPrev" class="bili-carousel-button bili-carousel-button_prev">
      &lt;
    </div>
    <div @click="onNext" class="bili-carousel-button bili-carousel-button_next">
      &gt;
    </div>
    <ul class="bili-carousel-nav">
      <li
        v-for="(item, index) in listData.length"
        :key="item"
        :data-id="index"
        :class="{ active: index == listData.currentIndex }"
        @click="onToggle"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { nextTick, onMounted, reactive, ref, watch } from "vue";
import DocDemoVue from "../../../components/DocDemo.vue";
export default {
  setup() {
    let containerRef = null;
    let sourceList = null as NodeList;
    const getcontainerDom = (el) => (containerRef = el);

    const listData = reactive({
      list: [],
      currentIndex: 0,
      length: 0,
    });
    onMounted(() => {
      sourceList = document.querySelectorAll(".bili-carouselItem");
      const list = Array.from(sourceList);
      list.forEach((item: HTMLElement, index) => {
        item.style.transform = `translateX(${index * 100}%)`;
      });
      listData.list = list;
      listData.length = list.length;
    });

    const onRebase = () => {
      if (listData.currentIndex >= listData.length) {
      }
    };

    const onNext = () => {
      let index = listData.currentIndex;
      index++;
      if (index >= listData.length) {
        index = 0;
      }
      listData.currentIndex = index;
    };
    const onPrev = () => {
      let index = listData.currentIndex;
      index--;
      if (index < 0) {
        index = listData.length - 1;
      }
      listData.currentIndex = index;
    };

    watch(
      () => listData.currentIndex,
      () => {
        containerRef.style.transform = `translateX(-${listData.currentIndex * 100}%)`;
      }
    );

    const onToggle = (e) => {
      const id = e.target.dataset.id;
      listData.currentIndex = id;
    };

    return {
      listData,
      onNext,
      onPrev,
      getcontainerDom,
      onToggle,
    };
  },
};
</script>
 <style lang="scss">
.bili-carousel {
  box-sizing: border-box;
  position: relative;
  width: 460px;
  height: 240px;
  margin: 0 5px;
  background: rgba(115, 201, 229, 0.3);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  &:hover &-button {
    visibility: visible;
  }
  // overflow: hidden;

  &-button {
    visibility: hidden;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 28px;
    color: rgba(251, 114, 153, 0.4);
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
    justify-content: flex-end;

    li {
      width: 12px;
      height: 12px;
      margin: 0 8px;
      cursor: pointer;
      border-radius: 50%;
      background: rgba(251, 114, 153, 0.4);

      &:hover {
        background: #73c9e5;
      }
    }

    &-active {
      background: #73c9e5;
    }
  }

  &-container {
    position: relative;
    height: 100%;
    transition: transform 0.35s linear;
  }

  .active {
    background: #73c9e5;
  }
}
</style>