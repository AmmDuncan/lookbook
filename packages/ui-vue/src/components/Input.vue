<script setup lang="ts">
import { computed, useSlots } from 'vue'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{
    size?: Size
    error?: boolean
    disabled?: boolean
    readonly?: boolean
    type?: string
  }>(),
  { size: 'md', type: 'text' },
)

const model = defineModel<string | number>()
const slots = useSlots()
const hasTrailing = computed(() => !!slots.trailing)
const hasAffix = computed(() => !!slots.leading || hasTrailing.value)

const inputClass = computed(() => [
  'input',
  `input--${props.size}`,
  { 'is-error': props.error, 'has-trailing': hasTrailing.value },
])
</script>

<template>
  <div v-if="hasAffix" class="input-affix">
    <span v-if="$slots.leading" class="input-leading"><slot name="leading" /></span>
    <input
      v-model="model"
      :class="inputClass"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :aria-invalid="error || undefined"
      v-bind="$attrs"
    />
    <span v-if="hasTrailing" class="input-trailing"><slot name="trailing" /></span>
  </div>
  <input
    v-else
    v-model="model"
    :class="inputClass"
    :type="type"
    :disabled="disabled"
    :readonly="readonly"
    :aria-invalid="error || undefined"
    v-bind="$attrs"
  />
</template>
