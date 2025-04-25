// composables/useLinkIndexer.js
import { ref, onMounted, nextTick } from "vue";

export function useLinkIndexer(contentRef) {
  const links = ref([]);

  onMounted(async () => {
    await nextTick();

    if (!contentRef.value) return;

    const anchors = contentRef.value.querySelectorAll("a");
    const groups = [];
    let currentGroup = [];

    anchors.forEach((anchor, idx) => {
      links.value.push({
        href: anchor.href,
        originalText: anchor.textContent,
      });

      currentGroup.push({ anchor, idx });

      const nextSibling = anchor.nextSibling;
      if (!nextSibling || nextSibling.nodeType !== Node.ELEMENT_NODE || nextSibling.tagName !== 'A') {
        groups.push(currentGroup);
        currentGroup = [];
      }
    });

    groups.forEach(group => {
      const indexes = group.map(item => item.idx + 1).join(", ");
      const span = `<span class="indexed-link">[${indexes}]</span>`;

      group[0].anchor.outerHTML = span;
      group.slice(1).forEach(item => item.anchor.remove());
    });
  });

  return { links };
}
