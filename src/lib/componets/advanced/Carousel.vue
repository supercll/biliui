<template>
  <div class="bili-carousel">
    <div
      class="bili-carousel-container"
      :class="{ tran: listData.isTran }"
      :ref="getcontainerDom"
    >
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
        :class="{ active: index == listData.showIndex }"
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
    let containerRef = null as HTMLElement;
    let sourceList = null as NodeList;
    const getcontainerDom = (el) => (containerRef = el);

    const listData = reactive({
      list: [],
      showIndex: 0,
      currentIndex: 0,
      length: 0,
      isTran: true,
    });
    onMounted(() => {
      sourceList = document.querySelectorAll(".bili-carouselItem");
      const list = Array.from(sourceList);

      list.forEach((item: HTMLElement, index) => {
        item.style.transform = `translateX(${index * 100}%)`;
      });
      listData.list = list;
      listData.length = list.length;
      // 克隆
      const copyDomFirst = listData.list[listData.length - 1].cloneNode(
        true
      ) as HTMLElement;
      const copyDomLast = listData.list[0].cloneNode(true) as HTMLElement;
      const firstChild = containerRef.firstElementChild;
      containerRef.insertBefore(copyDomFirst, firstChild);
      containerRef.appendChild(copyDomLast);
      copyDomFirst.style.transform = `translateX(-100%)`;
      copyDomLast.style.transform = `translateX(${list.length * 100}%)`;
      // 监听
      containerRef.ontransitionend = () => {
        if (listData.currentIndex == listData.length) {
          console.log("end");
          listData.isTran = false;
          containerRef.style.transform = `translateX(0%)`;
          listData.currentIndex = 0;
          timeout();
        }
        if (listData.currentIndex == -1) {
          console.log("start");
          listData.isTran = false;
          containerRef.style.transform = `translateX(${
            -(listData.length - 1) * 100
          }%)`;
          listData.currentIndex = listData.length - 1;
          timeout();
        }
      };
    });

    const onNext = () => {
      let index = listData.currentIndex;
      index++;
      listData.currentIndex = index;
      if (index >= listData.length) {
        listData.showIndex = 0;
      } else {
        listData.showIndex = index;
      }
    };
    const onPrev = () => {
      let index = listData.currentIndex;
      index--;
      listData.currentIndex = index;
      if (index < 0) {
        listData.showIndex = listData.length - 1;
      } else {
        listData.showIndex = index;
      }
    };

    const onToggle = (e) => {
      const id = e.target.dataset.id;
      listData.currentIndex = id;
      listData.showIndex = id;
    };

    const timeout = () => {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        listData.isTran = true;
      });
    };

    watch(
      () => listData.currentIndex,
      () => {
        containerRef.style.transform = `translateX(${
          -listData.currentIndex * 100
        }%)`;
      }
    );

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
  overflow: hidden;

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
  }

  .active {
    background: #73c9e5;
  }
  .tran {
    transition: transform 0.35s linear;
  }
}
</style>