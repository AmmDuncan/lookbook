<script setup lang="ts">
import {
  ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxInput,
  ComboboxItem, ComboboxItemIndicator, ComboboxPortal, ComboboxRoot,
  ComboboxViewport,
} from 'reka-ui'
import { computed, ref, watch } from 'vue'

import type { SearchOption } from '../composables/useServerSearch'

type Value = string | number
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    options: SearchOption[]
    size?: Size
    placeholder?: string
    emptyText?: string
    disabled?: boolean
    error?: boolean
    /** Disable client-side filtering — the parent's server search owns it. */
    serverSide?: boolean
    /** Show the "Searching…" state (e.g. bind to useServerSearch().isFetching). */
    loading?: boolean
  }>(),
  { size: 'md', placeholder: 'Search…', emptyText: 'No matches.' },
)
const model = defineModel<Value[]>({ default: () => [] })
const searchTerm = defineModel<string>('searchTerm', { default: '' })

const open = ref(false)

/** Resolve a selected value to its label — falls back to the raw value. */
function labelFor(value: Value): string {
  const opt = props.options.find((o) => String(o.value) === String(value))
  return opt?.displayLabel ?? opt?.label ?? String(value)
}

const selected = computed(() => model.value ?? [])

function removeChip(value: Value) {
  model.value = selected.value.filter((v) => String(v) !== String(value))
}

function onFocus() {
  if (!props.disabled) open.value = true
}

// Multi-select keeps the search across selections, so clear it on CLOSE
// (the inverse of single Combobox, which clears on open).
watch(open, (isOpen) => {
  if (!isOpen && searchTerm.value) searchTerm.value = ''
})

const triggerClass = computed(() => [
  'multicombo', `multicombo--${props.size}`,
  { 'is-error': props.error, 'is-disabled': props.disabled },
])
</script>

<template>
  <ComboboxRoot
    class="combobox"
    :model-value="selected"
    :open="open"
    multiple
    :ignore-filter="serverSide"
    :disabled="disabled"
    @update:model-value="(v) => (model = (v as Value[]))"
    @update:open="(v) => (open = v)"
  >
    <ComboboxAnchor :class="triggerClass">
      <button
        v-for="v in selected"
        :key="String(v)"
        type="button"
        class="chip chip--token"
        @click.stop="removeChip(v)"
      >
        {{ labelFor(v) }}
        <span class="chip-x" aria-label="Remove">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
        </span>
      </button>
      <ComboboxInput
        v-model:search-term="searchTerm"
        :placeholder="selected.length ? '' : placeholder"
        :aria-invalid="error || undefined"
        @focus="onFocus"
      />
    </ComboboxAnchor>
    <ComboboxPortal>
      <ComboboxContent class="combobox-popover" position="popper" :side-offset="4">
        <div v-if="loading" class="combobox-row combobox-row--loading">
          <span class="spinner spinner--xs" /> Searching…
        </div>
        <ComboboxViewport class="combobox-list">
          <ComboboxItem
            v-for="opt in options"
            :key="String(opt.value)"
            :value="opt.value"
            :disabled="opt.disabled"
            :class="['menu-item', { 'is-disabled': opt.disabled }]"
          >
            <slot name="option" :opt="opt">{{ opt.displayLabel ?? opt.label }}</slot>
            <ComboboxItemIndicator class="combobox-check">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxViewport>
        <ComboboxEmpty v-if="!loading" class="combobox-row combobox-row--empty">{{ emptyText }}</ComboboxEmpty>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
