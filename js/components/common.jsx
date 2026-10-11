// ── VESTA — shared components ────────────────────────────────────────────
const { useState, useEffect, useRef } = React;

function AnnouncementBar({ onPromoClick }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex(prev => (prev + 1) % ANNOUNCEMENTS.length);
  const prev = () => setIndex(prev => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);

  return (
    <div className="announcement-bar">
      <button className="announcement-nav-btn" onClick={prev} aria-label="Previous announcement">‹</button>
      <div style={{ cursor: "pointer" }} onClick={() => onPromoClick && onPromoClick("VESTA10")}>
        <span>{ANNOUNCEMENTS[index]}</span>
        {ANNOUNCEMENTS[index].includes("VESTA10") && (
          <span className="gold" style={{ marginLeft: 6, textDecoration: "underline" }}>Apply code</span>
        )}
      </div>
      <button className="announcement-nav-btn" onClick={next} aria-label="Next announcement">›</button>
    </div>
  );
}

function IconFallback({ icon, color }) {
  const path = (ICON_PATHS && ICON_PATHS[icon]) || ICON_PATHS.jacket;
  return (
    <div className="fallback">
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.3" strokeLinejoin="round" strokeLinecap="round">
        <path d={path} />
      </svg>
    </div>
  );
}

function ProductImage({ product, className, imageIndex = 0 }) {
  const [errored, setErrored] = useState(false);
  const iconColor = product && product.light ? "#EDEAE1" : "#1B1B18";
  const bg = (product && product.bg) || "#2E2A26";
  const icon = (product && product.icon) || "jacket";
  const src = (product && product.images && product.images[imageIndex]) || (product && product.img) || "";

  if (errored || !src) {
    return (
      <div className={className} style={{ background: bg }}>
        <IconFallback icon={icon} color={iconColor} />
      </div>
    );
  }

  return (
    <div className={className} style={{ background: bg }}>
      <img
        src={src}
        alt={product ? product.name : "Product"}
        loading="lazy"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

function Card({ product, onOpen, onQuickView, isWishlisted, onToggleWishlist }) {
  const flagClass = product.flag === "Bestseller" ? "bestseller" : (product.flag === "New" ? "new" : "");

  return (
    <div
      className="card"
      onClick={() => onOpen(product.id)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(product.id); }}
    >
      <div className="card-media">
        {product.flag && (
          <div className={`card-flag ${flagClass}`}>{product.flag}</div>
        )}

        {/* Wishlist toggle heart button */}
        <button
          className={`card-wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
          aria-label="Wishlist"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        <ProductImage product={product} className="" />

        {/* Quick View hover trigger */}
        <div
          className="card-quickview-btn"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
        >
          Quick View
        </div>
      </div>

      <div className="card-title">{product.name}</div>
      <div className="card-meta">
        <span className="card-cat">{product.cat} — {product.color}</span>
        <span className="price-tag">{money(product.price)}</span>
      </div>

      {product.rating && (
        <div className="card-rating">
          <span className="star">★</span>
          <span>{product.rating}</span>
          <span style={{ opacity: 0.6 }}>({product.reviewsCount})</span>
        </div>
      )}
    </div>
  );
}

function Nav({
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

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button
            className="mobile-menu-btn"
            onClick={onOpenMobileMenu}
            aria-label="Open mobile menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <a className="logo" onClick={() => go('home')}>VE<span>S</span>TA</a>
        </div>

        <div className="nav-links">
          <a onClick={() => go('home')} className={page === 'home' ? 'active' : ''}>Home</a>
          <a onClick={() => go('shop')} className={page === 'shop' ? 'active' : ''}>Shop All</a>
          <a onClick={() => goCategory('Outerwear')}>Outerwear</a>
          <a onClick={() => goCategory('Knitwear')}>Knitwear</a>
          <a onClick={() => goCategory('Dresses')}>Dresses</a>
          <a onClick={() => go('orders')}>Orders</a>
        </div>

        <div className="nav-actions">
          {/* Search Trigger */}
          <button className="nav-icon-btn" onClick={onOpenSearch} title="Search pieces" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Wishlist Trigger */}
          <button className="nav-icon-btn" onClick={onOpenWishlist} title="View Saved Pieces" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {wishCount > 0 && <span className="wish-badge">{wishCount}</span>}
          </button>

          {/* Cart Trigger */}
          <button className="nav-icon-btn" onClick={onOpenCart} title="View Bag" aria-label="Cart">
            <span style={{ display: "none" }}>Cart</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function MobileMenuDrawer({ isOpen, onClose, go, goCategory, onOpenSearch, wishCount }) {
  if (!isOpen) return null;

  return (
    <React.Fragment>
      <div className={`drawer-backdrop ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`drawer-panel left ${isOpen ? "show" : ""}`}>
        <div className="drawer-header">
          <div className="logo">VE<span>S</span>TA</div>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close menu">✕</button>
        </div>

        <div className="drawer-body">
          <div style={{ marginBottom: 24 }}>
            <button
              className="tag-btn ghost"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => { onClose(); onOpenSearch(); }}
            >
              Search collection
            </button>
          </div>

          <div className="mobile-nav-list">
            <a
              className="mobile-nav-link"
              onClick={() => { go('home'); onClose(); }}
            >
              Home <span>→</span>
            </a>
            <a
              className="mobile-nav-link"
              onClick={() => { go('shop'); onClose(); }}
            >
              Shop All ({PRODUCTS.length}) <span>→</span>
            </a>

            <div>
              <div className="eyebrow" style={{ marginTop: 10, marginBottom: 8 }}>Categories</div>
              <div className="mobile-nav-cats">
                {CATEGORIES.filter(c => c !== "All").map(c => {
                  const count = PRODUCTS.filter(p => p.cat === c).length;
                  return (
                    <a
                      key={c}
                      onClick={() => { goCategory(c); onClose(); }}
                    >
                      {c} <span style={{ opacity: 0.6, fontSize: 12 }}>({count})</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              className="mobile-nav-link"
              onClick={() => { go('orders'); onClose(); }}
            >
              Track Orders <span>→</span>
            </a>
          </div>
        </div>

        <div className="drawer-footer">
          <div className="eyebrow" style={{ marginBottom: 8 }}>Vesta Atelier Studio</div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
            Small batches cut in natural cloth. For assistance: <a href="mailto:hello@vesta.studio" style={{ textDecoration: "underline" }}>hello@vesta.studio</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

function CartDrawer({
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
  const freeShippingThreshold = 4000;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - totals.subtotal);
  const freeShippingProgress = Math.min(100, Math.round((totals.subtotal / freeShippingThreshold) * 100));

  return (
    <React.Fragment>
      <div className={`drawer-backdrop ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`drawer-panel right ${isOpen ? "show" : ""}`}>
        <div className="drawer-header">
          <h3>Your Bag ({cartCount})</h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {/* Free Shipping Meter */}
        <div className="shipping-meter" style={{ margin: "16px 28px 0" }}>
          <div className="shipping-meter-text">
            {neededForFreeShipping === 0 ? (
              <span style={{ color: "var(--pine)", fontWeight: 600 }}>
                ✓ Complimentary Standard Shipping Unlocked
              </span>
            ) : (
              <span>Add <strong>{money(neededForFreeShipping)}</strong> more for Free Shipping</span>
            )}
          </div>
          <div className="shipping-meter-bar">
            <div
              className={`shipping-meter-fill ${neededForFreeShipping === 0 ? "completed" : ""}`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="empty-state" style={{ padding: "60px 0" }}>
              <p style={{ marginBottom: 16 }}>Your bag is currently empty.</p>
              <button
                className="tag-btn"
                onClick={() => { onClose(); go('shop'); }}
              >
                Shop Collection
              </button>
            </div>
          ) : (
            cart.map((item, i) => {
              const p = PRODUCTS.find(x => x.id === item.id);
              if (!p) return null;
              return (
                <div className="drawer-cart-item" key={`${item.id}-${item.size}-${i}`}>
                  <div className="drawer-cart-media">
                    <ProductImage product={p} className="" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Fraunces, serif", fontSize: 16, marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 8, fontFamily: "IBM Plex Mono, monospace" }}>
                      {p.color} · Size {item.size}
                    </div>
                    <div className="qty-row" style={{ transform: "scale(0.85)", transformOrigin: "left center" }}>
                      <button onClick={() => updateQty(i, -1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(i, 1)}>+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="price-tag" style={{ marginBottom: 8 }}>{money(p.price * item.qty)}</div>
                    <button className="cart-item-remove" onClick={() => removeItem(i)}>Remove</button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="drawer-footer">
            {/* Promo code block */}
            {promoApplied ? (
              <div className="promo-applied-badge">
                <span>Code {promo.toUpperCase()} applied</span>
                <button onClick={removePromo} style={{ textDecoration: "underline" }}>Remove</button>
              </div>
            ) : (
              <div className="promo-row" style={{ margin: "0 0 16px" }}>
                <input
                  type="text"
                  placeholder="Promo (e.g. VESTA10)"
                  value={promo}
                  onChange={e => setPromo(e.target.value)}
                />
                <button onClick={applyPromo}>Apply</button>
              </div>
            )}

            <div className="summary-row">
              <span>Subtotal</span>
              <span className="mono">{money(totals.subtotal)}</span>
            </div>

            {totals.discount > 0 && (
              <div className="summary-row" style={{ color: "var(--pine)", fontWeight: 500 }}>
                <span>Discount</span>
                <span className="mono">−{money(totals.discount)}</span>
              </div>
            )}

            <div className="summary-row">
              <span>Shipping</span>
              <span className="mono">{totals.shipping === 0 ? "Free" : money(totals.shipping)}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>{money(totals.total)}</span>
            </div>

            <button
              className="tag-btn full"
              style={{ marginTop: 18 }}
              onClick={() => { onClose(); go('checkout'); }}
            >
              Proceed to Checkout
            </button>

            <button
              className="tag-btn ghost full"
              style={{ marginTop: 10 }}
              onClick={() => { onClose(); go('cart'); }}
            >
              View Full Cart
            </button>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

function WishlistDrawer({ isOpen, onClose, wishlist, onRemove, onMoveToCart, go }) {
  const wishProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <React.Fragment>
      <div className={`drawer-backdrop ${isOpen ? "show" : ""}`} onClick={onClose} />
      <div className={`drawer-panel right ${isOpen ? "show" : ""}`}>
        <div className="drawer-header">
          <h3>Saved Pieces ({wishProducts.length})</h3>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close wishlist">✕</button>
        </div>

        <div className="drawer-body">
          {wishProducts.length === 0 ? (
            <div className="empty-state" style={{ padding: "60px 0" }}>
              <p style={{ marginBottom: 16 }}>No pieces saved yet.</p>
              <button
                className="tag-btn"
                onClick={() => { onClose(); go('shop'); }}
              >
                Explore Collection
              </button>
            </div>
          ) : (
            wishProducts.map(p => (
              <div className="drawer-cart-item" key={p.id}>
                <div className="drawer-cart-media">
                  <ProductImage product={p} className="" />
                </div>
                <div>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: 16, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 8 }}>{p.cat} — {p.color}</div>
                  <div className="price-tag">{money(p.price)}</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                  <button
                    className="tag-btn"
                    style={{ padding: "8px 14px", fontSize: 11 }}
                    onClick={() => {
                      onMoveToCart(p.id, "M");
                      onRemove(p.id);
                    }}
                  >
                    Move to Bag
                  </button>
                  <button
                    className="cart-item-remove"
                    onClick={() => onRemove(p.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

function QuickViewModal({ product, isOpen, onClose, onAddToCart, onOpenFull }) {
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    setSize("M");
    setQty(1);
    setImgIdx(0);
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close quick view">✕</button>
        <div className="quick-view-grid">
          <div>
            <div className="quick-view-media">
              <ProductImage product={product} className="" imageIndex={imgIdx} />
            </div>
            {product.images && product.images.length > 1 && (
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 50,
                      height: 60,
                      border: imgIdx === idx ? "2px solid var(--pine)" : "1px solid var(--paper-line)",
                      cursor: "pointer",
                      overflow: "hidden"
                    }}
                    onClick={() => setImgIdx(idx)}
                  >
                    <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>{product.cat}</div>
            <h2 style={{ fontSize: 28, marginBottom: 8 }}>{product.name}</h2>
            <div className="price-tag" style={{ fontSize: 20, marginBottom: 14 }}>{money(product.price)}</div>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 20 }}>{product.desc}</p>

            <div className="option-block">
              <div className="option-label"><span>Select Size</span></div>
              <div className="size-row">
                {SIZES.map(s => (
                  <div
                    key={s}
                    className={`size-chip ${s === size ? "selected" : ""}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="option-block">
              <div className="option-label"><span>Quantity</span></div>
              <div className="qty-row">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)}>+</button>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button
                className="tag-btn full"
                onClick={() => {
                  onAddToCart(product.id, size, qty);
                  onClose();
                }}
              >
                Add to Bag
              </button>
            </div>

            <div style={{ marginTop: 18, textAlign: "center" }}>
              <a
                style={{ fontSize: 12, textDecoration: "underline", color: "var(--ink-soft)", fontFamily: "IBM Plex Mono, monospace" }}
                onClick={() => { onClose(); onOpenFull(product.id); }}
              >
                View full product specifications →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SizeGuideModal({ isOpen, onClose }) {
  const [unit, setUnit] = useState("metric");
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: 620, padding: 36 }} onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close size guide">✕</button>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Tailoring & Fit</div>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Size Guide</h2>
        <p style={{ fontSize: 14, color: "var(--ink-soft)", marginBottom: 20 }}>
          Our pieces are cut for an effortless, relaxed drape. If you prefer a tailored, closer silhouette, we recommend sizing down.
        </p>

        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button
            className={`cat-pill ${unit === "metric" ? "active" : ""}`}
            onClick={() => setUnit("metric")}
          >
            Centimetres (cm)
          </button>
          <button
            className={`cat-pill ${unit === "imperial" ? "active" : ""}`}
            onClick={() => setUnit("imperial")}
          >
            Inches (in)
          </button>
        </div>

        <table className="size-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Chest</th>
              <th>Waist</th>
              <th>Hip</th>
              <th>Length</th>
            </tr>
          </thead>
          <tbody>
            {SIZE_CHART[unit].map(row => (
              <tr key={row.size}>
                <td><strong>{row.size}</strong></td>
                <td>{row.chest}</td>
                <td>{row.waist}</td>
                <td>{row.hip}</td>
                <td>{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 20, fontSize: 13, color: "var(--ink-soft)", borderTop: "1px solid var(--paper-line)", paddingTop: 14 }}>
          <strong>Need personal fit advice?</strong> Speak with our studio stylist at <a href="mailto:hello@vesta.studio" style={{ textDecoration: "underline" }}>hello@vesta.studio</a>.
        </div>
      </div>
    </div>
  );
}

function SearchModal({ isOpen, onClose, onSelectProduct }) {
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

  const matches = query.trim() === "" ? [] : PRODUCTS.filter(p => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q) ||
      p.color.toLowerCase().includes(q) ||
      (p.composition && p.composition.toLowerCase().includes(q)) ||
      p.desc.toLowerCase().includes(q)
    );
  });

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content search-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close search">✕</button>

        <div className="eyebrow" style={{ marginBottom: 12 }}>Search Atelier Collection</div>

        <div className="search-input-wrap">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by cloth, cut, category..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        {query.trim() === "" ? (
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Suggested searches</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Blazer", "Knitwear", "Mulberry Silk", "Wide-Leg", "Denim", "Overcoat"].map(s => (
                <button
                  key={s}
                  className="cat-pill"
                  onClick={() => setQuery(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              {matches.length} {matches.length === 1 ? "piece" : "pieces"} found
            </div>
            {matches.length === 0 ? (
              <p style={{ color: "var(--ink-soft)", fontSize: 14 }}>No matches found for "{query}". Try searching for wool, blazer, or silk.</p>
            ) : (
              <div className="search-results-list">
                {matches.map(p => (
                  <div
                    key={p.id}
                    className="search-result-item"
                    onClick={() => {
                      onClose();
                      onSelectProduct(p.id);
                    }}
                  >
                    <div className="search-result-thumb">
                      <ProductImage product={p} className="" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "Fraunces, serif", fontSize: 16 }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "var(--ink-soft)" }}>{p.cat} — {p.color}</div>
                    </div>
                    <div className="price-tag">{money(p.price)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Footer({ go, goCategory, notify }) {
  const info = (label, message) => (
    <a onClick={() => notify(message)}>{label}</a>
  );

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 14 }}>VE<span>S</span>TA</div>
            <p style={{ maxWidth: 280, color: "var(--ink-soft)", lineHeight: 1.6 }}>
              Considered clothing, worn often. Small batches cut in genuine natural cloth, tailored to outlast fleeting seasons.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <a onClick={() => go('shop')}>All pieces ({PRODUCTS.length})</a>
            <a onClick={() => goCategory('Outerwear')}>Outerwear</a>
            <a onClick={() => goCategory('Knitwear')}>Knitwear</a>
            <a onClick={() => goCategory('Dresses')}>Dresses</a>
            <a onClick={() => goCategory('Bottoms')}>Bottoms</a>
          </div>
          <div>
            <h4>Atelier & Care</h4>
            {info("Shipping Policy", "Complimentary standard delivery on all orders over ₹4,000 · 3–5 days dispatch")}
            {info("Returns & Exchanges", "Easy 14-day studio returns on unwashed and unworn pieces with tags")}
            {info("Size Guidance", "Full measurements available on each product page or in our Size Guide")}
            <a onClick={() => go('orders')}>Track Orders</a>
          </div>
          <div>
            <h4>Studio</h4>
            {info("Our Philosophy", "Craft first: sourced from long-standing mills, cut by hand, finished with care.")}
            {info("Fabric Provenance", "Every batch links to its origin mill in Italy, Belgium, Japan, and Scotland.")}
            <a href="mailto:hello@vesta.studio">Contact Concierge</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 VESTA Studio Enterprises · All Rights Reserved</span>
          <span className="credit">Designed and built by <span className="gold">Sonali</span> — AI E-Commerce Design Challenge</span>
        </div>
      </div>
    </footer>
  );
}

function Toast({ message, show }) {
  return (
    <div className={`add-toast ${show ? "show" : ""}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      <span>{message}</span>
    </div>
  );
}

// Global attachment
if (typeof window !== "undefined") {
  window.AnnouncementBar = AnnouncementBar;
  window.IconFallback = IconFallback;
  window.ProductImage = ProductImage;
  window.Card = Card;
  window.Nav = Nav;
  window.MobileMenuDrawer = MobileMenuDrawer;
  window.CartDrawer = CartDrawer;
  window.WishlistDrawer = WishlistDrawer;
  window.QuickViewModal = QuickViewModal;
  window.SizeGuideModal = SizeGuideModal;
  window.SearchModal = SearchModal;
  window.Footer = Footer;
  window.Toast = Toast;
}
