<script setup lang="ts">
import { computed } from 'vue'

type Size = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Phone number input: a locked country prefix (flag + dial code) followed by
 * the national-number field. The model is the full E.164-ish string
 * (`{dialCode}{digits}`, e.g. "+233240000000"); the visible field shows only
 * the national digits. Defaults to Ghana; pass `dialCode`/`flag` for others.
 */
const props = withDefaults(
  defineProps<{
    size?: Size
    error?: boolean
    disabled?: boolean
    readonly?: boolean
    /** Country dial code prepended to the model value. */
    dialCode?: string
    /** Flag shown in the prefix — emoji by default. */
    flag?: string
  }>(),
  { size: 'lg', dialCode: '+233', flag: '🇬🇭' },
)

defineOptions({ inheritAttrs: false })

const model = defineModel<string>()

/** Visible national number — model minus the dial code, digits only. */
const national = computed<string>({
  get() {
    const value = model.value ?? ''
    if (value.startsWith(props.dialCode)) {
      return value.slice(props.dialCode.length)
    }
    return value.replace(/^\+/, '')
  },
  set(input: string) {
    const digits = input.replace(/\D/g, '').replace(/^0+/, '')
    model.value = digits ? `${props.dialCode}${digits}` : ''
  },
})

const wrapperClass = computed(() => [
  'phone-input',
  `phone-input--${props.size}`,
  { 'is-error': props.error, 'is-disabled': props.disabled, 'is-readonly': props.readonly },
])
</script>

<template>
  <div :class="wrapperClass">
    <span class="phone-prefix" aria-hidden="true">
      <span class="phone-flag">{{ flag }}</span>{{ dialCode }}
    </span>
    <input
      v-model="national"
      class="phone-field"
      type="tel"
      inputmode="numeric"
      :disabled="disabled"
      :readonly="readonly"
      :aria-invalid="error || undefined"
      v-bind="$attrs"
    />
  </div>
</template>
