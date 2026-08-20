// ── VESTA — page components ──────────────────────────────────────────────
const { useState, useEffect, useMemo } = React;

function HomePage({ openProduct, goCategory, go }){
  const bestsellers = PRODUCTS.filter(p => p.flag === "Bestseller");
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow" style={{marginBottom:18}}>Autumn collection — 01</div>
            <h1>Considered<br/>clothing,<br/><em>worn often.</em></h1>
            <p>Ten pieces built to outlast a season. No noise, no filler — just cut, cloth, and colour that hold up on the second wear and the fiftieth.</p>
            <button className="tag-btn" onClick={() => go('shop')}>Shop the edit</button>
          </div>
          <div className="hero-panel">
            <img src={HERO_IMG} alt="Cable knit sweater, look 04" loading="lazy" />
            <div className="hero-label">
              <div className="eyebrow">Look 04</div>
              <div>Cable Knit Sweater</div>
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="strip-inner">
          <div className="strip-item">Free shipping over ₹4,000</div>
          <div className="strip-item">Made in small batches</div>
          <div className="strip-item">Easy 14-day returns</div>
          <div className="strip-item">Pay by card, UPI or COD</div>
        </div>
      </div>

      <section className="section wrap">
        <div className="section-head">
          <h2>Bestsellers</h2>
          <a onClick={() => go('shop')}>View all</a>
        </div>
        <div className="grid">
          {bestsellers.map(p => <Card key={p.id} product={p} onOpen={openProduct} />)}
        </div>
      </section>

      <section className="editorial">
        <div className="wrap">
          <div>
            <div className="eyebrow" style={{color:"var(--gold-soft)", marginBottom:16}}>The materials</div>
            <h2>Fabric first, always.</h2>
            <p>Every VESTA piece starts with the cloth, not the sketch. Brushed wool, washed cotton, raw silk — sourced from mills we've worked with for years, then cut close to the body without ever pulling tight.</p>
          </div>
          <div className="editorial-media">
            <div><img src={EDITORIAL_IMGS.wool} alt="Wool fabric" loading="lazy" /></div>
            <div><img src={EDITORIAL_IMGS.cotton} alt="Cotton fabric" loading="lazy" /></div>
            <div><img src={EDITORIAL_IMGS.silk} alt="Silk fabric" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-head"><h2>Shop by category</h2></div>
        <div className="grid" style={{gridTemplateColumns:"repeat(5,1fr)"}}>
          {CATEGORIES.map(c => {
            const sample = PRODUCTS.find(p => p.cat === c);
            return (
              <div className="card" key={c} onClick={() => goCategory(c)}>
                <div className="card-media"><ProductImage product={sample} className="" /></div>
                <div className="card-title" style={{fontSize:15}}>{c}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function ShopPage({ openProduct, filters, setFilters, sort, setSort }){
  const toggleCat = c => {
    setFilters(f => {
      const next = new Set(f.cats);
      next.has(c) ? next.delete(c) : next.add(c);
      return { ...f, cats: next };
    });
  };
  const setPrice = key => setFilters(f => ({ ...f, price: f.price === key ? null : key }));
  const clearFilters = () => setFilters({ cats: new Set(), price: null });

  const list = useMemo(() => {
    let l = PRODUCTS.slice();
    if(filters.cats.size) l = l.filter(p => filters.cats.has(p.cat));
    if(filters.price === "low") l = l.filter(p => p.price < 3000);
    if(filters.price === "mid") l = l.filter(p => p.price >= 3000 && p.price <= 6000);
    if(filters.price === "high") l = l.filter(p => p.price > 6000);
    if(sort === "low") l.sort((a,b) => a.price - b.price);
    if(sort === "high") l.sort((a,b) => b.price - a.price);
    if(sort === "new") l.sort((a,b) => (b.isNew?1:0) - (a.isNew?1:0));
    return l;
  }, [filters, sort]);

  const priceOpts = [
    {key:"low", label:"Under ₹3,000"},
    {key:"mid", label:"₹3,000 – ₹6,000"},
    {key:"high", label:"Above ₹6,000"}
  ];

  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Full collection — 10 pieces</div>
        <h1>Shop all</h1>
      </div>
      <div className="wrap">
        <div className="shop-layout">
          <aside>
            <div className="filter-block">
              <h4>Category</h4>
              {CATEGORIES.map(c => (
                <label key={c} className={"filter-row" + (filters.cats.has(c) ? " active-label" : "")}>
                  <input type="checkbox" checked={filters.cats.has(c)} onChange={() => toggleCat(c)} /> {c}
                </label>
              ))}
            </div>
            <div className="filter-block">
              <h4>Price</h4>
              {priceOpts.map(o => (
                <label key={o.key} className={"filter-row" + (filters.price===o.key ? " active-label" : "")}>
                  <input type="checkbox" checked={filters.price===o.key} onChange={() => setPrice(o.key)} /> {o.label}
                </label>
              ))}
            </div>
            <button className="tag-btn ghost" style={{width:"100%", justifyContent:"center"}} onClick={clearFilters}>Clear filters</button>
          </aside>
          <div>
            <div className="shop-toolbar">
              <div className="shop-count">{list.length} piece{list.length!==1?'s':''}</div>
              <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                <option value="featured">Sort: Featured</option>
                <option value="low">Price: Low to high</option>
                <option value="high">Price: High to low</option>
                <option value="new">Newest first</option>
              </select>
            </div>
            {list.length ? (
              <div className="shop-grid">
                {list.map(p => <Card key={p.id} product={p} onOpen={openProduct} />)}
              </div>
            ) : (
              <div className="empty-state">No pieces match these filters. Try clearing one.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDetailPage({ productId, openProduct, go, addToCart }){
  const product = PRODUCTS.find(p => p.id === productId);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [sizeErr, setSizeErr] = useState(false);
  const [tab, setTab] = useState(0);

  useEffect(() => { setSize("M"); setQty(1); setSizeErr(false); setTab(0); }, [productId]);

  if(!product) return null;
  const related = PRODUCTS.filter(p => p.cat === product.cat && p.id !== product.id).slice(0,3);

  const handleAdd = (buyNow) => {
    if(!size){ setSizeErr(true); return; }
    addToCart(product.id, size, qty);
    if(buyNow) go('cart');
  };

  const tabContent = [
    product.desc,
    "Brushed wool-cotton blend. Dry clean recommended, or hand wash cold and lay flat to dry. Steam to refresh between wears.",
    "Free shipping on orders over ₹4,000. Standard delivery in 4–6 working days, express in 1–2 days at checkout. Easy 14-day returns on unworn pieces."
  ];

  return (
    <div className="page">
      <div className="wrap pd-layout">
        <div className="pd-media"><ProductImage product={product} className="" /></div>
        <div className="pd-info">
          <div className="pd-crumb">
            <span onClick={() => go('home')}>Home</span> / <span onClick={() => go('shop')}>Shop</span> / {product.cat}
          </div>
          <h1>{product.name}</h1>
          <div className="pd-price price-tag">{money(product.price)}</div>
          <p className="pd-desc">{product.desc}</p>

          <div className="option-block">
            <div className="option-label"><span>Colour</span><span>{product.color}</span></div>
            <div className="size-row">
              <div className="size-chip selected" style={{width:"auto", padding:"0 14px", background:product.bg, color:product.light?"#EDEAE1":"#1B1B18", borderColor:product.bg}}>{product.color}</div>
            </div>
          </div>

          <div className="option-block">
            <div className="option-label"><span>Size</span>{sizeErr && <span style={{color:"var(--brick)"}}>Select a size</span>}</div>
            <div className="size-row">
              {SIZES.map(s => (
                <div key={s} className={"size-chip" + (s===size ? " selected" : "")} onClick={() => { setSize(s); setSizeErr(false); }}>{s}</div>
              ))}
            </div>
          </div>

          <div className="option-block">
            <div className="option-label"><span>Quantity</span></div>
            <div className="qty-row">
              <button onClick={() => setQty(q => Math.max(1, q-1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q+1)}>+</button>
            </div>
          </div>

          <div className="pd-actions">
            <button className="tag-btn" onClick={() => handleAdd(false)}>Add to cart</button>
            <button className="tag-btn ghost" onClick={() => handleAdd(true)}>Buy now</button>
          </div>

          <div className="pd-tabs">
            <div className={"pd-tab" + (tab===0?" active":"")} onClick={() => setTab(0)}>Description</div>
            <div className={"pd-tab" + (tab===1?" active":"")} onClick={() => setTab(1)}>Fabric & care</div>
            <div className={"pd-tab" + (tab===2?" active":"")} onClick={() => setTab(2)}>Shipping</div>
          </div>
          <div className="pd-tab-content">{tabContent[tab]}</div>
        </div>

        {related.length > 0 &&
          <div style={{gridColumn:"1/-1", marginTop:40}}>
            <div className="section-head"><h2 style={{fontSize:26}}>You may also like</h2></div>
            <div className="grid" style={{gridTemplateColumns:"repeat(3,1fr)"}}>
              {related.map(p => <Card key={p.id} product={p} onOpen={openProduct} />)}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

function CartPage({ cart, updateQty, removeItem, go, promo, setPromo, promoApplied, applyPromo, totals }){
  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Step 1 of 2</div>
        <h1>Your cart</h1>
      </div>
      <div className="wrap cart-layout">
        <div>
          {cart.length === 0 ? (
            <div className="empty-state" style={{padding:"40px 0"}}>Your cart is empty. <span className="link" onClick={() => go('shop')}>Go find something</span>.</div>
          ) : cart.map((c,i) => {
            const p = PRODUCTS.find(x => x.id === c.id);
            return (
              <div className="cart-item" key={i}>
                <div className="cart-item-media"><ProductImage product={p} className="" /></div>
                <div>
                  <div className="cart-item-title">{p.name}</div>
                  <div className="cart-item-meta">{p.color} · Size {c.size}</div>
                  <div className="qty-row">
                    <button onClick={() => updateQty(i,-1)}>−</button>
                    <span>{c.qty}</span>
                    <button onClick={() => updateQty(i,1)}>+</button>
                  </div>
                </div>
                <div className="cart-item-right">
                  <span className="price-tag">{money(p.price * c.qty)}</span>
                  <span className="cart-item-remove" onClick={() => removeItem(i)}>Remove</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="summary-box">
          <h3>Order summary</h3>
          <div className="summary-row"><span>Subtotal</span><span className="mono">{money(totals.subtotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span className="mono">{totals.shipping === 0 ? "Free" : money(totals.shipping)}</span></div>
          <div className="promo-row">
            <input type="text" placeholder="Promo code" value={promo} onChange={e => setPromo(e.target.value)} />
            <button onClick={applyPromo}>Apply</button>
          </div>
          <div className="summary-row total"><span>Total</span><span>{money(totals.total)}</span></div>
          <button className="tag-btn full" style={{marginTop:20}} disabled={cart.length===0} onClick={() => go('checkout')}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

function CheckoutPage({ cart, totals, placeOrder }){
  const [form, setForm] = useState({ name:"", phone:"", email:"", address:"", city:"", pin:"" });
  const [errors, setErrors] = useState({});
  const [pay, setPay] = useState("card");

  const update = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: false }));
  };

  const validators = {
    name: v => v.trim().length >= 2,
    phone: v => /^[6-9]\d{9}$/.test(v.trim()),
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    address: v => v.trim().length >= 5,
    city: v => v.trim().length >= 2,
    pin: v => /^\d{6}$/.test(v.trim())
  };
  const errorMsgs = {
    name: "Enter your full name.",
    phone: "Enter a valid 10-digit phone number.",
    email: "Enter a valid email address.",
    address: "Enter your delivery address.",
    city: "Enter your city.",
    pin: "Enter a valid 6-digit PIN code."
  };

  const submit = () => {
    const nextErrors = {};
    Object.keys(validators).forEach(k => { nextErrors[k] = !validators[k](form[k]); });
    setErrors(nextErrors);
    if(Object.values(nextErrors).some(Boolean)) return;
    placeOrder();
  };

  const field = (id, label, placeholder, type="text") => (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className={errors[id] ? "invalid" : ""} placeholder={placeholder} value={form[id]} onChange={e => update(id, e.target.value)} />
      <div className={"err" + (errors[id] ? " show" : "")}>{errorMsgs[id]}</div>
    </div>
  );

  return (
    <div className="page">
      <div className="shop-head wrap">
        <div className="eyebrow">Step 2 of 2</div>
        <h1>Checkout</h1>
      </div>
      <div className="wrap co-layout">
        <div>
          <div className="co-steps"><span className="co-step">Shipping and payment</span></div>
          <div className="form-row">
            {field("name","Full name","Ananya Rao")}
            {field("phone","Phone","98765 43210","tel")}
          </div>
          {field("email","Email","you@email.com","email")}
          {field("address","Address","House no., street, area")}
          <div className="form-row">
            {field("city","City","Meerut")}
            {field("pin","PIN code","250001")}
          </div>

          <div className="divider-label">Payment method</div>
          <div className="pay-options">
            {[["card","Credit or debit card"],["upi","UPI"],["cod","Cash on delivery"]].map(([val,label]) => (
              <label key={val} className={"pay-option" + (pay===val ? " selected" : "")}>
                <input type="radio" name="pay" checked={pay===val} onChange={() => setPay(val)} /> {label}
              </label>
            ))}
          </div>

          <button className="tag-btn full" style={{marginTop:34}} onClick={submit}>Place order</button>
        </div>
        <div className="summary-box">
          <h3>Order summary</h3>
          {cart.map((c,i) => {
            const p = PRODUCTS.find(x => x.id === c.id);
            return <div className="summary-row" key={i}><span>{p.name} ({c.size}) × {c.qty}</span><span className="mono">{money(p.price*c.qty)}</span></div>;
          })}
          <div className="summary-row" style={{marginTop:16}}><span>Subtotal</span><span className="mono">{money(totals.subtotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span className="mono">{totals.shipping === 0 ? "Free" : money(totals.shipping)}</span></div>
          <div className="summary-row total"><span>Total</span><span>{money(totals.total)}</span></div>
        </div>
      </div>
    </div>
  );
}

function SuccessPage({ orderNumber, go }){
  return (
    <div className="page">
      <div className="wrap success-wrap">
        <div className="success-mark">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <div className="eyebrow" style={{marginBottom:14}}>Order confirmed</div>
        <h1>Thank you, it's on its way.</h1>
        <p>We've sent a confirmation to your email with everything you need to track it.</p>
        <div className="order-num mono">{orderNumber}</div>
        <div><button className="tag-btn" onClick={() => go('home')}>Continue shopping</button></div>
      </div>
    </div>
  );
}
