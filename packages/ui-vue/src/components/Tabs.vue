<script setup lang="ts">
import { TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { computed } from 'vue'

type Variant = 'pill' | 'underline'
interface TabItem {
  value: string
  label: string
  disabled?: boolean
}

const props = withDefaults(
  defineProps<{ items: TabItem[]; variant?: Variant }>(),
  { variant: 'pill' },
)
const model = defineModel<string>()
const listClass = computed(() => `tabs--${props.variant}`)
</script>

<template>
  <TabsRoot v-model="model">
    <TabsList :class="listClass">
      <TabsTrigger
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        :class="['tab', { 'is-active': model === item.value, 'is-disabled': item.disabled }]"
      >
        {{ item.label }}
      </TabsTrigger>
    </TabsList>
    <slot />
  </TabsRoot>
</template>
