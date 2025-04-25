<script setup>
import { computed } from 'vue';
import CyberSquare from './components/CyberSquare.vue';
import UniversitySquare from './components/UniversitySquare.vue';
import { useSlideContext } from '@slidev/client';

const { $slidev } = useSlideContext();

// Compute dynamic layout class
const layoutClass = computed(() => `layout-${$slidev.nav.currentLayout}`);
</script>

<template>
  <footer :class="layoutClass">
    <CyberSquare />
    <UniversitySquare />
  </footer>
</template>
