<!-- components/LinkIndex.vue -->
<template>
    <div v-if="links.length" class="link-index">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.href" target="_blank">{{ link.originalText }}</a>
        </li>
      </ul>
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
  