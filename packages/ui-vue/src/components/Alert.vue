<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'success' | 'warning' | 'danger' | 'info'

const props = withDefaults(
  defineProps<{ variant?: Variant; title?: string; dismissible?: boolean }>(),
  { variant: 'info' },
)
const emit = defineEmits<{ close: [] }>()
const cls = computed(() => ['alert', `alert--${props.variant}`])
</script>

<template>
  <div :class="cls" role="alert">
    <span v-if="$slots.icon" class="alert-icon"><slot name="icon" /></span>
    <div class="alert-body">
      <p v-if="title" class="alert-title">{{ title }}</p>
      <p v-if="$slots.default" class="alert-msg"><slot /></p>
      <div v-if="$slots.actions" class="alert-actions"><slot name="actions" /></div>
    </div>
    <button v-if="dismissible" class="alert-close" type="button" aria-label="Dismiss" @click="emit('close')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
    </button>
  </div>
</template>
