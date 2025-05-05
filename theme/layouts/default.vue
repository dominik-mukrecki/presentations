<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useLinkCollector } from '../composables/useLinkCollector'

const contentRef = ref(null)
const { collectLinks } = useLinkCollector()

onMounted(async () => {
  await nextTick()
  collectLinks(contentRef)
})
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
