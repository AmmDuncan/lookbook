<script setup lang="ts">
import {
  SelectContent, SelectItem, SelectItemText, SelectPortal,
  SelectRoot, SelectTrigger, SelectValue, SelectViewport,
} from 'reka-ui'
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg' | 'xl'
interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{ options: SelectOption[]; size?: Size; error?: boolean; disabled?: boolean; placeholder?: string }>(),
  { size: 'lg', placeholder: 'Select…' },
)
const model = defineModel<string>()
const triggerClass = computed(() => ['select', `select--${props.size}`, { 'is-error': props.error }])
</script>

<template>
  <SelectRoot v-model="model" :disabled="disabled">
    <SelectTrigger :class="triggerClass" :aria-invalid="error || undefined">
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectPortal>
      <SelectContent class="menu lb-select-content" position="popper" :side-offset="6">
        <SelectViewport>
          <SelectItem
            v-for="opt in options"
            :key="opt.value"
            :value="opt.value"
            :disabled="opt.disabled"
            :class="['menu-item', { 'is-disabled': opt.disabled }]"
          >
            <SelectItemText>{{ opt.label }}</SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
