<script setup>
import { computed } from 'vue'
import { useLinkCollector } from '../composables/useLinkCollector'

const { links } = useLinkCollector()
const perSlide = 8 // Links per slide

const slides = computed(() => {
  const result = []
  for (let i = 0; i < links.length; i += perSlide) {
    result.push(links.slice(i, i + perSlide))
  }
  return result
})
</script>

<template>
  <div v-for="(slideLinks, idx) in slides" :key="idx" class="slidev-layout default">
    <h2>References ({{ idx + 1 }}/{{ slides.length }})</h2>
    <ul class="text-sm mt-4">
      <li v-for="link in slideLinks" :key="link.index">
        [{{ link.index }}] <a :href="link.href" target="_blank">{{ link.description }}</a>
      </li>
    </ul>
  </div>
</template>
