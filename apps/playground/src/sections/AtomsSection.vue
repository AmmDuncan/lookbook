<script setup lang="ts">
import {
  Avatar, Badge, Button, Card, CardBody, CardFooter, CardHeader,
  Checkbox, Input, Radio, Select, Skeleton, Spinner, Stepper, Switch, Textarea,
} from '@lookbook/ui-vue'
import { ref } from 'vue'

import ShowcaseSection from '../components/ShowcaseSection.vue'
import Specimen from '../components/Specimen.vue'

const variants = ['primary', 'secondary', 'ghost', 'destructive', 'link'] as const
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
const text = ref('Hello')
const checked = ref(true)
const picked = ref('a')
const on = ref(true)
const qty = ref(2)
</script>

<template>
  <ShowcaseSection
    id="buttons" eyebrow="Atoms" title="Buttons"
    description="One button primitive, five intents and five heights, all driven by tokens. Every state ships: default, disabled, loading, icon-only."
  >
    <Specimen label="Variants">
      <div class="sc-row"><Button v-for="v in variants" :key="v" :variant="v">{{ v }}</Button></div>
    </Specimen>
    <Specimen label="Sizes">
      <div class="sc-row"><Button v-for="s in sizes" :key="s" :size="s">{{ s }}</Button></div>
    </Specimen>
    <Specimen label="States">
      <div class="sc-row">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button variant="secondary" loading>Saving</Button>
        <Button icon-only aria-label="Add">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
        </Button>
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="inputs" eyebrow="Atoms" title="Inputs & controls"
    description="Text inputs at three heights aligned to the shared size scale, plus the full set of selection controls. Error, disabled, readonly and affix states are first-class."
  >
    <Specimen label="Text inputs">
      <div class="sc-grid">
        <div class="sc-field"><span class="sc-field-label">sm</span><Input v-model="text" size="sm" /></div>
        <div class="sc-field"><span class="sc-field-label">md</span><Input v-model="text" size="md" /></div>
        <div class="sc-field"><span class="sc-field-label">lg</span><Input v-model="text" size="lg" /></div>
        <div class="sc-field"><span class="sc-field-label">error</span><Input v-model="text" error /></div>
        <div class="sc-field"><span class="sc-field-label">disabled</span><Input model-value="x" disabled /></div>
        <div class="sc-field"><span class="sc-field-label">readonly</span><Input model-value="read only" readonly /></div>
        <div class="sc-field">
          <span class="sc-field-label">affix</span>
          <Input v-model="text" placeholder="Search">
            <template #leading>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </template>
          </Input>
        </div>
        <div class="sc-field"><span class="sc-field-label">select</span><Select v-model="picked" :options="[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }]" /></div>
        <div class="sc-field"><span class="sc-field-label">textarea</span><Textarea v-model="text" /></div>
      </div>
    </Specimen>
    <Specimen label="Toggles & steppers">
      <div class="sc-row">
        <label class="sc-row" style="gap: 8px"><Checkbox v-model="checked" /> Checkbox</label>
        <label class="sc-row" style="gap: 8px"><Radio v-model="picked" value="a" /> Radio A</label>
        <label class="sc-row" style="gap: 8px"><Radio v-model="picked" value="b" /> Radio B</label>
        <label class="sc-row" style="gap: 8px"><Switch v-model="on" /> Switch</label>
        <Stepper v-model="qty" :min="0" :max="9" />
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="badges" eyebrow="Atoms" title="Badges"
    description="Status and label chips in subtle and solid treatments, driven by the status token set — never raw Tailwind colours."
  >
    <Specimen label="Subtle + dot">
      <div class="sc-row">
        <Badge variant="neutral" dot>Neutral</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success" dot>Paid</Badge>
        <Badge variant="warning" dot>Pending</Badge>
        <Badge variant="danger" dot>Overdue</Badge>
        <Badge variant="info">Info</Badge>
      </div>
    </Specimen>
    <Specimen label="Solid + sizes">
      <div class="sc-row">
        <Badge variant="success" solid>Paid</Badge>
        <Badge variant="danger" solid>Failed</Badge>
        <Badge variant="accent" solid>New</Badge>
        <Badge variant="neutral" size="sm">sm</Badge>
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="avatars" eyebrow="Atoms" title="Avatars"
    description="Initial and image avatars across the size scale, with presence status and a graceful fallback when the image fails."
  >
    <Specimen>
      <div class="sc-row">
        <Avatar name="Ammiel Yawson" size="xs" />
        <Avatar name="Ammiel Yawson" size="sm" />
        <Avatar name="Ammiel Yawson" size="md" status="online" />
        <Avatar name="Jane Smith" size="lg" status="away" />
        <Avatar src="https://i.pravatar.cc/100?img=12" name="Photo" size="lg" />
        <Avatar src="broken-url.png" name="Fallback Test" size="lg" />
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="cards" eyebrow="Atoms" title="Cards"
    description="The surface primitive — plain, interactive, and composed with header/body/footer slots."
  >
    <Specimen>
      <div class="sc-grid">
        <Card><CardBody>Base card — plain surface.</CardBody></Card>
        <Card interactive><CardBody>Interactive card — hover to lift.</CardBody></Card>
        <Card>
          <CardHeader><strong>Header</strong><Badge variant="success" dot>Active</Badge></CardHeader>
          <CardBody>Body content sits between header and footer.</CardBody>
          <CardFooter><Button variant="ghost" size="sm">Cancel</Button><Button size="sm">Save</Button></CardFooter>
        </Card>
      </div>
    </Specimen>
  </ShowcaseSection>

  <ShowcaseSection
    id="feedback" eyebrow="Atoms" title="Loading & feedback"
    description="Spinners and skeletons for the moments between intent and content."
  >
    <Specimen label="Spinners">
      <div class="sc-row"><Spinner size="xs" /><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /><Spinner size="xl" /></div>
    </Specimen>
    <Specimen label="Skeletons">
      <div class="sc-stack" style="max-width: 320px">
        <Skeleton variant="heading" />
        <Skeleton variant="text" />
        <Skeleton variant="line" />
        <div class="sc-row"><Skeleton variant="avatar" /><Skeleton variant="button" /></div>
      </div>
    </Specimen>
  </ShowcaseSection>
</template>
