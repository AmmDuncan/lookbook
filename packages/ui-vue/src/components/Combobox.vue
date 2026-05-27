<script setup lang="ts">
import {
  ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxInput,
  ComboboxItem, ComboboxPortal, ComboboxRoot, ComboboxTrigger, ComboboxViewport,
} from 'reka-ui'
import { computed, ref, watch } from 'vue'

import type { SearchOption } from '../composables/useServerSearch'

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
const model = defineModel<string | number | null>()
const searchTerm = defineModel<string>('searchTerm', { default: '' })

const open = ref(false)

/** Selected label shown in the closed input — not the raw value. */
function displayValue(value: unknown): string {
  if (value == null || value === '') return ''
  const opt = props.options.find((o) => String(o.value) === String(value))
  return opt?.displayLabel ?? opt?.label ?? String(value)
}

function onChange(value: string | number | null) {
  if (value == null) { model.value = null; return }
  const matched = props.options.find((o) => String(o.value) === String(value))
  model.value = matched ? matched.value : value
}

function onFocus() {
  if (!props.disabled) open.value = true
}

// Clear the search on open so the FULL list shows, not a list pre-filtered
// to the current selection's label.
watch(open, (isOpen) => {
  if (isOpen && searchTerm.value) searchTerm.value = ''
})

const inputClass = computed(() => ['input', `input--${props.size}`, 'has-trailing', { 'is-error': props.error }])
</script>

<template>
  <ComboboxRoot
    :model-value="model"
    :open="open"
    :ignore-filter="serverSide"
    :disabled="disabled"
    @update:model-value="onChange"
    @update:open="(v) => (open = v)"
  >
    <ComboboxAnchor class="input-affix">
      <span class="input-leading">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      </span>
      <ComboboxInput
        v-model:search-term="searchTerm"
        :class="inputClass"
        :placeholder="placeholder"
        :display-value="displayValue"
        :aria-invalid="error || undefined"
        @focus="onFocus"
      />
      <span class="input-trailing">
        <span v-if="loading" class="spinner spinner--sm" aria-label="Searching" />
        <ComboboxTrigger v-else style="background: transparent; border: 0; cursor: pointer; color: var(--text-muted)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="6 9 12 15 18 9" /></svg>
        </ComboboxTrigger>
      </span>
    </ComboboxAnchor>
    <ComboboxPortal>
      <ComboboxContent class="menu lb-combobox-content" position="popper" :side-offset="6">
        <div v-if="loading" class="lb-combobox-loading">
          <span class="spinner spinner--xs" /> Searching…
        </div>
        <ComboboxViewport>
          <ComboboxItem
            v-for="opt in options"
            :key="String(opt.value)"
            :value="opt.value"
            :disabled="opt.disabled"
            :class="['menu-item', { 'is-disabled': opt.disabled }]"
          >
            <slot name="option" :opt="opt">{{ opt.displayLabel ?? opt.label }}</slot>
          </ComboboxItem>
        </ComboboxViewport>
        <ComboboxEmpty v-if="!loading" class="lb-combobox-empty">{{ emptyText }}</ComboboxEmpty>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
