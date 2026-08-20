// ── VESTA — root app: routing, cart & order state ────────────────────────
const { useState, useMemo, useRef } = React;

function App(){
  const [page, setPage] = useState('home');
  const [productId, setProductId] = useState(null);
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({ cats: new Set(), price: null });
  const [sort, setSort] = useState('featured');
  const [promo, setPromo] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [orderNumber, setOrderNumber] = useState('VS-000000');
  const [toast, setToast] = useState({ show:false, message:'' });
  const toastTimer = useRef(null);

  const go = (p) => { setPage(p); window.scrollTo({top:0, behavior:'instant'}); };
  const openProduct = (id) => { setProductId(id); go('detail'); };
  const goCategory = (cat) => { setFilters({ cats: new Set([cat]), price:null }); go('shop'); };

  const showToast = (message) => {
    setToast({ show:true, message });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show:false })), 2200);
  };

  const addToCart = (id, size, qty) => {
    const product = PRODUCTS.find(p => p.id === id);
    setCart(prev => {
      const idx = prev.findIndex(c => c.id === id && c.size === size);
      if(idx > -1){
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + qty };
        return next;
      }
      return [...prev, { id, size, qty }];
    });
    showToast(`${product.name} (${size}) added to cart`);
  };

  const updateQty = (i, d) => setCart(prev => prev.map((c,idx) => idx===i ? { ...c, qty: Math.max(1, c.qty+d) } : c));
  const removeItem = (i) => setCart(prev => prev.filter((_,idx) => idx!==i));

  const applyPromo = () => {
    if(promo.trim().toUpperCase() === "VESTA10"){
      setPromoApplied(true);
      showToast("Promo applied — 10% off");
    } else {
      showToast("That code isn't valid. Try VESTA10.");
    }
  };

  const totals = useMemo(() => {
    const subtotal = cart.reduce((s,c) => {
      const p = PRODUCTS.find(x => x.id === c.id);
      return s + p.price * c.qty;
    }, 0);
    const shipping = subtotal >= 4000 || subtotal === 0 ? 0 : 150;
    const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
    const total = Math.max(0, subtotal - discount + shipping);
    return { subtotal, shipping, discount, total };
  }, [cart, promoApplied]);

  const cartCount = cart.reduce((s,c) => s + c.qty, 0);

  const placeOrder = () => {
    const num = "VS-" + Math.floor(100000 + Math.random()*900000);
    setOrderNumber(num);
    setCart([]);
    setPromoApplied(false);
    setPromo('');
    go('success');
  };

  return (
    <React.Fragment>
      <Nav page={page} cartCount={cartCount} go={go} goCategory={goCategory} />
      {page === 'home' && <HomePage openProduct={openProduct} goCategory={goCategory} go={go} />}
      {page === 'shop' && <ShopPage openProduct={openProduct} filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />}
      {page === 'detail' && <ProductDetailPage productId={productId} openProduct={openProduct} go={go} addToCart={addToCart} />}
      {page === 'cart' && <CartPage cart={cart} updateQty={updateQty} removeItem={removeItem} go={go} promo={promo} setPromo={setPromo} promoApplied={promoApplied} applyPromo={applyPromo} totals={totals} />}
      {page === 'checkout' && <CheckoutPage cart={cart} totals={totals} placeOrder={placeOrder} />}
      {page === 'success' && <SuccessPage orderNumber={orderNumber} go={go} />}
      <Footer go={go} goCategory={goCategory} notify={showToast} />
      <Toast show={toast.show} message={toast.message} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
