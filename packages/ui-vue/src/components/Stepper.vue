<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(
  defineProps<{ size?: Size; min?: number; max?: number; step?: number; disabled?: boolean }>(),
  { size: 'md', step: 1 },
)
const model = defineModel<number>({ default: 0 })

const canDec = computed(() => props.min == null || model.value > props.min)
const canInc = computed(() => props.max == null || model.value < props.max)

function dec() {
  if (props.disabled || !canDec.value) return
  model.value = model.value - props.step
}
function inc() {
  if (props.disabled || !canInc.value) return
  model.value = model.value + props.step
}
</script>

<template>
  <div :class="['stepper', `stepper--${size}`, { 'is-disabled': disabled }]">
    <button type="button" class="stepper-btn" aria-label="Decrease" :disabled="disabled || !canDec" @click="dec">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
    </button>
    <input
      v-model.number="model"
      class="stepper-input"
      type="number"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      inputmode="numeric"
    />
    <button type="button" class="stepper-btn" aria-label="Increase" :disabled="disabled || !canInc" @click="inc">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
    </button>
  </div>
</template>
