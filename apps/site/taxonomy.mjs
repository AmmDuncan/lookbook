// Which artefacts belong to which surface, and how much each layer is trusted.
//
// A surface is a thing you sit down to design — a list page, an auth screen, a
// dashboard. Every specimen, pattern doc, cookbook, reproduction, gallery
// chapter and kit file is claimed by at least one surface; the build fails if
// anything is left unclaimed, so adding a file forces a decision here.
//
// Keys are basenames within each source dir (see SOURCES in build.mjs).
// An artefact may appear under several surfaces — relationships are not a tree.

/**
 * The layers are NOT peers. Per SKILL.md: the variation specimens are what you
 * GENERATE from, cookbooks are earned against a real screen, and `patterns/` +
 * `kits/` are "untrusted reference until re-earned through the reproduction
 * gate". Kit files carry a per-file verdict from `kits/COVERAGE.md`, which the
 * build parses rather than duplicating here.
 */
export const TIERS = {
  source: { label: 'Pull from', note: 'The variation layer — what you generate a screen from.' },
  earned: { label: 'Earned', note: 'Proven by reproducing a real screen, not self-graded.' },
  reference: {
    label: 'Untrusted reference',
    note: 'Self-graded, never re-earned through the reproduction gate. Read it, do not trust it.',
  },
  superseded: {
    label: 'Superseded',
    note: 'A cookbook now covers this surface and was earned against reality. Use that instead.',
  },
};

/** Default tier per artefact kind; `kits` is overridden per file from COVERAGE.md. */
export const KIND_TIERS = {
  specimens: 'source',
  gallery: 'source',
  reproductions: 'earned',
  registers: 'earned',
  cookbooks: 'earned',
  patterns: 'reference',
  kits: 'reference',
};

/**
 * The spine: system-wide docs that outrank everything per-surface.
 * Grouped by the job they do, in the order SKILL.md puts them.
 */
export const SPINE = [
  {
    id: 'pull',
    name: 'Pull from',
    blurb:
      'Where a screen starts. Open a specimen and pull its composition — never cold-derive a layout from principles when a specimen exists.',
    docs: ['harvest/HARVEST.md', 'RESKIN.md'],
  },
  {
    id: 'judge',
    name: 'Judge against',
    blurb:
      'The floor you measure the result against — cited by ID. Not the source you generate from; deriving from these instead of pulling is the #1 misfire.',
    docs: ['fundamentals.md', 'the-design-brain.md', 'anti-patterns.md', 'archetype-completeness.md'],
  },
  {
    id: 'verify',
    name: 'Verify & gate',
    blurb: 'The depth floor, the runnable pass, the receipt, and the reproduction gate that re-earns an untrusted layer.',
    docs: ['depth-rubric.md', 'verification.md', 'CHECKLIST.md', 'EXPERIMENT.md'],
  },
  {
    id: 'about',
    name: 'About the system',
    blurb: 'What Lookbook is, how the layers rank, what has been built, and the per-project personality file.',
    docs: ['SKILL.md', 'AGENTS.md', 'README.md', 'STATUS.md', 'KIT.md', 'personality.template.md'],
  },
];

/** Root docs deliberately not published, with the reason. Keeps drops visible. */
export const EXCLUDED = {
  'PRODUCT.md': 'A parked product idea, not design guidance.',
  'BRIDGE-self-service.md': 'Analysis of one downstream project, not part of the system.',
  'PERSONA-skill-design-advisor.md': 'A lens for authoring skills, unrelated to designing UI.',
};

