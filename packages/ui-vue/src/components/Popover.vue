<script setup lang="ts">
import {
  PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger,
} from 'reka-ui'

withDefaults(
  defineProps<{
    side?: 'top' | 'right' | 'bottom' | 'left'
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    arrow?: boolean
  }>(),
  { side: 'bottom', align: 'center', sideOffset: 8, arrow: true },
)
const open = defineModel<boolean>('open')
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent class="popover lb-popover" :side="side" :align="align" :side-offset="sideOffset">
        <slot />
        <PopoverArrow v-if="arrow" class="lb-popover-arrow" :width="12" :height="6" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
