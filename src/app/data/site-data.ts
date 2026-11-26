/**
 * ============================================================
 *  MAHIMA FLY ASH BRICKS — SITE CONTENT
 * ============================================================
 *  This is the ONE file to edit for business details, products,
 *  gallery, testimonials and FAQ. No other code changes needed.
 *
 *  Photos: put image files in  public/images/...  and set the
 *  `image` field to the path, e.g.  'images/products/fly-ash-bricks.jpg'
 *  Leave `image: ''` to show the "Photo coming soon" placeholder.
 * ============================================================
 */

export const BUSINESS = {
  name: 'Mahima Fly Ash Bricks',
  shortName: 'Mahima',
  // TODO: replace with your own tagline
  tagline: 'Strong • Eco-Friendly • Affordable',
  owner: 'Alekh Kumar Behera',
  yearsInBusiness: 20,

  phoneDisplay: '094372 38893',
  phoneE164: '+919437238893', // used for tel: links
  whatsappNumber: '919437238893', // country code + number, no "+" or spaces
  whatsappDefaultMessage:
    'Hello Mahima Fly Ash Bricks, I would like to know more about your products and prices.',

  email: 'flyashbricksmahima@gmail.com',

  // TODO: add your 15-character GSTIN, e.g. '21ABCDE1234F1Z5'. Leave '' to hide it.
  gstin: '',

  address: {
    line1: 'Udala - Baripada Rd, Podastia',
    city: 'Baripada',
    district: 'Mayurbhanj',
    state: 'Odisha',
    pin: '757049',
  },
  hours: 'Monday – Sunday, 8:00 AM – 8:00 PM',
  hoursShort: '8 AM – 8 PM',
  serviceArea: ['Baripada', 'Mayurbhanj District'],

  mapLink: 'https://maps.app.goo.gl/da3kUPFEbUX97E1J9',
  mapEmbed:
    'https://maps.google.com/maps?q=Mahima+Fly+Ash+Bricks,+Udala+-+Baripada+Rd,+Podastia,+Baripada,+Odisha+757049&z=15&output=embed',

  /**
   * Enquiry form (Web3Forms — free, no backend).
   * 1. Go to https://web3forms.com, enter your email, get an Access Key.
   * 2. Paste it below. Form submissions will arrive in that inbox.
   */
  web3formsAccessKey: '486493a9-c4c1-49a4-8bab-264574bb7efd',
};

export interface Spec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  summary: string;
  image: string;
  specs: Spec[];
  uses: string[];
}

const TBU = 'To be updated';

export const PRODUCTS: Product[] = [
  {
    id: 'fly-ash-bricks',
    name: 'Fly Ash Bricks',
    summary:
      'Uniform, machine-pressed bricks made from fly ash, cement and sand. Lighter and smoother than red clay bricks, needing less plaster.',
    image: '',
    specs: [
      { label: 'Size', value: TBU },
      { label: 'Weight', value: TBU },
      { label: 'Strength', value: TBU },
    ],
    uses: ['Houses', 'Commercial buildings', 'Load-bearing & partition walls'],
  },
  {
    id: 'solid-blocks',
    name: 'Solid Blocks',
    summary:
      'Large solid cement blocks for faster construction. Fewer joints mean less mortar and quicker work on site.',
    image: '',
    specs: [
      { label: 'Size', value: TBU },
      { label: 'Weight', value: TBU },
      { label: 'Strength', value: TBU },
    ],
    uses: ['Boundary walls', 'Godowns & sheds', 'External walls'],
  },
  {
    id: 'sky-light',
    name: 'Sky Light',
    summary:
      'Precast cement sky light for natural light and ventilation in roofs and walls.',
    image: '',
    specs: [
      { label: 'Size', value: TBU },
      { label: 'Design', value: TBU },
    ],
    uses: ['Roofs', 'Staircases', 'Ventilation openings'],
  },
  {
    id: 'boundary-slab',
    name: 'Boundary Slab',
    summary:
      'Precast cement slabs for quick, strong compound and boundary walls, fitted between boundary pillars.',
    image: '',
    specs: [
      { label: 'Size', value: TBU },
      { label: 'Thickness', value: TBU },
    ],
    uses: ['Plot boundaries', 'Farm fencing', 'Factory compounds'],
  },
  {
    id: 'pillar-6ft',
    name: 'Cement Pillar – 6 ft',
    summary: 'Precast reinforced cement pillar, 6 feet tall, for fencing and boundary work.',
    image: '',
    specs: [
      { label: 'Height', value: '6 ft' },
      { label: 'Section', value: TBU },
    ],
    uses: ['Wire fencing', 'Garden & farm boundaries'],
  },
  {
    id: 'pillar-9ft',
    name: 'Cement Pillar – 9 ft',
    summary: 'Precast reinforced cement pillar, 9 feet tall, for taller fencing and boundary work.',
    image: '',
    specs: [
      { label: 'Height', value: '9 ft' },
      { label: 'Section', value: TBU },
    ],
    uses: ['Tall fencing', 'Factory & plot boundaries'],
  },
  {
    id: 'boundary-pillar',
    name: 'Boundary Pillar',
    summary:
      'Grooved precast pillars that hold boundary slabs in place, for fast and neat compound walls.',
    image: '',
    specs: [
      { label: 'Height', value: TBU },
      { label: 'Section', value: TBU },
    ],
    uses: ['Slab boundary walls', 'Compound walls'],
  },
  {
    id: 'tulsi-chaura',
    name: 'Cement Tulsi Chaura',
    summary: 'Durable, well-finished cement Tulsi Chaura for homes and temples.',
    image: '',
    specs: [
      { label: 'Height', value: TBU },
      { label: 'Design', value: TBU },
    ],
    uses: ['Homes', 'Courtyards', 'Temples'],
  },
];

