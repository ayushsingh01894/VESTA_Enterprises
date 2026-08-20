// ── VESTA — shared components ────────────────────────────────────────────
const { useState } = React;

function IconFallback({ icon, color }){
  return (
    <div className="fallback">
      <svg viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth="2.3" strokeLinejoin="round" strokeLinecap="round">
        <path d={ICON_PATHS[icon]} />
      </svg>
    </div>
  );
}

function ProductImage({ product, className }){
  const [errored, setErrored] = useState(false);
  const iconColor = product.light ? "#EDEAE1" : "#1B1B18";
  if(errored){
    return <div className={className} style={{background:product.bg}}><IconFallback icon={product.icon} color={iconColor} /></div>;
  }
  return (
    <div className={className} style={{background:product.bg}}>
      <img src={product.img} alt={product.name} loading="lazy" onError={() => setErrored(true)} />
    </div>
  );
}

function Card({ product, onOpen }){
  return (
    <div className="card" onClick={() => onOpen(product.id)} role="link" tabIndex={0}
         onKeyDown={(e) => { if(e.key === "Enter") onOpen(product.id); }}>
      <div className="card-media">
        {product.flag && <div className="card-flag">{product.flag}</div>}
        <ProductImage product={product} className="" />
      </div>
      <div className="card-title">{product.name}</div>
      <div className="card-meta">
        <span className="card-cat">{product.cat} — {product.color}</span>
        <span className="price-tag">{money(product.price)}</span>
      </div>
    </div>
  );
}

function Nav({ page, cartCount, go, goCategory }){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="logo" onClick={() => go('home')}>VE<span>S</span>TA</a>
        <div className="nav-links">
          <a onClick={() => go('home')} className={page==='home' ? 'active' : ''}>Home</a>
          <a onClick={() => go('shop')} className={page==='shop' ? 'active' : ''}>Shop</a>
          <a onClick={() => goCategory('Outerwear')}>Outerwear</a>
          <a onClick={() => goCategory('Knitwear')}>Knitwear</a>
        </div>
        <a className="nav-cart" onClick={() => go('cart')}>
          Cart <span className="cart-badge">{cartCount}</span>
        </a>
      </div>
    </nav>
  );
}

function Footer({ go, goCategory, notify }){
  const info = (label, message) => (
    <a onClick={() => notify(message)}>{label}</a>
  );
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{marginBottom:14}}>VE<span>S</span>TA</div>
            <p style={{maxWidth:260}}>Considered clothing, worn often. Small batches, cut close, built to last past the season.</p>
          </div>
          <div>
            <h4>Shop</h4>
            <a onClick={() => go('shop')}>All pieces</a>
            <a onClick={() => goCategory('Outerwear')}>Outerwear</a>
            <a onClick={() => goCategory('Knitwear')}>Knitwear</a>
          </div>
          <div>
            <h4>Support</h4>
            {info("Shipping", "Free shipping over ₹4,000 · 4–6 working days")}
            {info("Returns", "Easy 14-day returns on unworn pieces")}
            {info("Size guide", "Check the size chip on each product page")}
          </div>
          <div>
            <h4>Studio</h4>
            {info("About", "VESTA — considered clothing, worn often.")}
            {info("Journal", "Journal coming soon.")}
            <a href="mailto:hello@vesta.studio">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vesta Studio</span>
          <span className="credit">Designed and built by <span className="gold">Sonali</span> — AI E-Commerce Design Challenge</span>
        </div>
      </div>
    </footer>
  );
}

function Toast({ message, show }){
  return (
    <div className={"add-toast" + (show ? " show" : "")}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      <span>{message}</span>
    </div>
  );
}
