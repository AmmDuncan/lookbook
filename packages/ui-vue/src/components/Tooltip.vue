<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'

type Side = 'top' | 'bottom' | 'left' | 'right'

withDefaults(
  defineProps<{ text?: string; side?: Side; delay?: number }>(),
  { side: 'top', delay: 200 },
)
</script>

<template>
  <TooltipProvider :delay-duration="delay">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent :class="['tooltip', `tooltip--${side}`]" :side="side" :side-offset="6">
          <slot name="content">{{ text }}</slot>
          <TooltipArrow :width="10" :height="5" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
