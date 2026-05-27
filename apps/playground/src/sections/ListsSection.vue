<script setup lang="ts">
import {
  Card, CardBody, Combobox, MultiCombobox, OverflowScroll, useServerSearch,
} from '@lookbook/ui-vue'
import { ref } from 'vue'

import ShowcaseSection from '../components/ShowcaseSection.vue'
import Specimen from '../components/Specimen.vue'

const regions = [
  { value: 'ga', label: 'Greater Accra' }, { value: 'as', label: 'Ashanti' },
  { value: 'we', label: 'Western' }, { value: 'ea', label: 'Eastern' },
  { value: 'ce', label: 'Central' }, { value: 'vo', label: 'Volta' },
  { value: 'no', label: 'Northern' }, { value: 'up', label: 'Upper East' },
]
const region = ref('')
const pickedRegions = ref<(string | number)[]>(['ga', 'as'])

// Server-side combobox over a mock debounced API across a long list.
const officerId = ref<string | number | null>(null)
const ALL = Array.from({ length: 240 }, (_, i) => ({
  value: `u${i}`,
  label: `Officer ${String(i + 1).padStart(3, '0')} · ${['Accra', 'Kumasi', 'Tamale', 'Takoradi'][i % 4]}`,
}))
const mockApi = (q: string) =>
  new Promise<typeof ALL>((res) => {
    setTimeout(() => {
      const needle = q.trim().toLowerCase()
      res((needle ? ALL.filter((o) => o.label.toLowerCase().includes(needle)) : ALL).slice(0, 25))
    }, 450)
  })
const officerSearch = useServerSearch(mockApi)
const officerOptions = officerSearch.optionsFor(officerId)
</script>

<template>
  <ShowcaseSection
    id="combobox" eyebrow="Lists & selection" title="Combobox"
    description="The picker for long or growing lists. Search clears on open so the full list shows; backend-paginated sources run debounced server-side search with a seen-map and a capped, scrollable popover."
  >
    <Specimen label="Client-side (small bounded set)">
      <div style="max-width: 320px"><Combobox v-model="region" :options="regions" placeholder="Find a region…" /></div>
    </Specimen>
    <Specimen label="Server-side (240 officers, debounced + loading)">
      <div style="max-width: 360px">
        <Combobox
          v-model="officerId"
          v-model:search-term="officerSearch.search.value"
          :options="officerOptions"
          :loading="officerSearch.isFetching.value"
          server-side
          placeholder="Search 240 officers…"
        />
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="multicombobox" eyebrow="Lists & selection" title="Multi-combobox"
    description="Multi-select with removable chips inside the field and checkmarks on selected rows. Search clears on close, so you keep selecting across opens."
  >
    <Specimen>
      <div style="max-width: 420px"><MultiCombobox v-model="pickedRegions" :options="regions" placeholder="Add regions…" /></div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="overflow" eyebrow="Lists & selection" title="Overflow scroll"
    description="The sanctioned wrapper for content that overflows — press-and-hold arrows and fading edges instead of a bare scroll container. Horizontal strips, capped-height lists, or both axes."
  >
    <Specimen label="Horizontal — hold the arrows to scroll">
      <OverflowScroll edge-indicator="fade">
        <Card v-for="n in 14" :key="n" style="min-width: 180px"><CardBody>Service tile #{{ n }}</CardBody></Card>
      </OverflowScroll>
    </Specimen>
    <Specimen label="Vertical — capped height, arrows on the right edge">
      <div style="max-width: 360px">
        <OverflowScroll direction="vertical" max-height="180px" edge-indicator="fade">
          <div v-for="n in 16" :key="n" style="padding: 8px 4px; border-bottom: 1px solid var(--border)">Branch {{ n }} — Accra Region</div>
        </OverflowScroll>
      </div>
    </Specimen>
  </ShowcaseSection>
</template>
