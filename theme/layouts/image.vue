<script setup>
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''
</script>

<template>
    <div class="slidev-layout image">
        <div class="image">
            <img v-if="image" :src="image" />
        </div>
        <div class="content">
            <slot name="content" />
        </div>
    </div>
</template>
