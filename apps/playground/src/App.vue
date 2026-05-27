<script setup lang="ts">
import {
  Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader,
  Checkbox, Input, Radio, Select, Skeleton, Spinner, Stepper, Switch, Textarea,
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
        <div class="pg-field"><span class="pg-label">select</span><Select v-model="picked"><option value="a">Option A</option><option value="b">Option B</option></Select></div>
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
  </div>
</template>
