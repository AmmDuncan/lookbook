<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Status = 'online' | 'away' | 'busy' | 'offline'

const props = withDefaults(
  defineProps<{ src?: string; alt?: string; name?: string; size?: Size; status?: Status }>(),
  { size: 'md' },
)

const failed = ref(false)
watch(() => props.src, () => { failed.value = false })

const initials = computed(() => {
  if (!props.name) return ''
  return props.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
})
const showImage = computed(() => !!props.src && !failed.value)
</script>

<template>
  <span :class="['avatar', `avatar--${size}`]">
    <img v-if="showImage" :src="src" :alt="alt ?? name ?? ''" @error="failed = true" />
    <template v-else>{{ initials }}</template>
    <span v-if="status" :class="['avatar-status', `avatar-status--${status}`]" :aria-label="status" />
  </span>
</template>
