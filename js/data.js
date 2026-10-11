// ── VESTA — product catalogue & shared helpers ──────────────────────────
// High-resolution photography served from Unsplash's CDN.
// Each product carries multi-angle images, fabric details, size availability,
// customer reviews, and fallback SVG vector icons.

function unsplash(id, w = 800, h = 1000, crop = "entropy") {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop&crop=${crop}`;
}

const PHOTOS = {
  blazer: "1575473970760-b50a70461e1a",
  blazer_detail: "1594938298603-c8148c4dae35",
  blazer_model: "1507679799987-c73779587ccf",

  trouser: "1767631338127-8cd80ee2f9df",
  trouser_detail: "1541099649105-f69ad21f3246",
  trouser_look: "1552902865-b72c031ac5ea",

  sweater: "1574201635302-388dd92a4c3f",
  sweater_detail: "1620799140408-edc6dcb6d633",
  sweater_texture: "1434389677669-e08b4cac3105",

  dress: "1616348490852-d80c545b4f79",
  dress_detail: "1595777457583-95e059d581b8",
  dress_look: "1515372039744-b8f02a3ae446",

  coat: "1588632321641-60284c5b0c33",
  coat_detail: "1539571696357-5a69c17a67c6",
  coat_street: "1548883354-7622d03aca27",

  shirt: "1602810318383-e386cc2a3ccf",
  shirt_detail: "1598033129183-c4f50c736f10",
  shirt_look: "1586363104862-3a5e2ab60d99",

  skirt: "1583496661160-fb5886a0aaaa",
  skirt_detail: "1509631179647-0177331693ae",

  cardigan: "1576871337622-98d48d1cf531",
  cardigan_detail: "1434389677669-e08b4cac3105",

  denim: "1542272604-780c968595a6",
  denim_detail: "1541099649105-f69ad21f3246",

  turtleneck: "1515886657613-9f3515b0c78f",
  turtleneck_detail: "1583743814966-8936f5b7be1a",

  tote: "1548036328-c9fa89d128fa",
  tote_detail: "1590874103328-eac38a683ce7"
};

const ICON_PATHS = {
  jacket: "M50 15 L38 25 L20 32 L14 55 L24 58 L28 40 L28 88 L72 88 L72 40 L76 58 L86 55 L80 32 L62 25 Z",
  trouser: "M30 15 H70 L74 88 H58 L52 40 L48 40 L42 88 H26 Z",
  sweater: "M50 15 C40 15 32 20 28 28 L14 38 L22 52 L30 46 L30 88 H70 V46 L78 52 L86 38 L72 28 C68 20 60 15 50 15 Z",
  dress: "M40 15 L34 30 L20 85 H80 L66 30 L60 15 C56 20 44 20 40 15 Z",
  shirt: "M42 15 L30 22 L18 34 L26 46 L34 40 L34 88 H66 V40 L74 46 L82 34 L70 22 L58 15 C54 19 46 19 42 15 Z",
  skirt: "M32 18 H68 L80 85 H20 Z",
  bag: "M30 35 H70 V85 H30 Z M38 35 V24 C38 18 62 18 62 24 V35"
};

const PRODUCTS = [
  {
    id: 1,
    name: "The Fold Blazer",
    cat: "Outerwear",
    color: "Charcoal",
    colorHex: "#2E2A26",
    price: 6200,
    icon: "jacket",
    bg: "#2E2A26",
    light: true,
    flag: "Bestseller",
    isNew: false,
    stock: 5,
    rating: 4.9,
    reviewsCount: 38,
    composition: "88% Italian virgin wool, 12% Mulberry silk lining",
    origin: "Biella Mill, Northern Italy",
    fit: "Relaxed tailored cut; softly padded shoulder",
    img: unsplash(PHOTOS.blazer, 600, 800, "entropy"),
    images: [
      unsplash(PHOTOS.blazer, 900, 1200, "entropy"),
      unsplash(PHOTOS.blazer_detail, 900, 1200, "entropy"),
      unsplash(PHOTOS.blazer_model, 900, 1200, "top")
    ],
    desc: "A single-breasted blazer with a soft, unstructured shoulder. Cut from a mid-weight wool blend that holds its shape without ever feeling stiff.",
    details: [
      "Natural horn-button closure",
      "Concealed interior breast pocket for passport or phone",
      "Double back vent for effortless movement",
      "Hand-finished lapel roll"
    ],
    reviews: [
      { author: "Devika N.", rating: 5, date: "2 weeks ago", title: "The drape is unmatched", comment: "The shoulder structure is so natural. It transitions effortlessly from gallery openings to everyday studio work." },
      { author: "Karan M.", rating: 5, date: "1 month ago", title: "Worth every rupee", comment: "Fabric feels like luxury bespoke tailoring. The charcoal shade has rich undertones in daylight." }
    ]
  },
  {
    id: 2,
    name: "Wide-Leg Trouser",
    cat: "Bottoms",
    color: "Stone",
    colorHex: "#8B6F47",
    price: 3400,
    icon: "trouser",
    bg: "#8B6F47",
    light: true,
    flag: "",
    isNew: false,
    stock: 8,
    rating: 4.8,
    reviewsCount: 24,
    composition: "100% Belgian heavy linen-twill",
    origin: "Flanders, Belgium",
    fit: "High-rise, fluid wide leg, full length break",
    img: unsplash(PHOTOS.trouser, 600, 800, "bottom"),
    images: [
      unsplash(PHOTOS.trouser, 900, 1200, "bottom"),
      unsplash(PHOTOS.trouser_detail, 900, 1200, "entropy"),
      unsplash(PHOTOS.trouser_look, 900, 1200, "top")
    ],
    desc: "High-rise and fully pleated, cut wide from the hip down for a fluid drape. Finished with a clean waistband and side pockets.",
    details: [
      "Deep front pleats with crisp press line",
      "Curved inner waistband with curtain facing",
      "Subtle side slant pockets and rear welt pockets",
      "Reinforced hem with 4cm turn-up allowance"
    ],
    reviews: [
      { author: "Pooja V.", rating: 5, date: "3 weeks ago", title: "Pure elegance", comment: "Falls perfectly over boots and flats. High rise sits cleanly at natural waist." }
    ]
  },
  {
    id: 3,
    name: "Cable Knit Sweater",
    cat: "Knitwear",
    color: "Moss",
    colorHex: "#3B4A3E",
    price: 4100,
    icon: "sweater",
    bg: "#3B4A3E",
    light: true,
    flag: "Bestseller",
    isNew: false,
    stock: 3,
    rating: 5.0,
    reviewsCount: 47,
    composition: "100% Extra-fine Geelong merino wool",
    origin: "Highland Knits, Scotland",
    fit: "Slightly oversized body, fitted ribbed collar and cuffs",
    img: unsplash(PHOTOS.sweater, 600, 800, "entropy"),
    images: [
      unsplash(PHOTOS.sweater, 900, 1200, "entropy"),
      unsplash(PHOTOS.sweater_detail, 900, 1200, "entropy"),
      unsplash(PHOTOS.sweater_texture, 900, 1200, "center")
    ],
    desc: "Hand-finished cable knit in a heavyweight merino blend. Ribbed cuffs and hem keep it close, the rest is left roomy for layering.",
    details: [
      "Traditional Celtic cable gauge knit",
      "Zero itch factor — washed in natural alpine water",
      "Double-ribbed crew neckline that never sags",
      "Seamless circular knit body"
    ],
    reviews: [
      { author: "Aditi S.", rating: 5, date: "1 week ago", title: "Incredibly warm and soft", comment: "The Moss green is grounding and timeless. I wear it three times a week." },
      { author: "Rohan B.", rating: 5, date: "3 weeks ago", title: "Heavyweight perfection", comment: "Substantial weight without feeling suffocating. True artisanal craftsmanship." }
    ]
  },
  {
    id: 4,
    name: "Silk Slip Dress",
    cat: "Dresses",
    color: "Bone",
    colorHex: "#C9BBA8",
    price: 5600,
    icon: "dress",
    bg: "#C9BBA8",
    light: false,
    flag: "New",
    isNew: true,
    stock: 4,
    rating: 4.9,
    reviewsCount: 19,
    composition: "100% Sandwashed Mulberry Silk (22 momme)",
    origin: "Hangzhou Silk Atelier",
    fit: "Bias-cut silhouette that drapes along curves without cling",
    img: unsplash(PHOTOS.dress, 600, 800, "top"),
    images: [
      unsplash(PHOTOS.dress, 900, 1200, "top"),
      unsplash(PHOTOS.dress_detail, 900, 1200, "entropy"),
      unsplash(PHOTOS.dress_look, 900, 1200, "center")
    ],
    desc: "Bias-cut in washed mulberry silk so it moves with you rather than against you. Adjustable straps, side slit, fully lined.",
    details: [
      "Ultra-soft sandwashed matte finish",
      "Adjustable fine silk rouleau straps",
      "Subtle 12-inch left side movement slit",
      "Self-lined bodice for modesty and coverage"
    ],
    reviews: [
      { author: "Meera K.", rating: 5, date: "4 days ago", title: "Liquid silk feel", comment: "The Bone color has the warmest pearlescent glow. Drapes like a dream." }
    ]
  },
  {
    id: 5,
    name: "Utility Jacket",
    cat: "Outerwear",
    color: "Olive",
    colorHex: "#4B4A2E",
    price: 7200,
    icon: "jacket",
    bg: "#4B4A2E",
    light: true,
    flag: "",
    isNew: false,
    stock: 6,
    rating: 4.7,
    reviewsCount: 15,
    composition: "100% Brushed Japanese Cotton Canvas (340 GSM)",
    origin: "Kurashiki, Okayama",
    fit: "Boxy utility silhouette, hip length",
    img: unsplash(PHOTOS.blazer, 600, 800, "top"),
    images: [
      unsplash(PHOTOS.blazer, 900, 1200, "top"),
      unsplash(PHOTOS.blazer_detail, 900, 1200, "entropy")
    ],
    desc: "A four-pocket field jacket in brushed cotton twill, garment-dyed for depth of colour. Built for everyday wear, not the field.",
    details: [
      "Four gusseted utility bellow pockets",
      "Concealed brass antique zip with horn snap storm flap",
      "Internal drawstring waist cincher",
      "Garment-washed for broken-in softness"
    ],
    reviews: [
      { author: "Sameer J.", rating: 5, date: "2 weeks ago", title: "Sturdy & stylish", comment: "Pockets are huge and actually useful. Canvas develops great character with wear." }
    ]
  },
  {
    id: 6,
    name: "Relaxed Oxford Shirt",
    cat: "Tops",
    color: "Ivory",
    colorHex: "#D8CFC0",
    price: 2800,
    icon: "shirt",
    bg: "#D8CFC0",
    light: false,
    flag: "",
    isNew: false,
    stock: 12,
    rating: 4.8,
    reviewsCount: 52,
    composition: "100% Long-Staple Organic Cotton Oxford",
    origin: "Coimbatore Mills, Tamil Nadu",
    fit: "Relaxed boyfriend fit with dropped shoulder",
    img: unsplash(PHOTOS.shirt, 600, 800, "top"),
    images: [
      unsplash(PHOTOS.shirt, 900, 1200, "top"),
      unsplash(PHOTOS.shirt_detail, 900, 1200, "entropy"),
      unsplash(PHOTOS.shirt_look, 900, 1200, "center")
    ],
    desc: "A boxier take on the classic oxford, in a brushed cotton that softens with every wash. Works buttoned to the top or open over a tee.",
    details: [
      "Mother-of-pearl cross-stitched buttons",
      "Soft unlined collar with subtle roll",
      "Single chest patch pocket",
      "Back box pleat with signature locker loop"
    ],
    reviews: [
      { author: "Ananya R.", rating: 5, date: "5 days ago", title: "My daily uniform", comment: "The fabric weight is substantial yet breathable. Washes crisp without needing heavy ironing." }
    ]
  },
  {
    id: 7,
    name: "Pleated Midi Skirt",
    cat: "Bottoms",
    color: "Rust",
    colorHex: "#A65C43",
    price: 3900,
    icon: "skirt",
    bg: "#A65C43",
    light: true,
    flag: "New",
    isNew: true,
    stock: 7,
    rating: 4.9,
    reviewsCount: 16,
    composition: "70% Viscose Crepe, 30% Lyocell",
    origin: "Lyon, France",
    fit: "High waist, knife pleats, mid-calf hemline",
    img: unsplash(PHOTOS.skirt, 600, 800, "bottom"),
    images: [
      unsplash(PHOTOS.skirt, 900, 1200, "bottom"),
      unsplash(PHOTOS.skirt_detail, 900, 1200, "entropy")
    ],
    desc: "Knife-pleated from waist to hem in a fluid crepe. Sits at the natural waist and swings freely when you move.",
    details: [
      "Permanent heat-set sharp pleats that withstand washing",
      "Comfort elasticated rear waistband with flat front band",
      "Concealed side zipper with hook-and-eye closure",
      "Calf-length fluid drape"
    ],
    reviews: [
      { author: "Tara P.", rating: 5, date: "2 weeks ago", title: "Swings beautifully", comment: "The Rust color is deep and terracotta-rich. Pairs wonderfully with the Moss knit sweater." }
    ]
  },
  {
    id: 8,
    name: "Wool Overcoat",
    cat: "Outerwear",
    color: "Charcoal",
    colorHex: "#23211D",
    price: 9800,
    icon: "jacket",
    bg: "#23211D",
    light: true,
    flag: "Atelier Piece",
    isNew: false,
    stock: 2,
    rating: 5.0,
    reviewsCount: 22,
    composition: "100% Double-Faced Melton Wool (520 GSM)",
    origin: "Prato Wool Mill, Tuscany",
    fit: "Generous tailored cocoon fit, below-knee length",
    img: unsplash(PHOTOS.coat, 600, 800, "entropy"),
    images: [
      unsplash(PHOTOS.coat, 900, 1200, "entropy"),
      unsplash(PHOTOS.coat_detail, 900, 1200, "entropy"),
      unsplash(PHOTOS.coat_street, 900, 1200, "top")
    ],
    desc: "A floor-skimming overcoat in double-faced wool, generous enough to layer a knit underneath. Horn-effect buttons, deep welt pockets.",
    details: [
      "Double-faced hand-split seams (unlined lightness with heavy warmth)",
      "Deep fleece-lined handwarmer welt pockets",
      "Broad notched lapels",
      "Concealed inner ticket pocket"
    ],
    reviews: [
      { author: "Vikram C.", rating: 5, date: "1 month ago", title: "A lifelong heirloom piece", comment: "The weight and density of the wool is astonishing. Keeps out biting cold effortlessly." }
    ]
  },
  {
    id: 9,
    name: "Cropped Cardigan",
    cat: "Knitwear",
    color: "Mustard",
    colorHex: "#B08D57",
    price: 3100,
    icon: "sweater",
    bg: "#B08D57",
    light: false,
    flag: "",
    isNew: false,
    stock: 9,
    rating: 4.7,
    reviewsCount: 31,
    composition: "90% Merino Rib, 10% Cashmere",
    origin: "Inner Mongolia Sourced Wool",
    fit: "Cropped waist length, fitted body and sleeves",
    img: unsplash(PHOTOS.cardigan, 600, 800, "bottom"),
    images: [
      unsplash(PHOTOS.cardigan, 900, 1200, "bottom"),
      unsplash(PHOTOS.cardigan_detail, 900, 1200, "entropy")
    ],
    desc: "A cropped, button-through cardigan in a fine merino rib. Sits at the waist, layers cleanly under coats or over slip dresses.",
    details: [
      "Fine 14-gauge rib knit that retains memory",
      "Chunky natural corozo buttons",
      "Tapered long sleeves that scrunch nicely at wrist",
      "Deep V-neckline"
    ],
    reviews: [
      { author: "Kriti D.", rating: 5, date: "3 weeks ago", title: "Flattering cut", comment: "Hits right at the high-waist band of the trousers. The ochre mustard shade is divine." }
    ]
  },
  {
    id: 10,
    name: "Straight Denim",
    cat: "Bottoms",
    color: "Indigo",
    colorHex: "#4A5A6A",
    price: 4500,
    icon: "trouser",
    bg: "#4A5A6A",
    light: true,
    flag: "Bestseller",
    isNew: false,
    stock: 11,
    rating: 4.9,
    reviewsCount: 44,
    composition: "100% Selvedge Cotton Denim (13.5 oz)",
    origin: "Kuroki Mills, Okayama, Japan",
    fit: "Mid-rise, straight leg from thigh to hem",
    img: unsplash(PHOTOS.denim, 600, 800, "entropy"),
    images: [
      unsplash(PHOTOS.denim, 900, 1200, "entropy"),
      unsplash(PHOTOS.denim_detail, 900, 1200, "entropy")
    ],
    desc: "Rigid selvedge denim in a straight, mid-rise cut that breaks in around you. Built to fade honestly with wear.",
    details: [
      "Classic red-line selvedge visible on cuff roll",
      "Button fly with solid copper shanks",
      "Chain-stitched waistband and hem",
      "Unwashed raw indigo that molds to your silhouette"
    ],
    reviews: [
      { author: "Arjun T.", rating: 5, date: "2 weeks ago", title: "Real raw denim", comment: "Took three wears to mold to my hips, now it feels like second skin. Beautiful fading." }
    ]
  },
  {
    id: 11,
    name: "Merino Turtleneck",
    cat: "Knitwear",
    color: "Sand",
    colorHex: "#C4B5A5",
    price: 3600,
    icon: "sweater",
    bg: "#C4B5A5",
    light: false,
    flag: "New",
    isNew: true,
    stock: 8,
    rating: 4.8,
    reviewsCount: 18,
    composition: "100% Superfine Merino Wool (19.5 micron)",
    origin: "Biella Yarn, Italy",
    fit: "Slim architectural layer, relaxed fold-down neck",
    img: unsplash(PHOTOS.turtleneck, 600, 800, "top"),
    images: [
      unsplash(PHOTOS.turtleneck, 900, 1200, "top"),
      unsplash(PHOTOS.turtleneck_detail, 900, 1200, "entropy")
    ],
    desc: "A featherlight second-skin turtleneck spun from Italian merino. Built to slide effortlessly under blazers, overcoats, and slip dresses.",
    details: [
      "Seamless tubular neck construction — never chokes",
      "Extended cuffs for gentle hand coverage",
      "Naturally temperature-regulating and odour-resistant",
      "Machine-washable on gentle wool cycle"
    ],
    reviews: [
      { author: "Nandita G.", rating: 5, date: "1 week ago", title: "The perfect base layer", comment: "So lightweight yet warm. Essential for cold studio mornings." }
    ]
  },
  {
    id: 12,
    name: "Atelier Leather Tote",
    cat: "Accessories",
    color: "Chestnut",
    colorHex: "#5B3826",
    price: 5200,
    icon: "bag",
    bg: "#5B3826",
    light: true,
    flag: "Bestseller",
    isNew: false,
    stock: 4,
    rating: 5.0,
    reviewsCount: 29,
    composition: "100% Full-Grain Vegetable Tanned Leather",
    origin: "Tuscany Leather Consortium",
    fit: "Fits up to 16-inch laptop with room for notebook & knit",
    img: unsplash(PHOTOS.tote, 600, 800, "entropy"),
    images: [
      unsplash(PHOTOS.tote, 900, 1200, "entropy"),
      unsplash(PHOTOS.tote_detail, 900, 1200, "entropy")
    ],
    desc: "Handcrafted from full-grain vegetable-tanned leather that patinas with every voyage. Unlined raw interior with a tethered zip pouch.",
    details: [
      "Vegetable-tanned using chestnut and mimosa tannins",
      "Reinforced saddler's leather handles with 25cm drop",
      "Removable matching zipped coin/key pouch",
      "Raw suede interior with brass magnetic clip"
    ],
    reviews: [
      { author: "Kavya M.", rating: 5, date: "3 weeks ago", title: "Gorgeous leather smell", comment: "Smells incredible and holds everything I need for a full workday." }
    ]
  }
];

const HERO_IMG = unsplash(PHOTOS.sweater, 1200, 1400, "entropy");

const EDITORIAL_IMGS = {
  wool: unsplash(PHOTOS.sweater_texture, 600, 600, "entropy"),
  cotton: unsplash(PHOTOS.trouser_detail, 600, 600, "entropy"),
  silk: unsplash(PHOTOS.dress_detail, 600, 600, "entropy"),
  craft: unsplash(PHOTOS.blazer_model, 600, 800, "entropy")
};

const CATEGORIES = ["All", "Outerwear", "Tops", "Bottoms", "Dresses", "Knitwear", "Accessories"];

const SIZES = ["S", "M", "L", "XL"];

const SIZE_CHART = {
  metric: [
    { size: "S", chest: "86–91", waist: "71–76", hip: "91–96", length: "68" },
    { size: "M", chest: "96–101", waist: "81–86", hip: "101–106", length: "70" },
    { size: "L", chest: "106–111", waist: "91–96", hip: "111–116", length: "72" },
    { size: "XL", chest: "116–121", waist: "101–106", hip: "121–126", length: "74" }
  ],
  imperial: [
    { size: "S", chest: "34–36", waist: "28–30", hip: "36–38", length: "26.8" },
    { size: "M", chest: "38–40", waist: "32–34", hip: "40–42", length: "27.5" },
    { size: "L", chest: "42–44", waist: "36–38", hip: "44–46", length: "28.3" },
    { size: "XL", chest: "46–48", waist: "40–42", hip: "48–50", length: "29.1" }
  ]
};

const PROMO_CODES = {
  "VESTA10": { discount: 0.10, desc: "10% off your entire order", min: 0 },
  "VESTA20": { discount: 0.20, desc: "20% off orders above ₹7,000", min: 7000 },
  "FREESHIP": { discount: 0.00, freeShipping: true, desc: "Complimentary shipping unlocked", min: 0 }
};

const ANNOUNCEMENTS = [
  "Complimentary standard shipping on all orders over ₹4,000",
  "Autumn / Winter Atelier Batch 01 — limited to 50 pieces per style",
  "Use code VESTA10 for 10% off your first order",
  "Easy 14-day studio returns on unworn pieces"
];

const money = n => "₹" + (Number(n) || 0).toLocaleString("en-IN");

// Ensure global attachment across babel standalone / module environments
if (typeof window !== "undefined") {
  window.unsplash = unsplash;
  window.PHOTOS = PHOTOS;
  window.ICON_PATHS = ICON_PATHS;
  window.PRODUCTS = PRODUCTS;
  window.HERO_IMG = HERO_IMG;
  window.EDITORIAL_IMGS = EDITORIAL_IMGS;
  window.CATEGORIES = CATEGORIES;
  window.SIZES = SIZES;
  window.SIZE_CHART = SIZE_CHART;
  window.PROMO_CODES = PROMO_CODES;
  window.ANNOUNCEMENTS = ANNOUNCEMENTS;
  window.money = money;
}
