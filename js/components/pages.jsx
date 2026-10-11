// ── VESTA — page components ──────────────────────────────────────────────
const { useState, useEffect, useMemo, useRef } = React;

function HomePage({ openProduct, openQuickView, goCategory, go, isWishlisted, onToggleWishlist, onPromoClick }) {
  const bestsellers = PRODUCTS.filter(p => p.flag === "Bestseller").slice(0, 4);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.includes("@")) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="page">
      {/* ── HERO BANNER ────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Autumn collection — Batch 01</div>
            <h1>Considered<br/>clothing,<br/><em>worn often.</em></h1>
            <p>
              Twelve pieces built to outlast a season. No noise, no filler — just cut, cloth, and colour that hold up on the second wear and the fiftieth.
            </p>
            <div className="hero-buttons">
              <button className="tag-btn" onClick={() => go('shop')}>Shop the collection</button>
              <button className="tag-btn ghost" onClick={() => goCategory('Outerwear')}>Explore Outerwear</button>
            </div>
          </div>

          <div className="hero-panel" onClick={() => openProduct(3)} style={{ cursor: "pointer" }}>
            <img src={HERO_IMG} alt="Cable knit sweater, look 04" loading="eager" />
            <div className="hero-label">
              <div className="eyebrow">Look 04 · Featured</div>
              <div>The Cable Knit Sweater in Moss</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ────────────────────────────────────────────── */}
      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">Complimentary shipping over ₹4,000</div>
          <div className="strip-item">Crafted in small batches</div>
          <div className="strip-item">14-day studio returns</div>
          <div className="strip-item">Pay via Card, UPI or COD</div>
        </div>
      </div>

      {/* ── BESTSELLERS ────────────────────────────────────────────── */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Curated essentials</div>
            <h2>Bestsellers</h2>
          </div>
          <a onClick={() => go('shop')} className="link-btn">View full collection ({PRODUCTS.length}) →</a>
        </div>
        <div className="grid">
          {bestsellers.map(p => (
            <Card
              key={p.id}
              product={p}
              onOpen={openProduct}
              onQuickView={openQuickView}
              isWishlisted={isWishlisted(p.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      {/* ── EDITORIAL / PHILOSOPHY ─────────────────────────────────── */}
      <section className="editorial">
        <div className="wrap">
          <div>
            <div className="eyebrow" style={{ color: "var(--gold-soft)", marginBottom: 16 }}>The Atelier & Cloth</div>
            <h2>Fabric first, always.</h2>
            <p>
              Every VESTA piece starts with the cloth, not the sketch. Brushed wool, heavy Belgian linen, raw mulberry silk — sourced from heritage mills we've collaborated with for years, then tailored to drape naturally with the body without pulling tight.
            </p>
            <button className="tag-btn gold" onClick={() => go('shop')}>Discover Materials</button>
          </div>
          <div className="editorial-media">
            <div>
              <img src={EDITORIAL_IMGS.wool} alt="Heavy wool weave" loading="lazy" />
              <span className="editorial-tag">Merino Wool</span>
            </div>
            <div>
              <img src={EDITORIAL_IMGS.cotton} alt="Organic linen twill" loading="lazy" />
              <span className="editorial-tag">Belgian Linen</span>
            </div>
            <div>
              <img src={EDITORIAL_IMGS.silk} alt="Mulberry silk" loading="lazy" />
              <span className="editorial-tag">Mulberry Silk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP BY CATEGORY ───────────────────────────────────────── */}
      <section className="section wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Explore by silhouette</div>
            <h2>Shop by category</h2>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {CATEGORIES.filter(c => c !== "All").map(c => {
            const sample = PRODUCTS.find(p => p.cat === c) || PRODUCTS[0];
            const count = PRODUCTS.filter(p => p.cat === c).length;
            return (
              <div
                className="category-card"
                key={c}
                onClick={() => goCategory(c)}
              >
                <div className="card-media">
                  <ProductImage product={sample} className="" />
                </div>
                <div className="cat-title">{c}</div>
                <div className="cat-count">{count} {count === 1 ? "piece" : "pieces"}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRESS / CURATOR TESTIMONIAL ────────────────────────────── */}
      <section className="press-strip">
        <div className="wrap">
          <div className="press-quote">
            “VESTA redefines everyday luxury tailoring — clean architectural silhouettes cut from cloth that only gets better with time.”
          </div>
          <div className="press-author">The Fashion Journal · Studio Edit 2026</div>
        </div>
      </section>

      {/* ── NEWSLETTER STRIP ───────────────────────────────────────── */}
      <section className="newsletter-strip">
        <div className="wrap">
          <div className="newsletter-box">
            <div className="eyebrow" style={{ marginBottom: 8 }}>Studio Dispatch</div>
            <h3>Join the Atelier Ledger</h3>
            <p>
              Receive early access to small-batch seasonal releases, archive sales, and fabric provenance essays.
            </p>
            {newsletterSubscribed ? (
              <div style={{ color: "var(--pine)", fontFamily: "IBM Plex Mono, monospace", fontSize: 13, fontWeight: 500 }}>
                ✓ Thank you. You are on the atelier dispatch list.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="tag-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ShopPage({
  openProduct,
  openQuickView,
  filters,
  setFilters,
  sort,
  setSort,
  isWishlisted,
  onToggleWishlist
}) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCat = (c) => {
    setFilters(f => {
      const next = new Set(f.cats);
      next.has(c) ? next.delete(c) : next.add(c);
      return { ...f, cats: next };
    });
  };

  const setCategorySingle = (c) => {
    if (c === "All") {
      setFilters(f => ({ ...f, cats: new Set() }));
    } else {
      setFilters(f => ({ ...f, cats: new Set([c]) }));
    }
  };

  const toggleColor = (col) => {
    setFilters(f => {
      const next = new Set(f.colors || []);
      next.has(col) ? next.delete(col) : next.add(col);
      return { ...f, colors: next };
    });
  };

  const setPrice = (key) => setFilters(f => ({ ...f, price: f.price === key ? null : key }));
  const toggleFlag = (flag) => setFilters(f => ({ ...f, flag: f.flag === flag ? null : flag }));

  const clearFilters = () => {
    setFilters({ cats: new Set(), colors: new Set(), price: null, flag: null });
    setSearchQuery("");
  };

  const availableColors = useMemo(() => {
    const set = new Set();
    PRODUCTS.forEach(p => { if (p.color) set.add(p.color); });
    return Array.from(set);
  }, []);

  const list = useMemo(() => {
    let l = PRODUCTS.slice();

    // Category filter
    if (filters.cats && filters.cats.size > 0) {
      l = l.filter(p => filters.cats.has(p.cat));
    }

    // Color filter
    if (filters.colors && filters.colors.size > 0) {
      l = l.filter(p => filters.colors.has(p.color));
    }

    // Price filter
    if (filters.price === "low") l = l.filter(p => p.price < 3500);
    if (filters.price === "mid") l = l.filter(p => p.price >= 3500 && p.price <= 6000);
    if (filters.price === "high") l = l.filter(p => p.price > 6000);

    // Flag filter
    if (filters.flag) l = l.filter(p => p.flag === filters.flag);

    // Live search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      l = l.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        (p.composition && p.composition.toLowerCase().includes(q))
      );
    }

    // Sort order
    if (sort === "low") l.sort((a, b) => a.price - b.price);
    if (sort === "high") l.sort((a, b) => b.price - a.price);
    if (sort === "rating") l.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sort === "new") l.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return l;
  }, [filters, sort, searchQuery]);

  const priceOpts = [
    { key: "low", label: "Under ₹3,500" },
    { key: "mid", label: "₹3,500 – ₹6,000" },
    { key: "high", label: "Above ₹6,000" }
  ];

  const hasActiveFilters =
    (filters.cats && filters.cats.size > 0) ||
    (filters.colors && filters.colors.size > 0) ||
    filters.price ||
    filters.flag ||
    searchQuery.trim().length > 0;

  const currentCategoryPill = filters.cats && filters.cats.size === 1
    ? Array.from(filters.cats)[0]
    : ((filters.cats && filters.cats.size === 0) ? "All" : null);

  const filterSidebarContent = (
    <div>
      <div className="filter-block">
        <h4>Category</h4>
        {CATEGORIES.filter(c => c !== "All").map(c => {
          const isChecked = filters.cats && filters.cats.has(c);
          const count = PRODUCTS.filter(p => p.cat === c).length;
          return (
            <label key={c} className={`filter-row ${isChecked ? "active-label" : ""}`}>
              <input type="checkbox" checked={isChecked} onChange={() => toggleCat(c)} />
              <span>{c}</span>
              <span style={{ marginLeft: "auto", fontSize: 11, opacity: 0.6 }}>({count})</span>
            </label>
          );
        })}
      </div>

      <div className="filter-block">
        <h4>Price Range</h4>
        {priceOpts.map(o => (
          <label key={o.key} className={`filter-row ${filters.price === o.key ? "active-label" : ""}`}>
            <input type="checkbox" checked={filters.price === o.key} onChange={() => setPrice(o.key)} />
            <span>{o.label}</span>
          </label>
        ))}
      </div>

      <div className="filter-block">
        <h4>Colour</h4>
        <div className="color-swatches-grid">
          {availableColors.map(col => {
            const sample = PRODUCTS.find(p => p.color === col);
            const hex = sample ? sample.colorHex || sample.bg : "#666";
            const isActive = filters.colors && filters.colors.has(col);
            return (
              <div
                key={col}
                className={`color-swatch-chip ${isActive ? "active" : ""}`}
                onClick={() => toggleColor(col)}
              >
                <span className="dot" style={{ background: hex }} />
                <span>{col}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="filter-block">
        <h4>Collections & Badges</h4>
        <label className={`filter-row ${filters.flag === "Bestseller" ? "active-label" : ""}`}>
          <input type="checkbox" checked={filters.flag === "Bestseller"} onChange={() => toggleFlag("Bestseller")} />
          <span>Bestsellers</span>
        </label>
        <label className={`filter-row ${filters.flag === "New" ? "active-label" : ""}`}>
          <input type="checkbox" checked={filters.flag === "New"} onChange={() => toggleFlag("New")} />
          <span>New Releases</span>
        </label>
      </div>

      <button className="tag-btn ghost" style={{ width: "100%", justifyContent: "center" }} onClick={clearFilters}>
        Clear all filters
      </button>
    </div>
  );

  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Atelier Collection — {PRODUCTS.length} Total Pieces</div>
        <h1>All Garments</h1>
      </div>

      {/* Horizontal Category Filter Pills */}
      <div className="wrap">
        <div className="shop-pills-bar">
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`cat-pill ${currentCategoryPill === c ? "active" : ""}`}
              onClick={() => setCategorySingle(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="shop-layout">
          {/* Desktop Filter Sidebar */}
          <aside>
            {filterSidebarContent}
          </aside>

          {/* Main Content Area */}
          <div>
            {/* Mobile Filter Toggle Button */}
            <div className="mobile-filter-bar">
              <button className="mobile-filter-btn" onClick={() => setMobileFilterOpen(true)}>
                <span>Filter & Refine ({list.length} pieces)</span>
                <span>⚙</span>
              </button>
            </div>

            {/* Mobile Filter Drawer / Modal */}
            {mobileFilterOpen && (
              <div className="modal-overlay show" onClick={() => setMobileFilterOpen(false)}>
                <div className="modal-content" style={{ padding: 28, maxWidth: 460 }} onClick={e => e.stopPropagation()}>
                  <button className="modal-close-btn" onClick={() => setMobileFilterOpen(false)}>✕</button>
                  <h3 style={{ fontSize: 24, marginBottom: 20 }}>Refine Selection</h3>
                  {filterSidebarContent}
                  <button
                    className="tag-btn full"
                    style={{ marginTop: 20 }}
                    onClick={() => setMobileFilterOpen(false)}
                  >
                    View {list.length} Results
                  </button>
                </div>
              </div>
            )}

            {/* Shop Toolbar */}
            <div className="shop-toolbar">
              <div className="shop-count">
                Showing <strong>{list.length}</strong> {list.length === 1 ? "piece" : "pieces"}
              </div>

              <div className="shop-toolbar-right">
                <input
                  type="text"
                  placeholder="Filter by keyword..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  style={{
                    border: "1px solid var(--paper-line)",
                    background: "var(--paper)",
                    padding: "7px 12px",
                    fontSize: 12,
                    fontFamily: "Space Grotesk, sans-serif"
                  }}
                />

                <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                  <option value="featured">Sort: Featured</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="new">Newest Releases</option>
                </select>
              </div>
            </div>

            {/* Active Filters Badges */}
            {hasActiveFilters && (
              <div className="active-filters-row">
                <span className="eyebrow" style={{ marginRight: 6 }}>Active:</span>
                {Array.from(filters.cats || []).map(c => (
                  <span key={c} className="filter-pill-badge" onClick={() => toggleCat(c)}>
                    {c} ✕
                  </span>
                ))}
                {Array.from(filters.colors || []).map(col => (
                  <span key={col} className="filter-pill-badge" onClick={() => toggleColor(col)}>
                    {col} ✕
                  </span>
                ))}
                {filters.price && (
                  <span className="filter-pill-badge" onClick={() => setPrice(filters.price)}>
                    {priceOpts.find(p => p.key === filters.price)?.label} ✕
                  </span>
                )}
                {filters.flag && (
                  <span className="filter-pill-badge" onClick={() => toggleFlag(filters.flag)}>
                    {filters.flag} ✕
                  </span>
                )}
                {searchQuery && (
                  <span className="filter-pill-badge" onClick={() => setSearchQuery("")}>
                    "{searchQuery}" ✕
                  </span>
                )}
                <button
                  style={{ fontSize: 11, textDecoration: "underline", color: "var(--brick)", cursor: "pointer", fontFamily: "IBM Plex Mono, monospace" }}
                  onClick={clearFilters}
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products Grid */}
            {list.length > 0 ? (
              <div className="shop-grid">
                {list.map(p => (
                  <Card
                    key={p.id}
                    product={p}
                    onOpen={openProduct}
                    onQuickView={openQuickView}
                    isWishlisted={isWishlisted(p.id)}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>No garments match the selected filters.</p>
                <button className="tag-btn ghost" style={{ marginTop: 12 }} onClick={clearFilters}>
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetailPage({
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
  const product = PRODUCTS.find(p => p.id === productId);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [sizeErr, setSizeErr] = useState(false);
  const [tab, setTab] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  // New review form state
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: "", rating: 5, title: "", comment: "" });
  const [localReviews, setLocalReviews] = useState([]);

  useEffect(() => {
    setSize("M");
    setQty(1);
    setSizeErr(false);
    setTab(0);
    setImgIdx(0);
  }, [productId]);

  if (!product) return null;

  const images = (product.images && product.images.length > 0) ? product.images : [product.img];
  const related = PRODUCTS.filter(p => p.cat === product.cat && p.id !== product.id).slice(0, 3);
  const allReviews = [...(product.reviews || []), ...localReviews];

  const handleAdd = (buyNow) => {
    if (!size) {
      setSizeErr(true);
      return;
    }
    addToCart(product.id, size, qty);
    if (buyNow) go('checkout');
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
    setLocalReviews(prev => [newRev, ...prev]);
    setReviewModalOpen(false);
    setReviewForm({ name: "", rating: 5, title: "", comment: "" });
    notify("Thank you! Your review has been added.");
  };

  const tabs = [
    { title: "Description", content: (
      <div>
        <p>{product.desc}</p>
        {product.details && (
          <ul style={{ marginTop: 12 }}>
            {product.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        )}
      </div>
    )},
    { title: "Fabric & Atelier Care", content: (
      <div>
        <p><strong>Composition:</strong> {product.composition || "Natural blend"}</p>
        <p><strong>Origin Mill:</strong> {product.origin || "European Artisan Weavers"}</p>
        <p style={{ marginTop: 10 }}>
          Dry clean recommended for tailored pieces, or gentle cold hand wash with neutral silk/wool detergent. Lay flat on towel to dry away from direct heat. Steam lightly to refresh between wears.
        </p>
      </div>
    )},
    { title: "Shipping & Returns", content: (
      <div>
        <p>
          Complimentary standard shipping on all orders over ₹4,000. Orders ship via express courier in 3–5 working days with real-time tracking.
        </p>
        <p style={{ marginTop: 10 }}>
          Easy 14-day studio returns on unworn, unaltered pieces with tags intact. Hand-packaged in biodegradable unbleached cotton garment bags.
        </p>
      </div>
    )}
  ];

  return (
    <div className="page">
      <div className="wrap pd-layout">
        {/* Left Column: Multi-Angle Gallery */}
        <div className="pd-gallery">
          <div className="pd-main-media">
            <ProductImage product={product} className="" imageIndex={imgIdx} />
          </div>
          {images.length > 1 && (
            <div className="pd-thumbnails">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`pd-thumb ${i === imgIdx ? "active" : ""}`}
                  onClick={() => setImgIdx(i)}
                >
                  <img src={img} alt={`${product.name} angle ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Garment Information & Purchasing */}
        <div className="pd-info">
          <div className="pd-crumb">
            <span onClick={() => go('home')}>Home</span> / <span onClick={() => go('shop')}>Shop</span> / <span>{product.cat}</span>
          </div>

          <h1>{product.name}</h1>

          {/* Rating Summary Row */}
          <div className="pd-rating-row">
            <span className="stars">★★★★★</span>
            <span>{product.rating}</span>
            <span>·</span>
            <a
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                const el = document.getElementById("reviews-section");
                el && el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {allReviews.length} Verified Reviews
            </a>
          </div>

          <div className="pd-price price-tag">{money(product.price)}</div>

          {/* Low Stock Warning */}
          {product.stock && product.stock <= 5 && (
            <div className="pd-stock-badge">
              <span>●</span>
              <span>Only {product.stock} pieces remaining in this batch</span>
            </div>
          )}

          <p className="pd-desc">{product.desc}</p>

          {/* Colour Swatch */}
          <div className="option-block">
            <div className="option-label">
              <span>Colour</span>
              <span>{product.color}</span>
            </div>
            <div className="size-row">
              <div
                className="size-chip selected"
                style={{
                  width: "auto",
                  padding: "0 18px",
                  background: product.bg,
                  color: product.light ? "#EDEAE1" : "#1B1B18",
                  borderColor: product.bg,
                  display: "flex",
                  alignItems: "center",
                  gap: 8
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: product.light ? "#EDEAE1" : "#1B1B18" }} />
                <span>{product.color}</span>
              </div>
            </div>
          </div>

          {/* Size Selection with Size Guide Trigger */}
          <div className="option-block">
            <div className="option-label">
              <span>Size</span>
              <span className="size-guide-trigger" onClick={onOpenSizeGuide}>Size Guide</span>
            </div>
            {sizeErr && (
              <div style={{ color: "var(--brick)", fontSize: 12, marginBottom: 8, fontFamily: "IBM Plex Mono, monospace" }}>
                Please select your size before adding to bag
              </div>
            )}
            <div className="size-row">
              {SIZES.map(s => (
                <div
                  key={s}
                  className={`size-chip ${s === size ? "selected" : ""}`}
                  onClick={() => { setSize(s); setSizeErr(false); }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Stepper */}
          <div className="option-block">
            <div className="option-label"><span>Quantity</span></div>
            <div className="qty-row">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pd-actions">
            <button className="tag-btn" onClick={() => handleAdd(false)}>Add to bag</button>
            <button className="tag-btn ghost" onClick={() => handleAdd(true)}>Buy now</button>

            {/* Wishlist toggle */}
            <button
              className={`wish-icon-btn ${isWishlisted(product.id) ? "active" : ""}`}
              onClick={() => onToggleWishlist(product.id)}
              title="Save to wishlist"
              aria-label="Wishlist"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={isWishlisted(product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>

            {/* Share button */}
            <button
              className="wish-icon-btn"
              onClick={handleShare}
              title="Share piece"
              aria-label="Share"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
          </div>

          {/* Accordion Specification Tabs */}
          <div className="pd-tabs">
            {tabs.map((t, idx) => (
              <div
                key={idx}
                className={`pd-tab ${tab === idx ? "active" : ""}`}
                onClick={() => setTab(idx)}
              >
                {t.title}
              </div>
            ))}
          </div>
          <div className="pd-tab-content">
            {tabs[tab].content}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div id="reviews-section" className="reviews-section">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>Atelier Feedback</div>
              <h2>Customer Reviews ({allReviews.length})</h2>
            </div>
            <button className="tag-btn" onClick={() => setReviewModalOpen(true)}>Write a review</button>
          </div>

          <div className="reviews-grid">
            {allReviews.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-card-head">
                  <strong>{r.author}</strong>
                  <span>{r.date}</span>
                </div>
                <div className="review-card-stars">
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>
                <h4>{r.title}</h4>
                <p>{r.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Write Review */}
        {reviewModalOpen && (
          <div className="modal-overlay show" onClick={() => setReviewModalOpen(false)}>
            <div className="modal-content" style={{ maxWidth: 520, padding: 32 }} onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setReviewModalOpen(false)}>✕</button>
              <div className="eyebrow" style={{ marginBottom: 8 }}>Share your thoughts</div>
              <h2 style={{ fontSize: 26, marginBottom: 18 }}>Review {product.name}</h2>
              <form onSubmit={handleAddReview}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya R."
                    value={reviewForm.name}
                    onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Rating</label>
                  <select
                    value={reviewForm.rating}
                    onChange={e => setReviewForm({ ...reviewForm, rating: e.target.value })}
                  >
                    <option value="5">5 Stars — Flawless</option>
                    <option value="4">4 Stars — Great quality</option>
                    <option value="3">3 Stars — Satisfactory</option>
                    <option value="2">2 Stars — Could be improved</option>
                    <option value="1">1 Star — Disappointed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Review Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Beautiful drape and fabric weight"
                    value={reviewForm.title}
                    onChange={e => setReviewForm({ ...reviewForm, title: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Your Review</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="How does the garment fit? What do you think of the weave?"
                    value={reviewForm.comment}
                    onChange={e => setReviewForm({ ...reviewForm, comment: e.target.value })}
                  />
                </div>
                <button type="submit" className="tag-btn full" style={{ marginTop: 12 }}>
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Related Products Recommendation */}
        {related.length > 0 && (
          <div style={{ gridColumn: "1/-1", marginTop: 50 }}>
            <div className="section-head">
              <h2>You may also consider</h2>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              {related.map(p => (
                <Card
                  key={p.id}
                  product={p}
                  onOpen={openProduct}
                  onQuickView={openQuickView}
                  isWishlisted={isWishlisted(p.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bar */}
      <div className="mobile-sticky-bar">
        <div>
          <div style={{ fontFamily: "Fraunces, serif", fontSize: 16 }}>{product.name}</div>
          <div className="price-tag" style={{ fontSize: 14 }}>{money(product.price)}</div>
        </div>
        <button className="tag-btn" onClick={() => handleAdd(false)}>
          Add to bag
        </button>
      </div>
    </div>
  );
}

function CartPage({
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
  const freeShippingThreshold = 4000;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - totals.subtotal);
  const freeShippingProgress = Math.min(100, Math.round((totals.subtotal / freeShippingThreshold) * 100));

  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Review your selection</div>
        <h1>Your Shopping Bag</h1>
      </div>

      <div className="wrap cart-layout">
        <div>
          {/* Shipping Meter */}
          <div className="shipping-meter">
            <div className="shipping-meter-text">
              {neededForFreeShipping === 0 ? (
                <span style={{ color: "var(--pine)", fontWeight: 600 }}>
                  ✓ Complimentary Standard Delivery Unlocked
                </span>
              ) : (
                <span>Add <strong>{money(neededForFreeShipping)}</strong> more to receive Free Shipping</span>
              )}
            </div>
            <div className="shipping-meter-bar">
              <div
                className={`shipping-meter-fill ${neededForFreeShipping === 0 ? "completed" : ""}`}
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {cart.length === 0 ? (
            <div className="empty-state" style={{ padding: "60px 0" }}>
              <p style={{ marginBottom: 16 }}>Your bag is currently empty.</p>
              <button className="tag-btn" onClick={() => go('shop')}>
                Explore the Collection
              </button>
            </div>
          ) : (
            cart.map((c, i) => {
              const p = PRODUCTS.find(x => x.id === c.id);
              if (!p) return null;
              return (
                <div className="cart-item" key={`${c.id}-${c.size}-${i}`}>
                  <div className="cart-item-media">
                    <ProductImage product={p} className="" />
                  </div>
                  <div>
                    <div className="cart-item-title">{p.name}</div>
                    <div className="cart-item-meta">{p.color} · Size {c.size}</div>
                    <div className="qty-row">
                      <button onClick={() => updateQty(i, -1)}>−</button>
                      <span>{c.qty}</span>
                      <button onClick={() => updateQty(i, 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <span className="price-tag">{money(p.price * c.qty)}</span>
                    <button className="cart-item-remove" onClick={() => removeItem(i)}>Remove</button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Order Summary Box */}
        <div className="summary-box">
          <h3>Order summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span className="mono">{money(totals.subtotal)}</span>
          </div>

          {totals.discount > 0 && (
            <div className="summary-row" style={{ color: "var(--pine)", fontWeight: 500 }}>
              <span>Promo Discount</span>
              <span className="mono">−{money(totals.discount)}</span>
            </div>
          )}

          <div className="summary-row">
            <span>Estimated Shipping</span>
            <span className="mono">{totals.shipping === 0 ? "Free" : money(totals.shipping)}</span>
          </div>

          {/* Promo code application */}
          {promoApplied ? (
            <div className="promo-applied-badge">
              <span>Code {promo.toUpperCase()} applied</span>
              <button onClick={removePromo} style={{ textDecoration: "underline" }}>Remove</button>
            </div>
          ) : (
            <div className="promo-row">
              <input
                type="text"
                placeholder="Promo code (e.g. VESTA10)"
                value={promo}
                onChange={e => setPromo(e.target.value)}
              />
              <button onClick={applyPromo}>Apply</button>
            </div>
          )}

          <div className="summary-row total">
            <span>Total</span>
            <span>{money(totals.total)}</span>
          </div>

          <button
            className="tag-btn full"
            style={{ marginTop: 22 }}
            disabled={cart.length === 0}
            onClick={() => go('checkout')}
          >
            Proceed to Checkout
          </button>

          <div style={{ marginTop: 16, fontSize: 12, color: "var(--ink-soft)", textAlign: "center" }}>
            🔒 Safe & encrypted checkout
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutPage({ cart, totals, placeOrder, go }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "Delhi",
    pin: "",
    note: ""
  });
  const [errors, setErrors] = useState({});
  const [pay, setPay] = useState("card");
  const [cardData, setCardData] = useState({ num: "", exp: "", cvv: "", name: "" });
  const [upiId, setUpiId] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: false }));
  };

  const validators = {
    name: v => v && v.trim().length >= 2,
    phone: v => v && /^[6-9]\d{9}$/.test(v.trim()),
    email: v => v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    address: v => v && v.trim().length >= 5,
    city: v => v && v.trim().length >= 2,
    pin: v => v && /^\d{6}$/.test(v.trim())
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
    Object.keys(validators).forEach(k => {
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

  const field = (id, label, placeholder, type = "text") => (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className={errors[id] ? "invalid" : ""}
        placeholder={placeholder}
        value={form[id]}
        onChange={e => update(id, e.target.value)}
      />
      <div className={`err ${errors[id] ? "show" : ""}`}>{errorMsgs[id]}</div>
    </div>
  );

  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Atelier Dispatch</div>
        <h1>Checkout</h1>
      </div>

      <div className="wrap co-layout">
        <div>
          <div className="co-steps">
            <span className="co-step">1. Delivery Address</span>
            <span style={{ color: "var(--ink-soft)" }}>·</span>
            <span className="co-step">2. Payment</span>
          </div>

          {/* Customer Details */}
          <div className="form-row">
            {field("name", "Full Name", "Ananya Rao")}
            {field("phone", "Mobile Number", "9876543210", "tel")}
          </div>

          {field("email", "Email Address for Order Updates", "ananya@email.com", "email")}
          {field("address", "Delivery Street Address", "House / Flat No., Street, Landmark")}

          <div className="form-row">
            {field("city", "City", "New Delhi")}
            {field("pin", "PIN Code", "110001", "tel")}
          </div>

          {/* Shipping Method */}
          <div className="divider-label">Shipping Method</div>
          <div className="pay-options" style={{ marginBottom: 24 }}>
            <label className={`pay-option ${shippingMethod === "standard" ? "selected" : ""}`}>
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "standard"}
                onChange={() => setShippingMethod("standard")}
              />
              <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                <span>Standard Atelier Delivery (3–5 working days)</span>
                <strong>{totals.subtotal >= 4000 ? "Free" : "₹150"}</strong>
              </div>
            </label>
            <label className={`pay-option ${shippingMethod === "express" ? "selected" : ""}`}>
              <input
                type="radio"
                name="shipping"
                checked={shippingMethod === "express"}
                onChange={() => setShippingMethod("express")}
              />
              <div style={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
                <span>Priority Express Air (1–2 working days)</span>
                <strong>₹250</strong>
              </div>
            </label>
          </div>

          {/* Payment Method Selector */}
          <div className="divider-label">Payment Option</div>
          <div className="pay-options">
            <label className={`pay-option ${pay === "card" ? "selected" : ""}`}>
              <input type="radio" name="pay" checked={pay === "card"} onChange={() => setPay("card")} />
              <span>Credit or Debit Card (Visa, Mastercard, RuPay, Amex)</span>
            </label>

            {pay === "card" && (
              <div className="pay-subpanel">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="4532 •••• •••• 8910"
                    value={cardData.num}
                    onChange={e => setCardData({ ...cardData, num: e.target.value })}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry (MM/YY)</label>
                    <input
                      type="text"
                      placeholder="08/28"
                      value={cardData.exp}
                      onChange={e => setCardData({ ...cardData, exp: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="password"
                      maxLength="4"
                      placeholder="•••"
                      value={cardData.cvv}
                      onChange={e => setCardData({ ...cardData, cvv: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            )}

            <label className={`pay-option ${pay === "upi" ? "selected" : ""}`}>
              <input type="radio" name="pay" checked={pay === "upi"} onChange={() => setPay("upi")} />
              <span>Instant UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
            </label>

            {pay === "upi" && (
              <div className="pay-subpanel">
                <div className="form-group" style={{ margin: 0 }}>
                  <label>UPI ID (VPA)</label>
                  <input
                    type="text"
                    placeholder="yourname@okaxis"
                    value={upiId}
                    onChange={e => setUpiId(e.target.value)}
                  />
                  <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 6 }}>
                    A payment request will be sent to your UPI app.
                  </div>
                </div>
              </div>
            )}

            <label className={`pay-option ${pay === "cod" ? "selected" : ""}`}>
              <input type="radio" name="pay" checked={pay === "cod"} onChange={() => setPay("cod")} />
              <span>Cash on Delivery (Pay upon arrival)</span>
            </label>
          </div>

          {/* Delivery Note */}
          <div className="form-group" style={{ marginTop: 24 }}>
            <label>Gift Instructions or Delivery Note (Optional)</label>
            <textarea
              rows="2"
              placeholder="Leave with front desk, gift wrapping request, etc."
              value={form.note}
              onChange={e => update("note", e.target.value)}
            />
          </div>

          <button
            className="tag-btn full"
            style={{ marginTop: 30 }}
            onClick={submit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Securing Your Order..." : `Confirm and Pay ${money(totals.total)}`}
          </button>
        </div>

        {/* Order Review Sidebar */}
        <div className="summary-box">
          <h3>Your Bag Summary</h3>
          {cart.map((c, i) => {
            const p = PRODUCTS.find(x => x.id === c.id);
            if (!p) return null;
            return (
              <div className="summary-row" key={i} style={{ alignItems: "center" }}>
                <span>{p.name} ({c.size}) × {c.qty}</span>
                <span className="mono">{money(p.price * c.qty)}</span>
              </div>
            );
          })}

          <div className="summary-row" style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--paper-line)" }}>
            <span>Subtotal</span>
            <span className="mono">{money(totals.subtotal)}</span>
          </div>

          {totals.discount > 0 && (
            <div className="summary-row" style={{ color: "var(--pine)", fontWeight: 500 }}>
              <span>Promo Discount</span>
              <span className="mono">−{money(totals.discount)}</span>
            </div>
          )}

          <div className="summary-row">
            <span>Shipping</span>
            <span className="mono">{totals.shipping === 0 ? "Free" : money(totals.shipping)}</span>
          </div>

          <div className="summary-row total">
            <span>Total to pay</span>
            <span>{money(totals.total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessPage({ orderNumber, latestOrder, go }) {
  return (
    <div className="page">
      <div className="wrap success-wrap">
        <div className="success-mark">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <div className="eyebrow" style={{ marginBottom: 14 }}>Atelier Order Confirmed</div>
        <h1>Thank you, your pieces are being readied.</h1>
        <p>
          We've dispatched a confirmation email with full care instructions and tracking details.
        </p>

        <div className="order-num mono">{orderNumber}</div>

        {/* Visual Timeline Preview */}
        <div className="timeline" style={{ maxWidth: 540, margin: "20px auto 40px" }}>
          <div className="timeline-step completed">
            <div className="timeline-dot">✓</div>
            <div className="timeline-title">Confirmed</div>
          </div>
          <div className="timeline-step current">
            <div className="timeline-dot">2</div>
            <div className="timeline-title">Atelier Cut</div>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">3</div>
            <div className="timeline-title">Inspected</div>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">4</div>
            <div className="timeline-title">Dispatched</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button className="tag-btn" onClick={() => go('orders')}>
            Track Order Status
          </button>
          <button className="tag-btn ghost" onClick={() => go('home')}>
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}

function TrackOrderPage({ orders, go }) {
  const [searchId, setSearchId] = useState("");
  const activeOrder = orders.find(o => o.id.toLowerCase() === searchId.trim().toLowerCase()) || orders[0];

  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Atelier Dispatch Status</div>
        <h1>Track Your Orders</h1>
      </div>

      <div className="wrap" style={{ padding: "40px 0 100px", maxWidth: 840 }}>
        {/* Order search bar */}
        <div style={{ display: "flex", gap: 10, marginBottom: 36 }}>
          <input
            type="text"
            placeholder="Enter Order Number (e.g. VS-849201)"
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
            style={{
              flex: 1,
              border: "1px solid var(--paper-line)",
              padding: "12px 16px",
              fontFamily: "IBM Plex Mono, monospace",
              fontSize: 14
            }}
          />
        </div>

        {orders.length === 0 ? (
          <div className="empty-state">
            <p>You have no recent orders placed in this browser session.</p>
            <button className="tag-btn" style={{ marginTop: 14 }} onClick={() => go('shop')}>
              Shop the Collection
            </button>
          </div>
        ) : activeOrder ? (
          <div style={{ background: "var(--paper-dim)", padding: 36, border: "1px solid var(--paper-line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div className="eyebrow">Order Reference</div>
                <h2 style={{ fontSize: 24, marginTop: 4 }}>{activeOrder.id}</h2>
              </div>
              <div className="eyebrow" style={{ color: "var(--pine)" }}>
                Placed: {activeOrder.date || "Today"} · Status: {activeOrder.status || "In Atelier"}
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="timeline">
              <div className="timeline-step completed">
                <div className="timeline-dot">✓</div>
                <div className="timeline-title">Order Confirmed</div>
              </div>
              <div className="timeline-step current">
                <div className="timeline-dot">●</div>
                <div className="timeline-title">Atelier Packaging</div>
              </div>
              <div className="timeline-step">
                <div className="timeline-dot">○</div>
                <div className="timeline-title">Quality Hand-Check</div>
              </div>
              <div className="timeline-step">
                <div className="timeline-dot">○</div>
                <div className="timeline-title">Out for Delivery</div>
              </div>
            </div>

            {/* Order Items */}
            <div style={{ borderTop: "1px solid var(--paper-line)", paddingTop: 20, marginTop: 20 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Garments in this consignment</div>
              {activeOrder.items && activeOrder.items.map((item, idx) => {
                const p = PRODUCTS.find(x => x.id === item.id);
                if (!p) return null;
                return (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 13.5 }}>
                    <span>{p.name} ({item.size}) × {item.qty}</span>
                    <span className="mono">{money(p.price * item.qty)}</span>
                  </div>
                );
              })}
              <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--paper-line)", paddingTop: 12, marginTop: 12, fontWeight: 600 }}>
                <span>Total Amount Paid</span>
                <span className="mono">{money(activeOrder.total)}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>No order found matching "{searchId}". Please check your order reference.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Global attachment
if (typeof window !== "undefined") {
  window.HomePage = HomePage;
  window.ShopPage = ShopPage;
  window.ProductDetailPage = ProductDetailPage;
  window.CartPage = CartPage;
  window.CheckoutPage = CheckoutPage;
  window.SuccessPage = SuccessPage;
  window.TrackOrderPage = TrackOrderPage;
}
