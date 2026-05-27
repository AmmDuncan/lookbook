import { ref } from 'vue'

export type ToastVariant = 'success' | 'danger' | 'warning' | 'info'

export interface ToastAction {
  label: string
  onClick: () => void
}

export interface ToastItem {
  id: number
  variant: ToastVariant
  title: string
  message?: string
  /** Auto-dismiss after this many ms; 0 keeps it until dismissed. */
  duration: number
  action?: ToastAction
}

export type ToastOptions = Partial<Omit<ToastItem, 'id' | 'variant'>>

// Module-level singleton store — one queue shared across the app, rendered by
// a single <Toaster> mounted near the root.
const toasts = ref<ToastItem[]>([])
let counter = 0

function push(variant: ToastVariant, title: string, options: ToastOptions = {}): number {
  const id = ++counter
  toasts.value.push({ id, variant, title, duration: 5000, ...options })
  return id
}

function dismiss(id: number) {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

/**
 * Fire toasts from anywhere: `const { success } = useToast(); success('Saved')`.
 * Requires a single `<Toaster />` mounted once near the app root.
 */
export function useToast() {
  return {
    toasts,
    dismiss,
    success: (title: string, options?: ToastOptions) => push('success', title, options),
    error: (title: string, options?: ToastOptions) => push('danger', title, options),
    warning: (title: string, options?: ToastOptions) => push('warning', title, options),
    info: (title: string, options?: ToastOptions) => push('info', title, options),
  }
}
