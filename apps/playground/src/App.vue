<script setup lang="ts">
import { Toaster } from '@lookbook/ui-vue'
import dvlaSkin from '@lookbook/tokens/skins/dvla-self-service.css?raw'
import { ref, watchEffect } from 'vue'

import ShowcaseShell, { type NavGroup } from './components/ShowcaseShell.vue'
import AtomsSection from './sections/AtomsSection.vue'
import FormsSection from './sections/FormsSection.vue'
import ListsSection from './sections/ListsSection.vue'
import MoleculesSection from './sections/MoleculesSection.vue'
import OverlaysSection from './sections/OverlaysSection.vue'

const dark = ref(false)
const dvla = ref(false)
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', dark.value ? 'dark' : 'light')
})
watchEffect(() => {
  const id = 'dvla-skin'
  let el = document.getElementById(id) as HTMLStyleElement | null
  if (dvla.value) {
    if (!el) { el = document.createElement('style'); el.id = id; document.head.appendChild(el) }
    el.textContent = dvlaSkin
  } else if (el) {
    el.remove()
  }
})

const nav: NavGroup[] = [
  { label: 'Atoms', items: [
    { id: 'buttons', label: 'Buttons' }, { id: 'inputs', label: 'Inputs & controls' },
    { id: 'badges', label: 'Badges' }, { id: 'avatars', label: 'Avatars' },
    { id: 'cards', label: 'Cards' }, { id: 'feedback', label: 'Loading & feedback' },
  ] },
  { label: 'Molecules', items: [
    { id: 'tabs', label: 'Tabs' }, { id: 'alerts', label: 'Inline alerts' },
    { id: 'menus', label: 'Menus & overlays' }, { id: 'accordion', label: 'Accordion' },
  ] },
  { label: 'Lists & selection', items: [
    { id: 'combobox', label: 'Combobox' }, { id: 'multicombobox', label: 'Multi-combobox' },
    { id: 'overflow', label: 'Overflow scroll' },
  ] },
  { label: 'Overlays', items: [
    { id: 'popover', label: 'Popover' }, { id: 'drawer', label: 'Drawer' },
    { id: 'toast', label: 'Toast' }, { id: 'modals', label: 'Scroll-aware modals' },
  ] },
  { label: 'Forms', items: [{ id: 'fields', label: 'Field' }] },
]
</script>

<template>
  <ShowcaseShell :nav="nav">
    <template #toolbar>
      <button class="sc-toggle" :class="{ 'is-on': dark }" @click="dark = !dark">{{ dark ? 'Dark' : 'Light' }}</button>
      <button class="sc-toggle" :class="{ 'is-on': dvla }" @click="dvla = !dvla">{{ dvla ? 'DVLA skin' : 'Default skin' }}</button>
    </template>

    <header class="sc-hero">
      <p class="sc-hero-kicker">Lookbook · ui-vue</p>
      <h1 class="sc-hero-lede">The live component system.</h1>
      <p class="sc-hero-deck">Every primitive below is the real Vue component, styled only by tokens. Flip the theme or the DVLA skin in the top-right — the whole system re-skins from token overrides alone, nothing hardcoded.</p>
    </header>

    <AtomsSection />
    <MoleculesSection />
    <ListsSection />
    <OverlaysSection />
    <FormsSection />
  </ShowcaseShell>

  <Toaster position="br" />
</template>
