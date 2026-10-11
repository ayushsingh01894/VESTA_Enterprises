// ── VESTA — root app: routing, state management, drawers & persistence ───
const { useState, useEffect, useMemo, useRef } = React;

function App() {
  // Page Routing & Navigation
  const [page, setPage] = useState('home');
  const [productId, setProductId] = useState(1);

  // Persistent Cart State
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('vesta_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Persistent Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('vesta_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Persistent Orders History State
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('vesta_orders');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Shop Filters & Sort
  const [filters, setFilters] = useState({ cats: new Set(), colors: new Set(), price: null, flag: null });
  const [sort, setSort] = useState('featured');

  // Drawers and Modals
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Promo Code State
  const [promo, setPromo] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Order Number for Success
  const [orderNumber, setOrderNumber] = useState('VS-829104');
  const [latestOrder, setLatestOrder] = useState(null);

  // Toast Notification
  const [toast, setToast] = useState({ show: false, message: '' });
  const toastTimer = useRef(null);

  // Synchronize localStorage
  useEffect(() => {
    try { localStorage.setItem('vesta_cart', JSON.stringify(cart)); } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try { localStorage.setItem('vesta_wishlist', JSON.stringify(wishlist)); } catch (e) {}
  }, [wishlist]);

  useEffect(() => {
    try { localStorage.setItem('vesta_orders', JSON.stringify(orders)); } catch (e) {}
  }, [orders]);

  // Handle ESC key to dismiss drawers and modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCartDrawerOpen(false);
        setWishlistDrawerOpen(false);
        setMobileMenuOpen(false);
        setSearchModalOpen(false);
        setSizeGuideOpen(false);
        setQuickViewProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation helpers
  const go = (p) => {
    setPage(p);
    setCartDrawerOpen(false);
    setWishlistDrawerOpen(false);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
    setSizeGuideOpen(false);
    setQuickViewProduct(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const openProduct = (id) => {
    setProductId(id);
    go('detail');
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const goCategory = (cat) => {
    if (cat === 'All') {
      setFilters({ cats: new Set(), colors: new Set(), price: null, flag: null });
    } else {
      setFilters({ cats: new Set([cat]), colors: new Set(), price: null, flag: null });
    }
    go('shop');
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast(t => ({ ...t, show: false }));
    }, 2800);
  };

  // Cart operations
  const addToCart = (id, size, qty = 1, openDrawer = true) => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    setCart(prev => {
      const idx = prev.findIndex(c => c.id === id && c.size === size);
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
    setCart(prev => {
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
    setCart(prev => prev.filter((_, i) => i !== index));
    showToast("Garment removed from bag");
  };

  // Wishlist operations
  const isWishlisted = (id) => wishlist.includes(id);

  const toggleWishlist = (id) => {
    const product = PRODUCTS.find(p => p.id === id);
    if (wishlist.includes(id)) {
      setWishlist(prev => prev.filter(x => x !== id));
      showToast(`Removed from your saved pieces`);
    } else {
      setWishlist(prev => [...prev, id]);
      showToast(`Saved ${product ? product.name : "piece"} to your wishlist`);
    }
  };

  // Promo code validation
  const applyPromo = (codeCandidate) => {
    const code = (typeof codeCandidate === 'string' ? codeCandidate : promo).trim().toUpperCase();
    if (!code) return;

    if (PROMO_CODES[code]) {
      const promoData = PROMO_CODES[code];
      if (promoData.min && totals.subtotal < promoData.min) {
        showToast(`Code ${code} requires minimum order of ${money(promoData.min)}`);
        return;
      }
      setPromo(code);
      setPromoApplied(true);
      showToast(`Promo ${code} applied — ${promoData.desc}`);
    } else {
      showToast("Invalid promo code. Try VESTA10 for 10% off.");
    }
  };

  const removePromo = () => {
    setPromoApplied(false);
    setPromo('');
    showToast("Promo code removed");
  };

  // Totals Calculation
  const totals = useMemo(() => {
    const subtotal = cart.reduce((s, c) => {
      const p = PRODUCTS.find(x => x.id === c.id);
      return s + (p ? p.price * c.qty : 0);
    }, 0);

    const promoData = promoApplied ? PROMO_CODES[promo.toUpperCase()] : null;
    const isFreeShippingCode = promoData && promoData.freeShipping;

    // Free shipping threshold at 4000
    const shipping = (subtotal >= 4000 || subtotal === 0 || isFreeShippingCode) ? 0 : 150;
    const discount = (promoData && promoData.discount) ? Math.round(subtotal * promoData.discount) : 0;
    const total = Math.max(0, subtotal - discount + shipping);

    return { subtotal, shipping, discount, total };
  }, [cart, promoApplied, promo]);

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const wishCount = wishlist.length;

  // Place order
  const placeOrder = (orderMeta = {}) => {
    const num = "VS-" + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
      id: num,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...cart],
      total: totals.total,
      status: "In Atelier Preparation",
      customer: orderMeta.customer || {}
    };

    setOrders(prev => [newOrder, ...prev]);
    setLatestOrder(newOrder);
    setOrderNumber(num);
    setCart([]);
    setPromoApplied(false);
    setPromo('');
    go('success');
  };

  return (
    <React.Fragment>
      {/* Top Luxury Announcement Bar */}
      <AnnouncementBar onPromoClick={(code) => { setPromo(code); applyPromo(code); }} />

      {/* Main Sticky Navigation */}
      <Nav
        page={page}
        cartCount={cartCount}
        wishCount={wishCount}
        go={go}
        goCategory={goCategory}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Menu Drawer */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        go={go}
        goCategory={goCategory}
        onOpenSearch={() => setSearchModalOpen(true)}
        wishCount={wishCount}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        totals={totals}
        promo={promo}
        setPromo={setPromo}
        promoApplied={promoApplied}
        applyPromo={() => applyPromo(promo)}
        removePromo={removePromo}
        go={go}
      />

      {/* Slide-out Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlist={wishlist}
        onRemove={toggleWishlist}
        onMoveToCart={(id, size) => addToCart(id, size, 1, true)}
        go={go}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(id, size, qty) => addToCart(id, size, qty, true)}
        onOpenFull={(id) => openProduct(id)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Instant Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(id) => openProduct(id)}
      />

      {/* Active Page View */}
      {page === 'home' && (
        <HomePage
          openProduct={openProduct}
          openQuickView={openQuickView}
          goCategory={goCategory}
          go={go}
          isWishlisted={isWishlisted}
          onToggleWishlist={toggleWishlist}
          onPromoClick={(code) => { setPromo(code); applyPromo(code); }}
        />
      )}

      {page === 'shop' && (
        <ShopPage
          openProduct={openProduct}
          openQuickView={openQuickView}
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
          isWishlisted={isWishlisted}
          onToggleWishlist={toggleWishlist}
        />
      )}

      {page === 'detail' && (
        <ProductDetailPage
          productId={productId}
          openProduct={openProduct}
          openQuickView={openQuickView}
          go={go}
          addToCart={addToCart}
          onOpenSizeGuide={() => setSizeGuideOpen(true)}
          isWishlisted={isWishlisted}
          onToggleWishlist={toggleWishlist}
          notify={showToast}
        />
      )}

      {page === 'cart' && (
        <CartPage
          cart={cart}
          updateQty={updateQty}
          removeItem={removeItem}
          go={go}
          promo={promo}
          setPromo={setPromo}
          promoApplied={promoApplied}
          applyPromo={() => applyPromo(promo)}
          removePromo={removePromo}
          totals={totals}
        />
      )}

      {page === 'checkout' && (
        <CheckoutPage
          cart={cart}
          totals={totals}
          placeOrder={placeOrder}
          go={go}
        />
      )}

      {page === 'success' && (
        <SuccessPage
          orderNumber={orderNumber}
          latestOrder={latestOrder}
          go={go}
        />
      )}

      {page === 'orders' && (
        <TrackOrderPage
          orders={orders}
          go={go}
        />
      )}

      {/* Shared Luxury Footer */}
      <Footer
        go={go}
        goCategory={goCategory}
        notify={showToast}
      />

      {/* Floating Action Toast Notification */}
      <Toast
        show={toast.show}
        message={toast.message}
      />
    </React.Fragment>
  );
}

// Mount React Root
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}
