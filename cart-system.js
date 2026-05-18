// BPD LTD - Dynamic Shopping Cart & Navigation System
// Provides client-side state management, local storage sync, and dynamic rendering for a premium prototype experience.

(function () {
    // Utility functions for Cart Management
    window.BPD_Cart = {
        PRODUCTS_REGISTRY: [
            {
                id: 'cement-425-25kg',
                title: 'Grade 42.5 Portland Cement (25kg)',
                price: 7.45,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWnVYlhOylDvv-CrA8_fG6ehvz9E0ZbA69B8I_HYktviN6ke6J1sUw_3NA4Sdm7o4lgKQe9rVk4JDpE3PfvpvtB4z0Tcs4-NzWPceWvH3mZ8shnbYTnNrNXwXQPJpdbjkODN0zB9DWyYddjjEv-h90R2-ixjwPu7nKuZNVvW4VOz_zcLuQejwgPAdQKCJGwyT9yym_NA9xOwdNQdjXS_k_ZGp6ADIIT0qGqnneMovcUqczL7u5zIFFa15WkR66FrE_5PTDosgY7rmr',
                weight: 0.025,
                sku: 'CM-PC425-25',
                unit: 'BAG',
                badge: 'IN STOCK',
                category: 'Cement',
                brand: 'Lafarge'
            },
            {
                id: 'sand-paving-20kg',
                title: 'Kiln Dried Paving Sand (20kg)',
                price: 6.20,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdegorXMhnGqo5dC7PsaWzAjMKUT4dop2hXSzqgAXl_tB3dUgj8vsZfHAnojrSM8HWCxBq6pr8wpDIHiONjU9lnK99Om__6fxZjEhkint_vKRK4f8Mh7HWmZTi88W4E6VsebiMw824FqI5ox6uq1P7d1-ZKaQJlAIs_X4iBhcNG6IvJnLFLtDQgj1PXalPCNtHumnPtL-bDWS3Cl-HRpW0Sa92NUt2LxR7FBLchR3IOHY512IlJI-6ot0F9a7u9COhYsZZPmLKFsSV',
                weight: 0.02,
                sku: 'AG-KDS-20',
                unit: 'BAG',
                badge: 'IN STOCK',
                category: 'Aggregates',
                brand: 'BPD Generic'
            },
            {
                id: 'aggregate-limestone-850kg',
                title: '20mm Crushed Limestone (850kg Bag)',
                price: 89.00,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3y89h8Dpkjm0UK9Y-bEo2UF6P-XbMkBZpIbKI5oZs5hYjKhPQdkfIZlFEKb_y0E9NossAJJBbiBLjexqEHCSCzTyArCBrqv9uVE8Sod2Cek5VArsoZWMPj1bDNuBdmPjTOKzDgbQxENGioIxebdR0_icAt37oC5w0WB2cCQFJSMrkSrJ2fGysgoOIC10jkH1RjC1h0MOct9EQUsTRSvdY9RsLZUZXLhl-mn5Oa33tXfjdtiLL748twRge63k0v6d741g9vsYoegTD',
                weight: 0.85,
                sku: 'AG-CLS-850',
                unit: 'BULK BAG (850kg)',
                badge: 'BULK ONLY',
                category: 'Aggregates',
                brand: 'Mastercrete'
            },
            {
                id: 'concrete-rapid-20kg',
                title: 'High-Strength Rapid Set Concrete (20kg)',
                price: 12.50,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwALNELbgds8Cf91Zg7U-mcx_0LqhfxAg5TOWj6H5gwcDvBd-7v9_yioj9ONWMqZ2sknzOgbAhDWCx1Zj8UV3X3TD-j2V-2rrtsRAP-3OXu2BJJa3GxtH73Cwlw6yGfxQaYoa5AUZZixf4jMCQK-RJKnXXUfH6tlINFAsXgO6VzyHHaksCmbDTO9GOba3_4pPr1DP4eUwHHsqKf0Tnvg2yja1LuKo1av2I4p5fE0EtRSEFWz8ms31ob969wwAeOpWfyQ_HfYwowPaZ',
                weight: 0.02,
                sku: 'CM-RSC-20',
                unit: 'BAG',
                badge: 'LOW STOCK',
                category: 'Cement',
                brand: 'Quikrete Pro'
            },
            {
                id: 'aggregate-gravel-25kg',
                title: '10-20mm Washed Pea Gravel (25kg)',
                price: 8.15,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkkEJi_jRmA0ZB-VolxMEctz87bjJonVCGAF2ZG36jATVe8R4_pbL8L48DxdHT8ew7vXRkdjRlOg7jJK-qqgwSztR3PYRBmaM5jEgOCWmlFcLNx2pb3WsKWX6zpQSCErynpXQgi_4qtrbnr3BxkxRAIqnV9APatWXobIaapMfc3yVW3H1D5dfEFI4QzM9kcFsrAm3RXlmyxOoXzKQKzcxHWe7mKm30eIg98NhpLxBRaD3_vdw-PyVSaObkVja4pV_OjXxW1PQv-Z_q',
                weight: 0.025,
                sku: 'AG-WPG-25',
                unit: 'BAG',
                badge: 'IN STOCK',
                category: 'Aggregates',
                brand: 'BPD Premium'
            },
            {
                id: 'lime-hydrated-25kg',
                title: 'Hydrated Building Lime (25kg Bag)',
                price: 11.80,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuEU2_CBclLX40kww61sU5NOqJdML-Xq6Jq0mPVPW2wqe3eR-JTFCNRjAOF5KOsQwlPFgxkadOAMqx5SBnV-SIafpXLsuj5KKF6P71fqM5ZmCvmUI5BHdGIbcoUqaQUv0TlODjyfPoPwPmdEsI1zs-qTJBg95pX_SFQPrDY_pWV1RO5FB0HL5lsJP2GckjljFed_Xs0FH1CGGTHccgiMdlgmL3BmXJ0Uf91KjoEqKsHVViw8k9tHrAsjyvIDD5E6CN5qR7qOhgB1FV',
                weight: 0.025,
                sku: 'CM-HBL-25',
                unit: 'BAG',
                badge: 'IN STOCK',
                category: 'Cement',
                brand: 'Cemex'
            },
            {
                id: 'drill-xr9000',
                title: 'XR-9000 Heavy Duty Rotary Hammer Drill',
                price: 489.00,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDDJSkQ5j9QWj5MnFElnvQILRb20ZlPFuHwBvNUxxfloP8XCwD-zCOQTJaCW5FbpObNrPhAP6ekCXhsoJU7_Amk7QX7Lw7JDQfbOncGgArNjnjD5CH37WaCyc16FFDddH77Gz53umJUJmxXnLSkuh5B1zikNqW8HK7MAQk9ECfJSfkGN37lE_fGS-e2FfTPB2TQvTGoyZ4s5dxzP6uO_qiuvOxYD5yl-3uNoGPuaGWksYvCVU1sGw9CQDYJhIl0EnYiCQ-owADsOz5',
                weight: 0.0089,
                sku: 'BPD-7729-XLC',
                unit: 'EACH',
                badge: 'IN STOCK',
                category: 'Power Tools',
                brand: 'DeWalt'
            },
            {
                id: 'drill-xr18',
                title: 'XR 18V Brushless Impact Driver High-Torque',
                price: 189.00,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuXt01IrjB9W8hxbGlUg1l6dWtJCbL4c6k7_NGU7WAFyWQ1VcYf8XTHMMOqBmECb-EqE34DFobDcUtM28jDm3p6ymJYafxNAZ7dohaVL0q2JD5VqBKfMMsmrHbnSEP6ZIFtzjQD8-yu08iun2hPIFSXD75LhZeYYkOoVPFYYvW_QJMxMrlI6HOQxog14L5zrNYfj-CqnvOSWUgW7Ru4q_u7F_i2_qT_pL2de2Yad1SkDp0L9banJgCciURxFxEnGf1ta3nlMjGw7fl',
                weight: 0.002,
                sku: 'PT-XR18-HD',
                unit: 'EACH',
                badge: 'IN STOCK',
                category: 'Power Tools',
                brand: 'DeWalt'
            },
            {
                id: 'rebar-12mm',
                title: '12mm High-Tensile Steel Rebar (6m Length)',
                price: 45.50,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6CzDnZ-C2V7hnD0-K76EQKJznBcOBLkmI3V91o0pZhmZgd22RgqZuEwkvjefvX3I1t79PT8dep1mtBJW5znrBeyZl3_pedfKqLDKuytVqXbUnKLHG2URwTCea7pSjiUa6TchCQ_yac1VhsdcilD7Ro6-7hz6JU7epQdFQ96GV8VjK10QfVjYuoCRhamxGvVbqRrzJOHYCMxoO6vQ1zrWTMCMxyOjtcXSzEXwT_-LFYlPRIBzLYQ3i_BZBMNEt055LIY8HQ6PQfHk',
                weight: 0.05,
                sku: 'ST-12-HTR',
                unit: 'BUNDLE (2.5t)',
                badge: 'BULK AVAILABLE',
                category: 'Steel',
                brand: 'BPD Steel'
            },
            {
                id: 'cement-premium',
                title: 'Premium Portland Cement CEM I - 25kg Bag',
                price: 8.95,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjTE0eTUGILbJMIi9ZSvY1MGetWWRPdcLfAuhkH1i91PRv4lPaoYnKsQgT8l9OrFOIi4koW0KHug-Sk04ADT-8qVgG-lWx_tGY6VH3AODF-bS5rIzhkS6YoeTLw3qRpvP_SPDzqwP6PrBKI3YAtpWMNzcnFfF7d6_tFwQwCPx_NgI4bDXFcVpADyF2jZLI7Sgd_Rh6DaN57oixvG3k_CPzYueuuTeh3RdlPxfXSK4pKqW0VzTN-j_fiqjU0UB77Zkbl-PafAbQyn_H',
                weight: 0.025,
                sku: 'CM-PM-25K',
                unit: 'BAG',
                badge: 'BEST SELLER',
                category: 'Cement',
                brand: 'Mastercrete'
            },
            {
                id: 'copper-tube',
                title: 'Professional Copper Tube 15mm x 3m',
                price: 32.20,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMINJ2ONpUFRAWFax-wc9mL4b69jJCcTQ7bdV6i7Ydk0j3WAGMWzs2l0UHMF5gyQ9IVj7-eN0pfJINKjhIs8VvrvRB9SAuvC37-QwMW0ei6QjGB-OqHN9pXAJOEPZvTFogLidPP67BcfTDh8PeZ42Gg7ioIe9B88gZaQkPB4NPLyoYtQR0eCaVtuFKde2Gq9gsJFbUm6qFPAvudTl5M-gcyRAzIzdUXcaHq07QiQfaglzvF9Sn4_m3IepSJGHUyXb_EYfxJWRskF4W',
                weight: 0.01,
                sku: 'PL-CT-15MM',
                unit: 'EACH',
                badge: 'IN STOCK',
                category: 'Plumbing',
                brand: 'BPD Tube'
            }
        ],

        getCart: function () {
            try {
                const cart = localStorage.getItem('bpd_cart');
                return cart ? JSON.parse(cart) : [];
            } catch (e) {
                console.error('Error reading cart from localStorage', e);
                return [];
            }
        },

        saveCart: function (cart) {
            try {
                localStorage.setItem('bpd_cart', JSON.stringify(cart));
                this.updateCartUI();
            } catch (e) {
                console.error('Error saving cart to localStorage', e);
            }
        },

        addItem: function (item) {
            const cart = this.getCart();
            const existingItem = cart.find(i => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += (item.quantity || 1);
            } else {
                cart.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    weight: item.weight || 0,
                    quantity: item.quantity || 1,
                    sku: item.sku || 'BPD-' + Math.floor(Math.random() * 10000),
                    unit: item.unit || 'UNIT',
                    badge: item.badge || 'IN STOCK'
                });
            }
            this.saveCart(cart);
            this.showToast(`Added ${item.title} to Truck!`);
        },

        updateQuantity: function (id, delta) {
            let cart = this.getCart();
            const item = cart.find(i => i.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.id !== id);
                    this.showToast(`Removed ${item.title} from Truck.`);
                }
                this.saveCart(cart);
            }
        },

        removeItem: function (id) {
            let cart = this.getCart();
            const item = cart.find(i => i.id === id);
            if (item) {
                cart = cart.filter(i => i.id !== id);
                this.saveCart(cart);
                this.showToast(`Removed ${item.title} from Truck.`);
            }
        },

        clearCart: function () {
            this.saveCart([]);
            this.showToast('Truck cleared.');
        },

        getCartTotals: function () {
            const cart = this.getCart();
            let subtotal = 0;
            let totalWeight = 0;
            let itemCount = 0;

            cart.forEach(item => {
                subtotal += item.price * item.quantity;
                totalWeight += item.weight * item.quantity;
                itemCount += item.quantity;
            });

            const deliveryFee = subtotal > 0 ? (totalWeight > 5 ? 150 : 85) : 0;
            const tax = subtotal * 0.20; // VAT 20%
            const total = subtotal + deliveryFee + tax;

            return {
                subtotal: subtotal,
                totalWeight: totalWeight,
                itemCount: itemCount,
                deliveryFee: deliveryFee,
                tax: tax,
                total: total
            };
        },

        updateCartUI: function () {
            const totals = this.getCartTotals();
            
            // Update badges in navigation
            const badges = document.querySelectorAll('.cart-badge');
            badges.forEach(badge => {
                badge.innerText = totals.itemCount;
                if (totals.itemCount > 0) {
                    badge.classList.remove('hidden');
                } else {
                    badge.classList.add('hidden');
                }
            });

            // If we are on the cart page, dynamically render the list
            if (document.getElementById('cart-page-container')) {
                this.renderCartPage(totals);
            }
        },

        showToast: function (message) {
            // Remove existing toasts first
            const existingToasts = document.querySelectorAll('.bpd-toast');
            existingToasts.forEach(t => t.remove());

            // Create new toast container/element
            const toast = document.createElement('div');
            toast.className = 'bpd-toast fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-inverse-surface text-white px-6 py-4 rounded-sm border-l-4 border-primary-container flex items-center gap-3 shadow-2xl z-50 transform translate-y-10 opacity-0 transition-all duration-300';
            toast.innerHTML = `
                <span class="material-symbols-outlined text-primary-container">check_circle</span>
                <span class="font-body-md font-bold text-sm tracking-tight text-white">${message}</span>
            `;
            document.body.appendChild(toast);

            // Animate In
            setTimeout(() => {
                toast.classList.remove('translate-y-10', 'opacity-0');
            }, 50);

            // Animate Out & Remove
            setTimeout(() => {
                toast.classList.add('translate-y-10', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        },

        renderCartPage: function (totals) {
            const cart = this.getCart();
            const container = document.getElementById('cart-items-list');
            const summaryContainer = document.getElementById('cart-summary-card');
            const totalItemsBadge = document.getElementById('cart-total-items-badge');
            const tonnageDisplay = document.getElementById('cart-tonnage-display');

            if (totalItemsBadge) {
                totalItemsBadge.innerText = `${totals.itemCount} Item${totals.itemCount !== 1 ? 's' : ''} Selected`;
            }

            if (tonnageDisplay) {
                tonnageDisplay.innerText = `${totals.totalWeight.toFixed(2)} t`;
            }

            if (cart.length === 0) {
                if (container) {
                    container.innerHTML = `
                        <div class="bg-white p-12 rigid-border heavy-shadow flex flex-col items-center justify-center text-center">
                            <span class="material-symbols-outlined text-secondary text-6xl mb-4">shopping_cart_off</span>
                            <h3 class="font-headline-md text-headline-md text-on-surface">Your procurement truck is empty</h3>
                            <p class="text-secondary mt-2 mb-6">Browse our construction materials and tools to add them to your truck.</p>
                            <a href="cement.html" class="bg-primary-container text-on-primary-container px-8 py-3 font-bold uppercase tracking-wider hover:bg-on-primary-fixed-variant hover:text-white transition-all">Shop Materials</a>
                        </div>
                    `;
                }
                if (summaryContainer) {
                    summaryContainer.innerHTML = `
                        <div class="bg-inverse-surface p-6 rigid-border opacity-50 pointer-events-none">
                            <h3 class="font-headline-md text-headline-md text-white mb-6 uppercase tracking-tighter">Order Summary</h3>
                            <p class="text-white/60 font-body-md">Add items to estimate pricing.</p>
                        </div>
                    `;
                }
                return;
            }

            // Render list
            if (container) {
                container.innerHTML = cart.map(item => `
                    <div class="bg-white p-4 rigid-border heavy-shadow grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div class="aspect-square bg-surface-container overflow-hidden rigid-border">
                            <img class="w-full h-full object-cover" src="${item.image}" alt="${item.title}"/>
                        </div>
                        <div class="md:col-span-2">
                            <span class="${item.badge.includes('LOW') ? 'bg-primary-container text-on-primary-container' : item.badge.includes('BULK') ? 'bg-inverse-surface text-white' : 'bg-tertiary text-on-tertiary'} px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">${item.badge}</span>
                            <h3 class="font-headline-md text-headline-md text-on-surface mt-1">${item.title}</h3>
                            <p class="text-secondary font-spec-table text-spec-table mt-1 uppercase tracking-tight">SKU: ${item.sku} | ${item.unit}</p>
                            <div class="mt-4 flex items-center gap-6">
                                <div>
                                    <p class="font-label-caps text-label-caps text-secondary uppercase">Price / Unit</p>
                                    <p class="font-body-lg text-body-lg text-on-surface">$${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                                </div>
                                <div>
                                    <p class="font-label-caps text-label-caps text-secondary uppercase">Weight</p>
                                    <p class="font-body-lg text-body-lg text-on-surface">${(item.weight * item.quantity).toFixed(2)} t</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-end gap-4">
                            <div class="flex items-center rigid-border h-12">
                                <button onclick="BPD_Cart.updateQuantity('${item.id}', -1)" class="w-12 h-full hover:bg-surface-container transition-colors font-bold">-</button>
                                <span class="w-12 text-center font-bold flex items-center justify-center">${item.quantity}</span>
                                <button onclick="BPD_Cart.updateQuantity('${item.id}', 1)" class="w-12 h-full hover:bg-surface-container transition-colors font-bold">+</button>
                            </div>
                            <div class="flex items-center gap-3">
                                <button onclick="BPD_Cart.removeItem('${item.id}')" class="text-error hover:text-red-700 flex items-center p-1" title="Remove Item">
                                    <span class="material-symbols-outlined text-[20px]">delete</span>
                                </button>
                                <p class="font-headline-md text-headline-md text-primary">$${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            }

            // Render summary
            if (summaryContainer) {
                summaryContainer.innerHTML = `
                    <div class="bg-inverse-surface p-6 rigid-border">
                        <h3 class="font-headline-md text-headline-md text-white mb-6 uppercase tracking-tighter">Order Summary</h3>
                        <div class="flex flex-col gap-4">
                            <div class="flex justify-between text-secondary-fixed-dim">
                                <span class="font-body-md">Subtotal</span>
                                <span class="font-body-md">$${totals.subtotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>
                            <div class="flex justify-between text-secondary-fixed-dim">
                                <span class="font-body-md">Job Site Delivery Fee</span>
                                <span class="font-body-md">$${totals.deliveryFee.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>
                            <div class="flex justify-between text-secondary-fixed-dim border-b border-outline-variant pb-4">
                                <span class="font-body-md">Tax (VAT 20%)</span>
                                <span class="font-body-md">$${totals.tax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>
                            <div class="flex justify-between py-4">
                                <span class="font-headline-md text-headline-md text-white uppercase">Total</span>
                                <span class="font-display-lg text-[32px] font-black text-primary-container">$${totals.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                            </div>
                            <button onclick="BPD_Cart.checkout()" class="w-full bg-primary-container text-on-primary-container py-4 font-headline-md text-headline-md uppercase tracking-widest hover:bg-primary transition-colors duration-200 active:scale-95 rigid-border border-none mt-4">
                                Proceed to Payment
                            </button>
                            <div class="flex items-center justify-center gap-2 mt-4 text-secondary-fixed-dim opacity-70">
                                <span class="material-symbols-outlined text-sm">lock</span>
                                <span class="font-label-caps text-label-caps uppercase">Secure Procurement Gateway</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        },

        checkout: function () {
            this.showToast('Connecting to Secure Trade Account credit line...');
            setTimeout(() => {
                alert('Order submitted successfully! Your site delivery has been scheduled.');
                this.clearCart();
                window.location.href = 'home.html';
            }, 1500);
        },

        initSearch: function () {
            // Create search overlay DOM
            const overlay = document.createElement('div');
            overlay.id = 'bpd-search-overlay';
            overlay.className = 'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 md:p-10 transition-opacity duration-300 opacity-0 pointer-events-none';
            overlay.innerHTML = `
              <div class="bg-white dark:bg-inverse-surface w-full max-w-2xl border border-outline-variant dark:border-outline shadow-2xl rounded-lg overflow-hidden transform -translate-y-4 scale-95 transition-all duration-300 flex flex-col max-h-[85vh]">
                <div class="bg-surface-container dark:bg-on-surface-variant flex items-center px-4 py-3 gap-3 border-b border-outline-variant dark:border-outline">
                  <span class="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-2xl">search</span>
                  <input type="text" id="bpd-search-input" placeholder="Search materials, tools, steel, brands..." class="flex-grow bg-transparent text-on-surface dark:text-white placeholder-secondary dark:placeholder-secondary-fixed-dim text-lg border-none focus:ring-0 outline-none w-full py-1" />
                  <kbd class="text-xs font-semibold px-2 py-1 bg-surface dark:bg-inverse-surface border border-outline-variant text-secondary rounded hidden md:block select-none">ESC</kbd>
                  <button id="bpd-search-close" class="material-symbols-outlined text-secondary hover:text-primary transition-colors">close</button>
                </div>
                <div id="bpd-search-results" class="overflow-y-auto divide-y divide-outline-variant dark:divide-outline flex-grow pb-4">
                </div>
              </div>
            `;
            document.body.appendChild(overlay);

            const searchInput = document.getElementById('bpd-search-input');
            const closeBtn = document.getElementById('bpd-search-close');

            // Find all search triggers
            const searchTriggers = [];
            document.querySelectorAll('button, span, a').forEach(el => {
                if (el.textContent.trim() === 'search' || el.getAttribute('data-icon') === 'search') {
                    const trigger = el.closest('button') || el.closest('a') || el;
                    if (!searchTriggers.includes(trigger)) {
                        searchTriggers.push(trigger);
                    }
                }
            });

            // Bind click to open search
            searchTriggers.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openSearch();
                });
            });

            // Close actions
            closeBtn.addEventListener('click', () => this.closeSearch());
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) this.closeSearch();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeSearch();
            });

            // Input listener
            searchInput.addEventListener('input', (e) => {
                this.renderSearchResults(e.target.value);
            });
        },

        openSearch: function () {
            const overlay = document.getElementById('bpd-search-overlay');
            const card = overlay.firstElementChild;
            const input = document.getElementById('bpd-search-input');
            
            overlay.classList.remove('pointer-events-none', 'opacity-0');
            overlay.classList.add('opacity-100');
            
            card.classList.remove('-translate-y-4', 'scale-95');
            card.classList.add('translate-y-0', 'scale-100');
            
            setTimeout(() => {
                input.focus();
            }, 100);
            
            if (!input.value) {
                this.renderSearchResults('');
            }
        },

        closeSearch: function () {
            const overlay = document.getElementById('bpd-search-overlay');
            const card = overlay.firstElementChild;
            
            overlay.classList.remove('opacity-100');
            overlay.classList.add('pointer-events-none', 'opacity-0');
            
            card.classList.remove('translate-y-0', 'scale-100');
            card.classList.add('-translate-y-4', 'scale-95');
        },

        renderSearchResults: function (query) {
            const container = document.getElementById('bpd-search-results');
            query = query.trim().toLowerCase();
            
            let matches = [];
            if (!query) {
                // Show default suggestions
                const defaults = ['cement-425-25kg', 'rebar-12mm', 'drill-xr9000', 'aggregate-gravel-25kg'];
                matches = this.PRODUCTS_REGISTRY.filter(p => defaults.includes(p.id));
                container.innerHTML = '<div class="px-6 pt-4 pb-2"><h4 class="font-label-caps text-label-caps text-secondary uppercase">Popular Searches</h4></div>';
            } else {
                matches = this.PRODUCTS_REGISTRY.filter(p => 
                    p.title.toLowerCase().includes(query) || 
                    p.category.toLowerCase().includes(query) || 
                    p.brand.toLowerCase().includes(query) ||
                    p.sku.toLowerCase().includes(query)
                );
                container.innerHTML = '<div class="px-6 pt-4 pb-2"><h4 class="font-label-caps text-label-caps text-secondary uppercase">Search Results</h4></div>';
            }

            if (matches.length === 0) {
                container.innerHTML += `
                    <div class="px-6 py-8 flex flex-col items-center justify-center text-center">
                        <span class="material-symbols-outlined text-secondary text-5xl mb-3">search_off</span>
                        <p class="font-headline-md text-[18px] text-on-surface">No results found for "${query}"</p>
                        <p class="text-secondary mt-1">Try searching for generic terms like "cement", "steel", or "tools".</p>
                    </div>
                `;
                return;
            }

            const highlight = (text) => {
                if (!query) return text;
                const escapedQuery = query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp(`(${escapedQuery})`, 'gi');
                return text.replace(regex, '<mark class="bg-primary-container text-on-primary-container rounded px-0.5 font-bold">$1</mark>');
            };

            const html = matches.map(item => `
                <a href="details.html?id=${item.id}" class="flex items-center gap-4 px-6 py-4 hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors group">
                    <div class="w-14 h-14 bg-surface-container-high rounded overflow-hidden flex-shrink-0 border border-outline-variant">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform">
                    </div>
                    <div class="flex-grow min-w-0">
                        <h4 class="font-headline-md text-[16px] text-on-surface truncate group-hover:text-primary transition-colors">${highlight(item.title)}</h4>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="font-label-caps text-label-caps text-secondary">${highlight(item.category)}</span>
                            <span class="w-1 h-1 bg-secondary rounded-full"></span>
                            <span class="font-label-caps text-label-caps text-secondary">${highlight(item.brand)}</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-end flex-shrink-0">
                        <span class="font-headline-md text-primary font-bold">$${item.price.toFixed(2)}</span>
                        <span class="font-label-caps text-[10px] text-secondary mt-1">${item.badge}</span>
                    </div>
                </a>
            `).join('');

            container.innerHTML += html;
        },

        initMobileMenu: function () {
            // Create menu overlay DOM
            const overlay = document.createElement('div');
            overlay.id = 'bpd-menu-overlay';
            overlay.className = 'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none flex justify-start';
            overlay.innerHTML = `
                <div class="bg-surface dark:bg-inverse-surface w-4/5 max-w-sm h-full shadow-2xl flex flex-col transform -translate-x-full transition-transform duration-300">
                    <div class="p-6 border-b border-outline-variant dark:border-outline flex items-center justify-between">
                        <div class="flex flex-col leading-none">
                            <span class="text-[15px] font-black text-primary dark:text-primary-fixed-dim uppercase tracking-tighter">BUILDERS' POINT DEPO LTD</span>
                            <span class="text-[10px] font-bold text-secondary tracking-widest uppercase">(BPD LTD)</span>
                        </div>
                        <button id="bpd-menu-close" class="material-symbols-outlined text-secondary hover:text-primary transition-colors">close</button>
                    </div>
                    <nav class="flex flex-col py-2 flex-grow">
                        <a href="home.html" class="flex items-center gap-3 px-6 py-3 hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors">
                            <span class="material-symbols-outlined text-secondary text-[20px]">home</span>
                            <span class="text-[14px] font-bold text-on-surface dark:text-white uppercase tracking-wide">Home</span>
                        </a>
                        <a href="cement.html" class="flex items-center gap-3 px-6 py-3 hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors">
                            <span class="material-symbols-outlined text-secondary text-[20px]">construction</span>
                            <span class="text-[14px] font-bold text-on-surface dark:text-white uppercase tracking-wide">Catalog</span>
                        </a>
                        <a href="cart.html" class="flex items-center gap-3 px-6 py-3 hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors">
                            <span class="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
                            <span class="text-[14px] font-bold text-on-surface dark:text-white uppercase tracking-wide">Procurement Truck</span>
                        </a>
                        <a href="account.html" class="flex items-center gap-3 px-6 py-3 hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors">
                            <span class="material-symbols-outlined text-secondary text-[20px]">person</span>
                            <span class="text-[14px] font-bold text-on-surface dark:text-white uppercase tracking-wide">Account</span>
                        </a>
                        <a href="admin.html" class="flex items-center gap-3 px-6 py-3 hover:bg-surface-container dark:hover:bg-on-surface-variant transition-colors border-t border-outline-variant/50 mt-2 pt-4">
                            <span class="material-symbols-outlined text-primary-container text-[20px]">admin_panel_settings</span>
                            <span class="text-[14px] font-bold text-primary-container uppercase tracking-wide">Admin Portal</span>
                        </a>
                    </nav>
                </div>
            `;
            document.body.appendChild(overlay);

            const closeBtn = document.getElementById('bpd-menu-close');
            
            // Find menu triggers
            const menuTriggers = [];
            document.querySelectorAll('button, span').forEach(el => {
                if (el.textContent.trim() === 'menu' || el.getAttribute('data-icon') === 'menu') {
                    const trigger = el.closest('button') || el;
                    if (!menuTriggers.includes(trigger)) {
                        menuTriggers.push(trigger);
                    }
                }
            });

            menuTriggers.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    overlay.classList.remove('pointer-events-none', 'opacity-0');
                    overlay.classList.add('opacity-100');
                    overlay.firstElementChild.classList.remove('-translate-x-full');
                    overlay.firstElementChild.classList.add('translate-x-0');
                });
            });

            const closeMenu = () => {
                overlay.classList.remove('opacity-100');
                overlay.classList.add('pointer-events-none', 'opacity-0');
                overlay.firstElementChild.classList.remove('translate-x-0');
                overlay.firstElementChild.classList.add('-translate-x-full');
            };

            closeBtn.addEventListener('click', closeMenu);
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) closeMenu();
            });

        },

        initProductDetails: function() {
            if (!window.location.pathname.includes('details.html')) return;
            
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            if (!id) return; // Default state

            const product = this.PRODUCTS_REGISTRY.find(p => p.id === id);
            if (!product) return;

            // Update DOM
            const titleEl = document.getElementById('detail-title');
            const metaEl = document.getElementById('detail-meta');
            const priceEl = document.getElementById('detail-price');
            const oldPriceEl = document.getElementById('detail-old-price');
            const imageEl = document.getElementById('detail-image');
            const btnEl = document.getElementById('detail-add-btn');

            if (titleEl) titleEl.textContent = product.title;
            if (metaEl) metaEl.textContent = `SKU: ${product.sku} | Category: ${product.category} | Brand: ${product.brand}`;
            if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
            if (oldPriceEl) oldPriceEl.textContent = `$${(product.price * 1.15).toFixed(2)}`; // Fake MSRP
            if (imageEl) imageEl.src = product.image;

            if (btnEl) {
                btnEl.setAttribute('data-id', product.id);
                btnEl.setAttribute('data-title', product.title);
                btnEl.setAttribute('data-price', product.price);
                btnEl.setAttribute('data-image', product.image);
                btnEl.setAttribute('data-weight', product.weight);
                btnEl.setAttribute('data-sku', product.sku);
                btnEl.setAttribute('data-unit', product.unit);
                btnEl.setAttribute('data-badge', product.badge || 'IN STOCK');
            }
        },

        initRegistry: function () {
            try {
                const saved = localStorage.getItem('bpd_products');
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        this.PRODUCTS_REGISTRY = parsed;
                    }
                } else {
                    localStorage.setItem('bpd_products', JSON.stringify(this.PRODUCTS_REGISTRY));
                }
            } catch(e) {
                console.error('Error loading product registry', e);
            }
        },

        saveRegistry: function () {
            try {
                localStorage.setItem('bpd_products', JSON.stringify(this.PRODUCTS_REGISTRY));
            } catch(e) {
                console.error('Error saving product registry', e);
            }
        },

        renderCatalog: function () {
            const grid = document.getElementById('catalog-product-grid');
            if (!grid) return;

            grid.innerHTML = '';
            this.PRODUCTS_REGISTRY.forEach(product => {
                const badgeClass = product.badge === 'BULK ONLY' ? 'bg-primary text-white' : (product.badge === 'LOW STOCK' ? 'bg-error text-white' : 'bg-tertiary text-white');
                const priceFormatted = `$${parseFloat(product.price).toFixed(2)}`;
                
                const card = document.createElement('div');
                card.className = "product-card group bg-white dark:bg-surface-container-low border border-outline-variant dark:border-outline flex flex-col transition-all duration-200 cursor-pointer";
                card.innerHTML = `
                    <div onclick="window.location.href='details.html?id=${product.id}'" class="relative aspect-square overflow-hidden bg-surface-container">
                        <img alt="${product.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${product.image}"/>
                        <div class="absolute top-3 left-3 ${badgeClass} px-2 py-1 font-label-caps text-label-caps rounded-sm">${product.badge || 'IN STOCK'}</div>
                    </div>
                    <div class="p-5 flex-grow flex flex-col">
                        <span class="font-label-caps text-label-caps text-secondary mb-1">${(product.brand || 'BPD GENERIC').toUpperCase()}</span>
                        <h3 onclick="window.location.href='details.html?id=${product.id}'" class="font-headline-md text-[18px] text-on-surface dark:text-white leading-tight mb-2 hover:text-primary transition-colors">${product.title}</h3>
                        <div class="mt-auto">
                            <div class="flex items-baseline gap-2 mb-3">
                                <span class="font-headline-lg text-primary-container dark:text-primary-fixed">${priceFormatted}</span>
                                <span class="font-label-caps text-label-caps text-secondary">${product.unit ? 'PER ' + product.unit : 'PER UNIT'}</span>
                            </div>
                            <button data-action="quick-add" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image}" data-weight="${product.weight || 0}" data-sku="${product.sku || ''}" data-unit="${product.unit || 'BAG'}" data-badge="${product.badge || 'IN STOCK'}" class="w-full h-12 bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary font-headline-md text-spec-table flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant dark:hover:bg-primary-container dark:hover:text-on-primary-container transition-colors">
                                <span class="material-symbols-outlined text-[20px]">local_shipping</span>
                                ADD TO TRUCK
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            this.bindQuickAdd(grid);
        },

        renderFavorites: function () {
            const grid = document.getElementById('home-favorites-grid');
            if (!grid) return;

            grid.innerHTML = '';
            // Show first 6 or favorite products
            const favIds = ['drill-xr18', 'rebar-12mm', 'cement-premium', 'copper-tube', 'cement-425-25kg', 'drill-xr9000'];
            const favs = this.PRODUCTS_REGISTRY.filter(p => favIds.includes(p.id)).concat(this.PRODUCTS_REGISTRY).slice(0, 6);

            favs.forEach(product => {
                const badgeClass = product.badge === 'BULK ONLY' ? 'bg-primary text-white' : (product.badge === 'LOW STOCK' ? 'bg-error text-white' : 'bg-tertiary text-white');
                const priceFormatted = `$${parseFloat(product.price).toFixed(2)}`;
                
                const card = document.createElement('div');
                card.className = "min-w-[280px] md:min-w-[320px] bg-white dark:bg-surface-container-low border border-outline-variant dark:border-outline hover:shadow-lg hover:border-primary transition-all cursor-pointer flex flex-col";
                card.innerHTML = `
                    <div onclick="window.location.href='details.html?id=${product.id}'" class="relative aspect-square overflow-hidden bg-surface-container">
                        <img alt="${product.title}" class="w-full h-full object-cover" src="${product.image}"/>
                        <div class="absolute top-2 left-2">
                            <span class="${badgeClass} font-label-caps text-label-caps px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">${product.badge || 'IN STOCK'}</span>
                        </div>
                    </div>
                    <div class="p-4 flex flex-col flex-grow">
                        <p class="font-label-caps text-label-caps text-secondary uppercase">${product.category}</p>
                        <h4 onclick="window.location.href='details.html?id=${product.id}'" class="font-headline-md text-[18px] text-on-surface dark:text-white mt-1 h-14 overflow-hidden hover:text-primary transition-colors">${product.title}</h4>
                        <div class="mt-auto pt-2">
                            <p class="font-headline-lg text-primary mt-2">${priceFormatted}</p>
                            <button data-action="quick-add" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image}" data-weight="${product.weight || 0}" data-sku="${product.sku || ''}" data-unit="${product.unit || 'BAG'}" data-badge="${product.badge || 'IN STOCK'}" class="w-full mt-4 bg-inverse-surface dark:bg-primary-container text-white dark:text-on-primary-container py-3 font-bold uppercase tracking-wider hover:bg-on-surface-variant transition-colors flex items-center justify-center gap-2">
                                <span class="material-symbols-outlined text-[20px]">add_shopping_cart</span> QUICK ADD
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            this.bindQuickAdd(grid);
        },

        bindQuickAdd: function(root = document) {
            const quickAddBtns = root.querySelectorAll('[data-action="quick-add"]');
            quickAddBtns.forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const productData = {
                        id: this.getAttribute('data-id'),
                        title: this.getAttribute('data-title'),
                        price: parseFloat(this.getAttribute('data-price')),
                        image: this.getAttribute('data-image'),
                        weight: parseFloat(this.getAttribute('data-weight') || '0'),
                        sku: this.getAttribute('data-sku'),
                        unit: this.getAttribute('data-unit'),
                        badge: this.getAttribute('data-badge') || 'IN STOCK'
                    };
                    BPD_Cart.addItem(productData);
                });
            });
        }
    };

    // Auto Init on Page Load
    document.addEventListener('DOMContentLoaded', function () {
        BPD_Cart.initRegistry();
        BPD_Cart.updateCartUI();
        BPD_Cart.initSearch();
        BPD_Cart.initProductDetails();
        BPD_Cart.initMobileMenu();
        BPD_Cart.renderCatalog();
        BPD_Cart.renderFavorites();
        BPD_Cart.bindQuickAdd();

        // 2. Setup theme toggle (bonus premium feature for dark mode support!)
        const themeToggleBtns = document.querySelectorAll('.theme-toggle');
        themeToggleBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const html = document.documentElement;
                if (html.classList.contains('dark')) {
                    html.classList.remove('dark');
                    html.classList.add('light');
                    localStorage.setItem('theme', 'light');
                } else {
                    html.classList.remove('light');
                    html.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                }
            });
        });

        // Apply saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.className = savedTheme;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Default to dark mode if system prefers it
            document.documentElement.className = 'dark';
        }
    });
})();
