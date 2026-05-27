<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{ size?: Size; error?: boolean; disabled?: boolean }>(),
  { size: 'md' },
)
const model = defineModel<string | number>()
const cls = computed(() => ['select', `select--${props.size}`, { 'is-error': props.error }])
</script>

<template>
  <select
    v-model="model"
    :class="cls"
    :disabled="disabled"
    :aria-invalid="error || undefined"
    v-bind="$attrs"
  >
    <slot />
  </select>
</template>
