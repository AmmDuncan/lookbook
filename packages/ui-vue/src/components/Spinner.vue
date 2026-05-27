<script setup lang="ts">
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
withDefaults(defineProps<{ size?: Size; label?: string }>(), { size: 'md', label: 'Loading' })
</script>

<template>
  <span :class="['spinner', `spinner--${size}`]" role="status" :aria-label="label" />
</template>
