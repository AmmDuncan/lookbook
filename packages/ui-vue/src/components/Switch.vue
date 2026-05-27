<script setup lang="ts">
defineProps<{ disabled?: boolean }>()
const model = defineModel<boolean>()
</script>

<template>
  <input
    v-model="model"
    type="checkbox"
    role="switch"
    class="switch"
    :disabled="disabled"
    v-bind="$attrs"
  />
</template>
