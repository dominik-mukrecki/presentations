<script setup>
import { useSlideContext } from '@slidev/client'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''
</script>

<template>
    <div class="slidev-layout full">
        <div class="image">
            <img v-if="image" :src="image" />
        </div>
    </div>
</template>
