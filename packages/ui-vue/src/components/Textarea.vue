<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{ size?: Size; error?: boolean; disabled?: boolean; readonly?: boolean }>(),
  { size: 'lg' },
)
const model = defineModel<string>()
const cls = computed(() => ['textarea', `textarea--${props.size}`, { 'is-error': props.error }])
</script>

<template>
  <textarea
    v-model="model"
    :class="cls"
    :disabled="disabled"
    :readonly="readonly"
    :aria-invalid="error || undefined"
    v-bind="$attrs"
  />
</template>
