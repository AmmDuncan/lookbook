export interface MenuEntry {
  type?: 'item' | 'separator' | 'label'
  label?: string
  shortcut?: string
  destructive?: boolean
  disabled?: boolean
  onSelect?: () => void
}
