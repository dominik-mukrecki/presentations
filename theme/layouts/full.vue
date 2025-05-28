<script setup>
import { useSlideContext } from '@slidev/client'
import { useSlots, computed } from 'vue'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''
const contentClass = $frontmatter.contentClass || ''

const slots = useSlots()
const hasContent = computed(() => !!slots.content)
</script>

<template>
  <div class="slidev-layout full">
    <div v-if="video" class="video">
      <video :src="video" />
    </div>
    <div v-if="image" class="image">
      <img :src="image" />
    </div>
    <div v-if="hasContent" v-click.hide class="content">
      <div class="container" :class="contentClass">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
