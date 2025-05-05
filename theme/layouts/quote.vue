<!-- layouts/quote.vue -->
<script setup>
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''
</script>

<template>
  <div class="slidev-layout quote">
    <!-- Portrait image from frontmatter -->
    <div class="portrait">
      <img v-if="image" :src="image" />
    </div>

    <!-- Quote content slot -->
    <div class="content">
      <slot name="content" />
    </div>

    <!-- Author name slot -->
    <div class="author">
      <slot name="author" />
    </div>

  </div>
</template>
