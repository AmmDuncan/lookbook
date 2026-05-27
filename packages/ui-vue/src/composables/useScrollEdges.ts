import { nextTick, onBeforeUnmount, ref, watch, type Ref } from 'vue'

export interface ScrollEdges {
  /** Content is hidden above the scroll viewport (user has scrolled down). */
  canScrollUp: Ref<boolean>
  /** Content is hidden below the scroll viewport (more to scroll to). */
  canScrollDown: Ref<boolean>
  /** Recompute now — wire to the scroll container's `@scroll.passive`. */
  update: () => void
}

/**
 * Track whether a scroll container has content clipped past its top/bottom
 * edges. Drives scroll-aware chrome (e.g. a header hairline that only appears
 * once content scrolls under it). Observes both the viewport and its content
 * so the state stays correct as the body grows/shrinks.
 *
 * `active` gates the observer — pass the overlay's open state so a portaled
 * Dialog/Drawer measures only once its refs resolve, and tears down on close.
 */
export function useScrollEdges(
  scrollEl: Ref<HTMLElement | null>,
  contentEl: Ref<HTMLElement | null>,
  active: Ref<boolean>,
): ScrollEdges {
  const canScrollUp = ref(false)
  const canScrollDown = ref(false)
  let observer: ResizeObserver | null = null

  function update() {
    const el = scrollEl.value
    if (!el) {
      return
    }
    canScrollUp.value = el.scrollTop > 0
    canScrollDown.value = el.scrollHeight - el.scrollTop - el.clientHeight > 1
  }

  function teardown() {
    observer?.disconnect()
    observer = null
  }

  watch(
    active,
    (isActive) => {
      if (!isActive) {
        teardown()
        canScrollUp.value = false
        canScrollDown.value = false
        return
      }
      // Portaled overlays resolve their refs a tick after opening.
      nextTick(() => {
        update()
        if (!scrollEl.value || !contentEl.value) {
          return
        }
        teardown()
        observer = new ResizeObserver(update)
        observer.observe(scrollEl.value)
        observer.observe(contentEl.value)
      })
    },
    { immediate: true },
  )

  onBeforeUnmount(teardown)

  return { canScrollUp, canScrollDown, update }
}
