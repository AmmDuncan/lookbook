import { useDebounceFn } from '@vueuse/core'
import { computed, type ComputedRef, type MaybeRefOrGetter, ref, type Ref, toValue, watch } from 'vue'

export interface SearchOption {
  value: string | number
  label: string
  displayLabel?: string
  disabled?: boolean
  [key: string]: unknown
}

interface UseServerSearchOptions {
  /** Debounce before firing the fetcher (ms). */
  debounce?: number
  /** Fetch once on mount with an empty search. */
  immediate?: boolean
  /** Pre-known records (e.g. for edit flows) seeded into the label memory. */
  seed?: MaybeRefOrGetter<SearchOption[]>
}

/**
 * Server-side searchable options with the DVLA pattern baked in:
 * debounced search, a `loading` flag, and a **seen-map** so a selected item
 * still resolves to a label after it drops out of the current results batch.
 *
 * Wrap any async source: `useServerSearch((q) => api.list({ search: q }))`.
 * Pass the result to `<Combobox server-side :options :loading v-model:search-term>`.
 */
export function useServerSearch(
  fetcher: (search: string) => Promise<SearchOption[]>,
  options: UseServerSearchOptions = {},
) {
  const { debounce = 300, immediate = true, seed } = options

  const search = ref('')
  const isFetching = ref(false)
  const results = ref<SearchOption[]>([]) as Ref<SearchOption[]>
  const memory = ref(new Map<string, SearchOption>())

  function remember(opts: SearchOption[]) {
    for (const o of opts) memory.value.set(String(o.value), o)
  }

  let requestId = 0
  async function run(term: string) {
    const id = ++requestId
    isFetching.value = true
    try {
      const res = await fetcher(term)
      if (id !== requestId) return // a newer request superseded this one
      results.value = res
      remember(res)
    } finally {
      if (id === requestId) isFetching.value = false
    }
  }

  const debounced = useDebounceFn((term: string) => run(term), debounce)
  watch(search, (term) => debounced(term))
  if (seed) watch(() => toValue(seed), (s) => s && remember(s), { immediate: true })
  if (immediate) run('')

  /** Resolve a selected value's full record (label + extras) from memory. */
  function resolve(value: string | number | null | undefined): SearchOption | undefined {
    if (value == null) return undefined
    return memory.value.get(String(value))
  }

  /**
   * Options for a combobox: currently-selected items lead (resolved from
   * memory so they never blank out), then the rest of the batch, de-duped.
   * Accepts a single value ref or an array ref.
   */
  function optionsFor(
    selected: Ref<string | number | null> | Ref<(string | number)[]>,
  ): ComputedRef<SearchOption[]> {
    return computed(() => {
      const raw = selected.value
      const ids = (Array.isArray(raw) ? raw : raw == null ? [] : [raw]).map(String)
      const selectedSet = new Set(ids)
      const selectedFirst = ids
        .map((id) => memory.value.get(id))
        .filter((o): o is SearchOption => Boolean(o))
      const rest = results.value.filter((o) => !selectedSet.has(String(o.value)))
      return [...selectedFirst, ...rest]
    })
  }

  function reset() {
    search.value = ''
  }

  return { search, isFetching, results, optionsFor, resolve, reset }
}
