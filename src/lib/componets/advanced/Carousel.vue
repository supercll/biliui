<template>
  <div class="bili-carousel" :ref="getCarouselDom">
    <div
      class="bili-carousel-container"
      :class="{ closeTransition: listData.closeTran }"
      :style="tranSpeed"
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
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
export default {
  props: {
    speed: {
      type: Number,
      default: 0.25,
    },
    autoDelay: {
      type: Number,
      default: 2000,
    },
    timingFunction: {
      type: String,
      default: "linear",
    },
  },
  setup(props) {
    let carouselDom = null as HTMLElement;
    let containerRef = null as HTMLElement;
    let sourceList = null as NodeList;
    let io = null as IntersectionObserver;
    const { speed, autoDelay, timingFunction } = props;
    let autoTimer = null;
    const getcontainerDom = (el) => (containerRef = el);
    const getCarouselDom = (el) => (carouselDom = el);

    const listData = reactive({
      list: [],
      showIndex: 0,
      currentIndex: 0,
      length: 0,
      closeTran: false,
    });
    const tranSpeed = computed(() => {
      let transition = speed + "s";
      if (speed > 1) {
        transition = speed + "ms";
      }
      transition = `transform ${timingFunction} ${transition}`;
      return {
        transition,
      };
    });
    onMounted(() => {
      sourceList = document.querySelectorAll(".bili-carouselItem");
      const list = Array.from(sourceList);

      list.forEach((item: HTMLElement, index) => {
        item.style.transform = `translateX(${index * 100}%)`;
      });
      listData.list = list;
      listData.length = list.length;
      // 克隆首位节点
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
          listData.closeTran = true;
          containerRef.style.transform = `translateX(0%)`;
          listData.currentIndex = 0;
          timeout();
        }
        if (listData.currentIndex == -1) {
          listData.closeTran = true;
          containerRef.style.transform = `translateX(${
            -(listData.length - 1) * 100
          }%)`;
          listData.currentIndex = listData.length - 1;
          timeout();
        }
      };

      // 鼠标悬浮事件
      carouselDom.onmouseenter = () => {
        clearInterval(autoTimer);
      };
      carouselDom.onmouseleave = () => {
        autoPlayer();
      };
      // 视口显示监听
      io = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return;
          autoPlayer();
        },
        { root: null, threshold: [0.5] }
      );
      io.observe(carouselDom);
    });

    onBeforeUnmount(() => {
      containerRef.ontransitionend = null;
      carouselDom.onmouseenter = null;
      carouselDom.onmouseleave = null;
      clearInterval(autoTimer);
      autoTimer = null;
      io.unobserve(carouselDom); // 停止观察
      io.disconnect(); // 关闭观察器
    });

    const autoPlayer = () => {
      autoTimer = setInterval(() => {
        onNext();
      }, autoDelay);
    };

    const debounce = (func, wait = speed * 1000, immediate = true) => {
      let timer = null;
      return function anonymous(...params) {
        let now = immediate && !timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
          timer = null;
          !immediate ? func.call(this, ...params) : null;
        }, wait);
        now ? func.call(this, ...params) : null;
      };
    };

    const onNext = debounce(() => {
      listData.currentIndex++;
    });
    const onPrev = debounce(() => {
      listData.currentIndex--;
    });

    const onToggle = (e) => {
      const id = e.target.dataset.id;
      listData.currentIndex = id;
      listData.showIndex = id;
    };

    const timeout = () => {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        listData.closeTran = false;
      });
    };

    watch(
      () => listData.currentIndex,
      () => {
        const currentIndex = listData.currentIndex;
        const listLength = listData.length;
        containerRef.style.transform = `translateX(${-currentIndex * 100}%)`;
        if (currentIndex < 0) {
          listData.showIndex = listLength - 1;
        } else if (currentIndex >= listLength) {
          listData.showIndex = 0;
        } else {
          listData.showIndex = currentIndex;
        }
      }
    );

    return {
      listData,
      onNext,
      onPrev,
      getcontainerDom,
      getCarouselDom,
      onToggle,
      tranSpeed,
      debounce,
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
  .closeTransition {
    transition: none !important;
  }
}
</style>