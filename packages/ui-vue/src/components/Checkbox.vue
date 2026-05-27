<script setup lang="ts">
defineProps<{ value?: unknown; disabled?: boolean }>()
const model = defineModel<boolean | unknown[]>()
</script>

<template>
  <input
    v-model="model"
    type="checkbox"
    class="checkbox"
    :value="value"
    :disabled="disabled"
    v-bind="$attrs"
  />
</template>
