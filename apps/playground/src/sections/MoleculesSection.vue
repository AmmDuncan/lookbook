<script setup lang="ts">
import {
  Accordion, Alert, Button, Dialog, DropdownMenu, Tabs, Tooltip,
} from '@lookbook/ui-vue'
import { ref } from 'vue'

import ShowcaseSection from '../components/ShowcaseSection.vue'
import Specimen from '../components/Specimen.vue'

const tab = ref('phone')
const dialogOpen = ref(false)
const menuItems = [
  { label: 'Edit' },
  { label: 'Duplicate', shortcut: '⌘D' },
  { type: 'separator' as const },
  { label: 'Delete', destructive: true },
]

const faq = ref('a')
const faqItems = [
  { value: 'a', title: 'How do I record a walk-in payment?', content: 'Open the service, choose the fee, then record payment from the invoice.' },
  { value: 'b', title: 'Can I bill a co-owner?', content: 'Yes — pick the billing party on the service before generating the invoice.' },
  { value: 'c', title: 'What if the licence has expired?', content: 'You will be prompted to run the renewal flow before proceeding.' },
]
</script>

<template>
  <ShowcaseSection
    id="tabs" eyebrow="Molecules" title="Tabs"
    description="Reka-backed tabs in pill and underline treatments — keyboard-navigable, with a disabled state."
  >
    <Specimen label="Pill">
      <Tabs v-model="tab" :items="[{ value: 'phone', label: 'Phone' }, { value: 'email', label: 'Email' }, { value: 'gov', label: 'Gov ID', disabled: true }]" />
    </Specimen>
    <Specimen label="Underline">
      <Tabs v-model="tab" variant="underline" :items="[{ value: 'phone', label: 'Summary' }, { value: 'email', label: 'Payment' }]" />
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="alerts" eyebrow="Molecules" title="Inline alerts"
    description="In-context banners across the four status intents, with optional dismiss and action slots."
  >
    <Specimen>
      <div class="sc-stack" style="max-width: 560px">
        <Alert variant="success" title="Payment recorded" dismissible>The receipt is ready to print.</Alert>
        <Alert variant="warning" title="Invoice expiring soon">Regenerate before it lapses.</Alert>
        <Alert variant="danger" title="Verification failed">Check the licence number and retry.</Alert>
        <Alert variant="info">An OTP will be sent to your registered number.</Alert>
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="menus" eyebrow="Molecules" title="Menus & overlays"
    description="Positioned, focus-managed overlays — tooltip, dropdown menu, and modal dialog — all portaled and accessible via Reka."
  >
    <Specimen>
      <div class="sc-row">
        <Tooltip text="Tooltip via Reka — positioned + accessible" side="top">
          <Button variant="secondary">Hover for tooltip</Button>
        </Tooltip>
        <DropdownMenu :items="menuItems">
          <Button variant="secondary">Actions ▾</Button>
        </DropdownMenu>
        <Button @click="dialogOpen = true">Open dialog</Button>
        <Dialog v-model="dialogOpen" title="Generate invoice?" description="This creates an invoice for the selected service.">
          <p style="margin: 0; color: var(--text-secondary)">The customer will be billed the listed amount. You can record payment afterward.</p>
          <template #footer>
            <Button variant="ghost" size="sm" @click="dialogOpen = false">Cancel</Button>
            <Button size="sm" @click="dialogOpen = false">Generate</Button>
          </template>
        </Dialog>
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="accordion" eyebrow="Molecules" title="Accordion"
    description="Disclosure groups with single or multiple open panels, collapsible, with animated height and a reduced-motion fallback."
  >
    <Specimen>
      <div style="max-width: 560px"><Accordion v-model="faq" :items="faqItems" /></div>
    </Specimen>
  </ShowcaseSection>
</template>