export const SURFACES = [
  {
    id: 'list',
    name: 'List & table',
    blurb:
      'The workhorse collection surface: scan, filter, act. Toolbar anatomy, row affordances, bulk selection, pagination.',
    patterns: ['list.md'],
    cookbooks: ['data-table.md', 'dense-data-list.md'],
    specimens: [
      'Composed Recipe - List Index View.html',
      'Composed Recipe - Card Gallery Grid.html',
      'Filter Placement Studies.html',
      'Pagination & Load-More Studies.html',
      'Per-Row Action Affordance Studies.html',
      'Bulk-Select Action Bar Studies.html',
      'View-Mode & Density Studies.html',
      'Master-Detail Reveal Studies.html',
    ],
    reproductions: ['linear-issue-list.html', 'deel-table.html'],
    kits: ['cool-technical/recipe-table.html', 'cool-technical/atom-table-row.html'],
  },
  {
    id: 'dashboard',
    name: 'Dashboard & analytics',
    blurb:
      'Monitoring aggregates rather than records. KPI tiles, chart choice, widget grids, and the ops-console density band.',
    patterns: ['dashboard.md'],
    cookbooks: ['dashboard-kpi.md', 'charts.md', 'ops-console.md'],
    specimens: [
      'Composed Recipe - Dashboard Home.html',
      'Composed Recipe - Analytics Overview.html',
      'Dashboard Shell & Widget Studies.html',
      'Data Display Gallery.html',
    ],
    gallery: ['DataViz.html'],
    reproductions: ['whop-dashboard.html', 'causal-chart.html', 'ops-console.html'],
    kits: [
      'cool-technical/organism-revenue-overview.html',
      'cool-technical/organism-infra-monitoring.html',
      'cool-technical/organism-ops-console.html',
      'cool-technical/atom-chart.html',
    ],
  },
  {
    id: 'form',
    name: 'Forms & input',
    blurb:
      'Create and edit. Field anatomy, validation and error copy, commit placement, and multi-step progress.',
    patterns: ['form.md'],
    cookbooks: ['forms.md', 'modal-and-repeater.md'],
    specimens: [
      'Composed Recipe - Create Edit Form Flow.html',
      'Input Pattern Variations.html',
      'Stepper & Progress Orientation Studies.html',
      'Action & Commit Placement Studies.html',
    ],
    reproductions: ['forms.html'],
    kits: ['cool-technical/recipe-form.html', 'cool-technical/atom-field.html'],
  },
  {
    id: 'auth',
    name: 'Auth & onboarding',
    blurb:
      'Sign-in, sign-up, recovery, first-run. Internal/back-office auth is its own genre — audit register, no marketing panel.',
    patterns: ['auth.md'],
    cookbooks: [],
    specimens: [
      'Auth Screens.html',
      'Authentication Flow Studies.html',
      'Internal Auth Studies.html',
      'Composed Recipe - Auth Onboarding.html',
    ],
    gallery: ['Auth.html'],
  },
  {
    id: 'detail',
    name: 'Detail & record',
    blurb:
      'One record, deep. Header identity, the facts rail, the activity spine, and where actions commit.',
    patterns: ['detail.md'],
    cookbooks: ['details-rail.md'],
    specimens: [
      'Composed Recipe - Detail Record Page.html',
      'Case Review & Action-Center Studies.html',
      'Composed Recipe - Profile Public Page.html',
    ],
    kits: ['cool-technical/organism-account-detail.html'],
  },
  {
    id: 'shell',
    name: 'App shell & navigation',
    blurb:
      'The frame every surface sits inside: sidebar, topbar, tabs, containment, and how it reflows down to mobile.',
    patterns: ['layout.md', 'containers.md', 'mobile.md'],
    cookbooks: [],
    specimens: [
      'App Shell Variations.html',
      'Sidebar Variations.html',
      'Header Topbar Variations.html',
      'Tabs & Segmented Variations.html',
      'Containment & Chrome Context Studies.html',
      'Overlays & Navigation Gallery.html',
      'Mobile App Shell Studies.html',
      'Responsive Reflow Studies.html',
    ],
    gallery: ['Layout.html'],
    kits: ['cool-technical/atom-shell-frame.html'],
  },
  {
    id: 'inbox',
    name: 'Inbox, feed & messaging',
    blurb:
      'Streams of things that arrive: threads, notifications, activity. Read state, grouping, and the reply surface.',
    patterns: ['feed.md', 'engagement.md'],
    cookbooks: [],
    specimens: [
      'Composed Recipe - Inbox Messaging.html',
      'Composed Recipe - Activity Feed Notifications.html',
      'Inbox & Thread Studies.html',
    ],
    reproductions: ['lemni-inbox.html'],
  },
  {
    id: 'search',
    name: 'Search & command',
    blurb: 'Finding by typing: results pages, facets, and the ⌘K palette.',
    patterns: ['search.md'],
    cookbooks: ['command-palette.md'],
    specimens: ['Composed Recipe - Search Results Page.html'],
    reproductions: ['vapi-cmdk.html'],
    kits: ['cool-technical/atom-cmdk.html'],
  },
  {
    id: 'states',
    name: 'States, empty & errors',
    blurb:
      'What the screen looks like when there is nothing, too much, or something broken — loading, empty, error, permission.',
    patterns: ['states.md', 'empty-states.md'],
    cookbooks: ['state-as-shape.md'],
    specimens: [
      'Composed Recipe - Empty First-Run States.html',
      'Composed Recipe - Error Pages.html',
    ],
    gallery: ['States.html'],
    kits: ['cool-technical/atom-empty.html', 'cool-technical/atom-status.html'],
  },
  {
    id: 'overlays',
    name: 'Overlays & modals',
    blurb: 'Layers over the page: modals, drawers, popovers, sheets — and when the page should have won instead.',
    patterns: [],
    cookbooks: [],
    specimens: ['Overlay Compositions.html'],
    reproductions: ['linktree-modal.html'],
    kits: ['cool-technical/atom-overlay.html'],
  },
  {
    id: 'settings',
    name: 'Settings, admin & permissions',
    blurb:
      'Configuration surfaces and who may see them: settings IA, user administration, role gating, tenant theming.',
    patterns: [],
    cookbooks: ['settings-page.md'],
    specimens: [
      'Composed Recipe - Settings.html',
      'Composed Recipe - Admin User Management.html',
      'Role-Gated UI Studies.html',
      'Tenant Accent Theming Studies.html',
    ],
    reproductions: ['clickup-settings.html'],
  },
  {
    id: 'planning',
    name: 'Calendar & board',
    blurb: 'Time and pipeline surfaces: month/week grids, event creation, kanban columns and card anatomy.',
    patterns: [],
    cookbooks: [],
    specimens: [
      'Composed Recipe - Calendar Scheduling.html',
      'Composed Recipe - Kanban Board View.html',
      'Calendar Event-Creation Studies.html',
      'Kanban Board Studies.html',
    ],
  },
  {
    id: 'documents',
    name: 'Checkout, reports & documents',
    blurb: 'Surfaces that produce an artefact: multi-step checkout, export builders, and print-fidelity documents.',
    patterns: ['checkout.md'],
    cookbooks: [],
    specimens: [
      'Composed Recipe - Checkout Wizard.html',
      'Composed Recipe - Reports Export Builder.html',
      'Printable Financial Document Studies.html',
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing & pricing',
    blurb: 'Outward-facing pages: hero anatomy, section rhythm, pricing tables, and the site archetypes they compose into.',
    patterns: ['marketing.md', 'pricing.md', 'site-archetypes.md'],
    cookbooks: ['marketing-hero.md', 'pricing-table.md'],
    specimens: [
      'Marketing Sections.html',
      'Pricing Plan Studies.html',
      'Composed Recipe - Pricing Plans.html',
    ],
    gallery: ['Marketing.html', 'SiteArchetypes.html'],
    reproductions: ['fibery-landing-hero.html', 'epidemic-pricing.html'],
    kits: [
      'marketing/organism-landing.html',
      'marketing/organism-pricing.html',
      'marketing/atom-hero.html',
      'marketing/atom-pricing-row.html',
      'marketing/atom-feature-grid.html',
      'marketing/atom-cta-band.html',
      'marketing/recipe-cta.html',
      'marketing/atom-nav-footer.html',
      'marketing/atom-social-faq.html',
      'marketing/atom-code.html',
      'marketing/atom-chart.html',
    ],
  },
  {
    id: 'editorial',
    name: 'Editorial & long-form',
    blurb: 'Reading surfaces: measure, rhythm, figures, indexes — and the type registers that set their voice.',
    patterns: ['typefaces.md'],
    cookbooks: ['reading-surface.md', 'editorial-index.md', 'registers.md'],
    specimens: ['Long-Form Organization Studies.html', 'Editorial Component Gallery.html'],
    reproductions: ['editorial-article.html', 'editorial-index.html'],
    registers: [
      'float-warm-editorial.html',
      'float-cold-editorial.html',
      'float-dark-editorial.html',
      'float-cool-technical.html',
      'float-bold-expressive.html',
    ],
    kits: [
      'warm-editorial/organism-article.html',
      'warm-editorial/organism-index.html',
      'warm-editorial/atom-prose.html',
      'warm-editorial/atom-masthead.html',
      'warm-editorial/atom-index.html',
      'cool-technical/recipe-figure.html',
      'cool-technical/atom-figure.html',
    ],
  },
  {
    id: 'foundations',
    name: 'Foundations & components',
    blurb:
      'What every surface above is built from: the token contract, the atoms and molecules, motion, identity, and the accessibility floor.',
    patterns: [
      'README.md',
      'approach.md',
      'identity.md',
      'assets.md',
      'motion.md',
      'accessibility.md',
      'usability.md',
      'molecules.md',
    ],
    cookbooks: ['synthetic-product-imagery.md'],
    specimens: [
      'Button Variations.html',
      'Card Variations.html',
      'Badge, Chip & Tag Variations.html',
      'Component Gallery.html',
      'Monochrome Component Gallery.html',
      'Usage Examples - Molecules & Organisms.html',
      'List, Avatar & Timeline Molecules.html',
      'Adding Personality to UI.html',
    ],
    gallery: [
      'Foundations.html',
      'Atoms.html',
      'Molecules.html',
      'Organisms.html',
      'Recipes.html',
      'Identity.html',
      'Imagery.html',
      'Motion.html',
      'Personality.html',
      'Approach.html',
      'Guide.html',
      'Variation.html',
    ],
    kits: ['cool-technical/atom-icon.html'],
  },
];
