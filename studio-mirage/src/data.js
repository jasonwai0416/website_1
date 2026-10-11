export const NAV = [
  { id: 'works', label: 'Our works' },
  { id: 'about', label: 'About us' },
  { id: 'contact', label: 'Contact us' },
]

export const SERVICES = [
  'Immersive 3D web',
  'Motion design',
  'Interactive campaigns',
  'Real-time rendering',
  'Art direction',
  'WebGL engineering',
]

const CDN = 'https://images.prismic.io/studiomirage/'

/**
 * `span` drives the asymmetric grid: how many columns / how tall each card is.
 * `accent` is the per-project tint used for the hover wash and index numerals.
 */
export const PROJECTS = [
  {
    id: 'difc',
    index: '01',
    title: 'DIFC',
    subtitle: '4th edition',
    category: '3D motion film',
    year: '2024',
    location: 'Dubai',
    client: 'Dubai International Financial Centre',
    blurb: 'A monumental arch becomes the canvas for a projected 3D motion film.',
    detail:
      'Projected onto a monumental arch at DIFC Quarter, the film unfolds across the architecture at night — a 3D sequence mapped to real geometry, built to be experienced at architectural scale rather than on a screen.',
    services: ['3D motion film', 'Projection mapping', 'Art direction'],
    image: CDN + 'aU1pWnNYClf9oo_1_DIFC_thumbnail.jpg?auto=format,compress&w=1600',
    accent: 'gold',
    span: 'wide',
  },
  {
    id: 'margiela',
    index: '02',
    title: 'Maison Margiela',
    subtitle: 'Organic garden archway',
    category: 'Sensory 3D environment',
    year: '2024',
    location: 'Paris',
    client: 'Maison Margiela',
    blurb: 'A sensory organic garden archway, grown entirely in 3D.',
    detail:
      'A lush, sensory environment where a garden archway and stone stairs dissolve the boundary between the natural and the synthetic. Real-time rendering keeps the foliage alive and responsive.',
    services: ['Real-time 3D', 'Environment design', 'Look development'],
    image: CDN + 'Z6hngJbqstJ9-ZaU_Margiela_Thumbnail.png?auto=format,compress&w=1600',
    accent: 'jade',
    span: 'tall',
  },
  {
    id: 'renault-trucks',
    index: '03',
    title: 'Renault Trucks',
    subtitle: 'Virtual city explorer',
    category: '3D product explorer',
    year: '2023',
    location: 'Lyon',
    client: 'Renault Trucks',
    blurb: 'An aerial 3D virtual city built to showcase an entire product ecosystem.',
    detail:
      'A navigable 3D city that lets visitors explore the Renault Trucks product and service ecosystem from above — every vehicle placed in context, every service made legible through space.',
    services: ['3D product explorer', 'Interactive city', 'WebGL'],
    image: CDN + 'Z8BvXp7c43Q3gUOM_Renault_Thumnail.jpg?auto=format,compress&w=1600',
    accent: 'emerald',
    span: 'normal',
  },
  {
    id: 'ubisoft',
    index: '04',
    title: 'Ubisoft',
    subtitle: "Assassin's Creed",
    category: 'Real-time hero asset',
    year: '2023',
    location: 'Paris',
    client: 'Ubisoft',
    blurb: "A golden Assassin's Creed statue against a starry void.",
    detail:
      "A hero 3D asset rendered in real time: a golden statue lit against a starry background, staged for a global franchise reveal where every reflection had to hold up at full resolution.",
    services: ['Real-time rendering', 'Hero asset', 'Lighting'],
    image:
      CDN +
      'Z4Pb7pbqstJ99Wgk_f8684710-cede-4585-8523-20f4561afa70_AC_thumbnail_2.png?auto=format,compress&w=1600',
    accent: 'gold',
    span: 'normal',
  },
  {
    id: 'sopra-banking',
    index: '05',
    title: 'Sopra Banking',
    subtitle: 'Digital town',
    category: 'Live event 3D',
    year: '2023',
    location: 'Paris',
    client: 'Sopra Banking Software',
    blurb: 'A neon-lit 3D digital town for a live event stage.',
    detail:
      'A glowing geometric town built for a live event — real-time and reactive, designed to be driven on stage while the audience watched the city respond.',
    services: ['Live event 3D', 'Real-time', 'Generative visuals'],
    image: CDN + 'Z4P3X5bqstJ99WkT_Frame%2B1040.png?auto=format,compress&w=1600',
    accent: 'emerald',
    span: 'wide',
  },
  {
    id: 'caisse-des-depots',
    index: '06',
    title: 'Caisse des dépôts',
    subtitle: "Villages Olympiques",
    category: 'Real-time rendering',
    year: '2024',
    location: 'Seine-Saint-Denis',
    client: 'Caisse des dépôts',
    blurb: 'The Quinconces district rendered in real time for the Paris Athletes’ Village.',
    detail:
      'A real-time rendering of the Quinconces district in Seine-Saint-Denis — an urban future made walkable and inspectable before a single stone was laid.',
    services: ['Real-time rendering', 'Urban visualisation', 'Interactive'],
    image: CDN + 'Z8GgoJ7c43Q3gXd__Villages_olympiques_Thumbnail.jpg?auto=format,compress&w=1600',
    accent: 'jade',
    span: 'normal',
  },
  {
    id: 'biotherm',
    index: '07',
    title: 'Biotherm',
    subtitle: 'Active Recovery',
    category: 'Product visualisation',
    year: '2023',
    location: 'Paris',
    client: 'Biotherm',
    blurb: 'A product visualisation built from fragmented campaign imagery.',
    detail:
      'Campaign visuals shattered into fragments and reassembled around the product — a high-end visualisation where art direction and 3D craft carry equal weight.',
    services: ['Product visualisation', 'Art direction', 'Motion'],
    image: CDN + 'Z6jORJbqstJ9-ZsR_Biotherm_Thumbnail_03.jpg?auto=format,compress&w=1600',
    accent: 'emerald',
    span: 'normal',
  },
  {
    id: 'omnicell-explorer',
    index: '08',
    title: 'Omnicell',
    subtitle: 'Explorer',
    category: 'Interactive network',
    year: '2023',
    location: 'Remote',
    client: 'Omnicell',
    blurb: 'An interactive explorer for a network of hospital machines.',
    detail:
      'A connected 3D explorer that maps a hospital machine network into something a visitor can navigate — technical depth made intuitive.',
    services: ['Interactive 3D', 'Data visualisation', 'UX'],
    image: CDN + 'aiwxN6lQnVZVETJq_Omnicell_Thumbnail_01.jpg?auto=format,compress&w=1600',
    accent: 'jade',
    span: 'normal',
  },
  {
    id: 'tasmim',
    index: '09',
    title: 'Tasmim',
    subtitle: 'Bilingual identity',
    category: 'Arabic & Latin typography',
    year: '2024',
    location: 'Dubai',
    client: 'Tasmim',
    blurb: 'Arabic and Latin script held in the same 3D space.',
    detail:
      'A bilingual identity system where Arabic and Latin scripts share one geometric stage — the studio’s own answer to designing for two languages at once.',
    services: ['Typography', '3D identity', 'Motion'],
    image: CDN + 'Z6BijZbqstJ9-JKb_Tasmim_Thumbnail.png?auto=format,compress&w=1600',
    accent: 'jade',
    span: 'normal',
  },
  {
    id: 'jinns',
    index: '10',
    title: 'Jinns',
    subtitle: 'Billboard campaign',
    category: 'Campaign 3D',
    year: '2024',
    location: 'Dubai',
    client: 'Jinns',
    blurb: 'Product cans staged on a billboard with Arabic typography.',
    detail:
      'Three cans on a billboard, Arabic typography carrying the message — a campaign where the composition had to read in a heartbeat from across a road.',
    services: ['Campaign 3D', 'Typography', 'Art direction'],
    image: CDN + 'Z5vKGZbqstJ9-Dw8_Jinns_Thumbnail_01.png?auto=format,compress&w=1600',
    accent: 'gold',
    span: 'normal',
  },
]

export const CAPABILITIES = [
  {
    index: '01',
    title: 'Artistic direction',
    body: 'We define the visual language first — the world, its light, its rules — before a single polygon is placed.',
  },
  {
    index: '02',
    title: '3D development',
    body: 'Modelling, look development and real-time pipelines built to survive contact with a live browser.',
  },
  {
    index: '03',
    title: 'Interactive engineering',
    body: 'WebGL, shaders and performance work that keep the experience weightless on real devices.',
  },
  {
    index: '04',
    title: 'Motion & sound',
    body: 'Choreography and sound design that turn a scene into something with a pulse.',
  },
]

export const STATS = [
  ['Paris', '& Dubai'],
  ['2019', 'founded'],
  ['40+', 'projects shipped'],
  ['Luxury', '& global brands'],
]
