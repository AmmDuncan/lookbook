<script setup lang="ts">
import {
  PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger,
} from 'reka-ui'

const props = withDefaults(
  defineProps<{
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    arrow?: boolean
    /** Minimum gap (px) between the popover and viewport edges. Lets the popover
     * shift/flip inboard so edge-anchored triggers don't clip their content. */
    collisionPadding?: number
    /** Drop the default tooltip-style chrome (bg, border, padding, max-width)
     * so the consumer can style a full-sized panel themselves. Arrow still works
     * but typically you'd disable it with `arrow="false"` for a bare panel. */
    bare?: boolean
  }>(),
  {
    side: 'bottom',
    align: 'center',
    sideOffset: 8,
    arrow: true,
    collisionPadding: 12,
    bare: false,
  },
)
const open = defineModel<boolean>('open')
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        :class="[props.bare ? 'lb-popover-bare' : 'popover', 'lb-popover']"
        :side="side"
        :align="align"
        :side-offset="sideOffset"
        :collision-padding="collisionPadding"
      >
        <slot />
        <PopoverArrow v-if="arrow" class="lb-popover-arrow" :width="12" :height="6" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
