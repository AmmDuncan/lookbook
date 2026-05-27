<script setup lang="ts">
import {
  AccordionContent, AccordionHeader, AccordionItem,
  AccordionRoot, AccordionTrigger,
} from 'reka-ui'

export interface AccordionEntry {
  value: string
  title: string
  /** Plain-text body; for rich content use the #content slot instead. */
  content?: string
  disabled?: boolean
}

withDefaults(
  defineProps<{
    items: AccordionEntry[]
    /** single = one panel open at a time; multiple = independent panels. */
    type?: 'single' | 'multiple'
    collapsible?: boolean
  }>(),
  { type: 'single', collapsible: true },
)
// string for single, string[] for multiple — Reka handles the shape.
const model = defineModel<string | string[]>()
</script>

<template>
  <AccordionRoot
    v-model="model"
    :type="type"
    :collapsible="collapsible"
    class="lb-accordion"
  >
    <AccordionItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
      class="lb-accordion-item"
    >
      <AccordionHeader class="lb-accordion-header">
        <AccordionTrigger class="lb-accordion-trigger">
          <span>{{ item.title }}</span>
          <svg class="lb-accordion-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="6 9 12 15 18 9" /></svg>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="lb-accordion-content">
        <div><slot name="content" :item="item">{{ item.content }}</slot></div>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
