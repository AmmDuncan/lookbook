<script setup lang="ts">
import {
  DialogClose, DialogContent, DialogDescription, DialogOverlay,
  DialogPortal, DialogRoot, DialogTitle, DialogTrigger,
} from 'reka-ui'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ title?: string; description?: string; size?: 'md' | 'lg' }>(),
  { size: 'md' },
)
const open = defineModel<boolean>('open')
const modalClass = computed(() => ['modal', 'lb-dialog-content', { 'modal--lg': props.size === 'lg' }])
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="lb-scrim" />
      <DialogContent :class="modalClass">
        <div v-if="title || description || $slots.header" class="modal-header">
          <div>
            <DialogTitle v-if="title" class="modal-title">{{ title }}</DialogTitle>
            <DialogDescription v-if="description" class="modal-subtitle">{{ description }}</DialogDescription>
            <slot name="header" />
          </div>
          <DialogClose class="modal-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
          </DialogClose>
        </div>
        <div class="modal-body"><slot /></div>
        <div v-if="$slots.footer" class="modal-footer"><slot name="footer" /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
