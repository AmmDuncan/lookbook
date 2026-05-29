<script setup lang="ts">
import {
  DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuPortal, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger,
} from 'reka-ui'

import type { MenuEntry } from '../types'

withDefaults(
  defineProps<{
    items: MenuEntry[]
    align?: 'start' | 'center' | 'end'
    side?: 'top' | 'bottom' | 'left' | 'right'
  }>(),
  { align: 'start', side: 'bottom' },
)
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent class="menu" :align="align" :side="side" :side-offset="6">
        <template v-for="(item, i) in items" :key="i">
          <DropdownMenuSeparator v-if="item.type === 'separator'" class="menu-divider" />
          <DropdownMenuLabel v-else-if="item.type === 'label'" class="menu-label">{{ item.label }}</DropdownMenuLabel>
          <DropdownMenuItem
            v-else
            :class="['menu-item', { 'is-destructive': item.destructive, 'is-disabled': item.disabled }]"
            :disabled="item.disabled"
            @select="item.onSelect?.()"
          >
            {{ item.label }}
            <span v-if="item.shortcut" class="menu-shortcut">{{ item.shortcut }}</span>
          </DropdownMenuItem>
        </template>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
