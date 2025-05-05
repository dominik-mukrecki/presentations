<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter, $slidev } = useSlideContext()
const image = $frontmatter.image || ''
</script>

<template>
  <div class="slidev-layout end">
    <div class="image">
      <img v-if="image" :src="image" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
    <div class="author">{{ $slidev.configs.author }}</div>
    <div class="email">{{ $frontmatter.email }}</div>
  </div>
</template>
