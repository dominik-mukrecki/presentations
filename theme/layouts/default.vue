<script setup>
import { ref } from 'vue'
import { useLinkIndexer } from '../composables/useLinkIndexer'
import LinkIndex from '../components/LinkIndex.vue'

const contentRef = ref(null)
const { links } = useLinkIndexer(contentRef)
</script>

<template>
  <div class="slidev-layout default">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content" ref="contentRef">
      <slot name="content" />
    </div>
    <LinkIndex :links="links" />
  </div>
</template>
