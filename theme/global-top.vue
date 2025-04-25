<script setup>
import GlobalStripes from './components/GlobalStripes.vue';
import { computed } from 'vue';
import { useSlideContext } from '@slidev/client';

const { $slidev } = useSlideContext();

// Dynamically generate layout class name
const layoutClass = computed(() => `layout-${$slidev.nav.currentLayout}`);
</script>

<template>
  <div>
    <GlobalStripes />
  </div>
  <header :class="layoutClass">
    <div class="left-upper">
      <div class="title">{{ $slidev.configs.title }}</div>
      <div class="author">{{ $slidev.configs.author }}</div>
    </div>
    <div class="slides-compass right-upper">
      <div>
        <span>
          <SlideCurrentNo class="slide-current-no" />
        </span>
        <span>
          <SlidesTotal class="slides-total" />
        </span>
      </div>
      <div>
        <span>
          <Toc maxDepth="1" mode="onlyCurrentTree" />
        </span>
      </div>
    </div>
  </header>
</template>
