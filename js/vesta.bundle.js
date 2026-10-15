var VESTA = (() => {
  // js/data.js
  function unsplash(id, w = 800, h = 1e3, crop = "entropy") {
    return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop&crop=${crop}`;
  }
  var PHOTOS = {
    blazer: "1507679799987-c73779587ccf",
    blazer_detail: "1594938298603-c8148c4dae35",
    blazer_model: "1548883354-7622d03aca27",
    trouser: "1624378439575-d8705ad7ae80",
    trouser_detail: "1541099649105-f69ad21f3246",
    trouser_look: "1506629082955-511b1aa562c8",
    sweater: "1576871337622-98d48d1cf531",
    sweater_detail: "1620799140408-edc6dcb6d633",
    sweater_texture: "1434389677669-e08b4cac3105",
    dress: "1616348490852-d80c545b4f79",
    dress_detail: "1595777457583-95e059d581b8",
    dress_look: "1515372039744-b8f02a3ae446",
    jacket: "1591047139829-d91aecb6caea",
    jacket_detail: "1539571696357-5a69c17a67c6",
    shirt: "1598033129183-c4f50c736f10",
    shirt_detail: "1602810318383-e386cc2a3ccf",
    shirt_look: "1586363104862-3a5e2ab60d99",
    skirt: "1583496661160-fb5886a0aaaa",
    skirt_detail: "1509631179647-0177331693ae",
    coat: "1588632321641-60284c5b0c33",
    coat_detail: "1539571696357-5a69c17a67c6",
    coat_street: "1548883354-7622d03aca27",
    cardigan: "1576871337622-98d48d1cf531",
    cardigan_detail: "1434389677669-e08b4cac3105",
    denim: "1565084888279-aca607ecce0c",
    denim_detail: "1541099649105-f69ad21f3246",
    turtleneck: "1515886657613-9f3515b0c78f",
    turtleneck_detail: "1583743814966-8936f5b7be1a",
    tote: "1548036328-c9fa89d128fa",
    tote_detail: "1590874103328-eac38a683ce7"
  };
  var ICON_PATHS2 = {
    jacket: "M50 15 L38 25 L20 32 L14 55 L24 58 L28 40 L28 88 L72 88 L72 40 L76 58 L86 55 L80 32 L62 25 Z",
    trouser: "M30 15 H70 L74 88 H58 L52 40 L48 40 L42 88 H26 Z",
    sweater: "M50 15 C40 15 32 20 28 28 L14 38 L22 52 L30 46 L30 88 H70 V46 L78 52 L86 38 L72 28 C68 20 60 15 50 15 Z",
    dress: "M40 15 L34 30 L20 85 H80 L66 30 L60 15 C56 20 44 20 40 15 Z",
    shirt: "M42 15 L30 22 L18 34 L26 46 L34 40 L34 88 H66 V40 L74 46 L82 34 L70 22 L58 15 C54 19 46 19 42 15 Z",
    skirt: "M32 18 H68 L80 85 H20 Z",
    bag: "M30 35 H70 V85 H30 Z M38 35 V24 C38 18 62 18 62 24 V35"
  };
  var PRODUCTS2 = [
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
      stockBySize: { "S": 2, "M": 3, "L": 0, "XL": 2 },
      rating: 4.9,
      reviewsCount: 38,
      composition: "88% Italian virgin wool, 12% Mulberry silk lining (360 GSM)",
      origin: "Biella Mill, Northern Italy",
      fit: "Relaxed tailored cut; softly padded unstructured shoulder",
      modelInfo: `Model is 5'10" (178 cm) wearing Size M`,
      img: unsplash(PHOTOS.blazer, 600, 800, "entropy"),
      images: [
        unsplash(PHOTOS.blazer, 900, 1200, "entropy"),
        unsplash(PHOTOS.blazer_detail, 900, 1200, "entropy"),
        unsplash(PHOTOS.blazer_model, 900, 1200, "top")
      ],
      desc: "A single-breasted blazer with a soft, unstructured shoulder. Cut from a mid-weight wool blend that holds its shape without ever feeling stiff.",
      details: [
        "Natural horn-button front closure",
        "Concealed interior breast pocket with piped finish",
        "Double back vent for ease of motion",
        "Hand-finished lapel roll and edge stitching"
      ],
      washCare: [
        "Dry clean only by organic specialist",
        "Steam iron at low temperature",
        "Store on shaped cedar hanger away from direct sunlight"
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
      stockBySize: { "S": 3, "M": 4, "L": 2, "XL": 1 },
      rating: 4.8,
      reviewsCount: 24,
      composition: "100% Belgian heavy linen-twill (310 GSM)",
      origin: "Flanders, Belgium",
      fit: "High-rise, fluid wide leg, full length break over shoe",
      modelInfo: `Model is 5'9" (175 cm) wearing Size S`,
      img: unsplash(PHOTOS.trouser, 600, 800, "bottom"),
      images: [
        unsplash(PHOTOS.trouser, 900, 1200, "bottom"),
        unsplash(PHOTOS.trouser_detail, 900, 1200, "entropy"),
        unsplash(PHOTOS.trouser_look, 900, 1200, "top")
      ],
      desc: "High-rise and fully pleated, cut wide from the hip down for a fluid drape. Finished with a clean waistband and side pockets.",
      details: [
        "Deep front pleats with crisp hand-pressed crease",
        "Curved inner waistband with interior curtain facing",
        "Subtle side slant pockets and rear welt pockets",
        "Reinforced hem with 4cm turn-up allowance"
      ],
      washCare: [
        "Machine wash gentle 30\xB0C or hand wash",
        "Line dry in shade",
        "Warm iron while slightly damp for crisp pleats"
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
      stockBySize: { "S": 1, "M": 2, "L": 1, "XL": 0 },
      rating: 5,
      reviewsCount: 47,
      composition: "100% Extra-fine Geelong merino wool (7-gauge knit)",
      origin: "Highland Knits, Hawick, Scotland",
      fit: "Slightly oversized body, fitted ribbed collar and cuffs",
      modelInfo: `Model is 5'11" (180 cm) wearing Size M`,
      img: unsplash(PHOTOS.sweater, 600, 800, "entropy"),
      images: [
        unsplash(PHOTOS.sweater, 900, 1200, "entropy"),
        unsplash(PHOTOS.sweater_detail, 900, 1200, "entropy"),
        unsplash(PHOTOS.sweater_texture, 900, 1200, "center")
      ],
      desc: "Hand-finished cable knit in a heavyweight merino blend. Ribbed cuffs and hem keep it close, the rest is left roomy for layering.",
      details: [
        "Traditional Celtic cable gauge knit",
        "Zero itch factor \u2014 washed in natural alpine water",
        "Double-ribbed crew neckline that retains shape",
        "Seamless circular knit torso"
      ],
      washCare: [
        "Hand wash cold with wool wash liquid",
        "Do not wring; press gently in towel",
        "Dry flat on drying rack"
      ],
      reviews: [
        { author: "Ayush S.", rating: 5, date: "1 week ago", title: "Incredibly warm and soft", comment: "The Moss green is grounding and timeless. I wear it three times a week." },
        { author: "Prince Singh .", rating: 5, date: "3 weeks ago", title: "Heavyweight perfection", comment: "Substantial weight without feeling suffocating. True artisanal craftsmanship." }
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
      stockBySize: { "S": 2, "M": 1, "L": 1, "XL": 0 },
      rating: 4.9,
      reviewsCount: 19,
      composition: "100% Sandwashed Mulberry Silk (22 momme heavy grade)",
      origin: "Hangzhou Silk Atelier",
      fit: "Bias-cut silhouette that skims contours gracefully",
      modelInfo: `Model is 5'8" (173 cm) wearing Size S`,
      img: unsplash(PHOTOS.dress, 600, 800, "top"),
      images: [
        unsplash(PHOTOS.dress, 900, 1200, "top"),
        unsplash(PHOTOS.dress_detail, 900, 1200, "entropy"),
        unsplash(PHOTOS.dress_look, 900, 1200, "center")
      ],
      desc: "Bias-cut in washed mulberry silk so it moves with you rather than against you. Adjustable straps, side slit, fully lined.",
      details: [
        "Ultra-soft sandwashed matte peach-skin finish",
        "Adjustable fine silk rouleau shoulder straps",
        "Discreet 12-inch movement slit on left leg",
        "Self-lined upper bodice for coverage"
      ],
      washCare: [
        "Dry clean or hand wash cold with silk soap",
        "Do not tumble dry",
        "Iron on silk setting on reverse side"
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
      stockBySize: { "S": 2, "M": 3, "L": 1, "XL": 1 },
      rating: 4.7,
      reviewsCount: 15,
      composition: "100% Brushed Japanese Cotton Canvas (340 GSM)",
      origin: "Kurashiki, Okayama, Japan",
      fit: "Boxy utility silhouette, hip length with drawstring waist",
      modelInfo: `Model is 6'0" (183 cm) wearing Size L`,
      img: unsplash(PHOTOS.jacket, 600, 800, "top"),
      images: [
        unsplash(PHOTOS.jacket, 900, 1200, "top"),
        unsplash(PHOTOS.jacket_detail, 900, 1200, "entropy")
      ],
      desc: "A four-pocket field jacket in brushed cotton twill, garment-dyed for depth of colour. Built for everyday wear, not the field.",
      details: [
        "Four gusseted utility bellow pockets with hidden snaps",
        "Concealed antique brass zipper with storm flap",
        "Internal drawstring waist cincher",
        "Garment-washed for broken-in hand feel"
      ],
      washCare: [
        "Machine wash cold inside out",
        "Hang to dry",
        "Ages and patinas beautifully with wear"
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
      stockBySize: { "S": 4, "M": 5, "L": 3, "XL": 2 },
      rating: 4.8,
      reviewsCount: 52,
      composition: "100% Long-Staple Organic Cotton Oxford (180 GSM)",
      origin: "Coimbatore Mills, Tamil Nadu",
      fit: "Relaxed slouchy boyfriend fit with dropped shoulder",
      modelInfo: `Model is 5'9" (175 cm) wearing Size M`,
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
      washCare: [
        "Machine wash warm 40\xB0C",
        "Tumble dry low or line dry",
        "Warm iron while damp"
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
      stockBySize: { "S": 3, "M": 3, "L": 1, "XL": 1 },
      rating: 4.9,
      reviewsCount: 16,
      composition: "70% Viscose Crepe, 30% Lyocell (240 GSM)",
      origin: "Lyon Textile Guild, France",
      fit: "High waist, knife pleats, mid-calf hemline",
      modelInfo: `Model is 5'8" (173 cm) wearing Size S`,
      img: unsplash(PHOTOS.skirt, 600, 800, "bottom"),
      images: [
        unsplash(PHOTOS.skirt, 900, 1200, "bottom"),
        unsplash(PHOTOS.skirt_detail, 900, 1200, "entropy")
      ],
      desc: "Knife-pleated from waist to hem in a fluid crepe. Sits at the natural waist and swings freely when you move.",
      details: [
        "Permanent heat-set sharp pleats that withstand washing",
        "Comfort elasticated rear waistband with clean flat front",
        "Concealed side zipper with hook-and-eye closure",
        "Calf-length fluid drape"
      ],
      washCare: [
        "Hand wash cold or gentle machine cycle",
        "Drip dry hanging by waistband",
        "Do not flat iron over pleats"
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
      stockBySize: { "S": 0, "M": 1, "L": 1, "XL": 0 },
      rating: 5,
      reviewsCount: 22,
      composition: "100% Double-Faced Melton Wool (520 GSM heavy weight)",
      origin: "Prato Wool Mill, Tuscany",
      fit: "Generous tailored cocoon fit, below-knee length",
      modelInfo: `Model is 6'1" (185 cm) wearing Size L`,
      img: unsplash(PHOTOS.coat, 600, 800, "entropy"),
      images: [
        unsplash(PHOTOS.coat, 900, 1200, "entropy"),
        unsplash(PHOTOS.coat_detail, 900, 1200, "entropy"),
        unsplash(PHOTOS.coat_street, 900, 1200, "top")
      ],
      desc: "A floor-skimming overcoat in double-faced wool, generous enough to layer a knit underneath. Horn-effect buttons, deep welt pockets.",
      details: [
        "Double-faced hand-split seams for unlined lightness",
        "Deep fleece-lined handwarmer welt pockets",
        "Broad architectural notched lapels",
        "Concealed interior passport and ticket pocket"
      ],
      washCare: [
        "Specialist dry clean only",
        "Brush down with natural bristle garment brush"
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
      stockBySize: { "S": 3, "M": 4, "L": 2, "XL": 1 },
      rating: 4.7,
      reviewsCount: 31,
      composition: "90% Merino Rib, 10% Cashmere (14-gauge knit)",
      origin: "Inner Mongolia Sourced Wool",
      fit: "Cropped waist length, fitted body and sleeves",
      modelInfo: `Model is 5'7" (170 cm) wearing Size S`,
      img: unsplash(PHOTOS.cardigan, 600, 800, "bottom"),
      images: [
        unsplash(PHOTOS.cardigan, 900, 1200, "bottom"),
        unsplash(PHOTOS.cardigan_detail, 900, 1200, "entropy")
      ],
      desc: "A cropped, button-through cardigan in a fine merino rib. Sits at the waist, layers cleanly under coats or over slip dresses.",
      details: [
        "Fine 14-gauge rib knit that retains memory",
        "Natural corozo sustainable buttons",
        "Tapered long sleeves that scrunch nicely at wrist",
        "Clean deep V-neckline"
      ],
      washCare: [
        "Hand wash cold with wool wash liquid",
        "Dry flat away from sunlight"
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
      stockBySize: { "S": 3, "M": 4, "L": 3, "XL": 2 },
      rating: 4.9,
      reviewsCount: 44,
      composition: "100% Selvedge Cotton Denim (13.5 oz shuttle loom)",
      origin: "Kuroki Mills, Okayama, Japan",
      fit: "Mid-rise, straight leg from thigh to hem with gentle taper",
      modelInfo: `Model is 5'10" (178 cm) wearing Size M`,
      img: unsplash(PHOTOS.denim, 600, 800, "entropy"),
      images: [
        unsplash(PHOTOS.denim, 900, 1200, "entropy"),
        unsplash(PHOTOS.denim_detail, 900, 1200, "entropy")
      ],
      desc: "Rigid selvedge denim in a straight, mid-rise cut that breaks in around you. Built to fade honestly with wear.",
      details: [
        "Classic red-line selvedge visible on cuff turn-up",
        "Traditional button fly with solid copper shanks",
        "Chain-stitched waistband and hem",
        "Raw indigo that shapes to your natural silhouette"
      ],
      washCare: [
        "Wear frequently before first wash",
        "Wash inside out cold in gentle cycle",
        "Hang dry"
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
      stockBySize: { "S": 2, "M": 4, "L": 2, "XL": 1 },
      rating: 4.8,
      reviewsCount: 18,
      composition: "100% Superfine Merino Wool (19.5 micron, 160 GSM)",
      origin: "Biella Yarn, Italy",
      fit: "Slim second-skin layer, gentle non-choking roll neck",
      modelInfo: `Model is 5'9" (175 cm) wearing Size S`,
      img: unsplash(PHOTOS.turtleneck, 600, 800, "top"),
      images: [
        unsplash(PHOTOS.turtleneck, 900, 1200, "top"),
        unsplash(PHOTOS.turtleneck_detail, 900, 1200, "entropy")
      ],
      desc: "A featherlight second-skin turtleneck spun from Italian merino. Built to slide effortlessly under blazers, overcoats, and slip dresses.",
      details: [
        "Seamless tubular neck construction \u2014 comfortable and soft",
        "Extended cuffs for gentle hand warmth",
        "Naturally temperature-regulating and odour-resistant",
        "Machine-washable on gentle wool cycle"
      ],
      washCare: [
        "Machine wash cold on wool cycle",
        "Dry flat"
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
      stockBySize: { "S": 4, "M": 4, "L": 4, "XL": 4 },
      rating: 5,
      reviewsCount: 29,
      composition: "100% Full-Grain Vegetable Tanned Tuscan Cowhide",
      origin: "Tuscany Leather Consortium, Santa Croce",
      fit: "Dimensions: 40cm \xD7 34cm \xD7 14cm. Fits up to 16-inch laptop",
      modelInfo: "One size fits all",
      img: unsplash(PHOTOS.tote, 600, 800, "entropy"),
      images: [
        unsplash(PHOTOS.tote, 900, 1200, "entropy"),
        unsplash(PHOTOS.tote_detail, 900, 1200, "entropy")
      ],
      desc: "Handcrafted from full-grain vegetable-tanned leather that patinas with every voyage. Unlined raw interior with a tethered zip pouch.",
      details: [
        "Vegetable-tanned using natural chestnut and mimosa bark tannins",
        "Reinforced saddler's leather handles with 25cm shoulder drop",
        "Removable matching zipped coin and passport pouch",
        "Solid brass magnetic clip closure"
      ],
      washCare: [
        "Condition with natural beeswax or leather balm annually",
        "Keep away from direct water; blot gently if wet"
      ],
      reviews: [
        { author: "Kavya M.", rating: 5, date: "3 weeks ago", title: "Gorgeous leather smell", comment: "Smells incredible and holds everything I need for a full workday." }
      ]
    }
  ];
  var HERO_IMG2 = unsplash(PHOTOS.sweater, 1200, 1400, "entropy");
  var EDITORIAL_IMGS2 = {
    wool: unsplash(PHOTOS.sweater_texture, 600, 600, "entropy"),
    cotton: unsplash(PHOTOS.trouser_detail, 600, 600, "entropy"),
    silk: unsplash(PHOTOS.dress_detail, 600, 600, "entropy"),
    craft: unsplash(PHOTOS.blazer_model, 600, 800, "entropy")
  };
  var CATEGORIES2 = ["All", "Outerwear", "Tops", "Bottoms", "Dresses", "Knitwear", "Accessories"];
  var SIZES2 = ["S", "M", "L", "XL"];
  var SIZE_CHART2 = {
    metric: [
      { size: "S", chest: "86\u201391", waist: "71\u201376", hip: "91\u201396", length: "68" },
      { size: "M", chest: "96\u2013101", waist: "81\u201386", hip: "101\u2013106", length: "70" },
      { size: "L", chest: "106\u2013111", waist: "91\u201396", hip: "111\u2013116", length: "72" },
      { size: "XL", chest: "116\u2013121", waist: "101\u2013106", hip: "121\u2013126", length: "74" }
    ],
    imperial: [
      { size: "S", chest: "34\u201336", waist: "28\u201330", hip: "36\u201338", length: "26.8" },
      { size: "M", chest: "38\u201340", waist: "32\u201334", hip: "40\u201342", length: "27.5" },
      { size: "L", chest: "42\u201344", waist: "36\u201338", hip: "44\u201346", length: "28.3" },
      { size: "XL", chest: "46\u201348", waist: "40\u201342", hip: "48\u201350", length: "29.1" }
    ]
  };
  var PROMO_CODES2 = {
    "VESTA10": { discount: 0.1, desc: "10% off your entire order", min: 0 },
    "VESTA20": { discount: 0.2, desc: "20% off orders above \u20B97,000", min: 7e3 },
    "FREESHIP": { discount: 0, freeShipping: true, desc: "Complimentary shipping unlocked", min: 0 }
  };
  var ANNOUNCEMENTS2 = [
    "Complimentary standard shipping on all orders over \u20B94,000",
    "Autumn / Winter Atelier Batch 01 \u2014 limited to 50 pieces per style",
    "Use code VESTA10 for 10% off your first order",
    "Easy 14-day studio returns on unworn pieces"
  ];
  var money2 = (n) => "\u20B9" + (Number(n) || 0).toLocaleString("en-IN");
  if (typeof window !== "undefined") {
    window.unsplash = unsplash;
    window.PHOTOS = PHOTOS;
    window.ICON_PATHS = ICON_PATHS2;
    window.PRODUCTS = PRODUCTS2;
    window.HERO_IMG = HERO_IMG2;
    window.EDITORIAL_IMGS = EDITORIAL_IMGS2;
    window.CATEGORIES = CATEGORIES2;
    window.SIZES = SIZES2;
    window.SIZE_CHART = SIZE_CHART2;
    window.PROMO_CODES = PROMO_CODES2;
    window.ANNOUNCEMENTS = ANNOUNCEMENTS2;
    window.money = money2;
  }

  // js/components/common.jsx
  var { useState, useEffect, useRef } = React;
  function AnnouncementBar2({ onPromoClick }) {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev2) => (prev2 + 1) % ANNOUNCEMENTS.length);
      }, 4500);
      return () => clearInterval(timer);
    }, []);
    const next = () => setIndex((prev2) => (prev2 + 1) % ANNOUNCEMENTS.length);
    const prev = () => setIndex((prev2) => (prev2 - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
    return /* @__PURE__ */ React.createElement("div", { className: "announcement-bar" }, /* @__PURE__ */ React.createElement("button", { className: "announcement-nav-btn", onClick: prev, "aria-label": "Previous announcement" }, "\u2039"), /* @__PURE__ */ React.createElement("div", { style: { cursor: "pointer" }, onClick: () => onPromoClick && onPromoClick("VESTA10") }, /* @__PURE__ */ React.createElement("span", null, ANNOUNCEMENTS[index]), ANNOUNCEMENTS[index].includes("VESTA10") && /* @__PURE__ */ React.createElement("span", { className: "gold", style: { marginLeft: 6, textDecoration: "underline" } }, "Apply code")), /* @__PURE__ */ React.createElement("button", { className: "announcement-nav-btn", onClick: next, "aria-label": "Next announcement" }, "\u203A"));
  }
  function IconFallback({ icon, color }) {
    const path = ICON_PATHS && ICON_PATHS[icon] || ICON_PATHS.jacket;
    return /* @__PURE__ */ React.createElement("div", { className: "fallback" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", fill: "none", stroke: color, strokeWidth: "2.3", strokeLinejoin: "round", strokeLinecap: "round" }, /* @__PURE__ */ React.createElement("path", { d: path })));
  }
  function ProductImage2({ product, className, imageIndex = 0 }) {
    const [errored, setErrored] = useState(false);
    const iconColor = product && product.light ? "#EDEAE1" : "#1B1B18";
    const bg = product && product.bg || "#2E2A26";
    const icon = product && product.icon || "jacket";
    const src = product && product.images && product.images[imageIndex] || product && product.img || "";
    if (errored || !src) {
      return /* @__PURE__ */ React.createElement("div", { className, style: { background: bg } }, /* @__PURE__ */ React.createElement(IconFallback, { icon, color: iconColor }));
    }
    return /* @__PURE__ */ React.createElement("div", { className, style: { background: bg } }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src,
        alt: product ? product.name : "Product",
        loading: "lazy",
        onError: () => setErrored(true)
      }
    ));
  }
  function Card2({ product, onOpen, onQuickView, isWishlisted, onToggleWishlist }) {
    const flagClass = product.flag === "Bestseller" ? "bestseller" : product.flag === "New" ? "new" : "";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "card",
        onClick: () => onOpen(product.id),
        role: "link",
        tabIndex: 0,
        onKeyDown: (e) => {
          if (e.key === "Enter") onOpen(product.id);
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "card-media" }, product.flag && /* @__PURE__ */ React.createElement("div", { className: `card-flag ${flagClass}` }, product.flag), /* @__PURE__ */ React.createElement(
        "button",
        {
          className: `card-wishlist-btn ${isWishlisted ? "active" : ""}`,
          onClick: (e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          },
          title: isWishlisted ? "Remove from wishlist" : "Save to wishlist",
          "aria-label": "Wishlist"
        },
        /* @__PURE__ */ React.createElement("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: isWishlisted ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }))
      ), /* @__PURE__ */ React.createElement(ProductImage2, { product, className: "" }), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "card-quickview-btn",
          onClick: (e) => {
            e.stopPropagation();
            onQuickView(product);
          }
        },
        "Quick View"
      )),
      /* @__PURE__ */ React.createElement("div", { className: "card-title" }, product.name),
      /* @__PURE__ */ React.createElement("div", { className: "card-meta" }, /* @__PURE__ */ React.createElement("span", { className: "card-cat" }, product.cat, " \u2014 ", product.color), /* @__PURE__ */ React.createElement("span", { className: "price-tag" }, money(product.price))),
      product.rating && /* @__PURE__ */ React.createElement("div", { className: "card-rating" }, /* @__PURE__ */ React.createElement("span", { className: "star" }, "\u2605"), /* @__PURE__ */ React.createElement("span", null, product.rating), /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.6 } }, "(", product.reviewsCount, ")"))
    );
  }
  function Nav2({
    page,
    cartCount,
    wishCount,
    go,
    goCategory,
    onOpenCart,
    onOpenWishlist,
    onOpenSearch,
    onOpenMobileMenu
  }) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return /* @__PURE__ */ React.createElement("nav", { className: `nav ${scrolled ? "scrolled" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "nav-inner" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "mobile-menu-btn",
        onClick: onOpenMobileMenu,
        "aria-label": "Open mobile menu"
      },
      /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }))
    ), /* @__PURE__ */ React.createElement("a", { className: "logo", onClick: () => go("home") }, "VE", /* @__PURE__ */ React.createElement("span", null, "S"), "TA")), /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), className: page === "home" ? "active" : "" }, "Home"), /* @__PURE__ */ React.createElement("a", { onClick: () => go("shop"), className: page === "shop" ? "active" : "" }, "Shop All"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Outerwear") }, "Outerwear"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Knitwear") }, "Knitwear"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Dresses") }, "Dresses"), /* @__PURE__ */ React.createElement("a", { onClick: () => go("orders") }, "Orders")), /* @__PURE__ */ React.createElement("div", { className: "nav-actions" }, /* @__PURE__ */ React.createElement("button", { className: "nav-icon-btn", onClick: onOpenSearch, title: "Search pieces", "aria-label": "Search" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "8" }), /* @__PURE__ */ React.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }))), /* @__PURE__ */ React.createElement("button", { className: "nav-icon-btn", onClick: onOpenWishlist, title: "View Saved Pieces", "aria-label": "Wishlist" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })), wishCount > 0 && /* @__PURE__ */ React.createElement("span", { className: "wish-badge" }, wishCount)), /* @__PURE__ */ React.createElement("button", { className: "nav-icon-btn", onClick: onOpenCart, title: "View Bag", "aria-label": "Cart" }, /* @__PURE__ */ React.createElement("span", { style: { display: "none" } }, "Cart"), /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React.createElement("path", { d: "M16 10a4 4 0 0 1-8 0" })), /* @__PURE__ */ React.createElement("span", { className: "cart-badge" }, cartCount)))));
  }
  function MobileMenuDrawer2({ isOpen, onClose, go, goCategory, onOpenSearch, wishCount }) {
    if (!isOpen) return null;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `drawer-backdrop ${isOpen ? "show" : ""}`, onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: `drawer-panel left ${isOpen ? "show" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "drawer-header" }, /* @__PURE__ */ React.createElement("div", { className: "logo" }, "VE", /* @__PURE__ */ React.createElement("span", null, "S"), "TA"), /* @__PURE__ */ React.createElement("button", { className: "drawer-close-btn", onClick: onClose, "aria-label": "Close menu" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "drawer-body" }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn ghost",
        style: { width: "100%", justifyContent: "center" },
        onClick: () => {
          onClose();
          onOpenSearch();
        }
      },
      "Search collection"
    )), /* @__PURE__ */ React.createElement("div", { className: "mobile-nav-list" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "mobile-nav-link",
        onClick: () => {
          go("home");
          onClose();
        }
      },
      "Home ",
      /* @__PURE__ */ React.createElement("span", null, "\u2192")
    ), /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "mobile-nav-link",
        onClick: () => {
          go("shop");
          onClose();
        }
      },
      "Shop All (",
      PRODUCTS.length,
      ") ",
      /* @__PURE__ */ React.createElement("span", null, "\u2192")
    ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginTop: 10, marginBottom: 8 } }, "Categories"), /* @__PURE__ */ React.createElement("div", { className: "mobile-nav-cats" }, CATEGORIES.filter((c) => c !== "All").map((c) => {
      const count = PRODUCTS.filter((p) => p.cat === c).length;
      return /* @__PURE__ */ React.createElement(
        "a",
        {
          key: c,
          onClick: () => {
            goCategory(c);
            onClose();
          }
        },
        c,
        " ",
        /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.6, fontSize: 12 } }, "(", count, ")")
      );
    }))), /* @__PURE__ */ React.createElement(
      "a",
      {
        className: "mobile-nav-link",
        onClick: () => {
          go("orders");
          onClose();
        }
      },
      "Track Orders ",
      /* @__PURE__ */ React.createElement("span", null, "\u2192")
    ))), /* @__PURE__ */ React.createElement("div", { className: "drawer-footer" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8 } }, "Vesta Atelier Studio"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 } }, "Small batches cut in natural cloth. For assistance: ", /* @__PURE__ */ React.createElement("a", { href: "mailto:hello@vesta.studio", style: { textDecoration: "underline" } }, "hello@vesta.studio")))));
  }
  function CartDrawer2({
    isOpen,
    onClose,
    cart,
    updateQty,
    removeItem,
    totals,
    promo,
    setPromo,
    promoApplied,
    applyPromo,
    removePromo,
    go
  }) {
    const cartCount = cart.reduce((s, c) => s + c.qty, 0);
    const freeShippingThreshold = 4e3;
    const neededForFreeShipping = Math.max(0, freeShippingThreshold - totals.subtotal);
    const freeShippingProgress = Math.min(100, Math.round(totals.subtotal / freeShippingThreshold * 100));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `drawer-backdrop ${isOpen ? "show" : ""}`, onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: `drawer-panel right ${isOpen ? "show" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "drawer-header" }, /* @__PURE__ */ React.createElement("h3", null, "Your Bag (", cartCount, ")"), /* @__PURE__ */ React.createElement("button", { className: "drawer-close-btn", onClick: onClose, "aria-label": "Close cart" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "shipping-meter", style: { margin: "16px 28px 0" } }, /* @__PURE__ */ React.createElement("div", { className: "shipping-meter-text" }, neededForFreeShipping === 0 ? /* @__PURE__ */ React.createElement("span", { style: { color: "var(--pine)", fontWeight: 600 } }, "\u2713 Complimentary Standard Shipping Unlocked") : /* @__PURE__ */ React.createElement("span", null, "Add ", /* @__PURE__ */ React.createElement("strong", null, money(neededForFreeShipping)), " more for Free Shipping")), /* @__PURE__ */ React.createElement("div", { className: "shipping-meter-bar" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `shipping-meter-fill ${neededForFreeShipping === 0 ? "completed" : ""}`,
        style: { width: `${freeShippingProgress}%` }
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "drawer-body" }, cart.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "empty-state", style: { padding: "60px 0" } }, /* @__PURE__ */ React.createElement("p", { style: { marginBottom: 16 } }, "Your bag is currently empty."), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn",
        onClick: () => {
          onClose();
          go("shop");
        }
      },
      "Shop Collection"
    )) : cart.map((item, i) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return null;
      return /* @__PURE__ */ React.createElement("div", { className: "drawer-cart-item", key: `${item.id}-${item.size}-${i}` }, /* @__PURE__ */ React.createElement("div", { className: "drawer-cart-media" }, /* @__PURE__ */ React.createElement(ProductImage2, { product: p, className: "" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Fraunces, serif", fontSize: 16, marginBottom: 4 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-soft)", marginBottom: 8, fontFamily: "IBM Plex Mono, monospace" } }, p.color, " \xB7 Size ", item.size), /* @__PURE__ */ React.createElement("div", { className: "qty-row", style: { transform: "scale(0.85)", transformOrigin: "left center" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => updateQty(i, -1) }, "\u2212"), /* @__PURE__ */ React.createElement("span", null, item.qty), /* @__PURE__ */ React.createElement("button", { onClick: () => updateQty(i, 1) }, "+"))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { className: "price-tag", style: { marginBottom: 8 } }, money(p.price * item.qty)), /* @__PURE__ */ React.createElement("button", { className: "cart-item-remove", onClick: () => removeItem(i) }, "Remove")));
    })), cart.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "drawer-footer" }, promoApplied ? /* @__PURE__ */ React.createElement("div", { className: "promo-applied-badge" }, /* @__PURE__ */ React.createElement("span", null, "Code ", promo.toUpperCase(), " applied"), /* @__PURE__ */ React.createElement("button", { onClick: removePromo, style: { textDecoration: "underline" } }, "Remove")) : /* @__PURE__ */ React.createElement("div", { className: "promo-row", style: { margin: "0 0 16px" } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Promo (e.g. VESTA10)",
        value: promo,
        onChange: (e) => setPromo(e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: applyPromo }, "Apply")), /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Subtotal"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, money(totals.subtotal))), totals.discount > 0 && /* @__PURE__ */ React.createElement("div", { className: "summary-row", style: { color: "var(--pine)", fontWeight: 500 } }, /* @__PURE__ */ React.createElement("span", null, "Discount"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "\u2212", money(totals.discount))), /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Shipping"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, totals.shipping === 0 ? "Free" : money(totals.shipping))), /* @__PURE__ */ React.createElement("div", { className: "summary-row total" }, /* @__PURE__ */ React.createElement("span", null, "Total"), /* @__PURE__ */ React.createElement("span", null, money(totals.total))), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn full",
        style: { marginTop: 18 },
        onClick: () => {
          onClose();
          go("checkout");
        }
      },
      "Proceed to Checkout"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn ghost full",
        style: { marginTop: 10 },
        onClick: () => {
          onClose();
          go("cart");
        }
      },
      "View Full Cart"
    ))));
  }
  function WishlistDrawer2({ isOpen, onClose, wishlist, onRemove, onMoveToCart, go }) {
    const wishProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: `drawer-backdrop ${isOpen ? "show" : ""}`, onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: `drawer-panel right ${isOpen ? "show" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "drawer-header" }, /* @__PURE__ */ React.createElement("h3", null, "Saved Pieces (", wishProducts.length, ")"), /* @__PURE__ */ React.createElement("button", { className: "drawer-close-btn", onClick: onClose, "aria-label": "Close wishlist" }, "\u2715")), /* @__PURE__ */ React.createElement("div", { className: "drawer-body" }, wishProducts.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "empty-state", style: { padding: "60px 0" } }, /* @__PURE__ */ React.createElement("p", { style: { marginBottom: 16 } }, "No pieces saved yet."), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn",
        onClick: () => {
          onClose();
          go("shop");
        }
      },
      "Explore Collection"
    )) : wishProducts.map((p) => /* @__PURE__ */ React.createElement("div", { className: "drawer-cart-item", key: p.id }, /* @__PURE__ */ React.createElement("div", { className: "drawer-cart-media" }, /* @__PURE__ */ React.createElement(ProductImage2, { product: p, className: "" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Fraunces, serif", fontSize: 16, marginBottom: 4 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-soft)", marginBottom: 8 } }, p.cat, " \u2014 ", p.color), /* @__PURE__ */ React.createElement("div", { className: "price-tag" }, money(p.price))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn",
        style: { padding: "8px 14px", fontSize: 11 },
        onClick: () => {
          onMoveToCart(p.id, "M");
          onRemove(p.id);
        }
      },
      "Move to Bag"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "cart-item-remove",
        onClick: () => onRemove(p.id)
      },
      "Remove"
    )))))));
  }
  function QuickViewModal2({ product, isOpen, onClose, onAddToCart, onOpenFull }) {
    const [size, setSize] = useState("M");
    const [qty, setQty] = useState(1);
    const [imgIdx, setImgIdx] = useState(0);
    useEffect(() => {
      setSize("M");
      setQty(1);
      setImgIdx(0);
    }, [product]);
    if (!isOpen || !product) return null;
    return /* @__PURE__ */ React.createElement("div", { className: `modal-overlay ${isOpen ? "show" : ""}`, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close quick view" }, "\u2715"), /* @__PURE__ */ React.createElement("div", { className: "quick-view-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "quick-view-media" }, /* @__PURE__ */ React.createElement(ProductImage2, { product, className: "", imageIndex: imgIdx })), product.images && product.images.length > 1 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 10 } }, product.images.map((img, idx) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: idx,
        style: {
          width: 50,
          height: 60,
          border: imgIdx === idx ? "2px solid var(--pine)" : "1px solid var(--paper-line)",
          cursor: "pointer",
          overflow: "hidden"
        },
        onClick: () => setImgIdx(idx)
      },
      /* @__PURE__ */ React.createElement("img", { src: img, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } })
    )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 6 } }, product.cat), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 28, marginBottom: 8 } }, product.name), /* @__PURE__ */ React.createElement("div", { className: "price-tag", style: { fontSize: 20, marginBottom: 14 } }, money(product.price)), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 20 } }, product.desc), /* @__PURE__ */ React.createElement("div", { className: "option-block" }, /* @__PURE__ */ React.createElement("div", { className: "option-label" }, /* @__PURE__ */ React.createElement("span", null, "Select Size")), /* @__PURE__ */ React.createElement("div", { className: "size-row" }, SIZES.map((s) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s,
        className: `size-chip ${s === size ? "selected" : ""}`,
        onClick: () => setSize(s)
      },
      s
    )))), /* @__PURE__ */ React.createElement("div", { className: "option-block" }, /* @__PURE__ */ React.createElement("div", { className: "option-label" }, /* @__PURE__ */ React.createElement("span", null, "Quantity")), /* @__PURE__ */ React.createElement("div", { className: "qty-row" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setQty((q) => Math.max(1, q - 1)) }, "\u2212"), /* @__PURE__ */ React.createElement("span", null, qty), /* @__PURE__ */ React.createElement("button", { onClick: () => setQty((q) => q + 1) }, "+"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginTop: 24 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn full",
        onClick: () => {
          onAddToCart(product.id, size, qty);
          onClose();
        }
      },
      "Add to Bag"
    )), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 18, textAlign: "center" } }, /* @__PURE__ */ React.createElement(
      "a",
      {
        style: { fontSize: 12, textDecoration: "underline", color: "var(--ink-soft)", fontFamily: "IBM Plex Mono, monospace" },
        onClick: () => {
          onClose();
          onOpenFull(product.id);
        }
      },
      "View full product specifications \u2192"
    ))))));
  }
  function SizeGuideModal2({ isOpen, onClose }) {
    const [unit, setUnit] = useState("metric");
    if (!isOpen) return null;
    return /* @__PURE__ */ React.createElement("div", { className: `modal-overlay ${isOpen ? "show" : ""}`, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal-content", style: { maxWidth: 620, padding: 36 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close size guide" }, "\u2715"), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8 } }, "Tailoring & Fit"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 28, marginBottom: 12 } }, "Size Guide"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: "var(--ink-soft)", marginBottom: 20 } }, "Our pieces are cut for an effortless, relaxed drape. If you prefer a tailored, closer silhouette, we recommend sizing down."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `cat-pill ${unit === "metric" ? "active" : ""}`,
        onClick: () => setUnit("metric")
      },
      "Centimetres (cm)"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `cat-pill ${unit === "imperial" ? "active" : ""}`,
        onClick: () => setUnit("imperial")
      },
      "Inches (in)"
    )), /* @__PURE__ */ React.createElement("table", { className: "size-table" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Size"), /* @__PURE__ */ React.createElement("th", null, "Chest"), /* @__PURE__ */ React.createElement("th", null, "Waist"), /* @__PURE__ */ React.createElement("th", null, "Hip"), /* @__PURE__ */ React.createElement("th", null, "Length"))), /* @__PURE__ */ React.createElement("tbody", null, SIZE_CHART[unit].map((row) => /* @__PURE__ */ React.createElement("tr", { key: row.size }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("strong", null, row.size)), /* @__PURE__ */ React.createElement("td", null, row.chest), /* @__PURE__ */ React.createElement("td", null, row.waist), /* @__PURE__ */ React.createElement("td", null, row.hip), /* @__PURE__ */ React.createElement("td", null, row.length))))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20, fontSize: 13, color: "var(--ink-soft)", borderTop: "1px solid var(--paper-line)", paddingTop: 14 } }, /* @__PURE__ */ React.createElement("strong", null, "Need personal fit advice?"), " Speak with our studio stylist at ", /* @__PURE__ */ React.createElement("a", { href: "mailto:hello@vesta.studio", style: { textDecoration: "underline" } }, "hello@vesta.studio"), ".")));
  }
  function SearchModal2({ isOpen, onClose, onSelectProduct }) {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
      if (isOpen) {
        setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
      } else {
        setQuery("");
      }
    }, [isOpen]);
    if (!isOpen) return null;
    const matches = query.trim() === "" ? [] : PRODUCTS.filter((p) => {
      const q = query.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.color.toLowerCase().includes(q) || p.composition && p.composition.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    });
    return /* @__PURE__ */ React.createElement("div", { className: `modal-overlay ${isOpen ? "show" : ""}`, onClick: onClose }, /* @__PURE__ */ React.createElement("div", { className: "modal-content search-modal-content", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "modal-close-btn", onClick: onClose, "aria-label": "Close search" }, "\u2715"), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 12 } }, "Search Atelier Collection"), /* @__PURE__ */ React.createElement("div", { className: "search-input-wrap" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: inputRef,
        type: "text",
        placeholder: "Search by cloth, cut, category...",
        value: query,
        onChange: (e) => setQuery(e.target.value)
      }
    )), query.trim() === "" ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 10 } }, "Suggested searches"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, ["Blazer", "Knitwear", "Mulberry Silk", "Wide-Leg", "Denim", "Overcoat"].map((s) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: s,
        className: "cat-pill",
        onClick: () => setQuery(s)
      },
      s
    )))) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 14 } }, matches.length, " ", matches.length === 1 ? "piece" : "pieces", " found"), matches.length === 0 ? /* @__PURE__ */ React.createElement("p", { style: { color: "var(--ink-soft)", fontSize: 14 } }, 'No matches found for "', query, '". Try searching for wool, blazer, or silk.') : /* @__PURE__ */ React.createElement("div", { className: "search-results-list" }, matches.map((p) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: p.id,
        className: "search-result-item",
        onClick: () => {
          onClose();
          onSelectProduct(p.id);
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "search-result-thumb" }, /* @__PURE__ */ React.createElement(ProductImage2, { product: p, className: "" })),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Fraunces, serif", fontSize: 16 } }, p.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "var(--ink-soft)" } }, p.cat, " \u2014 ", p.color)),
      /* @__PURE__ */ React.createElement("div", { className: "price-tag" }, money(p.price))
    ))))));
  }
  function Footer2({ go, goCategory, notify }) {
    const info = (label, message) => /* @__PURE__ */ React.createElement("a", { onClick: () => notify(message) }, label);
    return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "footer-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "logo", style: { marginBottom: 14 } }, "VE", /* @__PURE__ */ React.createElement("span", null, "S"), "TA"), /* @__PURE__ */ React.createElement("p", { style: { maxWidth: 280, color: "var(--ink-soft)", lineHeight: 1.6 } }, "Considered clothing, worn often. Small batches cut in genuine natural cloth, tailored to outlast fleeting seasons.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Shop"), /* @__PURE__ */ React.createElement("a", { onClick: () => go("shop") }, "All pieces (", PRODUCTS.length, ")"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Outerwear") }, "Outerwear"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Knitwear") }, "Knitwear"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Dresses") }, "Dresses"), /* @__PURE__ */ React.createElement("a", { onClick: () => goCategory("Bottoms") }, "Bottoms")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Atelier & Care"), info("Shipping Policy", "Complimentary standard delivery on all orders over \u20B94,000 \xB7 3\u20135 days dispatch"), info("Returns & Exchanges", "Easy 14-day studio returns on unwashed and unworn pieces with tags"), info("Size Guidance", "Full measurements available on each product page or in our Size Guide"), /* @__PURE__ */ React.createElement("a", { onClick: () => go("orders") }, "Track Orders")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", null, "Studio"), info("Our Philosophy", "Craft first: sourced from long-standing mills, cut by hand, finished with care."), info("Fabric Provenance", "Every batch links to its origin mill in Italy, Belgium, Japan, and Scotland."), /* @__PURE__ */ React.createElement("a", { href: "mailto:hello@vesta.studio" }, "Contact Concierge"))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 2026 VESTA Studio Enterprises \xB7 All Rights Reserved"), /* @__PURE__ */ React.createElement("span", { className: "credit" }, "Designed and built by ", /* @__PURE__ */ React.createElement("span", { className: "gold" }, "Sonali"), " \u2014 AI E-Commerce Design Challenge"))));
  }
  function Toast2({ message, show }) {
    return /* @__PURE__ */ React.createElement("div", { className: `add-toast ${show ? "show" : ""}` }, /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20 6L9 17l-5-5" })), /* @__PURE__ */ React.createElement("span", null, message));
  }
  if (typeof window !== "undefined") {
    window.AnnouncementBar = AnnouncementBar2;
    window.IconFallback = IconFallback;
    window.ProductImage = ProductImage2;
    window.Card = Card2;
    window.Nav = Nav2;
    window.MobileMenuDrawer = MobileMenuDrawer2;
    window.CartDrawer = CartDrawer2;
    window.WishlistDrawer = WishlistDrawer2;
    window.QuickViewModal = QuickViewModal2;
    window.SizeGuideModal = SizeGuideModal2;
    window.SearchModal = SearchModal2;
    window.Footer = Footer2;
    window.Toast = Toast2;
  }

  // js/components/pages.jsx
  var { useState: useState2, useEffect: useEffect2, useMemo, useRef: useRef2 } = React;
  function HomePage2({ openProduct, openQuickView, goCategory, go, isWishlisted, onToggleWishlist, onPromoClick }) {
    const bestsellers = PRODUCTS.filter((p) => p.flag === "Bestseller").slice(0, 4);
    const [newsletterEmail, setNewsletterEmail] = useState2("");
    const [newsletterSubscribed, setNewsletterSubscribed] = useState2(false);
    const handleSubscribe = (e) => {
      e.preventDefault();
      if (newsletterEmail.includes("@")) {
        setNewsletterSubscribed(true);
        setNewsletterEmail("");
      }
    };
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("section", { className: "hero" }, /* @__PURE__ */ React.createElement("div", { className: "hero-grid" }, /* @__PURE__ */ React.createElement("div", { className: "hero-copy" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 18 } }, "Autumn collection \u2014 Batch 01"), /* @__PURE__ */ React.createElement("h1", null, "Considered", /* @__PURE__ */ React.createElement("br", null), "clothing,", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", null, "worn often.")), /* @__PURE__ */ React.createElement("p", null, "Twelve pieces built to outlast a season. No noise, no filler \u2014 just cut, cloth, and colour that hold up on the second wear and the fiftieth."), /* @__PURE__ */ React.createElement("div", { className: "hero-buttons" }, /* @__PURE__ */ React.createElement("button", { className: "tag-btn", onClick: () => go("shop") }, "Shop the collection"), /* @__PURE__ */ React.createElement("button", { className: "tag-btn ghost", onClick: () => goCategory("Outerwear") }, "Explore Outerwear"))), /* @__PURE__ */ React.createElement("div", { className: "hero-panel", onClick: () => openProduct(3), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: HERO_IMG, alt: "Cable knit sweater, look 04", loading: "eager" }), /* @__PURE__ */ React.createElement("div", { className: "hero-label" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Look 04 \xB7 Featured"), /* @__PURE__ */ React.createElement("div", null, "The Cable Knit Sweater in Moss"))))), /* @__PURE__ */ React.createElement("div", { className: "strip" }, /* @__PURE__ */ React.createElement("div", { className: "strip-inner" }, /* @__PURE__ */ React.createElement("div", { className: "strip-item" }, "Complimentary shipping over \u20B94,000"), /* @__PURE__ */ React.createElement("div", { className: "strip-item" }, "Crafted in small batches"), /* @__PURE__ */ React.createElement("div", { className: "strip-item" }, "14-day studio returns"), /* @__PURE__ */ React.createElement("div", { className: "strip-item" }, "Pay via Card, UPI or COD"))), /* @__PURE__ */ React.createElement("section", { className: "section wrap" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 6 } }, "Curated essentials"), /* @__PURE__ */ React.createElement("h2", null, "Bestsellers")), /* @__PURE__ */ React.createElement("a", { onClick: () => go("shop"), className: "link-btn" }, "View full collection (", PRODUCTS.length, ") \u2192")), /* @__PURE__ */ React.createElement("div", { className: "grid" }, bestsellers.map((p) => /* @__PURE__ */ React.createElement(
      Card,
      {
        key: p.id,
        product: p,
        onOpen: openProduct,
        onQuickView: openQuickView,
        isWishlisted: isWishlisted(p.id),
        onToggleWishlist
      }
    )))), /* @__PURE__ */ React.createElement("section", { className: "editorial" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "var(--gold-soft)", marginBottom: 16 } }, "The Atelier & Cloth"), /* @__PURE__ */ React.createElement("h2", null, "Fabric first, always."), /* @__PURE__ */ React.createElement("p", null, "Every VESTA piece starts with the cloth, not the sketch. Brushed wool, heavy Belgian linen, raw mulberry silk \u2014 sourced from heritage mills we've collaborated with for years, then tailored to drape naturally with the body without pulling tight."), /* @__PURE__ */ React.createElement("button", { className: "tag-btn gold", onClick: () => go("shop") }, "Discover Materials")), /* @__PURE__ */ React.createElement("div", { className: "editorial-media" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: EDITORIAL_IMGS.wool, alt: "Heavy wool weave", loading: "lazy" }), /* @__PURE__ */ React.createElement("span", { className: "editorial-tag" }, "Merino Wool")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: EDITORIAL_IMGS.cotton, alt: "Organic linen twill", loading: "lazy" }), /* @__PURE__ */ React.createElement("span", { className: "editorial-tag" }, "Belgian Linen")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: EDITORIAL_IMGS.silk, alt: "Mulberry silk", loading: "lazy" }), /* @__PURE__ */ React.createElement("span", { className: "editorial-tag" }, "Mulberry Silk"))))), /* @__PURE__ */ React.createElement("section", { className: "section wrap" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 6 } }, "Explore by silhouette"), /* @__PURE__ */ React.createElement("h2", null, "Shop by category"))), /* @__PURE__ */ React.createElement("div", { className: "grid", style: { gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" } }, CATEGORIES.filter((c) => c !== "All").map((c) => {
      const sample = PRODUCTS.find((p) => p.cat === c) || PRODUCTS[0];
      const count = PRODUCTS.filter((p) => p.cat === c).length;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "category-card",
          key: c,
          onClick: () => goCategory(c)
        },
        /* @__PURE__ */ React.createElement("div", { className: "card-media" }, /* @__PURE__ */ React.createElement(ProductImage, { product: sample, className: "" })),
        /* @__PURE__ */ React.createElement("div", { className: "cat-title" }, c),
        /* @__PURE__ */ React.createElement("div", { className: "cat-count" }, count, " ", count === 1 ? "piece" : "pieces")
      );
    }))), /* @__PURE__ */ React.createElement("section", { className: "press-strip" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "press-quote" }, "\u201CVESTA redefines everyday luxury tailoring \u2014 clean architectural silhouettes cut from cloth that only gets better with time.\u201D"), /* @__PURE__ */ React.createElement("div", { className: "press-author" }, "The Fashion Journal \xB7 Studio Edit 2026"))), /* @__PURE__ */ React.createElement("section", { className: "newsletter-strip" }, /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "newsletter-box" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8 } }, "Studio Dispatch"), /* @__PURE__ */ React.createElement("h3", null, "Join the Atelier Ledger"), /* @__PURE__ */ React.createElement("p", null, "Receive early access to small-batch seasonal releases, archive sales, and fabric provenance essays."), newsletterSubscribed ? /* @__PURE__ */ React.createElement("div", { style: { color: "var(--pine)", fontFamily: "IBM Plex Mono, monospace", fontSize: 13, fontWeight: 500 } }, "\u2713 Thank you. You are on the atelier dispatch list.") : /* @__PURE__ */ React.createElement("form", { className: "newsletter-form", onSubmit: handleSubscribe }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        placeholder: "Enter your email address",
        required: true,
        value: newsletterEmail,
        onChange: (e) => setNewsletterEmail(e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "tag-btn" }, "Subscribe"))))));
  }
  function ShopPage2({
    openProduct,
    openQuickView,
    filters,
    setFilters,
    sort,
    setSort,
    isWishlisted,
    onToggleWishlist
  }) {
    const [mobileFilterOpen, setMobileFilterOpen] = useState2(false);
    const [searchQuery, setSearchQuery] = useState2("");
    const toggleCat = (c) => {
      setFilters((f) => {
        const next = new Set(f.cats);
        next.has(c) ? next.delete(c) : next.add(c);
        return { ...f, cats: next };
      });
    };
    const setCategorySingle = (c) => {
      if (c === "All") {
        setFilters((f) => ({ ...f, cats: /* @__PURE__ */ new Set() }));
      } else {
        setFilters((f) => ({ ...f, cats: /* @__PURE__ */ new Set([c]) }));
      }
    };
    const toggleColor = (col) => {
      setFilters((f) => {
        const next = new Set(f.colors || []);
        next.has(col) ? next.delete(col) : next.add(col);
        return { ...f, colors: next };
      });
    };
    const setPrice = (key) => setFilters((f) => ({ ...f, price: f.price === key ? null : key }));
    const toggleFlag = (flag) => setFilters((f) => ({ ...f, flag: f.flag === flag ? null : flag }));
    const clearFilters = () => {
      setFilters({ cats: /* @__PURE__ */ new Set(), colors: /* @__PURE__ */ new Set(), price: null, flag: null });
      setSearchQuery("");
    };
    const availableColors = useMemo(() => {
      const set = /* @__PURE__ */ new Set();
      PRODUCTS.forEach((p) => {
        if (p.color) set.add(p.color);
      });
      return Array.from(set);
    }, []);
    const list = useMemo(() => {
      let l = PRODUCTS.slice();
      if (filters.cats && filters.cats.size > 0) {
        l = l.filter((p) => filters.cats.has(p.cat));
      }
      if (filters.colors && filters.colors.size > 0) {
        l = l.filter((p) => filters.colors.has(p.color));
      }
      if (filters.price === "low") l = l.filter((p) => p.price < 3500);
      if (filters.price === "mid") l = l.filter((p) => p.price >= 3500 && p.price <= 6e3);
      if (filters.price === "high") l = l.filter((p) => p.price > 6e3);
      if (filters.flag) l = l.filter((p) => p.flag === filters.flag);
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        l = l.filter(
          (p) => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.color.toLowerCase().includes(q) || p.composition && p.composition.toLowerCase().includes(q)
        );
      }
      if (sort === "low") l.sort((a, b) => a.price - b.price);
      if (sort === "high") l.sort((a, b) => b.price - a.price);
      if (sort === "rating") l.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      if (sort === "new") l.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      return l;
    }, [filters, sort, searchQuery]);
    const priceOpts = [
      { key: "low", label: "Under \u20B93,500" },
      { key: "mid", label: "\u20B93,500 \u2013 \u20B96,000" },
      { key: "high", label: "Above \u20B96,000" }
    ];
    const hasActiveFilters = filters.cats && filters.cats.size > 0 || filters.colors && filters.colors.size > 0 || filters.price || filters.flag || searchQuery.trim().length > 0;
    const currentCategoryPill = filters.cats && filters.cats.size === 1 ? Array.from(filters.cats)[0] : filters.cats && filters.cats.size === 0 ? "All" : null;
    const filterSidebarContent = /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "filter-block" }, /* @__PURE__ */ React.createElement("h4", null, "Category"), CATEGORIES.filter((c) => c !== "All").map((c) => {
      const isChecked = filters.cats && filters.cats.has(c);
      const count = PRODUCTS.filter((p) => p.cat === c).length;
      return /* @__PURE__ */ React.createElement("label", { key: c, className: `filter-row ${isChecked ? "active-label" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: isChecked, onChange: () => toggleCat(c) }), /* @__PURE__ */ React.createElement("span", null, c), /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "auto", fontSize: 11, opacity: 0.6 } }, "(", count, ")"));
    })), /* @__PURE__ */ React.createElement("div", { className: "filter-block" }, /* @__PURE__ */ React.createElement("h4", null, "Price Range"), priceOpts.map((o) => /* @__PURE__ */ React.createElement("label", { key: o.key, className: `filter-row ${filters.price === o.key ? "active-label" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: filters.price === o.key, onChange: () => setPrice(o.key) }), /* @__PURE__ */ React.createElement("span", null, o.label)))), /* @__PURE__ */ React.createElement("div", { className: "filter-block" }, /* @__PURE__ */ React.createElement("h4", null, "Colour"), /* @__PURE__ */ React.createElement("div", { className: "color-swatches-grid" }, availableColors.map((col) => {
      const sample = PRODUCTS.find((p) => p.color === col);
      const hex = sample ? sample.colorHex || sample.bg : "#666";
      const isActive = filters.colors && filters.colors.has(col);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: col,
          className: `color-swatch-chip ${isActive ? "active" : ""}`,
          onClick: () => toggleColor(col)
        },
        /* @__PURE__ */ React.createElement("span", { className: "dot", style: { background: hex } }),
        /* @__PURE__ */ React.createElement("span", null, col)
      );
    }))), /* @__PURE__ */ React.createElement("div", { className: "filter-block" }, /* @__PURE__ */ React.createElement("h4", null, "Collections & Badges"), /* @__PURE__ */ React.createElement("label", { className: `filter-row ${filters.flag === "Bestseller" ? "active-label" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: filters.flag === "Bestseller", onChange: () => toggleFlag("Bestseller") }), /* @__PURE__ */ React.createElement("span", null, "Bestsellers")), /* @__PURE__ */ React.createElement("label", { className: `filter-row ${filters.flag === "New" ? "active-label" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: filters.flag === "New", onChange: () => toggleFlag("New") }), /* @__PURE__ */ React.createElement("span", null, "New Releases"))), /* @__PURE__ */ React.createElement("button", { className: "tag-btn ghost", style: { width: "100%", justifyContent: "center" }, onClick: clearFilters }, "Clear all filters"));
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "shop-head wrap" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Atelier Collection \u2014 ", PRODUCTS.length, " Total Pieces"), /* @__PURE__ */ React.createElement("h1", null, "All Garments")), /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "shop-pills-bar" }, CATEGORIES.map((c) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: c,
        className: `cat-pill ${currentCategoryPill === c ? "active" : ""}`,
        onClick: () => setCategorySingle(c)
      },
      c
    )))), /* @__PURE__ */ React.createElement("div", { className: "wrap" }, /* @__PURE__ */ React.createElement("div", { className: "shop-layout" }, /* @__PURE__ */ React.createElement("aside", null, filterSidebarContent), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "mobile-filter-bar" }, /* @__PURE__ */ React.createElement("button", { className: "mobile-filter-btn", onClick: () => setMobileFilterOpen(true) }, /* @__PURE__ */ React.createElement("span", null, "Filter & Refine (", list.length, " pieces)"), /* @__PURE__ */ React.createElement("span", null, "\u2699"))), mobileFilterOpen && /* @__PURE__ */ React.createElement("div", { className: "modal-overlay show", onClick: () => setMobileFilterOpen(false) }, /* @__PURE__ */ React.createElement("div", { className: "modal-content", style: { padding: 28, maxWidth: 460 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "modal-close-btn", onClick: () => setMobileFilterOpen(false) }, "\u2715"), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: 24, marginBottom: 20 } }, "Refine Selection"), filterSidebarContent, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn full",
        style: { marginTop: 20 },
        onClick: () => setMobileFilterOpen(false)
      },
      "View ",
      list.length,
      " Results"
    ))), /* @__PURE__ */ React.createElement("div", { className: "shop-toolbar" }, /* @__PURE__ */ React.createElement("div", { className: "shop-count" }, "Showing ", /* @__PURE__ */ React.createElement("strong", null, list.length), " ", list.length === 1 ? "piece" : "pieces"), /* @__PURE__ */ React.createElement("div", { className: "shop-toolbar-right" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Filter by keyword...",
        value: searchQuery,
        onChange: (e) => setSearchQuery(e.target.value),
        style: {
          border: "1px solid var(--paper-line)",
          background: "var(--paper)",
          padding: "7px 12px",
          fontSize: 12,
          fontFamily: "Space Grotesk, sans-serif"
        }
      }
    ), /* @__PURE__ */ React.createElement("select", { className: "sort-select", value: sort, onChange: (e) => setSort(e.target.value) }, /* @__PURE__ */ React.createElement("option", { value: "featured" }, "Sort: Featured"), /* @__PURE__ */ React.createElement("option", { value: "low" }, "Price: Low to High"), /* @__PURE__ */ React.createElement("option", { value: "high" }, "Price: High to Low"), /* @__PURE__ */ React.createElement("option", { value: "rating" }, "Highest Rated"), /* @__PURE__ */ React.createElement("option", { value: "new" }, "Newest Releases")))), hasActiveFilters && /* @__PURE__ */ React.createElement("div", { className: "active-filters-row" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow", style: { marginRight: 6 } }, "Active:"), Array.from(filters.cats || []).map((c) => /* @__PURE__ */ React.createElement("span", { key: c, className: "filter-pill-badge", onClick: () => toggleCat(c) }, c, " \u2715")), Array.from(filters.colors || []).map((col) => /* @__PURE__ */ React.createElement("span", { key: col, className: "filter-pill-badge", onClick: () => toggleColor(col) }, col, " \u2715")), filters.price && /* @__PURE__ */ React.createElement("span", { className: "filter-pill-badge", onClick: () => setPrice(filters.price) }, priceOpts.find((p) => p.key === filters.price)?.label, " \u2715"), filters.flag && /* @__PURE__ */ React.createElement("span", { className: "filter-pill-badge", onClick: () => toggleFlag(filters.flag) }, filters.flag, " \u2715"), searchQuery && /* @__PURE__ */ React.createElement("span", { className: "filter-pill-badge", onClick: () => setSearchQuery("") }, '"', searchQuery, '" \u2715'), /* @__PURE__ */ React.createElement(
      "button",
      {
        style: { fontSize: 11, textDecoration: "underline", color: "var(--brick)", cursor: "pointer", fontFamily: "IBM Plex Mono, monospace" },
        onClick: clearFilters
      },
      "Clear all"
    )), list.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "shop-grid" }, list.map((p) => /* @__PURE__ */ React.createElement(
      Card,
      {
        key: p.id,
        product: p,
        onOpen: openProduct,
        onQuickView: openQuickView,
        isWishlisted: isWishlisted(p.id),
        onToggleWishlist
      }
    ))) : /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("p", null, "No garments match the selected filters."), /* @__PURE__ */ React.createElement("button", { className: "tag-btn ghost", style: { marginTop: 12 }, onClick: clearFilters }, "Reset All Filters"))))));
  }
  function ProductDetailPage2({
    productId,
    openProduct,
    openQuickView,
    go,
    addToCart,
    onOpenSizeGuide,
    isWishlisted,
    onToggleWishlist,
    notify
  }) {
    const product = PRODUCTS.find((p) => p.id === productId);
    const [size, setSize] = useState2("M");
    const [qty, setQty] = useState2(1);
    const [sizeErr, setSizeErr] = useState2(false);
    const [tab, setTab] = useState2(0);
    const [imgIdx, setImgIdx] = useState2(0);
    const [reviewModalOpen, setReviewModalOpen] = useState2(false);
    const [reviewForm, setReviewForm] = useState2({ name: "", rating: 5, title: "", comment: "" });
    const [localReviews, setLocalReviews] = useState2([]);
    useEffect2(() => {
      setSize("M");
      setQty(1);
      setSizeErr(false);
      setTab(0);
      setImgIdx(0);
    }, [productId]);
    if (!product) return null;
    const images = product.images && product.images.length > 0 ? product.images : [product.img];
    const related = PRODUCTS.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, 3);
    const allReviews = [...product.reviews || [], ...localReviews];
    const handleAdd = (buyNow) => {
      if (!size) {
        setSizeErr(true);
        return;
      }
      addToCart(product.id, size, qty);
      if (buyNow) go("checkout");
    };
    const handleShare = () => {
      navigator.clipboard?.writeText(window.location.href);
      notify("Product link copied to clipboard");
    };
    const handleAddReview = (e) => {
      e.preventDefault();
      if (!reviewForm.name || !reviewForm.comment) return;
      const newRev = {
        author: reviewForm.name,
        rating: Number(reviewForm.rating),
        date: "Just now",
        title: reviewForm.title || "Verified Review",
        comment: reviewForm.comment
      };
      setLocalReviews((prev) => [newRev, ...prev]);
      setReviewModalOpen(false);
      setReviewForm({ name: "", rating: 5, title: "", comment: "" });
      notify("Thank you! Your review has been added.");
    };
    const tabs = [
      { title: "Description", content: /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, product.desc), product.details && /* @__PURE__ */ React.createElement("ul", { style: { marginTop: 12 } }, product.details.map((d, i) => /* @__PURE__ */ React.createElement("li", { key: i }, d)))) },
      { title: "Fabric & Atelier Care", content: /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Composition:"), " ", product.composition || "Natural blend"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Origin Mill:"), " ", product.origin || "European Artisan Weavers"), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10 } }, "Dry clean recommended for tailored pieces, or gentle cold hand wash with neutral silk/wool detergent. Lay flat on towel to dry away from direct heat. Steam lightly to refresh between wears.")) },
      { title: "Shipping & Returns", content: /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Complimentary standard shipping on all orders over \u20B94,000. Orders ship via express courier in 3\u20135 working days with real-time tracking."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 10 } }, "Easy 14-day studio returns on unworn, unaltered pieces with tags intact. Hand-packaged in biodegradable unbleached cotton garment bags.")) }
    ];
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "wrap pd-layout" }, /* @__PURE__ */ React.createElement("div", { className: "pd-gallery" }, /* @__PURE__ */ React.createElement("div", { className: "pd-main-media" }, /* @__PURE__ */ React.createElement(ProductImage, { product, className: "", imageIndex: imgIdx })), images.length > 1 && /* @__PURE__ */ React.createElement("div", { className: "pd-thumbnails" }, images.map((img, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: i,
        className: `pd-thumb ${i === imgIdx ? "active" : ""}`,
        onClick: () => setImgIdx(i)
      },
      /* @__PURE__ */ React.createElement("img", { src: img, alt: `${product.name} angle ${i + 1}` })
    )))), /* @__PURE__ */ React.createElement("div", { className: "pd-info" }, /* @__PURE__ */ React.createElement("div", { className: "pd-crumb" }, /* @__PURE__ */ React.createElement("span", { onClick: () => go("home") }, "Home"), " / ", /* @__PURE__ */ React.createElement("span", { onClick: () => go("shop") }, "Shop"), " / ", /* @__PURE__ */ React.createElement("span", null, product.cat)), /* @__PURE__ */ React.createElement("h1", null, product.name), /* @__PURE__ */ React.createElement("div", { className: "pd-rating-row" }, /* @__PURE__ */ React.createElement("span", { className: "stars" }, "\u2605\u2605\u2605\u2605\u2605"), /* @__PURE__ */ React.createElement("span", null, product.rating), /* @__PURE__ */ React.createElement("span", null, "\xB7"), /* @__PURE__ */ React.createElement(
      "a",
      {
        style: { textDecoration: "underline", cursor: "pointer" },
        onClick: () => {
          const el = document.getElementById("reviews-section");
          el && el.scrollIntoView({ behavior: "smooth" });
        }
      },
      allReviews.length,
      " Verified Reviews"
    )), /* @__PURE__ */ React.createElement("div", { className: "pd-price price-tag" }, money(product.price)), product.stock && product.stock <= 5 && /* @__PURE__ */ React.createElement("div", { className: "pd-stock-badge" }, /* @__PURE__ */ React.createElement("span", null, "\u25CF"), /* @__PURE__ */ React.createElement("span", null, "Only ", product.stock, " pieces remaining in this batch")), /* @__PURE__ */ React.createElement("p", { className: "pd-desc" }, product.desc), /* @__PURE__ */ React.createElement("div", { className: "option-block" }, /* @__PURE__ */ React.createElement("div", { className: "option-label" }, /* @__PURE__ */ React.createElement("span", null, "Colour"), /* @__PURE__ */ React.createElement("span", null, product.color)), /* @__PURE__ */ React.createElement("div", { className: "size-row" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "size-chip selected",
        style: {
          width: "auto",
          padding: "0 18px",
          background: product.bg,
          color: product.light ? "#EDEAE1" : "#1B1B18",
          borderColor: product.bg,
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: product.light ? "#EDEAE1" : "#1B1B18" } }),
      /* @__PURE__ */ React.createElement("span", null, product.color)
    ))), /* @__PURE__ */ React.createElement("div", { className: "option-block" }, /* @__PURE__ */ React.createElement("div", { className: "option-label" }, /* @__PURE__ */ React.createElement("span", null, "Size"), /* @__PURE__ */ React.createElement("span", { className: "size-guide-trigger", onClick: onOpenSizeGuide }, "Size Guide")), sizeErr && /* @__PURE__ */ React.createElement("div", { style: { color: "var(--brick)", fontSize: 12, marginBottom: 8, fontFamily: "IBM Plex Mono, monospace" } }, "Please select your size before adding to bag"), /* @__PURE__ */ React.createElement("div", { className: "size-row" }, SIZES.map((s) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: s,
        className: `size-chip ${s === size ? "selected" : ""}`,
        onClick: () => {
          setSize(s);
          setSizeErr(false);
        }
      },
      s
    )))), /* @__PURE__ */ React.createElement("div", { className: "option-block" }, /* @__PURE__ */ React.createElement("div", { className: "option-label" }, /* @__PURE__ */ React.createElement("span", null, "Quantity")), /* @__PURE__ */ React.createElement("div", { className: "qty-row" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setQty((q) => Math.max(1, q - 1)) }, "\u2212"), /* @__PURE__ */ React.createElement("span", null, qty), /* @__PURE__ */ React.createElement("button", { onClick: () => setQty((q) => q + 1) }, "+"))), /* @__PURE__ */ React.createElement("div", { className: "pd-actions" }, /* @__PURE__ */ React.createElement("button", { className: "tag-btn", onClick: () => handleAdd(false) }, "Add to bag"), /* @__PURE__ */ React.createElement("button", { className: "tag-btn ghost", onClick: () => handleAdd(true) }, "Buy now"), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `wish-icon-btn ${isWishlisted(product.id) ? "active" : ""}`,
        onClick: () => onToggleWishlist(product.id),
        title: "Save to wishlist",
        "aria-label": "Wishlist"
      },
      /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: isWishlisted(product.id) ? "currentColor" : "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }))
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "wish-icon-btn",
        onClick: handleShare,
        title: "Share piece",
        "aria-label": "Share"
      },
      /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "5", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "6", cy: "12", r: "3" }), /* @__PURE__ */ React.createElement("circle", { cx: "18", cy: "19", r: "3" }), /* @__PURE__ */ React.createElement("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }), /* @__PURE__ */ React.createElement("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }))
    )), /* @__PURE__ */ React.createElement("div", { className: "pd-tabs" }, tabs.map((t, idx) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: idx,
        className: `pd-tab ${tab === idx ? "active" : ""}`,
        onClick: () => setTab(idx)
      },
      t.title
    ))), /* @__PURE__ */ React.createElement("div", { className: "pd-tab-content" }, tabs[tab].content)), /* @__PURE__ */ React.createElement("div", { id: "reviews-section", className: "reviews-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 6 } }, "Atelier Feedback"), /* @__PURE__ */ React.createElement("h2", null, "Customer Reviews (", allReviews.length, ")")), /* @__PURE__ */ React.createElement("button", { className: "tag-btn", onClick: () => setReviewModalOpen(true) }, "Write a review")), /* @__PURE__ */ React.createElement("div", { className: "reviews-grid" }, allReviews.map((r, i) => /* @__PURE__ */ React.createElement("div", { className: "review-card", key: i }, /* @__PURE__ */ React.createElement("div", { className: "review-card-head" }, /* @__PURE__ */ React.createElement("strong", null, r.author), /* @__PURE__ */ React.createElement("span", null, r.date)), /* @__PURE__ */ React.createElement("div", { className: "review-card-stars" }, "\u2605".repeat(r.rating), "\u2606".repeat(5 - r.rating)), /* @__PURE__ */ React.createElement("h4", null, r.title), /* @__PURE__ */ React.createElement("p", null, r.comment))))), reviewModalOpen && /* @__PURE__ */ React.createElement("div", { className: "modal-overlay show", onClick: () => setReviewModalOpen(false) }, /* @__PURE__ */ React.createElement("div", { className: "modal-content", style: { maxWidth: 520, padding: 32 }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "modal-close-btn", onClick: () => setReviewModalOpen(false) }, "\u2715"), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 8 } }, "Share your thoughts"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 26, marginBottom: 18 } }, "Review ", product.name), /* @__PURE__ */ React.createElement("form", { onSubmit: handleAddReview }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "Your Name"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        required: true,
        placeholder: "e.g. Ananya R.",
        value: reviewForm.name,
        onChange: (e) => setReviewForm({ ...reviewForm, name: e.target.value })
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "Rating"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: reviewForm.rating,
        onChange: (e) => setReviewForm({ ...reviewForm, rating: e.target.value })
      },
      /* @__PURE__ */ React.createElement("option", { value: "5" }, "5 Stars \u2014 Flawless"),
      /* @__PURE__ */ React.createElement("option", { value: "4" }, "4 Stars \u2014 Great quality"),
      /* @__PURE__ */ React.createElement("option", { value: "3" }, "3 Stars \u2014 Satisfactory"),
      /* @__PURE__ */ React.createElement("option", { value: "2" }, "2 Stars \u2014 Could be improved"),
      /* @__PURE__ */ React.createElement("option", { value: "1" }, "1 Star \u2014 Disappointed")
    )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "Review Headline"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "e.g. Beautiful drape and fabric weight",
        value: reviewForm.title,
        onChange: (e) => setReviewForm({ ...reviewForm, title: e.target.value })
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "Your Review"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: "4",
        required: true,
        placeholder: "How does the garment fit? What do you think of the weave?",
        value: reviewForm.comment,
        onChange: (e) => setReviewForm({ ...reviewForm, comment: e.target.value })
      }
    )), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "tag-btn full", style: { marginTop: 12 } }, "Submit Review")))), related.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1/-1", marginTop: 50 } }, /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("h2", null, "You may also consider")), /* @__PURE__ */ React.createElement("div", { className: "grid", style: { gridTemplateColumns: "repeat(3, 1fr)" } }, related.map((p) => /* @__PURE__ */ React.createElement(
      Card,
      {
        key: p.id,
        product: p,
        onOpen: openProduct,
        onQuickView: openQuickView,
        isWishlisted: isWishlisted(p.id),
        onToggleWishlist
      }
    ))))), /* @__PURE__ */ React.createElement("div", { className: "mobile-sticky-bar" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "Fraunces, serif", fontSize: 16 } }, product.name), /* @__PURE__ */ React.createElement("div", { className: "price-tag", style: { fontSize: 14 } }, money(product.price))), /* @__PURE__ */ React.createElement("button", { className: "tag-btn", onClick: () => handleAdd(false) }, "Add to bag")));
  }
  function CartPage2({
    cart,
    updateQty,
    removeItem,
    go,
    promo,
    setPromo,
    promoApplied,
    applyPromo,
    removePromo,
    totals
  }) {
    const freeShippingThreshold = 4e3;
    const neededForFreeShipping = Math.max(0, freeShippingThreshold - totals.subtotal);
    const freeShippingProgress = Math.min(100, Math.round(totals.subtotal / freeShippingThreshold * 100));
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "shop-head wrap" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Review your selection"), /* @__PURE__ */ React.createElement("h1", null, "Your Shopping Bag")), /* @__PURE__ */ React.createElement("div", { className: "wrap cart-layout" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "shipping-meter" }, /* @__PURE__ */ React.createElement("div", { className: "shipping-meter-text" }, neededForFreeShipping === 0 ? /* @__PURE__ */ React.createElement("span", { style: { color: "var(--pine)", fontWeight: 600 } }, "\u2713 Complimentary Standard Delivery Unlocked") : /* @__PURE__ */ React.createElement("span", null, "Add ", /* @__PURE__ */ React.createElement("strong", null, money(neededForFreeShipping)), " more to receive Free Shipping")), /* @__PURE__ */ React.createElement("div", { className: "shipping-meter-bar" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `shipping-meter-fill ${neededForFreeShipping === 0 ? "completed" : ""}`,
        style: { width: `${freeShippingProgress}%` }
      }
    ))), cart.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "empty-state", style: { padding: "60px 0" } }, /* @__PURE__ */ React.createElement("p", { style: { marginBottom: 16 } }, "Your bag is currently empty."), /* @__PURE__ */ React.createElement("button", { className: "tag-btn", onClick: () => go("shop") }, "Explore the Collection")) : cart.map((c, i) => {
      const p = PRODUCTS.find((x) => x.id === c.id);
      if (!p) return null;
      return /* @__PURE__ */ React.createElement("div", { className: "cart-item", key: `${c.id}-${c.size}-${i}` }, /* @__PURE__ */ React.createElement("div", { className: "cart-item-media" }, /* @__PURE__ */ React.createElement(ProductImage, { product: p, className: "" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "cart-item-title" }, p.name), /* @__PURE__ */ React.createElement("div", { className: "cart-item-meta" }, p.color, " \xB7 Size ", c.size), /* @__PURE__ */ React.createElement("div", { className: "qty-row" }, /* @__PURE__ */ React.createElement("button", { onClick: () => updateQty(i, -1) }, "\u2212"), /* @__PURE__ */ React.createElement("span", null, c.qty), /* @__PURE__ */ React.createElement("button", { onClick: () => updateQty(i, 1) }, "+"))), /* @__PURE__ */ React.createElement("div", { className: "cart-item-right" }, /* @__PURE__ */ React.createElement("span", { className: "price-tag" }, money(p.price * c.qty)), /* @__PURE__ */ React.createElement("button", { className: "cart-item-remove", onClick: () => removeItem(i) }, "Remove")));
    })), /* @__PURE__ */ React.createElement("div", { className: "summary-box" }, /* @__PURE__ */ React.createElement("h3", null, "Order summary"), /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Subtotal"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, money(totals.subtotal))), totals.discount > 0 && /* @__PURE__ */ React.createElement("div", { className: "summary-row", style: { color: "var(--pine)", fontWeight: 500 } }, /* @__PURE__ */ React.createElement("span", null, "Promo Discount"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "\u2212", money(totals.discount))), /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Estimated Shipping"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, totals.shipping === 0 ? "Free" : money(totals.shipping))), promoApplied ? /* @__PURE__ */ React.createElement("div", { className: "promo-applied-badge" }, /* @__PURE__ */ React.createElement("span", null, "Code ", promo.toUpperCase(), " applied"), /* @__PURE__ */ React.createElement("button", { onClick: removePromo, style: { textDecoration: "underline" } }, "Remove")) : /* @__PURE__ */ React.createElement("div", { className: "promo-row" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Promo code (e.g. VESTA10)",
        value: promo,
        onChange: (e) => setPromo(e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: applyPromo }, "Apply")), /* @__PURE__ */ React.createElement("div", { className: "summary-row total" }, /* @__PURE__ */ React.createElement("span", null, "Total"), /* @__PURE__ */ React.createElement("span", null, money(totals.total))), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn full",
        style: { marginTop: 22 },
        disabled: cart.length === 0,
        onClick: () => go("checkout")
      },
      "Proceed to Checkout"
    ), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, fontSize: 12, color: "var(--ink-soft)", textAlign: "center" } }, "\u{1F512} Safe & encrypted checkout"))));
  }
  function CheckoutPage2({ cart, totals, placeOrder, go }) {
    const [form, setForm] = useState2({
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "Delhi",
      pin: "",
      note: ""
    });
    const [errors, setErrors] = useState2({});
    const [pay, setPay] = useState2("card");
    const [cardData, setCardData] = useState2({ num: "", exp: "", cvv: "", name: "" });
    const [upiId, setUpiId] = useState2("");
    const [shippingMethod, setShippingMethod] = useState2("standard");
    const [isSubmitting, setIsSubmitting] = useState2(false);
    const update = (field2, value) => {
      setForm((f) => ({ ...f, [field2]: value }));
      setErrors((e) => ({ ...e, [field2]: false }));
    };
    const validators = {
      name: (v) => v && v.trim().length >= 2,
      phone: (v) => v && /^[6-9]\d{9}$/.test(v.trim()),
      email: (v) => v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      address: (v) => v && v.trim().length >= 5,
      city: (v) => v && v.trim().length >= 2,
      pin: (v) => v && /^\d{6}$/.test(v.trim())
    };
    const errorMsgs = {
      name: "Please enter your full name.",
      phone: "Enter a valid 10-digit mobile number.",
      email: "Enter a valid email address.",
      address: "Enter your complete delivery address.",
      city: "Enter your city.",
      pin: "Enter a valid 6-digit Indian PIN code."
    };
    const submit = () => {
      const nextErrors = {};
      Object.keys(validators).forEach((k) => {
        nextErrors[k] = !validators[k](form[k]);
      });
      setErrors(nextErrors);
      if (Object.values(nextErrors).some(Boolean)) {
        window.scrollTo({ top: 120, behavior: "smooth" });
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        placeOrder({
          customer: form,
          paymentMethod: pay,
          shippingMethod
        });
      }, 600);
    };
    const field = (id, label, placeholder, type = "text") => /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, label), /* @__PURE__ */ React.createElement(
      "input",
      {
        type,
        className: errors[id] ? "invalid" : "",
        placeholder,
        value: form[id],
        onChange: (e) => update(id, e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("div", { className: `err ${errors[id] ? "show" : ""}` }, errorMsgs[id]));
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "shop-head wrap" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Atelier Dispatch"), /* @__PURE__ */ React.createElement("h1", null, "Checkout")), /* @__PURE__ */ React.createElement("div", { className: "wrap co-layout" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "co-steps" }, /* @__PURE__ */ React.createElement("span", { className: "co-step" }, "1. Delivery Address"), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--ink-soft)" } }, "\xB7"), /* @__PURE__ */ React.createElement("span", { className: "co-step" }, "2. Payment")), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, field("name", "Full Name", "Ananya Rao"), field("phone", "Mobile Number", "9876543210", "tel")), field("email", "Email Address for Order Updates", "ananya@email.com", "email"), field("address", "Delivery Street Address", "House / Flat No., Street, Landmark"), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, field("city", "City", "New Delhi"), field("pin", "PIN Code", "110001", "tel")), /* @__PURE__ */ React.createElement("div", { className: "divider-label" }, "Shipping Method"), /* @__PURE__ */ React.createElement("div", { className: "pay-options", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("label", { className: `pay-option ${shippingMethod === "standard" ? "selected" : ""}` }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "radio",
        name: "shipping",
        checked: shippingMethod === "standard",
        onChange: () => setShippingMethod("standard")
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", null, "Standard Atelier Delivery (3\u20135 working days)"), /* @__PURE__ */ React.createElement("strong", null, totals.subtotal >= 4e3 ? "Free" : "\u20B9150"))), /* @__PURE__ */ React.createElement("label", { className: `pay-option ${shippingMethod === "express" ? "selected" : ""}` }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "radio",
        name: "shipping",
        checked: shippingMethod === "express",
        onChange: () => setShippingMethod("express")
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", null, "Priority Express Air (1\u20132 working days)"), /* @__PURE__ */ React.createElement("strong", null, "\u20B9250")))), /* @__PURE__ */ React.createElement("div", { className: "divider-label" }, "Payment Option"), /* @__PURE__ */ React.createElement("div", { className: "pay-options" }, /* @__PURE__ */ React.createElement("label", { className: `pay-option ${pay === "card" ? "selected" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "radio", name: "pay", checked: pay === "card", onChange: () => setPay("card") }), /* @__PURE__ */ React.createElement("span", null, "Credit or Debit Card (Visa, Mastercard, RuPay, Amex)")), pay === "card" && /* @__PURE__ */ React.createElement("div", { className: "pay-subpanel" }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "Card Number"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "4532 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 8910",
        value: cardData.num,
        onChange: (e) => setCardData({ ...cardData, num: e.target.value })
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "Expiry (MM/YY)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "08/28",
        value: cardData.exp,
        onChange: (e) => setCardData({ ...cardData, exp: e.target.value })
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement("label", null, "CVV"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        maxLength: "4",
        placeholder: "\u2022\u2022\u2022",
        value: cardData.cvv,
        onChange: (e) => setCardData({ ...cardData, cvv: e.target.value })
      }
    )))), /* @__PURE__ */ React.createElement("label", { className: `pay-option ${pay === "upi" ? "selected" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "radio", name: "pay", checked: pay === "upi", onChange: () => setPay("upi") }), /* @__PURE__ */ React.createElement("span", null, "Instant UPI (Google Pay, PhonePe, Paytm, BHIM)")), pay === "upi" && /* @__PURE__ */ React.createElement("div", { className: "pay-subpanel" }, /* @__PURE__ */ React.createElement("div", { className: "form-group", style: { margin: 0 } }, /* @__PURE__ */ React.createElement("label", null, "UPI ID (VPA)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "yourname@okaxis",
        value: upiId,
        onChange: (e) => setUpiId(e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "var(--ink-soft)", marginTop: 6 } }, "A payment request will be sent to your UPI app."))), /* @__PURE__ */ React.createElement("label", { className: `pay-option ${pay === "cod" ? "selected" : ""}` }, /* @__PURE__ */ React.createElement("input", { type: "radio", name: "pay", checked: pay === "cod", onChange: () => setPay("cod") }), /* @__PURE__ */ React.createElement("span", null, "Cash on Delivery (Pay upon arrival)"))), /* @__PURE__ */ React.createElement("div", { className: "form-group", style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("label", null, "Gift Instructions or Delivery Note (Optional)"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        rows: "2",
        placeholder: "Leave with front desk, gift wrapping request, etc.",
        value: form.note,
        onChange: (e) => update("note", e.target.value)
      }
    )), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "tag-btn full",
        style: { marginTop: 30 },
        onClick: submit,
        disabled: isSubmitting
      },
      isSubmitting ? "Securing Your Order..." : `Confirm and Pay ${money(totals.total)}`
    )), /* @__PURE__ */ React.createElement("div", { className: "summary-box" }, /* @__PURE__ */ React.createElement("h3", null, "Your Bag Summary"), cart.map((c, i) => {
      const p = PRODUCTS.find((x) => x.id === c.id);
      if (!p) return null;
      return /* @__PURE__ */ React.createElement("div", { className: "summary-row", key: i, style: { alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", null, p.name, " (", c.size, ") \xD7 ", c.qty), /* @__PURE__ */ React.createElement("span", { className: "mono" }, money(p.price * c.qty)));
    }), /* @__PURE__ */ React.createElement("div", { className: "summary-row", style: { marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--paper-line)" } }, /* @__PURE__ */ React.createElement("span", null, "Subtotal"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, money(totals.subtotal))), totals.discount > 0 && /* @__PURE__ */ React.createElement("div", { className: "summary-row", style: { color: "var(--pine)", fontWeight: 500 } }, /* @__PURE__ */ React.createElement("span", null, "Promo Discount"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, "\u2212", money(totals.discount))), /* @__PURE__ */ React.createElement("div", { className: "summary-row" }, /* @__PURE__ */ React.createElement("span", null, "Shipping"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, totals.shipping === 0 ? "Free" : money(totals.shipping))), /* @__PURE__ */ React.createElement("div", { className: "summary-row total" }, /* @__PURE__ */ React.createElement("span", null, "Total to pay"), /* @__PURE__ */ React.createElement("span", null, money(totals.total))))));
  }
  function SuccessPage2({ orderNumber, latestOrder, go }) {
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "wrap success-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "success-mark" }, /* @__PURE__ */ React.createElement("svg", { width: "34", height: "34", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M20 6L9 17l-5-5" }))), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 14 } }, "Atelier Order Confirmed"), /* @__PURE__ */ React.createElement("h1", null, "Thank you, your pieces are being readied."), /* @__PURE__ */ React.createElement("p", null, "We've dispatched a confirmation email with full care instructions and tracking details."), /* @__PURE__ */ React.createElement("div", { className: "order-num mono" }, orderNumber), /* @__PURE__ */ React.createElement("div", { className: "timeline", style: { maxWidth: 540, margin: "20px auto 40px" } }, /* @__PURE__ */ React.createElement("div", { className: "timeline-step completed" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "\u2713"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Confirmed")), /* @__PURE__ */ React.createElement("div", { className: "timeline-step current" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "2"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Atelier Cut")), /* @__PURE__ */ React.createElement("div", { className: "timeline-step" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "3"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Inspected")), /* @__PURE__ */ React.createElement("div", { className: "timeline-step" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "4"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Dispatched"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, justifyContent: "center" } }, /* @__PURE__ */ React.createElement("button", { className: "tag-btn", onClick: () => go("orders") }, "Track Order Status"), /* @__PURE__ */ React.createElement("button", { className: "tag-btn ghost", onClick: () => go("home") }, "Continue Browsing"))));
  }
  function TrackOrderPage2({ orders, go }) {
    const [searchId, setSearchId] = useState2("");
    const activeOrder = orders.find((o) => o.id.toLowerCase() === searchId.trim().toLowerCase()) || orders[0];
    return /* @__PURE__ */ React.createElement("div", { className: "page" }, /* @__PURE__ */ React.createElement("div", { className: "shop-head wrap" }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Atelier Dispatch Status"), /* @__PURE__ */ React.createElement("h1", null, "Track Your Orders")), /* @__PURE__ */ React.createElement("div", { className: "wrap", style: { padding: "40px 0 100px", maxWidth: 840 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 36 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Enter Order Number (e.g. VS-849201)",
        value: searchId,
        onChange: (e) => setSearchId(e.target.value),
        style: {
          flex: 1,
          border: "1px solid var(--paper-line)",
          padding: "12px 16px",
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: 14
        }
      }
    )), orders.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("p", null, "You have no recent orders placed in this browser session."), /* @__PURE__ */ React.createElement("button", { className: "tag-btn", style: { marginTop: 14 }, onClick: () => go("shop") }, "Shop the Collection")) : activeOrder ? /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper-dim)", padding: 36, border: "1px solid var(--paper-line)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Order Reference"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 24, marginTop: 4 } }, activeOrder.id)), /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { color: "var(--pine)" } }, "Placed: ", activeOrder.date || "Today", " \xB7 Status: ", activeOrder.status || "In Atelier")), /* @__PURE__ */ React.createElement("div", { className: "timeline" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-step completed" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "\u2713"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Order Confirmed")), /* @__PURE__ */ React.createElement("div", { className: "timeline-step current" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "\u25CF"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Atelier Packaging")), /* @__PURE__ */ React.createElement("div", { className: "timeline-step" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "\u25CB"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Quality Hand-Check")), /* @__PURE__ */ React.createElement("div", { className: "timeline-step" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }, "\u25CB"), /* @__PURE__ */ React.createElement("div", { className: "timeline-title" }, "Out for Delivery"))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid var(--paper-line)", paddingTop: 20, marginTop: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { marginBottom: 14 } }, "Garments in this consignment"), activeOrder.items && activeOrder.items.map((item, idx) => {
      const p = PRODUCTS.find((x) => x.id === item.id);
      if (!p) return null;
      return /* @__PURE__ */ React.createElement("div", { key: idx, style: { display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 13.5 } }, /* @__PURE__ */ React.createElement("span", null, p.name, " (", item.size, ") \xD7 ", item.qty), /* @__PURE__ */ React.createElement("span", { className: "mono" }, money(p.price * item.qty)));
    }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--paper-line)", paddingTop: 12, marginTop: 12, fontWeight: 600 } }, /* @__PURE__ */ React.createElement("span", null, "Total Amount Paid"), /* @__PURE__ */ React.createElement("span", { className: "mono" }, money(activeOrder.total))))) : /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("p", null, 'No order found matching "', searchId, '". Please check your order reference.'))));
  }
  if (typeof window !== "undefined") {
    window.HomePage = HomePage2;
    window.ShopPage = ShopPage2;
    window.ProductDetailPage = ProductDetailPage2;
    window.CartPage = CartPage2;
    window.CheckoutPage = CheckoutPage2;
    window.SuccessPage = SuccessPage2;
    window.TrackOrderPage = TrackOrderPage2;
  }

  // js/app.jsx
  var { useState: useState3, useEffect: useEffect3, useMemo: useMemo2, useRef: useRef3 } = React;
  function App() {
    const [page, setPage] = useState3("home");
    const [productId, setProductId] = useState3(1);
    const [cart, setCart] = useState3(() => {
      try {
        const saved = localStorage.getItem("vesta_cart");
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    });
    const [wishlist, setWishlist] = useState3(() => {
      try {
        const saved = localStorage.getItem("vesta_wishlist");
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    });
    const [orders, setOrders] = useState3(() => {
      try {
        const saved = localStorage.getItem("vesta_orders");
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    });
    const [filters, setFilters] = useState3({ cats: /* @__PURE__ */ new Set(), colors: /* @__PURE__ */ new Set(), price: null, flag: null });
    const [sort, setSort] = useState3("featured");
    const [cartDrawerOpen, setCartDrawerOpen] = useState3(false);
    const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState3(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState3(false);
    const [searchModalOpen, setSearchModalOpen] = useState3(false);
    const [sizeGuideOpen, setSizeGuideOpen] = useState3(false);
    const [quickViewProduct, setQuickViewProduct] = useState3(null);
    const [promo, setPromo] = useState3("");
    const [promoApplied, setPromoApplied] = useState3(false);
    const [orderNumber, setOrderNumber] = useState3("VS-829104");
    const [latestOrder, setLatestOrder] = useState3(null);
    const [toast, setToast] = useState3({ show: false, message: "" });
    const toastTimer = useRef3(null);
    useEffect3(() => {
      try {
        localStorage.setItem("vesta_cart", JSON.stringify(cart));
      } catch (e) {
      }
    }, [cart]);
    useEffect3(() => {
      try {
        localStorage.setItem("vesta_wishlist", JSON.stringify(wishlist));
      } catch (e) {
      }
    }, [wishlist]);
    useEffect3(() => {
      try {
        localStorage.setItem("vesta_orders", JSON.stringify(orders));
      } catch (e) {
      }
    }, [orders]);
    useEffect3(() => {
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setCartDrawerOpen(false);
          setWishlistDrawerOpen(false);
          setMobileMenuOpen(false);
          setSearchModalOpen(false);
          setSizeGuideOpen(false);
          setQuickViewProduct(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    const go = (p) => {
      setPage(p);
      setCartDrawerOpen(false);
      setWishlistDrawerOpen(false);
      setMobileMenuOpen(false);
      setSearchModalOpen(false);
      setSizeGuideOpen(false);
      setQuickViewProduct(null);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    const openProduct = (id) => {
      setProductId(id);
      go("detail");
    };
    const openQuickView = (product) => {
      setQuickViewProduct(product);
    };
    const goCategory = (cat) => {
      if (cat === "All") {
        setFilters({ cats: /* @__PURE__ */ new Set(), colors: /* @__PURE__ */ new Set(), price: null, flag: null });
      } else {
        setFilters({ cats: /* @__PURE__ */ new Set([cat]), colors: /* @__PURE__ */ new Set(), price: null, flag: null });
      }
      go("shop");
    };
    const showToast = (message) => {
      setToast({ show: true, message });
      clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 2800);
    };
    const addToCart = (id, size, qty = 1, openDrawer = true) => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (!product) return;
      setCart((prev) => {
        const idx = prev.findIndex((c) => c.id === id && c.size === size);
        if (idx > -1) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [...prev, { id, size, qty }];
      });
      showToast(`${product.name} (${size}) added to your bag`);
      if (openDrawer) {
        setCartDrawerOpen(true);
      }
    };
    const updateQty = (index, delta) => {
      setCart((prev) => {
        return prev.map((item, i) => {
          if (i === index) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        }).filter(Boolean);
      });
    };
    const removeItem = (index) => {
      setCart((prev) => prev.filter((_, i) => i !== index));
      showToast("Garment removed from bag");
    };
    const isWishlisted = (id) => wishlist.includes(id);
    const toggleWishlist = (id) => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (wishlist.includes(id)) {
        setWishlist((prev) => prev.filter((x) => x !== id));
        showToast(`Removed from your saved pieces`);
      } else {
        setWishlist((prev) => [...prev, id]);
        showToast(`Saved ${product ? product.name : "piece"} to your wishlist`);
      }
    };
    const applyPromo = (codeCandidate) => {
      const code = (typeof codeCandidate === "string" ? codeCandidate : promo).trim().toUpperCase();
      if (!code) return;
      if (PROMO_CODES[code]) {
        const promoData = PROMO_CODES[code];
        if (promoData.min && totals.subtotal < promoData.min) {
          showToast(`Code ${code} requires minimum order of ${money(promoData.min)}`);
          return;
        }
        setPromo(code);
        setPromoApplied(true);
        showToast(`Promo ${code} applied \u2014 ${promoData.desc}`);
      } else {
        showToast("Invalid promo code. Try VESTA10 for 10% off.");
      }
    };
    const removePromo = () => {
      setPromoApplied(false);
      setPromo("");
      showToast("Promo code removed");
    };
    const totals = useMemo2(() => {
      const subtotal = cart.reduce((s, c) => {
        const p = PRODUCTS.find((x) => x.id === c.id);
        return s + (p ? p.price * c.qty : 0);
      }, 0);
      const promoData = promoApplied ? PROMO_CODES[promo.toUpperCase()] : null;
      const isFreeShippingCode = promoData && promoData.freeShipping;
      const shipping = subtotal >= 4e3 || subtotal === 0 || isFreeShippingCode ? 0 : 150;
      const discount = promoData && promoData.discount ? Math.round(subtotal * promoData.discount) : 0;
      const total = Math.max(0, subtotal - discount + shipping);
      return { subtotal, shipping, discount, total };
    }, [cart, promoApplied, promo]);
    const cartCount = cart.reduce((s, c) => s + c.qty, 0);
    const wishCount = wishlist.length;
    const placeOrder = (orderMeta = {}) => {
      const num = "VS-" + Math.floor(1e5 + Math.random() * 9e5);
      const newOrder = {
        id: num,
        date: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
        items: [...cart],
        total: totals.total,
        status: "In Atelier Preparation",
        customer: orderMeta.customer || {}
      };
      setOrders((prev) => [newOrder, ...prev]);
      setLatestOrder(newOrder);
      setOrderNumber(num);
      setCart([]);
      setPromoApplied(false);
      setPromo("");
      go("success");
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(AnnouncementBar, { onPromoClick: (code) => {
      setPromo(code);
      applyPromo(code);
    } }), /* @__PURE__ */ React.createElement(
      Nav,
      {
        page,
        cartCount,
        wishCount,
        go,
        goCategory,
        onOpenCart: () => setCartDrawerOpen(true),
        onOpenWishlist: () => setWishlistDrawerOpen(true),
        onOpenSearch: () => setSearchModalOpen(true),
        onOpenMobileMenu: () => setMobileMenuOpen(true)
      }
    ), /* @__PURE__ */ React.createElement(
      MobileMenuDrawer,
      {
        isOpen: mobileMenuOpen,
        onClose: () => setMobileMenuOpen(false),
        go,
        goCategory,
        onOpenSearch: () => setSearchModalOpen(true),
        wishCount
      }
    ), /* @__PURE__ */ React.createElement(
      CartDrawer,
      {
        isOpen: cartDrawerOpen,
        onClose: () => setCartDrawerOpen(false),
        cart,
        updateQty,
        removeItem,
        totals,
        promo,
        setPromo,
        promoApplied,
        applyPromo: () => applyPromo(promo),
        removePromo,
        go
      }
    ), /* @__PURE__ */ React.createElement(
      WishlistDrawer,
      {
        isOpen: wishlistDrawerOpen,
        onClose: () => setWishlistDrawerOpen(false),
        wishlist,
        onRemove: toggleWishlist,
        onMoveToCart: (id, size) => addToCart(id, size, 1, true),
        go
      }
    ), /* @__PURE__ */ React.createElement(
      QuickViewModal,
      {
        product: quickViewProduct,
        isOpen: !!quickViewProduct,
        onClose: () => setQuickViewProduct(null),
        onAddToCart: (id, size, qty) => addToCart(id, size, qty, true),
        onOpenFull: (id) => openProduct(id)
      }
    ), /* @__PURE__ */ React.createElement(
      SizeGuideModal,
      {
        isOpen: sizeGuideOpen,
        onClose: () => setSizeGuideOpen(false)
      }
    ), /* @__PURE__ */ React.createElement(
      SearchModal,
      {
        isOpen: searchModalOpen,
        onClose: () => setSearchModalOpen(false),
        onSelectProduct: (id) => openProduct(id)
      }
    ), page === "home" && /* @__PURE__ */ React.createElement(
      HomePage,
      {
        openProduct,
        openQuickView,
        goCategory,
        go,
        isWishlisted,
        onToggleWishlist: toggleWishlist,
        onPromoClick: (code) => {
          setPromo(code);
          applyPromo(code);
        }
      }
    ), page === "shop" && /* @__PURE__ */ React.createElement(
      ShopPage,
      {
        openProduct,
        openQuickView,
        filters,
        setFilters,
        sort,
        setSort,
        isWishlisted,
        onToggleWishlist: toggleWishlist
      }
    ), page === "detail" && /* @__PURE__ */ React.createElement(
      ProductDetailPage,
      {
        productId,
        openProduct,
        openQuickView,
        go,
        addToCart,
        onOpenSizeGuide: () => setSizeGuideOpen(true),
        isWishlisted,
        onToggleWishlist: toggleWishlist,
        notify: showToast
      }
    ), page === "cart" && /* @__PURE__ */ React.createElement(
      CartPage,
      {
        cart,
        updateQty,
        removeItem,
        go,
        promo,
        setPromo,
        promoApplied,
        applyPromo: () => applyPromo(promo),
        removePromo,
        totals
      }
    ), page === "checkout" && /* @__PURE__ */ React.createElement(
      CheckoutPage,
      {
        cart,
        totals,
        placeOrder,
        go
      }
    ), page === "success" && /* @__PURE__ */ React.createElement(
      SuccessPage,
      {
        orderNumber,
        latestOrder,
        go
      }
    ), page === "orders" && /* @__PURE__ */ React.createElement(
      TrackOrderPage,
      {
        orders,
        go
      }
    ), /* @__PURE__ */ React.createElement(
      Footer,
      {
        go,
        goCategory,
        notify: showToast
      }
    ), /* @__PURE__ */ React.createElement(
      Toast,
      {
        show: toast.show,
        message: toast.message
      }
    ));
  }
  var rootEl = document.getElementById("root");
  if (rootEl) {
    ReactDOM.createRoot(rootEl).render(/* @__PURE__ */ React.createElement(App, null));
  }
})();
