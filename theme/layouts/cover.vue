<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''

</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="image">
      <img v-if="image" :src="image" />
    </div>
  </div>
</template>
