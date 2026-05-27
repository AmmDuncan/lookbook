<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

export interface NavItem { id: string; label: string }
export interface NavGroup { label: string; items: NavItem[] }

defineProps<{ nav: NavGroup[] }>()

const activeId = ref('')
let sections: HTMLElement[] = []

// The active section is the last one whose top has scrolled past the topbar —
// i.e. the section currently occupying the top of the viewport. Recomputed on
// scroll (rAF-throttled) so the highlight tracks reading position exactly.
function recompute() {
  const threshold = 90
  let current = sections[0]?.id ?? ''
  for (const s of sections) {
    if (s.getBoundingClientRect().top <= threshold) current = s.id
    else break
  }
  activeId.value = current
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { recompute(); ticking = false })
}

onMounted(() => {
  sections = Array.from(document.querySelectorAll<HTMLElement>('[data-sc-section]'))
  recompute()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="sc-shell">
    <aside class="sc-sidebar">
      <div class="sc-brand">
        <span class="sc-brand-mark">L</span>
        <div>
          <div class="sc-brand-name">Lookbook</div>
          <div class="sc-brand-sub">ui-vue · live</div>
        </div>
      </div>

      <nav>
        <div v-for="group in nav" :key="group.label" class="sc-navgroup">
          <p class="sc-navgroup-label">{{ group.label }}</p>
          <a
            v-for="item in group.items"
            :key="item.id"
            class="sc-navlink"
            :class="{ 'is-active': activeId === item.id }"
            @click="go(item.id)"
          >{{ item.label }}</a>
        </div>
      </nav>
    </aside>

    <div class="sc-main">
      <header class="sc-topbar">
        <span class="sc-topbar-title">Components</span>
        <span class="sc-topbar-spacer" />
        <slot name="toolbar" />
      </header>
      <div class="sc-content">
        <slot />
      </div>
    </div>
  </div>
</template>
