export const NAV = [
  { id: 'origin', label: 'Origin', index: '01' },
  { id: 'how', label: 'How blink works', index: '02' },
  { id: 'strategy', label: 'Strategy', index: '03' },
  { id: 'people', label: 'The people behind it', index: '04' },
  { id: 'contacts', label: 'Contacts', index: '05' },
]

export const TICKER = [
  'Equities',
  'FX',
  'Futures',
  'Rates',
  'Commodities',
  'Digital assets',
  'Indices',
  'Volatility',
]

export const MODULES = [
  {
    id: 'coverage',
    index: '02.1',
    title: 'Multi-Asset Coverage',
    lead: 'One system, many markets.',
    body: 'Equities, FX, futures, rates, commodities and digital assets are observed through a single lens. Coverage is not a feature — it is the raw material the system reasons over.',
    stats: [
      ['Asset classes', '7'],
      ['Venues watched', '40+'],
      ['Session', '24 / 7'],
    ],
  },
  {
    id: 'core',
    index: '02.2',
    title: 'Algorithmic Core',
    lead: 'Built to process at machine speed.',
    body: 'Blink is powered by proprietary algorithms built to process market data at speeds no human can match. It makes decisions in fractions of a second — often before the shift is even visible.',
    stats: [
      ['Decision cycle', '< 1 s'],
      ['Execution', 'Fractional-second'],
      ['Supervision', 'Continuous'],
    ],
  },
  {
    id: 'risk',
    index: '02.3',
    title: 'Risk Envelope',
    lead: 'Speed, bounded by discipline.',
    body: 'Every action is constrained by a pre-defined risk envelope. Exposure, drawdown and correlation limits are enforced at the system level, not negotiated in the moment.',
    stats: [
      ['Limits', 'Hard-coded'],
      ['Monitoring', 'Real-time'],
      ['Overrides', 'None'],
    ],
  },
]

export const STRATEGY_CARDS = [
  {
    index: '03.1',
    title: 'A small, experienced team',
    body: 'Blink is managed by a small, highly experienced team of market professionals. Seniority over headcount — the people closest to the market stay closest to the decision.',
    tone: 'ember',
  },
  {
    index: '03.2',
    title: 'Noise removed',
    body: 'We avoid noise and distraction. For us, freedom is an integral part of professional discipline — a clear head is an operating condition, not a luxury.',
    tone: 'bone',
  },
  {
    index: '03.3',
    title: 'Efficiency as default',
    body: 'We focus on what matters and work efficiently. Nothing is added to the system that does not earn its place in the outcome.',
    tone: 'ash',
  },
]

export const PEOPLE = [
  {
    monogram: 'SE',
    discipline: 'Systematic Execution',
    years: '18',
    focus: 'Futures · Derivatives',
    note: 'Designs and supervises the execution layer that turns a signal into a position.',
  },
  {
    monogram: 'MM',
    discipline: 'Market Microstructure',
    years: '14',
    focus: 'FX · Rates',
    note: 'Reads liquidity, spread and depth — the texture beneath the price.',
  },
  {
    monogram: 'RC',
    discipline: 'Risk & Capital',
    years: '21',
    focus: 'Portfolio · Drawdown',
    note: 'Owns the envelope: sizing, exposure ceilings and capital preservation.',
  },
]

export const SPECS = [
  ['Latency budget', 'sub-second, end to end'],
  ['Decision horizon', 'intraday to multi-day'],
  ['Human in the loop', 'supervisory, not manual'],
  ['Infrastructure', 'redundant, monitored'],
]
