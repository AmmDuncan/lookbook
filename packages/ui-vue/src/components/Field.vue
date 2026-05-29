<script setup lang="ts">
import { computed, useId } from 'vue'

/**
 * Form field wrapper: label + helper/error/success message with the aria
 * plumbing already wired. Pass the control through the default slot and bind
 * the slot props (`id`, `describedby`, `invalid`) onto it so the label points
 * at the control and screen readers announce the message.
 */
const props = withDefaults(
  defineProps<{
    label?: string
    helper?: string
    error?: string
    success?: string
    required?: boolean
    /** Override the generated control id (e.g. to match an existing input). */
    id?: string
  }>(),
  {},
)

const controlId = computed(() => props.id ?? `field-${useId()}`)
const messageId = computed(() => `${controlId.value}-msg`)
// Error wins over success wins over helper for the single described-by message.
const message = computed(() => props.error ?? props.success ?? props.helper ?? '')
const describedby = computed(() => (message.value ? messageId.value : undefined))
const invalid = computed(() => (props.error ? true : undefined))
</script>

<template>
  <div class="field">
    <div v-if="label || $slots['label-end']" class="field-label-row">
      <label v-if="label" :for="controlId" class="field-label">
        {{ label }}<span v-if="required" class="req" aria-hidden="true">*</span>
      </label>
      <span v-if="$slots['label-end']" class="field-label-end"><slot name="label-end" /></span>
    </div>

    <slot :id="controlId" :describedby="describedby" :invalid="invalid" />

    <p v-if="error" :id="messageId" class="field-error" role="alert">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12.5" /><line x1="12" y1="16" x2="12" y2="16" /></svg>
      {{ error }}
    </p>
    <p v-else-if="success" :id="messageId" class="field-success">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="20 6 9 17 4 12" /></svg>
      {{ success }}
    </p>
    <p v-else-if="helper" :id="messageId" class="field-helper">{{ helper }}</p>
  </div>
</template>
