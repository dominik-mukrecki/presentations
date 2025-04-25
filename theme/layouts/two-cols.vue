<script setup>
import { ref } from 'vue'
import { useLinkIndexer } from '../composables/useLinkIndexer'
import LinkIndex from '../components/LinkIndex.vue'

const contentRef = ref(null)
const { links } = useLinkIndexer(contentRef)
</script>

<template>
  <div class="slidev-layout two-cols" ref="contentRef">
    <div class="left-title">
      <slot name="left-title" />
    </div>
    <div class="left-content">
      <slot name="left-content" />
    </div>
    <div class="right-title">
      <slot name="right-title" />
    </div>
    <div class="right-content">
      <slot name="right-content" />
    </div>
    <LinkIndex :links="links" />
  </div>
</template>
