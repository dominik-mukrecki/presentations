// composables/useLinkCollector.js
import { reactive } from 'vue'

const links = reactive([])

export function useLinkCollector() {
  function collectLinks(contentRef) {
    if (!contentRef.value) return

    const anchors = contentRef.value.querySelectorAll('a:not(.indexed)')
    
    anchors.forEach(anchor => {
      links.push({
        href: anchor.href,
        description: anchor.textContent,
        index: links.length + 1
      })

      anchor.textContent = `[${links.length}]`
      anchor.classList.add('indexed')
    })
  }

  return { links, collectLinks }
}
