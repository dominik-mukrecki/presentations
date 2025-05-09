<template>
  <div v-if="links.length" class="link-index">
    <ol class="link-list">
      <li v-for="link in links" :key="link.index" class="link-item">
        <a :href="link.href" target="_blank">{{ link.originalText }}</a>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    default: () => []
  }
})
</script>
