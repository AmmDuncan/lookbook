<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'link'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    /** Square icon-only button. Provide an accessible label via `aria-label`. */
    iconOnly?: boolean
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { variant: 'primary', size: 'md', type: 'button' },
)

const classes = computed(() => [
  'btn',
  `btn--${props.variant}`,
  `btn--${props.size}`,
  { 'btn--icon': props.iconOnly, 'is-loading': props.loading },
])
</script>

<template>
  <button :class="classes" :type="type" :disabled="disabled || loading" :aria-busy="loading || undefined">
    <span class="btn-spinner" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2.5" stroke-opacity="0.25" />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
      </svg>
    </span>
    <span class="btn-content"><slot /></span>
  </button>
</template>
