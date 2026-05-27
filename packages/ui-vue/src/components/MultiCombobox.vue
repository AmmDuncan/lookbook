<script setup lang="ts">
import {
  ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxInput,
  ComboboxItem, ComboboxItemIndicator, ComboboxPortal, ComboboxRoot,
  ComboboxTrigger, ComboboxViewport,
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

const anchorClass = computed(() => [
  'input-affix lb-multi-anchor', `lb-multi-anchor--${props.size}`,
  { 'is-error': props.error, 'is-disabled': props.disabled },
])
</script>

<template>
  <ComboboxRoot
    :model-value="selected"
    :open="open"
    multiple
    :ignore-filter="serverSide"
    :disabled="disabled"
    @update:model-value="(v) => (model = (v as Value[]))"
    @update:open="(v) => (open = v)"
  >
    <ComboboxAnchor :class="anchorClass">
      <button
        v-for="v in selected"
        :key="String(v)"
        type="button"
        class="chip is-active lb-multi-chip"
        @click.stop="removeChip(v)"
      >
        {{ labelFor(v) }}
        <span class="chip-x" aria-label="Remove">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
        </span>
      </button>
      <ComboboxInput
        v-model:search-term="searchTerm"
        class="lb-multi-input"
        :placeholder="selected.length ? '' : placeholder"
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
        <ComboboxViewport class="lb-combobox-viewport">
          <ComboboxItem
            v-for="opt in options"
            :key="String(opt.value)"
            :value="opt.value"
            :disabled="opt.disabled"
            :class="['menu-item lb-multi-item', { 'is-disabled': opt.disabled }]"
          >
            <span class="lb-multi-check">
              <ComboboxItemIndicator>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><polyline points="20 6 9 17 4 12" /></svg>
              </ComboboxItemIndicator>
            </span>
            <slot name="option" :opt="opt">{{ opt.displayLabel ?? opt.label }}</slot>
          </ComboboxItem>
        </ComboboxViewport>
        <ComboboxEmpty v-if="!loading" class="lb-combobox-empty">{{ emptyText }}</ComboboxEmpty>
      </ComboboxContent>
    </ComboboxPortal>
  </ComboboxRoot>
</template>
