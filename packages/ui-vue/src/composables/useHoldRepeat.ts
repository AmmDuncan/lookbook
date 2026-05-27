import { onScopeDispose } from 'vue'

interface HoldRepeatOptions {
  /** Stop repeating when this returns false (e.g. nothing left to scroll). */
  canContinue?: () => boolean
  /** Delay before the first repeat after the initial fire (ms). */
  initialDelay?: number
  /** Interval between repeats (ms). */
  repeatInterval?: number
}

/**
 * Press-and-hold to repeat an action. Fires once immediately on pointerdown,
 * then after `initialDelay` repeats every `repeatInterval` until release or
 * `canContinue()` is false. Returns pointer handlers ready to `v-bind`.
 */
export function useHoldRepeat(action: () => void, options: HoldRepeatOptions = {}) {
  const { canContinue = () => true, initialDelay = 400, repeatInterval = 400 } = options
  let initialTimer: ReturnType<typeof setTimeout> | null = null
  let repeatTimer: ReturnType<typeof setInterval> | null = null

  function stop() {
    if (initialTimer) { clearTimeout(initialTimer); initialTimer = null }
    if (repeatTimer) { clearInterval(repeatTimer); repeatTimer = null }
  }

  function tick() {
    if (!canContinue()) { stop(); return }
    action()
  }

  function onPointerdown(e: PointerEvent) {
    if (e.button !== 0) return
    ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
    action()
    initialTimer = setTimeout(() => {
      repeatTimer = setInterval(tick, repeatInterval)
    }, initialDelay)
  }

  onScopeDispose(stop)

  return { onPointerdown, onPointerup: stop, onPointerleave: stop, onPointercancel: stop }
}
