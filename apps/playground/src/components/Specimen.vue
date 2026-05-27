<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <div class="sc-specimen">
    <p v-if="label" class="sc-specimen-label">{{ label }}</p>
    <slot />
  </div>
</template>
