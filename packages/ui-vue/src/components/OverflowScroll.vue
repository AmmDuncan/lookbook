<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { computed, ref } from 'vue'

import { useHoldRepeat } from '../composables/useHoldRepeat'

type Direction = 'horizontal' | 'vertical' | 'both'
type Edge = 'none' | 'fade' | 'border'
type VPlacement = 'start' | 'center' | 'end'

const props = withDefaults(
  defineProps<{
    direction?: Direction
    /** px number, or a percentage string of the viewport (e.g. '50%'). */
    scrollAmount?: number | string
    maxHeight?: string
    minHeight?: string
    showArrows?: boolean
    edgeIndicator?: Edge
    fadeColor?: string
    fadeSize?: number
    overscroll?: 'auto' | 'contain'
    buttonSize?: number
    iconSize?: number
    arrowOffset?: number
    /** Cross-axis placement of the up/down arrows (vertical mode). */
    verticalArrowsPlacement?: VPlacement
  }>(),
  {
    direction: 'horizontal', scrollAmount: '50%', showArrows: true,
    edgeIndicator: 'none', fadeColor: 'var(--bg)', fadeSize: 24,
    overscroll: 'auto', buttonSize: 32, iconSize: 16, arrowOffset: 6,
    verticalArrowsPlacement: 'end',
  },
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
  if (typeof raw === 'number') return raw
  const m = /^(-?\d+(?:\.\d+)?)%$/.exec(raw.trim())
  const el = scrollEl.value
  if (!m || !el) return 200
  const frac = Number(m[1]) / 100
  return Math.round((axis === 'h' ? el.clientWidth : el.clientHeight) * frac)
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

const scrollStyle = computed(() => ({
  maxHeight: props.maxHeight,
  minHeight: props.minHeight,
  overscrollBehavior: props.overscroll,
  overflowX: isH.value ? 'auto' : 'hidden',
  overflowY: isV.value ? 'auto' : 'hidden',
}))
const btnStyle = computed(() => ({ width: `${props.buttonSize}px`, height: `${props.buttonSize}px` }))
const vCross = computed(() => ({
  start: { left: `${props.arrowOffset}px` },
  center: { left: '50%', transform: 'translateX(-50%)' },
  end: { right: `${props.arrowOffset}px` },
}[props.verticalArrowsPlacement]))

defineExpose({ scrollEl, update })
</script>

<template>
  <div class="lb-ofs">
    <div ref="scrollEl" class="lb-ofs-scroll" :style="scrollStyle" @scroll="update">
      <slot />
    </div>

    <template v-if="edgeIndicator === 'fade'">
      <div v-if="canLeft || canUp" class="lb-ofs-fade" :style="isV ? { top: 0, left: 0, right: 0, height: `${fadeSize}px`, background: `linear-gradient(${fadeColor}, transparent)` } : { top: 0, bottom: 0, left: 0, width: `${fadeSize}px`, background: `linear-gradient(90deg, ${fadeColor}, transparent)` }" />
      <div v-if="canRight || canDown" class="lb-ofs-fade" :style="isV ? { bottom: 0, left: 0, right: 0, height: `${fadeSize}px`, background: `linear-gradient(transparent, ${fadeColor})` } : { top: 0, bottom: 0, right: 0, width: `${fadeSize}px`, background: `linear-gradient(90deg, transparent, ${fadeColor})` }" />
    </template>

    <template v-if="showArrows">
      <button v-if="canLeft" class="lb-ofs-arrow" :style="{ ...btnStyle, left: `${arrowOffset}px`, top: '50%', transform: 'translateY(-50%)' }" aria-label="Scroll left" v-bind="holdLeft">
        <svg :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button v-if="canRight" class="lb-ofs-arrow" :style="{ ...btnStyle, right: `${arrowOffset}px`, top: '50%', transform: 'translateY(-50%)' }" aria-label="Scroll right" v-bind="holdRight">
        <svg :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
      <button v-if="canUp" class="lb-ofs-arrow" :style="{ ...btnStyle, top: `${arrowOffset}px`, ...vCross }" aria-label="Scroll up" v-bind="holdUp">
        <svg :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
      </button>
      <button v-if="canDown" class="lb-ofs-arrow" :style="{ ...btnStyle, bottom: `${arrowOffset}px`, ...vCross }" aria-label="Scroll down" v-bind="holdDown">
        <svg :width="iconSize" :height="iconSize" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      </button>
    </template>
  </div>
</template>

<style scoped>
.lb-ofs { position: relative; }
.lb-ofs-scroll { scrollbar-width: none; }
.lb-ofs-scroll::-webkit-scrollbar { display: none; }
.lb-ofs-fade { position: absolute; pointer-events: none; z-index: 10; }
.lb-ofs-arrow {
  position: absolute;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-muted);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: color var(--duration-fast) var(--ease-standard),
    background-color var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard);
}
.lb-ofs-arrow:hover {
  color: var(--text-primary);
  background: var(--surface-sunken);
  border-color: var(--border-strong);
}
.lb-ofs-arrow:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px color-mix(in oklch, var(--focus-ring) 22%, transparent);
}
</style>
