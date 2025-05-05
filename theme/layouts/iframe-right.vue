<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const url = $frontmatter.url || ''
</script>

<template>
  <div class="slidev-layout iframe-right">
    <div class="iframe">
      <iframe v-if="url" :src="url" frameborder="0" class="w-full h-full"></iframe>
    </div>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>
