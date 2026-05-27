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
    side?: 'right' | 'left'
    /**
     * Force the header/footer hairline regardless of scroll. By default the
     * separators are contextual — they appear only when the body is clipped
     * past that edge.
     */
    stickyBorders?: 'header' | 'footer' | 'both'
  }>(),
  { side: 'right' },
)
const open = defineModel<boolean>('open')

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
  'drawer', 'lb-drawer-content', `lb-drawer-content--${props.side}`,
  { 'lb-header-border': showHeaderBorder.value, 'lb-footer-border': showFooterBorder.value },
])
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="lb-drawer-scrim" />
      <DialogContent :class="contentClass">
        <div v-if="title || description || $slots.header" class="drawer-header">
          <div>
            <DialogTitle v-if="title" class="drawer-title">{{ title }}</DialogTitle>
            <DialogDescription v-if="description" class="modal-subtitle">{{ description }}</DialogDescription>
            <slot name="header" />
          </div>
          <DialogClose class="modal-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
          </DialogClose>
        </div>
        <div ref="scrollEl" class="drawer-body lb-drawer-body" @scroll.passive="update">
          <div ref="contentEl"><slot /></div>
        </div>
        <div v-if="$slots.footer" class="drawer-footer"><slot name="footer" /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
