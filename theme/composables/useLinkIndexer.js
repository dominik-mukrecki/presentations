import { ref, onMounted, nextTick } from 'vue'

export function useLinkIndexer(contentRef) {
  const links = ref([])

  onMounted(async () => {
    await nextTick()

    if (!contentRef.value) return

    contentRef.value.querySelectorAll('a').forEach((anchor, idx) => {
      links.value.push({
        href: anchor.href,
        originalText: anchor.textContent,
        index: idx + 1,
      })

      const sup = document.createElement('sup')
      sup.className = 'indexed-link'
      sup.textContent = `${idx + 1}`

      anchor.replaceWith(sup)
    })
  })

  return { links }
}
