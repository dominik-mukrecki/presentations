<script setup>
import { ref } from 'vue'
import LinkIndex from '../components/LinkIndex.vue'
import { useLinkIndexer } from '../composables/useLinkIndexer'

const contentRef = ref(null)
const { links } = useLinkIndexer(contentRef)
</script>

<template>
  <div class="slidev-layout default" ref="contentRef">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <LinkIndex :links="links" />
  </div>
</template>
