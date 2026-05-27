/**
 * @lookbook/ui-vue — Vue 3 primitives implementing the Lookbook spec.
 *
 * Styling lives in the spec stylesheet — consumers import it once:
 *   import "@lookbook/tokens/tokens.css";   // the contract
 *   import "@lookbook/ui-vue/styles.css";    // the component layer
 *
 * Simple atoms are styled native elements; interactive molecules
 * (Tabs, Tooltip, Dialog, …) wrap Reka UI for behavior + a11y.
 */

// Atoms
export { default as Button } from './components/Button.vue'
export { default as Input } from './components/Input.vue'
export { default as Textarea } from './components/Textarea.vue'
export { default as Select } from './components/Select.vue'
export { default as Checkbox } from './components/Checkbox.vue'
export { default as Radio } from './components/Radio.vue'
export { default as Switch } from './components/Switch.vue'
export { default as Stepper } from './components/Stepper.vue'
export { default as Badge } from './components/Badge.vue'
export { default as Avatar } from './components/Avatar.vue'
export { default as Card } from './components/Card.vue'
export { default as CardHeader } from './components/CardHeader.vue'
export { default as CardBody } from './components/CardBody.vue'
export { default as CardFooter } from './components/CardFooter.vue'
export { default as Spinner } from './components/Spinner.vue'
export { default as Skeleton } from './components/Skeleton.vue'

// Molecules
export { default as Alert } from './components/Alert.vue'
export { default as Tabs } from './components/Tabs.vue'
export { default as Tooltip } from './components/Tooltip.vue'
export { default as Dialog } from './components/Dialog.vue'
export { default as DropdownMenu } from './components/DropdownMenu.vue'
export type { MenuEntry } from './types'
export { default as Combobox } from './components/Combobox.vue'
export { default as MultiCombobox } from './components/MultiCombobox.vue'
export { default as OverflowScroll } from './components/OverflowScroll.vue'
export { default as Popover } from './components/Popover.vue'
export { default as Drawer } from './components/Drawer.vue'
export { default as Accordion } from './components/Accordion.vue'
export type { AccordionEntry } from './components/Accordion.vue'
export { default as Field } from './components/Field.vue'
export { default as Toaster } from './components/Toaster.vue'

// Composables
export { useServerSearch } from './composables/useServerSearch'
export type { SearchOption } from './composables/useServerSearch'
export { useHoldRepeat } from './composables/useHoldRepeat'
export { useToast } from './composables/useToast'
export type { ToastItem, ToastVariant, ToastOptions, ToastAction } from './composables/useToast'
