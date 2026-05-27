<script setup lang="ts">
import { Button, Checkbox, Dialog, Drawer, Popover, useToast } from '@lookbook/ui-vue'
import { ref } from 'vue'

import ShowcaseSection from '../components/ShowcaseSection.vue'
import Specimen from '../components/Specimen.vue'

const drawerOpen = ref(false)
const drawerSide = ref<'right' | 'left'>('right')
const longDialogOpen = ref(false)
const stickyDialogOpen = ref(false)

const { success, error, warning, info } = useToast()
</script>

<template>
  <ShowcaseSection
    id="popover" eyebrow="Overlays" title="Popover"
    description="Rich, focus-trapped content anchored to a trigger, with configurable side/align and an optional arrow."
  >
    <Specimen>
      <Popover :arrow="true" side="bottom">
        <template #trigger><Button variant="secondary">Open popover</Button></template>
        <strong style="display: block; margin-bottom: 4px">Quick info</strong>
        <p style="margin: 0; color: var(--text-secondary); font-size: var(--text-body-sm-size)">Rich content in a positioned popover with an arrow.</p>
      </Popover>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="drawer" eyebrow="Overlays" title="Drawer"
    description="A side panel from the left or right — same header/body/footer anatomy as the dialog, anchored to an edge."
  >
    <Specimen>
      <div class="sc-row">
        <Button variant="secondary" @click="drawerSide = 'right'; drawerOpen = true">Drawer (right)</Button>
        <Button variant="secondary" @click="drawerSide = 'left'; drawerOpen = true">Drawer (left)</Button>
      </div>
      <Drawer v-model:open="drawerOpen" :side="drawerSide" title="Filters" description="Narrow the results">
        <div class="sc-stack" style="gap: 12px">
          <label class="sc-row" style="gap: 8px"><Checkbox /> Paid</label>
          <label class="sc-row" style="gap: 8px"><Checkbox /> Pending</label>
          <label class="sc-row" style="gap: 8px"><Checkbox /> Overdue</label>
        </div>
        <template #footer>
          <Button variant="ghost" size="sm" @click="drawerOpen = false">Clear</Button>
          <Button size="sm" @click="drawerOpen = false">Apply</Button>
        </template>
      </Drawer>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="toast" eyebrow="Overlays" title="Toast"
    description="Fire-and-forget notifications from anywhere via useToast(). Four intents, an optional action, and a sticky mode."
  >
    <Specimen>
      <div class="sc-row">
        <Button variant="secondary" size="sm" @click="success('Payment recorded', { message: 'Receipt is ready to print.' })">success</Button>
        <Button variant="secondary" size="sm" @click="error('Verification failed', { message: 'Check the licence number.' })">danger</Button>
        <Button variant="secondary" size="sm" @click="warning('Invoice expiring', { action: { label: 'Renew', onClick: () => {} } })">warning + action</Button>
        <Button variant="secondary" size="sm" @click="info('OTP sent', { duration: 0 })">info (sticky)</Button>
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="modals" eyebrow="Overlays" title="Scroll-aware modals"
    description="Header/footer separators are contextual — they appear only as content scrolls past the edge, so a body that fits reads as one clean card. stickyBorders forces them when the body has its own dividers."
  >
    <Specimen>
      <div class="sc-row">
        <Button variant="secondary" @click="longDialogOpen = true">Long modal (contextual borders)</Button>
        <Button variant="secondary" @click="stickyDialogOpen = true">Sticky borders (both)</Button>
      </div>
      <Dialog v-model="longDialogOpen" title="Terms of service" description="Scroll to see the header/footer hairlines appear">
        <p v-for="n in 12" :key="n" style="margin: 0 0 12px; color: var(--text-secondary)">
          Section {{ n }} — when the body overflows, a hairline fades in under the header (content above) and above the footer (content below). At the very top there's no header border; scrolled to the bottom there's no footer border.
        </p>
        <template #footer>
          <Button variant="ghost" size="sm" @click="longDialogOpen = false">Decline</Button>
          <Button size="sm" @click="longDialogOpen = false">Accept</Button>
        </template>
      </Dialog>
      <Dialog v-model="stickyDialogOpen" sticky-borders="both" title="Sectioned record" description="Borders forced on regardless of scroll">
        <p style="margin: 0; color: var(--text-secondary)">Short body, but the header and footer hairlines stay because <code>stickyBorders="both"</code> — use when the body has its own dividers.</p>
        <template #footer>
          <Button variant="ghost" size="sm" @click="stickyDialogOpen = false">Cancel</Button>
          <Button size="sm" @click="stickyDialogOpen = false">Save</Button>
        </template>
      </Dialog>
    </Specimen>
  </ShowcaseSection>
</template>
