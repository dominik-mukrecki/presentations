<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''
</script>

<template>
    <div class="slidev-layout image-left">
        <div class="image">
            <img v-if="image" :src="image" />
        </div>
        <div class="image-drop">
            <img v-if="image" :src="image" />
        </div>
        <div class="title">
            <slot name="title" />
        </div>
        <div class="content">
            <slot name="content" />
        </div>
    </div>
</template>
