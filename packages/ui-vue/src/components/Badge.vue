<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info'
type Size = 'sm' | 'md'

const props = withDefaults(
  defineProps<{ variant?: Variant; size?: Size; solid?: boolean; dot?: boolean }>(),
  { variant: 'neutral', size: 'md' },
)
const cls = computed(() => [
  'badge',
  `badge--${props.variant}`,
  `badge--${props.size}`,
  { 'is-solid': props.solid },
])
</script>

<template>
  <span :class="cls">
    <span v-if="dot" class="badge-dot" aria-hidden="true" />
    <slot />
  </span>
</template>
