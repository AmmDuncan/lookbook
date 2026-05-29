<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { computed, ref } from 'vue'

import { useHoldRepeat } from '../composables/useHoldRepeat'

type Direction = 'horizontal' | 'vertical' | 'both'
type Edge = 'fade' | 'border' | 'none'

const props = withDefaults(
  defineProps<{
    direction?: Direction
    /** Edge treatment: gradient fade (default), hairline border, or none. */
    edgeIndicator?: Edge
    /** px-per-step, or a percentage string of the viewport (e.g. '50%'). */
    scrollAmount?: number | string
    /** Caps the track height for vertical / both (maps to --overflow-max-h). */
    maxHeight?: string
    /** Floor for the track height for vertical / both (maps to --overflow-min-h)
     * so the list doesn't crush on short viewports. */
    minHeight?: string
    showArrows?: boolean
    /** Match the fade to a tinted container (default: the surface colour). */
    fadeColor?: string
    /** Fade band thickness in px. */
    fadeSize?: number
    /** Arrow button diameter in px. */
    arrowSize?: number
  }>(),
  { direction: 'horizontal', edgeIndicator: 'fade', scrollAmount: '50%', showArrows: true },
)

const scrollEl = ref<HTMLElement | null>(null)
const canLeft = ref(false)
const canRight = ref(false)
const canUp = ref(false)
const canDown = ref(false)

const isH = computed(() => props.direction === 'horizontal' || props.direction === 'both')
const isV = computed(() => props.direction === 'vertical' || props.direction === 'both')

function update() {
  const el = scrollEl.value
  if (!el) return
  canLeft.value = isH.value && el.scrollLeft > 0
  canRight.value = isH.value && el.scrollLeft + el.clientWidth < el.scrollWidth - 1
  canUp.value = isV.value && el.scrollTop > 0
  canDown.value = isV.value && el.scrollTop + el.clientHeight < el.scrollHeight - 1
}

function resolveAmount(axis: 'h' | 'v'): number {
  const raw = props.scrollAmount
  const el = scrollEl.value
  if (typeof raw === 'number') return raw
  const m = /^(-?\d+(?:\.\d+)?)%$/.exec(raw.trim())
  if (!m || !el) return 200
  const extent = axis === 'h' ? el.clientWidth : el.clientHeight
  return Math.round(extent * (Number(m[1]) / 100))
}

function step(axis: 'h' | 'v', dir: 1 | -1) {
  const el = scrollEl.value
  if (!el) return
  const by = resolveAmount(axis) * dir
  el.scrollBy(axis === 'h' ? { left: by, behavior: 'smooth' } : { top: by, behavior: 'smooth' })
}

const holdLeft = useHoldRepeat(() => step('h', -1), { canContinue: () => canLeft.value })
const holdRight = useHoldRepeat(() => step('h', 1), { canContinue: () => canRight.value })
const holdUp = useHoldRepeat(() => step('v', -1), { canContinue: () => canUp.value })
const holdDown = useHoldRepeat(() => step('v', 1), { canContinue: () => canDown.value })

useResizeObserver(scrollEl, update)

const variant = computed(() => {
  if (props.direction === 'both') return 'overflow--both'
  return isH.value ? 'overflow--h' : 'overflow--v'
})
const wrapClass = computed(() => [
  'overflow', variant.value,
  { 'overflow--border': props.edgeIndicator === 'border', 'overflow--none': props.edgeIndicator === 'none' },
])
const wrapStyle = computed(() => {
  const s: Record<string, string> = {}
  if (props.maxHeight) s['--overflow-max-h'] = props.maxHeight
  if (props.minHeight) s['--overflow-min-h'] = props.minHeight
  if (props.fadeColor) s['--overflow-fade-color'] = props.fadeColor
  if (props.fadeSize != null) s['--overflow-fade-size'] = `${props.fadeSize}px`
  if (props.arrowSize != null) s['--overflow-arrow-size'] = `${props.arrowSize}px`
  return s
})
const showFades = computed(() => props.edgeIndicator === 'fade')
</script>

<template>
  <div :class="wrapClass" :style="wrapStyle">
    <div ref="scrollEl" class="overflow-track" @scroll.passive="update">
      <slot />
    </div>

    <template v-if="showFades">
      <div v-if="isH" class="overflow-fade overflow-fade-left" :style="{ opacity: canLeft ? 1 : 0 }" />
      <div v-if="isH" class="overflow-fade overflow-fade-right" :style="{ opacity: canRight ? 1 : 0 }" />
      <div v-if="isV" class="overflow-fade overflow-fade-top" :style="{ opacity: canUp ? 1 : 0 }" />
      <div v-if="isV" class="overflow-fade overflow-fade-bottom" :style="{ opacity: canDown ? 1 : 0 }" />
    </template>

    <template v-if="showArrows">
      <button v-if="isH" class="overflow-arrow overflow-arrow-left" :class="{ 'is-disabled': !canLeft }" aria-label="Scroll left" v-bind="holdLeft">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button v-if="isH" class="overflow-arrow overflow-arrow-right" :class="{ 'is-disabled': !canRight }" aria-label="Scroll right" v-bind="holdRight">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
      <button v-if="isV" class="overflow-arrow overflow-arrow-up" :class="{ 'is-disabled': !canUp }" aria-label="Scroll up" v-bind="holdUp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
      </button>
      <button v-if="isV" class="overflow-arrow overflow-arrow-down" :class="{ 'is-disabled': !canDown }" aria-label="Scroll down" v-bind="holdDown">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
    </template>
  </div>
</template>
