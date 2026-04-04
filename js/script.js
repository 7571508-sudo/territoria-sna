const imageMap = {
    '80x190': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    '90x190': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
    '120x190': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    '140x200': 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=300&fit=crop',
    '160x200': 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop',
    '180x200': 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=400&h=300&fit=crop'
};

const defaultProducts = [
    { id: 1, name: "Территория сна Ариэль", article: "M0332310", size: "80x190", price: 387.78, salePrice: 297.93, discount: 23, specs: "независимые пружины, 7 зон, среднемягкий/среднежёсткий", height: "16 см", spring: "независимые пружины", zones: 7, hardness: "среднемягкий/среднежёсткий", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#667eea", image: "" },
    { id: 2, name: "Территория сна Белла", article: "M0332311", size: "90x190", price: 420.50, salePrice: 349.99, discount: 17, specs: "беспружинный, латекс, жёсткий", height: "18 см", spring: "беспружинный", zones: 1, hardness: "жёсткий", maxLoad: "120 кг", cover: "жаккард", inStock: true, color: "#f093fb", image: "" },
    { id: 3, name: "Территория сна Виктория", article: "M0332312", size: "140x200", price: 650.00, salePrice: 520.00, discount: 20, specs: "независимые пружины, 5 зон, средний", height: "20 см", spring: "независимые пружины", zones: 5, hardness: "средний", maxLoad: "110 кг", cover: "трикотаж стёганый", inStock: true, color: "#4facfe", image: "" },
    { id: 4, name: "Территория сна Гранд", article: "M0332313", size: "160x200", price: 890.00, salePrice: 749.00, discount: 16, specs: "независимые пружины, 7 зон, мягкий/средний", height: "22 см", spring: "независимые пружины", zones: 7, hardness: "мягкий/средний", maxLoad: "130 кг", cover: "трикотаж", inStock: true, color: "#43e97b", image: "" },
    { id: 5, name: "Территория сна Делайт", article: "M0332314", size: "80x190", price: 299.00, salePrice: 249.00, discount: 17, specs: "беспружинный, пенополиуретан, средний", height: "14 см", spring: "беспружинный", zones: 1, hardness: "средний", maxLoad: "90 кг", cover: "поликоттон", inStock: true, color: "#fa709a", image: "" },
    { id: 6, name: "Территория сна Елена", article: "M0332315", size: "120x190", price: 545.00, salePrice: 435.00, discount: 20, specs: "независимые пружины, 3 зоны, среднежёсткий", height: "18 см", spring: "независимые пружины", zones: 3, hardness: "среднежёсткий", maxLoad: "110 кг", cover: "трикотаж", inStock: true, color: "#a8edea", image: "" },
    { id: 7, name: "Территория сна Зенит", article: "M0332316", size: "180x200", price: 1200.00, salePrice: 999.00, discount: 17, specs: "независимые пружины, 7 зон, жёсткий", height: "24 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "150 кг", cover: "жаккард стёганый", inStock: true, color: "#ff9a9e", image: "" },
    { id: 8, name: "Территория сна Империал", article: "M0332317", size: "140x200", price: 780.00, salePrice: 624.00, discount: 20, specs: "независимые пружины, 5 зон, среднемягкий", height: "20 см", spring: "независимые пружины", zones: 5, hardness: "среднемягкий", maxLoad: "120 кг", cover: "трикотаж", inStock: false, color: "#a18cd1", image: "" },
    { id: 9, name: "Территория сна Кинг", article: "M0332318", size: "180x200", price: 1450.00, salePrice: 1150.00, discount: 21, specs: "независимые пружины, 7 зон, средний", height: "26 см", spring: "независимые пружины", zones: 7, hardness: "средний", maxLoad: "140 кг", cover: "трикотаж премиум", inStock: true, color: "#ffecd2", image: "" },
    { id: 10, name: "Территория сна Лайт", article: "M0332319", size: "90x190", price: 250.00, salePrice: 199.00, discount: 20, specs: "беспружинный, пенополиуретан, средний", height: "12 см", spring: "беспружинный", zones: 1, hardness: "средний", maxLoad: "80 кг", cover: "поликоттон", inStock: true, color: "#667eea", image: "" },
    { id: 11, name: "Территория сна Магнум", article: "M0332320", size: "160x200", price: 980.00, salePrice: 780.00, discount: 20, specs: "независимые пружины, 7 зон, жёсткий", height: "23 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "140 кг", cover: "жаккард люкс", inStock: true, color: "#f093fb", image: "" },
    { id: 12, name: "Территория сна Наоми", article: "M0332321", size: "120x190", price: 480.00, salePrice: 399.00, discount: 17, specs: "независимые пружины, 5 зон, среднемягкий", height: "17 см", spring: "независимые пружины", zones: 5, hardness: "среднемягкий", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#4facfe", image: "" },
    { id: 13, name: "Территория сна Омега", article: "M0332322", size: "140x200", price: 720.00, salePrice: 599.00, discount: 17, specs: "независимые пружины, 5 зон, среднежёсткий", height: "19 см", spring: "независимые пружины", zones: 5, hardness: "среднежёсткий", maxLoad: "120 кг", cover: "трикотаж стёганый", inStock: true, color: "#43e97b", image: "" },
    { id: 14, name: "Территория сна Прима", article: "M0332323", size: "80x190", price: 350.00, salePrice: 279.00, discount: 20, specs: "беспружинный, латекс, мягкий", height: "15 см", spring: "беспружинный", zones: 1, hardness: "мягкий", maxLoad: "90 кг", cover: "трикотаж", inStock: true, color: "#fa709a", image: "" },
    { id: 15, name: "Территория сна Роял", article: "M0332324", size: "180x200", price: 1650.00, salePrice: 1290.00, discount: 22, specs: "независимые пружины, 7 зон, средний", height: "28 см", spring: "независимые пружины", zones: 7, hardness: "средний", maxLoad: "150 кг", cover: "трикотаж премиум", inStock: true, color: "#a8edea", image: "" },
    { id: 16, name: "Территория сна Стандарт", article: "M0332325", size: "90x190", price: 380.00, salePrice: 299.00, discount: 21, specs: "независимые пружины, 3 зоны, средний", height: "16 см", spring: "независимые пружины", zones: 3, hardness: "средний", maxLoad: "100 кг", cover: "поликоттон", inStock: true, color: "#ff9a9e", image: "" },
    { id: 17, name: "Территория сна Твист", article: "M0332326", size: "120x190", price: 420.00, salePrice: 349.00, discount: 17, specs: "беспружинный, меморикс, мягкий", height: "16 см", spring: "беспружинный", zones: 1, hardness: "мягкий", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#a18cd1", image: "" },
    { id: 18, name: "Территория сна Ультра", article: "M0332327", size: "160x200", price: 850.00, salePrice: 699.00, discount: 18, specs: "независимые пружины, 7 зон, среднемягкий", height: "21 см", spring: "независимые пружины", zones: 7, hardness: "среднемягкий", maxLoad: "130 кг", cover: "трикотаж", inStock: true, color: "#ffecd2", image: "" },
    { id: 19, name: "Территория сна Фаворит", article: "M0332328", size: "140x200", price: 590.00, salePrice: 479.00, discount: 19, specs: "независимые пружины, 5 зон, средний", height: "18 см", spring: "независимые пружины", zones: 5, hardness: "средний", maxLoad: "110 кг", cover: "жаккард", inStock: true, color: "#667eea", image: "" },
    { id: 20, name: "Территория сна Хит", article: "M0332329", size: "80x190", price: 290.00, salePrice: 229.00, discount: 21, specs: "беспружинный, пенополиуретан, среднежёсткий", height: "14 см", spring: "беспружинный", zones: 1, hardness: "среднежёсткий", maxLoad: "90 кг", cover: "поликоттон", inStock: true, color: "#f093fb", image: "" },
    { id: 21, name: "Территория сна Цезарь", article: "M0332330", size: "180x200", price: 1380.00, salePrice: 1099.00, discount: 20, specs: "независимые пружины, 7 зон, жёсткий", height: "25 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "150 кг", cover: "жаккард люкс", inStock: true, color: "#4facfe", image: "" },
    { id: 22, name: "Территория сна Шанс", article: "M0332331", size: "120x190", price: 380.00, salePrice: 299.00, discount: 21, specs: "беспружинный, латекс, средний", height: "15 см", spring: "беспружинный", zones: 1, hardness: "средний", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#43e97b", image: "" },
    { id: 23, name: "Территория сна Элит", article: "M0332332", size: "160x200", price: 1120.00, salePrice: 899.00, discount: 20, specs: "независимые пружины, 7 зон, среднемягкий", height: "24 см", spring: "независимые пружины", zones: 7, hardness: "среднемягкий", maxLoad: "140 кг", cover: "трикотаж премиум", inStock: true, color: "#fa709a", image: "" },
    { id: 24, name: "Территория сна Юниор", article: "M0332333", size: "80x190", price: 320.00, salePrice: 259.00, discount: 19, specs: "беспружинный, пенополиуретан, среднежёсткий", height: "12 см", spring: "беспружинный", zones: 1, hardness: "среднежёсткий", maxLoad: "70 кг", cover: "хлопок", inStock: true, color: "#a8edea", image: "" },
    { id: 25, name: "Территория сна Янтарь", article: "M0332334", size: "140x200", price: 680.00, salePrice: 549.00, discount: 19, specs: "независимые пружины, 5 зон, среднежёсткий", height: "19 см", spring: "независимые пружины", zones: 5, hardness: "среднежёсткий", maxLoad: "120 кг", cover: "трикотаж", inStock: true, color: "#ff9a9e", image: "" },
    { id: 26, name: "Территория сна Атлант", article: "M0332335", size: "180x200", price: 1890.00, salePrice: 1490.00, discount: 21, specs: "независимые пружины, 7 зон, жёсткий", height: "30 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "160 кг", cover: "трикотаж люкс", inStock: true, color: "#a18cd1", image: "" },
    { id: 27, name: "Территория сна Бриз", article: "M0332336", size: "90x190", price: 450.00, salePrice: 369.00, discount: 18, specs: "независимые пружины, 3 зоны, средний", height: "17 см", spring: "независимые пружины", zones: 3, hardness: "средний", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#ffecd2", image: "" },
    { id: 28, name: "Территория сна Вектор", article: "M0332337", size: "120x190", price: 520.00, salePrice: 419.00, discount: 19, specs: "независимые пружины, 5 зон, среднемягкий", height: "18 см", spring: "независимые пружины", zones: 5, hardness: "среднемягкий", maxLoad: "110 кг", cover: "трикотаж стёганый", inStock: true, color: "#667eea", image: "" },
    { id: 29, name: "Территория сна Галактика", article: "M0332338", size: "160x200", price: 920.00, salePrice: 749.00, discount: 19, specs: "независимые пружины, 7 зон, средний", height: "22 см", spring: "независимые пружины", zones: 7, hardness: "средний", maxLoad: "130 кг", cover: "трикотаж", inStock: true, color: "#f093fb", image: "" }
];

let products = defaultProducts;

let favorites = JSON.parse(localStorage.getItem('nexusFavorites')) || [];
let compare = JSON.parse(localStorage.getItem('nexusCompare')) || [];
let cart = JSON.parse(localStorage.getItem('nexusCart')) || [];

const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const favoritesSidebar = document.getElementById('favoritesSidebar');
const compareSidebar = document.getElementById('compareSidebar');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const checkoutBtn = document.getElementById('checkoutBtn');

const sizeFilter = document.getElementById('sizeFilter');
const hardnessFilter = document.getElementById('hardnessFilter');
const priceFilter = document.getElementById('priceFilter');

console.log('DOM elements:', !!productsGrid, !!sizeFilter, !!hardnessFilter, !!priceFilter);
console.log('Products:', products.length);

function renderProducts() {
    let filtered = [...products];

    const size = sizeFilter.value;
    const hardness = hardnessFilter.value;
    const price = priceFilter.value;

    if (size !== 'all') {
        filtered = filtered.filter(p => p.size === size);
    }

    if (hardness !== 'all') {
        const hardnessMap = {
            'soft': ['мягкий', 'среднемягкий'],
            'medium': ['средний', 'среднемягкий', 'среднежёсткий'],
            'hard': ['жёсткий', 'среднежёсткий']
        };
        filtered = filtered.filter(p => 
            hardnessMap[hardness].some(h => p.hardness.toLowerCase().includes(h))
        );
    }

    if (price !== 'all') {
        const [min, max] = price.split('-').map(v => v === '1000+' ? Infinity : parseInt(v));
        filtered = filtered.filter(p => {
            if (price === '1000+') return p.salePrice >= 1000;
            return p.salePrice >= min && p.salePrice <= max;
        });
    }

    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
                ${product.discount > 0 ? `<span class="product-badge">-${product.discount}%</span>` : ''}
                <div class="product-actions" onclick="event.stopPropagation()">
                    <button onclick="toggleFavorite(${product.id})" title="В избранное">
                        <i class="far fa-heart"></i>
                    </button>
                    <button onclick="toggleCompare(${product.id})" title="К сравнению">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.size} см</div>
                <div class="product-name" onclick="openProductModal(${product.id})">${product.name}</div>
                <div class="product-specs">${product.specs}</div>
                <div class="product-price">
                    ${product.discount > 0 ? `<span class="price-old">${product.price.toFixed(2)} BYN</span>` : ''}
                    <span class="price-current">${product.salePrice.toFixed(2)} <small>BYN</small></span>
                </div>
                <div class="product-installment">от ${(product.salePrice / 36).toFixed(2)} BYN/мес. (36 мес.)</div>
                <button class="btn-add" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? '<i class="fas fa-cart-plus"></i> В корзину' : 'Нет в наличии'}
                </button>
            </div>
        </div>
    `).join('');
}

window.openProductModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalBody.innerHTML = `
        <div class="modal-gallery">
            <div class="modal-main-image">
                <img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <p class="article">Артикул: ${product.article}</p>
                
                <div class="modal-price-block">
                    <div class="modal-price-row">
                        <span class="price-label">Розничная цена:</span>
                        <span class="price-value old">${product.price.toFixed(2)} BYN</span>
                    </div>
                    <div class="modal-price-row">
                        <span class="price-label">Цена со скидкой:</span>
                        <span class="price-value sale">${product.salePrice.toFixed(2)} BYN</span>
                    </div>
                    ${product.discount > 0 ? `
                    <div class="modal-price-row">
                        <span class="price-label">Скидка:</span>
                        <span class="price-value" style="color: var(--danger);">-${(product.price - product.salePrice).toFixed(2)} BYN</span>
                    </div>
                    ` : ''}
                    <p class="installment-info">
                        <i class="fas fa-info-circle"></i> Рассрочка от ${(product.salePrice / 36).toFixed(2)} BYN/мес. (36 мес.)
                    </p>
                </div>

                <div class="modal-quantity">
                    <label>Количество:</label>
                    <div class="modal-qty-controls">
                        <button class="modal-qty-btn" onclick="changeModalQty(-1)">-</button>
                        <span class="modal-qty-value" id="modalQty">1</span>
                        <button class="modal-qty-btn" onclick="changeModalQty(1)">+</button>
                    </div>
                </div>

                <div class="modal-btns">
                    <button class="btn-add" id="modalAddBtn" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-cart-plus"></i> Купить
                    </button>
                    <button class="btn-favorite" onclick="toggleFavorite(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>

                <div class="modal-delivery">
                    <div class="delivery-item">
                        <i class="fas fa-truck"></i>
                        <span>Бесплатно по Минску</span>
                    </div>
                    <div class="delivery-item">
                        <i class="fas fa-shield-alt"></i>
                        <span>Гарантия 36 мес.</span>
                    </div>
                </div>

                <table class="specs-table">
                    <tr><th>Высота</th><td>${product.height}</td></tr>
                    <tr><th>Пружинный блок</th><td>${product.spring}</td></tr>
                    <tr><th>Зон жёсткости</th><td>${product.zones}</td></tr>
                    <tr><th>Жёсткость</th><td>${product.hardness}</td></tr>
                    <tr><th>Макс. нагрузка</th><td>${product.maxLoad}</td></tr>
                    <tr><th>Чехол</th><td>${product.cover}</td></tr>
                </table>
            </div>
        </div>
    `;

    modal.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

let modalQty = 1;

window.changeModalQty = function(delta) {
    modalQty = Math.max(1, modalQty + delta);
    document.getElementById('modalQty').textContent = modalQty;
};

window.addToCartFromModal = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += modalQty;
    } else {
        cart.push({ ...product, quantity: modalQty });
    }

    saveCart();
    updateCart();
    showToast(`Добавлено ${modalQty} шт. "${product.name}"`);
    modalQty = 1;
    closeProductModal();
};

window.closeProductModal = function() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

function saveCart() {
    localStorage.setItem('nexusCart', JSON.stringify(cart));
}

window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCart();
    showToast(`"${product.name}" добавлен в корзину`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function changeCartQty(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCart();
        }
    }
}

function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);

    cartBadge.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2) + ' BYN';

    const footerActions = document.getElementById('cartFooterActions');
    const cartTotalRow = document.querySelector('.cart-total');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 40px 0; color: var(--gray);">
                <svg viewBox="0 0 100 100" style="width: 80px; height: 80px; margin-bottom: 15px; opacity: 0.3;">
                    <rect x="20" y="30" width="60" height="40" rx="8" fill="#718096"/>
                    <rect x="25" y="35" width="50" height="30" rx="5" fill="#a0aec0"/>
                </svg>
                <p>Корзина пуста</p>
            </div>
        `;
        if (footerActions) footerActions.style.display = 'none';
        if (cartTotalRow) cartTotalRow.style.display = 'none';
        return;
    }

    if (footerActions) footerActions.style.display = 'block';
    if (cartTotalRow) cartTotalRow.style.display = 'flex';

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image || imageMap[item.size] || imageMap['80x190']}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.salePrice.toFixed(2)} BYN</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

window.toggleFavorite = function(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast('Удалено из избранного');
    } else {
        favorites.push(id);
        showToast('Добавлено в избранное');
    }
    localStorage.setItem('nexusFavorites', JSON.stringify(favorites));
    updateFavoritesBadge();
    renderProducts();
    if (favoritesSidebar.classList.contains('show')) {
        renderFavorites();
    }
};

function updateFavoritesBadge() {
    const badge = document.getElementById('favoritesBadge');
    if (favorites.length > 0) {
        badge.textContent = favorites.length;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function renderFavorites() {
    const container = document.getElementById('favoritesItems');
    if (favorites.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--gray);">
                <i class="far fa-heart" style="font-size: 3rem; opacity: 0.3; margin-bottom: 15px;"></i>
                <p>Избранное пусто</p>
            </div>
        `;
        return;
    }
    
    const favProducts = products.filter(p => favorites.includes(p.id));
    container.innerHTML = favProducts.map(product => `
        <div class="fav-item">
            <img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}">
            <div class="fav-info">
                <div class="fav-name">${product.name}</div>
                <div class="fav-price">${product.salePrice.toFixed(2)} BYN</div>
            </div>
            <button class="fav-remove" onclick="toggleFavorite(${product.id})"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}

function toggleFavorites() {
    favoritesSidebar.classList.toggle('show');
    overlay.classList.toggle('show', favoritesSidebar.classList.contains('show'));
    if (favoritesSidebar.classList.contains('show')) {
        renderFavorites();
    }
}

window.toggleCompare = function(id) {
    const index = compare.indexOf(id);
    if (index > -1) {
        compare.splice(index, 1);
        showToast('Удалено из сравнения');
    } else {
        if (compare.length >= 3) {
            showToast('Можно сравнить максимум 3 товара');
            return;
        }
        compare.push(id);
        showToast('Добавлено к сравнению');
    }
    localStorage.setItem('nexusCompare', JSON.stringify(compare));
    updateCompareBadge();
    renderProducts();
    if (compareSidebar.classList.contains('show')) {
        renderCompare();
    }
};

function updateCompareBadge() {
    const badge = document.getElementById('compareBadge');
    if (compare.length > 0) {
        badge.textContent = compare.length;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function renderCompare() {
    const container = document.getElementById('compareItems');
    if (compare.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--gray);">
                <i class="fas fa-balance-scale" style="font-size: 3rem; opacity: 0.3; margin-bottom: 15px;"></i>
                <p>Сравнение пусто</p>
            </div>
        `;
        return;
    }
    
    const compareProducts = products.filter(p => compare.includes(p.id));
    container.innerHTML = compareProducts.map(product => `
        <div class="fav-item">
            <img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}">
            <div class="fav-info">
                <div class="fav-name">${product.name}</div>
                <div class="fav-price">${product.salePrice.toFixed(2)} BYN</div>
            </div>
            <button class="fav-remove" onclick="toggleCompare(${product.id})"><i class="fas fa-times"></i></button>
        </div>
    `).join('');
}

function toggleComparePanel() {
    compareSidebar.classList.toggle('show');
    overlay.classList.toggle('show', compareSidebar.classList.contains('show'));
    if (compareSidebar.classList.contains('show')) {
        renderCompare();
    }
}

cartBtn.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);
document.getElementById('favoritesBtn').addEventListener('click', toggleFavorites);
document.getElementById('closeFavorites').addEventListener('click', toggleFavorites);
document.getElementById('compareBtn').addEventListener('click', toggleComparePanel);
document.getElementById('closeCompare').addEventListener('click', toggleComparePanel);
closeModal.addEventListener('click', closeProductModal);
overlay.addEventListener('click', () => {
    closeProductModal();
    if (favoritesSidebar.classList.contains('show')) toggleFavorites();
    if (compareSidebar.classList.contains('show')) toggleComparePanel();
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Корзина пуста');
        return;
    }
    showToast('Заказ оформлен! Мы скоро свяжемся с вами');
    cart = [];
    saveCart();
    updateCart();
    toggleCart();
});

sizeFilter.addEventListener('change', renderProducts);
hardnessFilter.addEventListener('change', renderProducts);
priceFilter.addEventListener('change', renderProducts);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

renderProducts();
updateCart();
updateFavoritesBadge();
updateCompareBadge();

console.log('Products loaded:', products.length);
