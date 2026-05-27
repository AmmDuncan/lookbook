<script setup lang="ts">
defineProps<{ value: unknown; disabled?: boolean }>()
const model = defineModel<unknown>()
</script>

<template>
  <input
    v-model="model"
    type="radio"
    class="radio"
    :value="value"
    :disabled="disabled"
    v-bind="$attrs"
  />
</template>
