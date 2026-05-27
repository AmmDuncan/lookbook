<script setup lang="ts">
import { Field, Input } from '@lookbook/ui-vue'
import { ref } from 'vue'

import ShowcaseSection from '../components/ShowcaseSection.vue'
import Specimen from '../components/Specimen.vue'

const licence = ref('')
</script>

<template>
  <ShowcaseSection
    id="fields" eyebrow="Forms" title="Field"
    description="The form-field wrapper: label, helper, error and success messages with the aria plumbing wired through slot props — bind id / describedby / invalid onto any control."
  >
    <Specimen>
      <div class="sc-grid">
        <Field label="Licence number" required helper="Format: GR-1234-23" #default="{ id, describedby, invalid }">
          <Input :id="id" v-model="licence" :aria-describedby="describedby" :error="invalid" placeholder="GR-…" />
        </Field>
        <Field label="Email" error="That address is already registered." #default="{ id, describedby, invalid }">
          <Input :id="id" model-value="taken@dvla.gov" :aria-describedby="describedby" :error="invalid" />
        </Field>
        <Field label="Phone" success="Verified." #default="{ id, describedby }">
          <Input :id="id" model-value="024 000 0000" :aria-describedby="describedby" />
        </Field>
      </div>
    </Specimen>
  </ShowcaseSection>
</template>
