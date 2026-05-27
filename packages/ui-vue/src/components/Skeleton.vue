<script setup lang="ts">
type Variant = 'line' | 'text' | 'heading' | 'avatar' | 'button'
withDefaults(defineProps<{ variant?: Variant }>(), { variant: 'text' })
</script>

<template>
  <span :class="['skeleton', `skeleton--${variant}`]" aria-hidden="true" />
</template>
