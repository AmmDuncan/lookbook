<script setup lang="ts">
import {
  DialogClose, DialogContent, DialogDescription, DialogOverlay,
  DialogPortal, DialogRoot, DialogTitle, DialogTrigger,
} from 'reka-ui'
import { computed, ref } from 'vue'

import { useScrollEdges } from '../composables/useScrollEdges'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    size?: 'md' | 'lg'
    /**
     * Force the header/footer hairline regardless of scroll. By default the
     * separators are contextual — they appear only when content is clipped
     * past that edge, so a body that fits reads as one clean card.
     */
    stickyBorders?: 'header' | 'footer' | 'both'
  }>(),
  { size: 'md' },
)
const open = defineModel<boolean>()

const scrollEl = ref<HTMLDivElement | null>(null)
const contentEl = ref<HTMLDivElement | null>(null)
const { canScrollUp, canScrollDown, update } = useScrollEdges(scrollEl, contentEl, open)

const showHeaderBorder = computed(
  () => props.stickyBorders === 'header' || props.stickyBorders === 'both' || canScrollUp.value,
)
const showFooterBorder = computed(
  () => props.stickyBorders === 'footer' || props.stickyBorders === 'both' || canScrollDown.value,
)
const contentClass = computed(() => [
  'modal', 'lb-dialog-content',
  { 'modal--lg': props.size === 'lg', 'lb-header-border': showHeaderBorder.value, 'lb-footer-border': showFooterBorder.value },
])
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="lb-scrim" />
      <DialogContent :class="contentClass">
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
        <div ref="scrollEl" class="modal-body lb-dialog-body" @scroll.passive="update">
          <div ref="contentEl"><slot /></div>
        </div>
        <div v-if="$slots.footer" class="modal-footer"><slot name="footer" /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
