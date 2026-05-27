<script setup lang="ts">
defineProps<{ id: string; eyebrow: string; title: string; description?: string }>()
</script>

<template>
  <section :id="id" data-sc-section class="sc-section">
    <p class="sc-section-eyebrow">{{ eyebrow }}</p>
    <h2 class="sc-section-title">{{ title }}</h2>
    <p v-if="description" class="sc-section-desc">{{ description }}</p>
    <slot />
  </section>
</template>
