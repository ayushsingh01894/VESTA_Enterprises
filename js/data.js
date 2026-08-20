// ── VESTA — product catalogue & shared helpers ──────────────────────────
// Real, hotlink-safe photos served from Unsplash's CDN (images.unsplash.com).
// Each product also carries a fallback SVG icon + brand colour in case an
// image ever fails to load (see ProductImage in components/common.jsx).

function unsplash(id, w, h, crop) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&h=${h}&auto=format&fit=crop&crop=${crop || "entropy"}`;
}

const PHOTOS = {
  blazer: "1575473970760-b50a70461e1a",   // black blazer
  trouser: "1767631338127-8cd80ee2f9df",  // wide-leg trouser / shirt look
  sweater: "1574201635302-388dd92a4c3f",  // grey knit sweater
  dress: "1616348490852-d80c545b4f79",    // beige slip dress
  coat: "1588632321641-60284c5b0c33",     // brown overcoat
};

const ICON_PATHS = {
  jacket: "M50 15 L38 25 L20 32 L14 55 L24 58 L28 40 L28 88 L72 88 L72 40 L76 58 L86 55 L80 32 L62 25 Z",
  trouser: "M30 15 H70 L74 88 H58 L52 40 L48 40 L42 88 H26 Z",
  sweater: "M50 15 C40 15 32 20 28 28 L14 38 L22 52 L30 46 L30 88 H70 V46 L78 52 L86 38 L72 28 C68 20 60 15 50 15 Z",
  dress: "M40 15 L34 30 L20 85 H80 L66 30 L60 15 C56 20 44 20 40 15 Z",
  shirt: "M42 15 L30 22 L18 34 L26 46 L34 40 L34 88 H66 V40 L74 46 L82 34 L70 22 L58 15 C54 19 46 19 42 15 Z",
  skirt: "M32 18 H68 L80 85 H20 Z"
};

const PRODUCTS = [
  {id:1, name:"The Fold Blazer", cat:"Outerwear", color:"Charcoal", price:6200, icon:"jacket", bg:"#2E2A26", light:true, flag:"Bestseller", isNew:false,
   img:unsplash(PHOTOS.blazer, 600, 800, "entropy"),
   desc:"A single-breasted blazer with a soft, unstructured shoulder. Cut from a mid-weight wool blend that holds its shape without ever feeling stiff."},
  {id:2, name:"Wide-Leg Trouser", cat:"Bottoms", color:"Stone", price:3400, icon:"trouser", bg:"#8B6F47", light:true, flag:"", isNew:false,
   img:unsplash(PHOTOS.trouser, 600, 800, "bottom"),
   desc:"High-rise and fully pleated, cut wide from the hip down for a fluid drape. Finished with a clean waistband and side pockets."},
  {id:3, name:"Cable Knit Sweater", cat:"Knitwear", color:"Moss", price:4100, icon:"sweater", bg:"#3B4A3E", light:true, flag:"Bestseller", isNew:false,
   img:unsplash(PHOTOS.sweater, 600, 800, "entropy"),
   desc:"Hand-finished cable knit in a heavyweight merino blend. Ribbed cuffs and hem keep it close, the rest is left roomy for layering."},
  {id:4, name:"Silk Slip Dress", cat:"Dresses", color:"Bone", price:5600, icon:"dress", bg:"#C9BBA8", light:false, flag:"New", isNew:true,
   img:unsplash(PHOTOS.dress, 600, 800, "top"),
   desc:"Bias-cut in washed mulberry silk so it moves with you rather than against you. Adjustable straps, side slit, fully lined."},
  {id:5, name:"Utility Jacket", cat:"Outerwear", color:"Olive", price:7200, icon:"jacket", bg:"#4B4A2E", light:true, flag:"", isNew:false,
   img:unsplash(PHOTOS.blazer, 600, 800, "top"),
   desc:"A four-pocket field jacket in brushed cotton twill, garment-dyed for depth of colour. Built for everyday wear, not the field."},
  {id:6, name:"Relaxed Oxford Shirt", cat:"Tops", color:"Ivory", price:2800, icon:"shirt", bg:"#D8CFC0", light:false, flag:"", isNew:false,
   img:unsplash(PHOTOS.trouser, 600, 800, "top"),
   desc:"A boxier take on the classic oxford, in a brushed cotton that softens with every wash. Works buttoned to the top or open over a tee."},
  {id:7, name:"Pleated Midi Skirt", cat:"Bottoms", color:"Rust", price:3900, icon:"skirt", bg:"#A65C43", light:true, flag:"New", isNew:true,
   img:unsplash(PHOTOS.dress, 600, 800, "bottom"),
   desc:"Knife-pleated from waist to hem in a fluid crepe. Sits at the natural waist and swings freely when you move."},
  {id:8, name:"Wool Overcoat", cat:"Outerwear", color:"Charcoal", price:9800, icon:"jacket", bg:"#23211D", light:true, flag:"", isNew:false,
   img:unsplash(PHOTOS.coat, 600, 800, "entropy"),
   desc:"A floor-skimming overcoat in double-faced wool, generous enough to layer a knit underneath. Horn-effect buttons, deep welt pockets."},
  {id:9, name:"Cropped Cardigan", cat:"Knitwear", color:"Mustard", price:3100, icon:"sweater", bg:"#B08D57", light:false, flag:"", isNew:false,
   img:unsplash(PHOTOS.sweater, 600, 800, "bottom"),
   desc:"A cropped, button-through cardigan in a fine merino rib. Sits at the waist, layers cleanly under coats or over slip dresses."},
  {id:10, name:"Straight Denim", cat:"Bottoms", color:"Indigo", price:4500, icon:"trouser", bg:"#4A5A6A", light:true, flag:"Bestseller", isNew:false,
   img:unsplash(PHOTOS.trouser, 600, 800, "entropy"),
   desc:"Rigid selvedge denim in a straight, mid-rise cut that breaks in around you. Built to fade honestly with wear."},
];

const HERO_IMG = unsplash(PHOTOS.sweater, 1000, 1200, "entropy");
const EDITORIAL_IMGS = {
  wool: unsplash(PHOTOS.sweater, 400, 400, "entropy"),
  cotton: unsplash(PHOTOS.trouser, 400, 400, "entropy"),
  silk: unsplash(PHOTOS.dress, 400, 400, "entropy"),
};

const CATEGORIES = ["Outerwear","Tops","Bottoms","Dresses","Knitwear"];
const SIZES = ["S","M","L","XL"];
const money = n => "₹" + n.toLocaleString("en-IN");
