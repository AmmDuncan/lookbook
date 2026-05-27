<script setup lang="ts">
defineProps<{ interactive?: boolean }>()
</script>

<template>
  <div :class="['card', { 'card--interactive': interactive }]">
    <slot />
  </div>
</template>
