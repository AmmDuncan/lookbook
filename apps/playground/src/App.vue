<script setup lang="ts">
import {
  Accordion, Alert, Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader,
  Checkbox, Combobox, Dialog, Drawer, DropdownMenu, Field, Input, MultiCombobox,
  OverflowScroll, Popover, Radio, Select, Skeleton, Spinner, Stepper, Switch,
  Tabs, Textarea, Toaster, Tooltip, useServerSearch, useToast,
} from '@lookbook/ui-vue'
// Brand skin loaded as raw CSS so we can toggle it to prove the re-skin contract.
import dvlaSkin from '@lookbook/tokens/skins/dvla-self-service.css?raw'
import { ref, watchEffect } from 'vue'

const dark = ref(false)
const dvla = ref(false)
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', dark.value ? 'dark' : 'light')
})
watchEffect(() => {
  const id = 'dvla-skin'
  let el = document.getElementById(id) as HTMLStyleElement | null
  if (dvla.value) {
    if (!el) { el = document.createElement('style'); el.id = id; document.head.appendChild(el) }
    el.textContent = dvlaSkin
  } else if (el) {
    el.remove()
  }
})

const variants = ['primary', 'secondary', 'ghost', 'destructive', 'link'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const text = ref('Hello')
const checked = ref(true)
const picked = ref('a')
const on = ref(true)
const qty = ref(2)
const tab = ref('phone')
const dialogOpen = ref(false)
const menuItems = [
  { label: 'Edit' },
  { label: 'Duplicate', shortcut: '⌘D' },
  { type: 'separator' as const },
  { label: 'Delete', destructive: true },
]

// Combobox — client-side (small bounded list)
const region = ref('')
const regions = [
  { value: 'ga', label: 'Greater Accra' }, { value: 'as', label: 'Ashanti' },
  { value: 'we', label: 'Western' }, { value: 'ea', label: 'Eastern' },
  { value: 'ce', label: 'Central' }, { value: 'vo', label: 'Volta' },
  { value: 'no', label: 'Northern' }, { value: 'up', label: 'Upper East' },
]

// Combobox — server-side (mock debounced API over a long list)
const officerId = ref<string | number | null>(null)
const ALL = Array.from({ length: 240 }, (_, i) => ({
  value: `u${i}`,
  label: `Officer ${String(i + 1).padStart(3, '0')} · ${['Accra', 'Kumasi', 'Tamale', 'Takoradi'][i % 4]}`,
}))
const mockApi = (q: string) =>
  new Promise<typeof ALL>((res) => {
    setTimeout(() => {
      const needle = q.trim().toLowerCase()
      res((needle ? ALL.filter((o) => o.label.toLowerCase().includes(needle)) : ALL).slice(0, 25))
    }, 450) // simulate network — proves debounce + loading
  })
const officerSearch = useServerSearch(mockApi)
const officerOptions = officerSearch.optionsFor(officerId)

// MultiCombobox — client-side multi-select over the regions list
const pickedRegions = ref<(string | number)[]>(['ga', 'as'])

// Popover + Drawer open state
const drawerOpen = ref(false)
const drawerSide = ref<'right' | 'left'>('right')

// Scroll-aware modal borders
const longDialogOpen = ref(false)
const stickyDialogOpen = ref(false)

// Field demo
const licence = ref('')

// Toasts
const { success, error, warning, info } = useToast()

// Accordion
const faq = ref('a')
const faqItems = [
  { value: 'a', title: 'How do I record a walk-in payment?', content: 'Open the service, choose the fee, then record payment from the invoice.' },
  { value: 'b', title: 'Can I bill a co-owner?', content: 'Yes — pick the billing party on the service before generating the invoice.' },
  { value: 'c', title: 'What if the licence has expired?', content: 'You will be prompted to run the renewal flow before proceeding.' },
]
</script>

<template>
  <div class="pg-wrap">
    <div class="pg-bar">
      <strong style="font-family: var(--font-display)">Lookbook · ui-vue</strong>
      <button class="pg-toggle" :class="{ 'is-on': dark }" @click="dark = !dark">{{ dark ? 'Dark' : 'Light' }}</button>
      <button class="pg-toggle" :class="{ 'is-on': dvla }" @click="dvla = !dvla">{{ dvla ? 'DVLA skin' : 'Default skin' }}</button>
    </div>

    <section class="pg-section">
      <h2>Buttons</h2>
      <p>Variants · sizes · states (default / disabled / loading) · icon-only</p>
      <div class="pg-row">
        <Button v-for="v in variants" :key="v" :variant="v">{{ v }}</Button>
      </div>
      <div class="pg-row">
        <Button v-for="s in sizes" :key="s" :size="s">{{ s }}</Button>
      </div>
      <div class="pg-row">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button variant="secondary" loading>Saving</Button>
        <Button icon-only aria-label="Add">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
        </Button>
      </div>
    </section>

    <section class="pg-section">
      <h2>Inputs &amp; controls</h2>
      <p>Sizes · error · disabled · readonly · affix · textarea · select · checkbox / radio / switch / stepper</p>
      <div class="pg-grid">
        <div class="pg-field"><span class="pg-label">sm</span><Input v-model="text" size="sm" /></div>
        <div class="pg-field"><span class="pg-label">md</span><Input v-model="text" size="md" /></div>
        <div class="pg-field"><span class="pg-label">lg</span><Input v-model="text" size="lg" /></div>
        <div class="pg-field"><span class="pg-label">error</span><Input v-model="text" error /></div>
        <div class="pg-field"><span class="pg-label">disabled</span><Input model-value="x" disabled /></div>
        <div class="pg-field"><span class="pg-label">readonly</span><Input model-value="read only" readonly /></div>
        <div class="pg-field">
          <span class="pg-label">affix</span>
          <Input v-model="text" placeholder="Search">
            <template #leading>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </template>
          </Input>
        </div>
        <div class="pg-field"><span class="pg-label">select</span><Select v-model="picked" :options="[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }]" /></div>
        <div class="pg-field"><span class="pg-label">textarea</span><Textarea v-model="text" /></div>
      </div>
      <div class="pg-row" style="margin-top: 16px">
        <label class="pg-row" style="gap: 8px"><Checkbox v-model="checked" /> Checkbox</label>
        <label class="pg-row" style="gap: 8px"><Radio v-model="picked" value="a" /> Radio A</label>
        <label class="pg-row" style="gap: 8px"><Radio v-model="picked" value="b" /> Radio B</label>
        <label class="pg-row" style="gap: 8px"><Switch v-model="on" /> Switch</label>
        <Stepper v-model="qty" :min="0" :max="9" />
      </div>
    </section>

    <section class="pg-section">
      <h2>Badges</h2>
      <p>Subtle + solid · with dot · sizes</p>
      <div class="pg-row">
        <Badge variant="neutral" dot>Neutral</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success" dot>Paid</Badge>
        <Badge variant="warning" dot>Pending</Badge>
        <Badge variant="danger" dot>Overdue</Badge>
        <Badge variant="info">Info</Badge>
      </div>
      <div class="pg-row">
        <Badge variant="success" solid>Paid</Badge>
        <Badge variant="danger" solid>Failed</Badge>
        <Badge variant="accent" solid>New</Badge>
        <Badge variant="neutral" size="sm">sm</Badge>
      </div>
    </section>

    <section class="pg-section">
      <h2>Avatars</h2>
      <div class="pg-row">
        <Avatar name="Ammiel Yawson" size="xs" />
        <Avatar name="Ammiel Yawson" size="sm" />
        <Avatar name="Ammiel Yawson" size="md" status="online" />
        <Avatar name="Jane Smith" size="lg" status="away" />
        <Avatar src="https://i.pravatar.cc/100?img=12" name="Photo" size="lg" />
        <Avatar src="broken-url.png" name="Fallback Test" size="lg" />
      </div>
    </section>

    <section class="pg-section">
      <h2>Cards</h2>
      <div class="pg-grid">
        <Card><CardBody>Base card — plain surface.</CardBody></Card>
        <Card interactive><CardBody>Interactive card — hover to lift.</CardBody></Card>
        <Card>
          <CardHeader><strong>Header</strong><Badge variant="success" dot>Active</Badge></CardHeader>
          <CardBody>Body content sits between header and footer.</CardBody>
          <CardFooter><Button variant="ghost" size="sm">Cancel</Button><Button size="sm">Save</Button></CardFooter>
        </Card>
      </div>
    </section>

    <section class="pg-section">
      <h2>Molecules</h2>
      <p>Tabs (Reka) · Alert · Tooltip · Dialog · Dropdown — behavior from Reka, styled to spec</p>
      <div class="pg-row">
        <Tabs v-model="tab" :items="[{ value: 'phone', label: 'Phone' }, { value: 'email', label: 'Email' }, { value: 'gov', label: 'Gov ID', disabled: true }]" />
        <Tabs v-model="tab" variant="underline" :items="[{ value: 'phone', label: 'Summary' }, { value: 'email', label: 'Payment' }]" />
      </div>
      <div class="pg-row" style="flex-direction: column; align-items: stretch; max-width: 520px">
        <Alert variant="success" title="Payment recorded" dismissible>The receipt is ready to print.</Alert>
        <Alert variant="warning" title="Invoice expiring soon">Regenerate before it lapses.</Alert>
        <Alert variant="danger" title="Verification failed">Check the licence number and retry.</Alert>
        <Alert variant="info">An OTP will be sent to your registered number.</Alert>
      </div>
      <div class="pg-row">
        <Tooltip text="Tooltip via Reka — positioned + accessible" side="top">
          <Button variant="secondary">Hover for tooltip</Button>
        </Tooltip>
        <DropdownMenu :items="menuItems">
          <Button variant="secondary">Actions ▾</Button>
        </DropdownMenu>
        <Button @click="dialogOpen = true">Open dialog</Button>
        <Dialog v-model:open="dialogOpen" title="Generate invoice?" description="This creates an invoice for the selected service.">
          <p style="margin: 0; color: var(--text-secondary)">The customer will be billed the listed amount. You can record payment afterward.</p>
          <template #footer>
            <Button variant="ghost" size="sm" @click="dialogOpen = false">Cancel</Button>
            <Button size="sm" @click="dialogOpen = false">Generate</Button>
          </template>
        </Dialog>
      </div>
    </section>

    <section class="pg-section">
      <h2>Combobox &amp; OverflowScroll</h2>
      <p>Long list → Combobox (focus clears search, full list shows) · server search (debounced + loading + seen-map) · scroll-arrow overflow</p>
      <div class="pg-grid">
        <div class="pg-field">
          <span class="pg-label">client</span>
          <Combobox v-model="region" :options="regions" placeholder="Find a region…" />
        </div>
        <div class="pg-field">
          <span class="pg-label">server</span>
          <Combobox
            v-model="officerId"
            v-model:search-term="officerSearch.search.value"
            :options="officerOptions"
            :loading="officerSearch.isFetching.value"
            server-side
            placeholder="Search 240 officers…"
          />
        </div>
      </div>

      <p style="margin-top: 24px">Horizontal overflow — hold the arrows to scroll:</p>
      <OverflowScroll edge-indicator="fade">
        <div style="display: flex; gap: 12px; padding: 4px">
          <Card v-for="n in 14" :key="n" style="min-width: 180px"><CardBody>Service tile #{{ n }}</CardBody></Card>
        </div>
      </OverflowScroll>

      <p style="margin-top: 24px">Vertical overflow (max-height) — arrows on the right edge:</p>
      <Card style="max-width: 360px">
        <OverflowScroll direction="vertical" max-height="180px" edge-indicator="fade">
          <ol style="margin: 0; padding: 8px 16px; list-style: none">
            <li v-for="n in 16" :key="n" style="padding: 8px 0; border-bottom: 1px solid var(--border)">Branch {{ n }} — Accra Region</li>
          </ol>
        </OverflowScroll>
      </Card>
    </section>

    <section class="pg-section">
      <h2>Feedback</h2>
      <p>Spinners · skeletons</p>
      <div class="pg-row">
        <Spinner size="xs" /><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /><Spinner size="xl" />
      </div>
      <div class="pg-row" style="flex-direction: column; align-items: stretch; max-width: 320px">
        <Skeleton variant="heading" />
        <Skeleton variant="text" />
        <Skeleton variant="line" />
        <div class="pg-row"><Skeleton variant="avatar" /><Skeleton variant="button" /></div>
      </div>
    </section>

    <section class="pg-section">
      <h2>Batch 2 molecules</h2>
      <p>Field wrapper · MultiCombobox · Popover · Drawer · Accordion · Toast — behavior from Reka, styled to spec</p>

      <div class="pg-grid">
        <Field label="Licence number" required helper="Format: GR-1234-23" #default="{ id, describedby, invalid }">
          <Input :id="id" v-model="licence" :aria-describedby="describedby" :error="invalid" placeholder="GR-…" />
        </Field>
        <Field label="Email" error="That address is already registered." #default="{ id, describedby, invalid }">
          <Input :id="id" model-value="taken@dvla.gov" :aria-describedby="describedby" :error="invalid" />
        </Field>
        <Field label="Phone" success="Verified." #default="{ id, describedby }">
          <Input :id="id" model-value="024 000 0000" :aria-describedby="describedby" />
        </Field>
        <div class="pg-field">
          <span class="pg-label">multi-select</span>
          <MultiCombobox v-model="pickedRegions" :options="regions" placeholder="Add regions…" />
        </div>
      </div>

      <div class="pg-row" style="margin-top: 16px">
        <Popover :arrow="true" side="bottom">
          <template #trigger><Button variant="secondary">Open popover</Button></template>
          <strong style="display: block; margin-bottom: 4px">Quick info</strong>
          <p style="margin: 0; color: var(--text-secondary); font-size: var(--text-body-sm-size)">Rich content in a positioned, focus-trapped popover with an arrow.</p>
        </Popover>

        <Button variant="secondary" @click="drawerSide = 'right'; drawerOpen = true">Drawer (right)</Button>
        <Button variant="secondary" @click="drawerSide = 'left'; drawerOpen = true">Drawer (left)</Button>
        <Drawer v-model:open="drawerOpen" :side="drawerSide" title="Filters" description="Narrow the results">
          <div class="pg-row" style="flex-direction: column; align-items: stretch; gap: 12px">
            <label class="pg-row" style="gap: 8px"><Checkbox /> Paid</label>
            <label class="pg-row" style="gap: 8px"><Checkbox /> Pending</label>
            <label class="pg-row" style="gap: 8px"><Checkbox /> Overdue</label>
          </div>
          <template #footer>
            <Button variant="ghost" size="sm" @click="drawerOpen = false">Clear</Button>
            <Button size="sm" @click="drawerOpen = false">Apply</Button>
          </template>
        </Drawer>
      </div>

      <div class="pg-row" style="margin-top: 16px">
        <Button variant="secondary" size="sm" @click="success('Payment recorded', { message: 'Receipt is ready to print.' })">Toast: success</Button>
        <Button variant="secondary" size="sm" @click="error('Verification failed', { message: 'Check the licence number.' })">danger</Button>
        <Button variant="secondary" size="sm" @click="warning('Invoice expiring', { action: { label: 'Renew', onClick: () => {} } })">warning + action</Button>
        <Button variant="secondary" size="sm" @click="info('OTP sent', { duration: 0 })">info (sticky)</Button>
      </div>

      <p style="margin-top: 24px">Scroll-aware modal separators — borders appear only as content scrolls past the edge; <code>stickyBorders</code> forces them:</p>
      <div class="pg-row">
        <Button variant="secondary" @click="longDialogOpen = true">Long modal (contextual borders)</Button>
        <Dialog v-model="longDialogOpen" title="Terms of service" description="Scroll to see the header/footer hairlines appear">
          <p v-for="n in 12" :key="n" style="margin: 0 0 12px; color: var(--text-secondary)">
            Section {{ n }} — when the body overflows, a hairline fades in under the header (content above) and above the footer (content below). At the very top there's no header border; scrolled to the bottom there's no footer border. A short body shows neither.
          </p>
          <template #footer>
            <Button variant="ghost" size="sm" @click="longDialogOpen = false">Decline</Button>
            <Button size="sm" @click="longDialogOpen = false">Accept</Button>
          </template>
        </Dialog>

        <Button variant="secondary" @click="stickyDialogOpen = true">Sticky borders (both)</Button>
        <Dialog v-model="stickyDialogOpen" sticky-borders="both" title="Sectioned record" description="Borders forced on regardless of scroll">
          <p style="margin: 0; color: var(--text-secondary)">Short body, but the header and footer hairlines stay because <code>stickyBorders="both"</code> — use when the body has its own dividers that would float against a borderless header.</p>
          <template #footer>
            <Button variant="ghost" size="sm" @click="stickyDialogOpen = false">Cancel</Button>
            <Button size="sm" @click="stickyDialogOpen = false">Save</Button>
          </template>
        </Dialog>
      </div>

      <p style="margin-top: 24px">Accordion (single, collapsible):</p>
      <div style="max-width: 520px">
        <Accordion v-model="faq" :items="faqItems" />
      </div>
    </section>

    <Toaster position="br" />
  </div>
</template>
