<script setup lang="ts">
import {
  ToastAction, ToastDescription, ToastProvider, ToastRoot,
  ToastTitle, ToastViewport,
} from 'reka-ui'
import { computed } from 'vue'

import { useToast } from '../composables/useToast'
import type { ToastVariant } from '../composables/useToast'

/** Position of the toast stack. Mount one <Toaster /> near the app root. */
withDefaults(
  defineProps<{ position?: 'br' | 'bl' | 'tr' | 'tc' }>(),
  { position: 'br' },
)

const { toasts, dismiss } = useToast()

const ICON: Record<ToastVariant, string> = {
  success: 'M20 6 9 17l-5-5',
  danger: 'M12 8v5M12 16h0M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
  warning: 'M12 9v4M12 17h0M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
  info: 'M12 16v-5M12 8h0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
}
const viewportClass = computed(() => ['toast-stack'])
</script>

<template>
  <ToastProvider>
    <ToastRoot
      v-for="t in toasts"
      :key="t.id"
      :duration="t.duration"
      :class="['toast', `toast--${t.variant}`]"
      @update:open="(open) => { if (!open) dismiss(t.id) }"
    >
      <span class="toast-icon">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path :d="ICON[t.variant]" /></svg>
      </span>
      <div class="toast-body">
        <ToastTitle class="toast-title">{{ t.title }}</ToastTitle>
        <ToastDescription v-if="t.message" class="toast-msg">{{ t.message }}</ToastDescription>
      </div>
      <div v-if="t.action" class="toast-actions">
        <ToastAction :alt-text="t.action.label" as-child>
          <button class="btn btn--ghost btn--sm" type="button" @click="t.action.onClick()">{{ t.action.label }}</button>
        </ToastAction>
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss" @click="dismiss(t.id)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
      </button>
    </ToastRoot>
    <ToastViewport :class="[...viewportClass, `toast-stack--${position}`]" />
  </ToastProvider>
</template>