/**
 * HOME PAGE BANNER SLIDER
 * Use wide photos (about 1920 x 800 px, under ~400 KB), e.g. in public/images/banner/
 * Leave `image: ''` to show the brick-pattern design instead.
 * `productId` links the slide's buttons to that product (see PRODUCTS ids above).
 * EX. 'images/banner/fly-ash-bricks.jpg'
 */
export interface BannerSlide {
  image: string;
  eyebrow: string;
  heading: string;
  text: string;
  productId?: string;
}

export const BANNER_SLIDES: BannerSlide[] = [
  {
    image: '',
    eyebrow: 'Baripada · Mayurbhanj · 20+ years',
    heading: 'Quality Fly Ash Bricks & Cement Products for Strong Buildings',
    text: 'Eco-friendly bricks, blocks, boundary slabs, pillars and more — delivered to your site.',
  },
  {
    image: '',
    eyebrow: 'Best seller',
    heading: 'Fly Ash Bricks',
    text: 'Uniform size, smooth finish and less plaster. Stronger walls at a lower cost.',
    productId: 'fly-ash-bricks',
  },
  {
    image: '',
    eyebrow: 'Faster construction',
    heading: 'Solid Blocks',
    text: 'Large solid blocks for quick, strong boundary walls, sheds and buildings.',
    productId: 'solid-blocks',
  },
  {
    image: '',
    eyebrow: 'Boundary walls made easy',
    heading: 'Boundary Slabs & Pillars',
    text: 'Precast slabs with 6 ft and 9 ft pillars for neat compound walls in days, not weeks.',
    productId: 'boundary-slab',
  },
  {
    image: '',
    eyebrow: 'For every home',
    heading: 'Cement Tulsi Chaura',
    text: 'Durable, well-finished Tulsi Chaura for homes, courtyards and temples.',
    productId: 'tulsi-chaura',
  },
];

export interface GalleryItem {
  category: 'Plant' | 'Production' | 'Projects';
  caption: string;
  image: string;
}

export const GALLERY: GalleryItem[] = [
  { category: 'Plant', caption: 'Our manufacturing plant at Podastia', image: '' },
  { category: 'Plant', caption: 'Raw material storage', image: '' },
  { category: 'Plant', caption: 'Curing yard', image: '' },
  { category: 'Production', caption: 'Brick pressing machine', image: '' },
  { category: 'Production', caption: 'Freshly made fly ash bricks', image: '' },
  { category: 'Production', caption: 'Pillars and boundary slabs', image: '' },
  { category: 'Projects', caption: 'Residential house, Baripada', image: '' },
  { category: 'Projects', caption: 'Boundary wall project', image: '' },
  { category: 'Projects', caption: 'Delivery at customer site', image: '' },
];

export interface Testimonial {
  quote: string;
  name: string;
  place: string;
}

/**
 * SAMPLE testimonials — replace with real customer feedback
 * before sharing the website publicly.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Good quality bricks with uniform size. Our mason said plastering was much easier than with red bricks.',
    name: 'Sample Customer',
    place: 'Home builder, Baripada',
  },
  {
    quote:
      'We used their boundary slabs and pillars for our plot. Delivery was on time and the work finished quickly.',
    name: 'Sample Customer',
    place: 'Plot owner, Mayurbhanj',
  },
  {
    quote: 'Reasonable price and honest dealing. We have been buying from Mahima for years.',
    name: 'Sample Customer',
    place: 'Contractor, Baripada',
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: 'What are fly ash bricks made of?',
    a: 'Fly ash bricks are made from fly ash (a by-product of thermal power plants), cement, sand or stone dust, and water. The mix is machine-pressed and water-cured, so no burning in a kiln is needed.',
  },
  {
    q: 'Are fly ash bricks as strong as red clay bricks?',
    a: 'Good quality fly ash bricks are strong and suitable for houses and other buildings. Because they are machine-made, every brick has the same size and quality.',
  },
  {
    q: 'Do fly ash bricks save money?',
    a: 'Yes. Their uniform size and smooth surface need less mortar and less plaster, which saves cement and labour on site.',
  },
  {
    q: 'Do you deliver to my site?',
    a: 'We deliver across Baripada and Mayurbhanj district. Call or WhatsApp us with your location and quantity for delivery details.',
  },
  {
    q: 'How can I get the price?',
    a: 'Prices depend on the product and quantity. Call, WhatsApp, or send an enquiry from the Contact page and we will share the latest price.',
  },
  {
    q: 'How many bricks do I need for my wall?',
    a: 'Use our Brick Calculator to get an estimate from your wall size. For an exact quantity, share your plan with us.',
  },
  {
    q: 'What are your working hours?',
    a: 'We are open every day from 8:00 AM to 8:00 PM.',
  },
  {
    q: 'Can I visit the plant?',
    a: 'Yes, you are welcome to visit our plant at Udala - Baripada Road, Podastia, Baripada during working hours.',
  },
];

/** Helpers */
export function whatsappLink(message = BUSINESS.whatsappDefaultMessage): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const PHONE_LINK = `tel:${BUSINESS.phoneE164}`;
export const EMAIL_LINK = `mailto:${BUSINESS.email}`;
export const FULL_ADDRESS = `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.pin}`;
