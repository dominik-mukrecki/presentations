<script setup>
import { useSlideContext } from '@slidev/client'
import { useSlots, computed } from 'vue'

const { $frontmatter } = useSlideContext()
const image = $frontmatter.image || ''

const slots = useSlots()
const hasContent = computed(() => !!slots.content)
</script>

<template>
    <div class="slidev-layout full">
        <div class="image">
            <img v-if="image" :src="image" />
        </div>
        <div v-if="hasContent" v-click.hide class="content">
            <div class="container">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>
