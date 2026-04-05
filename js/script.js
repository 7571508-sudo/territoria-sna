<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
const supabaseUrl = 'https://nrmsvdthaphzlnreavwx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ybXN2ZHRoYXBoemxucmVhdnd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNzkxNTIsImV4cCI6MjA5MDk1NTE1Mn0.__TLwnbj3rOnpelmlRXROnXhpqMu8K7Gu-V3mNqZ40s';
const { createClient } = supabaseJs;
const supabase = createClient(supabaseUrl, supabaseKey);

const imageMap = {
    '80x190': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    '90x190': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
    '120x190': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    '140x200': 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=300&fit=crop',
    '160x200': 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&h=300&fit=crop',
    '180x200': 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=400&h=300&fit=crop',
    '50x70': 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop',
    '40x60': 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop'
};

const defaultProducts = [
    { id: 1, name: "Территория сна Ариэль", article: "M0332310", category: "mattresses", size: "80x190", price: 387.78, salePrice: 297.93, discount: 23, specs: "независимые пружины, 7 зон", height: "16 см", spring: "независимые пружины", zones: 7, hardness: "среднемягкий/среднежёсткий", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#667eea", image: "" },
    { id: 2, name: "Территория сна Белла", article: "M0332311", category: "mattresses", size: "90x190", price: 420.50, salePrice: 349.99, discount: 17, specs: "беспружинный, латекс", height: "18 см", spring: "беспружинный", zones: 1, hardness: "жёсткий", maxLoad: "120 кг", cover: "жаккард", inStock: true, color: "#f093fb", image: "" },
    { id: 3, name: "Территория сна Виктория", article: "M0332312", category: "mattresses", size: "140x200", price: 650.00, salePrice: 520.00, discount: 20, specs: "независимые пружины, 5 зон", height: "20 см", spring: "независимые пружины", zones: 5, hardness: "средний", maxLoad: "110 кг", cover: "трикотаж стёганый", inStock: true, color: "#4facfe", image: "" },
    { id: 4, name: "Территория сна Гранд", article: "M0332313", category: "mattresses", size: "160x200", price: 890.00, salePrice: 749.00, discount: 16, specs: "независимые пружины, 7 зон", height: "22 см", spring: "независимые пружины", zones: 7, hardness: "мягкий/средний", maxLoad: "130 кг", cover: "трикотаж", inStock: true, color: "#43e97b", image: "" },
    { id: 5, name: "Территория сна Делайт", article: "M0332314", category: "mattresses", size: "80x190", price: 299.00, salePrice: 249.00, discount: 17, specs: "беспружинный, пенополиуретан", height: "14 см", spring: "беспружинный", zones: 1, hardness: "средний", maxLoad: "90 кг", cover: "поликоттон", inStock: true, color: "#fa709a", image: "" },
    { id: 6, name: "Территория сна Елена", article: "M0332315", category: "mattresses", size: "120x190", price: 545.00, salePrice: 435.00, discount: 20, specs: "независимые пружины, 3 зоны", height: "18 см", spring: "независимые пружины", zones: 3, hardness: "среднежёсткий", maxLoad: "110 кг", cover: "трикотаж", inStock: true, color: "#a8edea", image: "" },
    { id: 7, name: "Территория сна Зенит", article: "M0332316", category: "mattresses", size: "180x200", price: 1200.00, salePrice: 999.00, discount: 17, specs: "независимые пружины, 7 зон", height: "24 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "150 кг", cover: "жаккард стёганый", inStock: true, color: "#ff9a9e", image: "" },
    { id: 8, name: "Территория сна Империал", article: "M0332317", category: "mattresses", size: "140x200", price: 780.00, salePrice: 624.00, discount: 20, specs: "независимые пружины, 5 зон", height: "20 см", spring: "независимые пружины", zones: 5, hardness: "среднемягкий", maxLoad: "120 кг", cover: "трикотаж", inStock: false, color: "#a18cd1", image: "" },
    { id: 9, name: "Территория сна Кинг", article: "M0332318", category: "mattresses", size: "180x200", price: 1450.00, salePrice: 1150.00, discount: 21, specs: "независимые пружины, 7 зон", height: "26 см", spring: "независимые пружины", zones: 7, hardness: "средний", maxLoad: "140 кг", cover: "трикотаж премиум", inStock: true, color: "#ffecd2", image: "" },
    { id: 10, name: "Территория сна Лайт", article: "M0332319", category: "mattresses", size: "90x190", price: 250.00, salePrice: 199.00, discount: 20, specs: "беспружинный", height: "12 см", spring: "беспружинный", zones: 1, hardness: "средний", maxLoad: "80 кг", cover: "поликоттон", inStock: true, color: "#667eea", image: "" },
    { id: 11, name: "Территория сна Магнум", article: "M0332320", category: "mattresses", size: "160x200", price: 980.00, salePrice: 780.00, discount: 20, specs: "независимые пружины, 7 зон", height: "23 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "140 кг", cover: "жаккард люкс", inStock: true, color: "#f093fb", image: "" },
    { id: 12, name: "Территория сна Наоми", article: "M0332321", category: "mattresses", size: "120x190", price: 480.00, salePrice: 399.00, discount: 17, specs: "независимые пружины, 5 зон", height: "17 см", spring: "независимые пружины", zones: 5, hardness: "среднемягкий", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#4facfe", image: "" },
    { id: 13, name: "Территория сна Омега", article: "M0332322", category: "mattresses", size: "140x200", price: 720.00, salePrice: 599.00, discount: 17, specs: "независимые пружины, 5 зон", height: "19 см", spring: "независимые пружины", zones: 5, hardness: "среднежёсткий", maxLoad: "120 кг", cover: "трикотаж стёганый", inStock: true, color: "#43e97b", image: "" },
    { id: 14, name: "Территория сна Прима", article: "M0332323", category: "mattresses", size: "80x190", price: 350.00, salePrice: 279.00, discount: 20, specs: "беспружинный, латекс", height: "15 см", spring: "беспружинный", zones: 1, hardness: "мягкий", maxLoad: "90 кг", cover: "трикотаж", inStock: true, color: "#fa709a", image: "" },
    { id: 15, name: "Территория сна Роял", article: "M0332324", category: "mattresses", size: "180x200", price: 1650.00, salePrice: 1290.00, discount: 22, specs: "независимые пружины, 7 зон", height: "28 см", spring: "независимые пружины", zones: 7, hardness: "средний", maxLoad: "150 кг", cover: "трикотаж премиум", inStock: true, color: "#a8edea", image: "" },
    { id: 16, name: "Территория сна Стандарт", article: "M0332325", category: "mattresses", size: "90x190", price: 380.00, salePrice: 299.00, discount: 21, specs: "независимые пружины, 3 зоны", height: "16 см", spring: "независимые пружины", zones: 3, hardness: "средний", maxLoad: "100 кг", cover: "поликоттон", inStock: true, color: "#ff9a9e", image: "" },
    { id: 17, name: "Территория сна Твист", article: "M0332326", category: "mattresses", size: "120x190", price: 420.00, salePrice: 349.00, discount: 17, specs: "беспружинный, меморикс", height: "16 см", spring: "беспружинный", zones: 1, hardness: "мягкий", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#a18cd1", image: "" },
    { id: 18, name: "Территория сна Ультра", article: "M0332327", category: "mattresses", size: "160x200", price: 850.00, salePrice: 699.00, discount: 18, specs: "независимые пружины, 7 зон", height: "21 см", spring: "независимые пружины", zones: 7, hardness: "среднемягкий", maxLoad: "130 кг", cover: "трикотаж", inStock: true, color: "#ffecd2", image: "" },
    { id: 19, name: "Территория сна Фаворит", article: "M0332328", category: "mattresses", size: "140x200", price: 590.00, salePrice: 479.00, discount: 19, specs: "независимые пружины, 5 зон", height: "18 см", spring: "независимые пружины", zones: 5, hardness: "средний", maxLoad: "110 кг", cover: "жаккард", inStock: true, color: "#667eea", image: "" },
    { id: 20, name: "Территория сна Хит", article: "M0332329", category: "mattresses", size: "80x190", price: 290.00, salePrice: 229.00, discount: 21, specs: "беспружинный", height: "14 см", spring: "беспружинный", zones: 1, hardness: "среднежёсткий", maxLoad: "90 кг", cover: "поликоттон", inStock: true, color: "#f093fb", image: "" },
    { id: 21, name: "Территория сна Цезарь", article: "M0332330", category: "mattresses", size: "180x200", price: 1380.00, salePrice: 1099.00, discount: 20, specs: "независимые пружины, 7 зон", height: "25 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "150 кг", cover: "жаккард люкс", inStock: true, color: "#4facfe", image: "" },
    { id: 22, name: "Территория сна Шанс", article: "M0332331", category: "mattresses", size: "120x190", price: 380.00, salePrice: 299.00, discount: 21, specs: "беспружинный, латекс", height: "15 см", spring: "беспружинный", zones: 1, hardness: "средний", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#43e97b", image: "" },
    { id: 23, name: "Территория сна Элит", article: "M0332332", category: "mattresses", size: "160x200", price: 1120.00, salePrice: 899.00, discount: 20, specs: "независимые пружины, 7 зон", height: "24 см", spring: "независимые пружины", zones: 7, hardness: "среднемягкий", maxLoad: "140 кг", cover: "трикотаж премиум", inStock: true, color: "#fa709a", image: "" },
    { id: 24, name: "Территория сна Юниор", article: "M0332333", category: "mattresses", size: "80x190", price: 320.00, salePrice: 259.00, discount: 19, specs: "беспружинный", height: "12 см", spring: "беспружинный", zones: 1, hardness: "среднежёсткий", maxLoad: "70 кг", cover: "хлопок", inStock: true, color: "#a8edea", image: "" },
    { id: 25, name: "Территория сна Янтарь", article: "M0332334", category: "mattresses", size: "140x200", price: 680.00, salePrice: 549.00, discount: 19, specs: "независимые пружины, 5 зон", height: "19 см", spring: "независимые пружины", zones: 5, hardness: "среднежёсткий", maxLoad: "120 кг", cover: "трикотаж", inStock: true, color: "#ff9a9e", image: "" },
    { id: 26, name: "Территория сна Атлант", article: "M0332335", category: "mattresses", size: "180x200", price: 1890.00, salePrice: 1490.00, discount: 21, specs: "независимые пружины, 7 зон", height: "30 см", spring: "независимые пружины", zones: 7, hardness: "жёсткий", maxLoad: "160 кг", cover: "трикотаж люкс", inStock: true, color: "#a18cd1", image: "" },
    { id: 27, name: "Территория сна Бриз", article: "M0332336", category: "mattresses", size: "90x190", price: 450.00, salePrice: 369.00, discount: 18, specs: "независимые пружины, 3 зоны", height: "17 см", spring: "независимые пружины", zones: 3, hardness: "средний", maxLoad: "100 кг", cover: "трикотаж", inStock: true, color: "#ffecd2", image: "" },
    { id: 28, name: "Территория сна Вектор", article: "M0332337", category: "mattresses", size: "120x190", price: 520.00, salePrice: 419.00, discount: 19, specs: "независимые пружины, 5 зон", height: "18 см", spring: "независимые пружины", zones: 5, hardness: "среднемягкий", maxLoad: "110 кг", cover: "трикотаж стёганый", inStock: true, color: "#667eea", image: "" },
    { id: 29, name: "Территория сна Галактика", article: "M0332338", category: "mattresses", size: "160x200", price: 920.00, salePrice: 749.00, discount: 19, specs: "независимые пружины, 7 зон", height: "22 см", spring: "независимые пружины", zones: 7, hardness: "средний", maxLoad: "130 кг", cover: "трикотаж", inStock: true, color: "#f093fb", image: "" },
    { id: 30, name: "Территория сна Подушка Комфорт", article: "P0012340", category: "pillows", size: "50x70", price: 89.00, salePrice: 69.00, discount: 22, specs: "анатомическая, латекс", height: "12 см", spring: "", zones: 1, hardness: "мягкий", maxLoad: "", cover: "хлопок", inStock: true, color: "#667eea", image: "" },
    { id: 31, name: "Территория сна Подушка Эрго", article: "P0012341", category: "pillows", size: "40x60", price: 120.00, salePrice: 95.00, discount: 21, specs: "ортопедическая, memory foam", height: "10 см", spring: "", zones: 1, hardness: "средний", maxLoad: "", cover: "трикотаж", inStock: true, color: "#f093fb", image: "" },
    { id: 32, name: "Территория сна Подушка Зенит", article: "P0012342", category: "pillows", size: "50x70", price: 150.00, salePrice: 119.00, discount: 21, specs: "анатомическая", height: "14 см", spring: "", zones: 1, hardness: "среднемягкий", maxLoad: "", cover: "жаккард", inStock: true, color: "#4facfe", image: "" },
    { id: 33, name: "Территория сна Подушка Виктория", article: "P0012343", category: "pillows", size: "40x60", price: 78.00, salePrice: 59.00, discount: 24, specs: "классическая", height: "15 см", spring: "", zones: 1, hardness: "мягкий", maxLoad: "", cover: "хлопок", inStock: true, color: "#43e97b", image: "" },
    { id: 34, name: "Территория сна Подушка Прима", article: "P0012344", category: "pillows", size: "50x70", price: 95.00, salePrice: 75.00, discount: 21, specs: "подушка-валик", height: "8 см", spring: "", zones: 1, hardness: "средний", maxLoad: "", cover: "трикотаж", inStock: true, color: "#fa709a", image: "" },
    { id: 35, name: "Территория сна Подушка Стандарт", article: "P0012345", category: "pillows", size: "40x60", price: 55.00, salePrice: 42.00, discount: 24, specs: "классическая", height: "12 см", spring: "", zones: 1, hardness: "средний", maxLoad: "", cover: "поликоттон", inStock: true, color: "#a8edea", image: "" },
    { id: 36, name: "Территория сна Подушка Гранд", article: "P0012346", category: "pillows", size: "50x70", price: 180.00, salePrice: 145.00, discount: 19, specs: "премиальная", height: "13 см", spring: "", zones: 1, hardness: "мягкий", maxLoad: "", cover: "трикотаж", inStock: true, color: "#ff9a9e", image: "" },
    { id: 37, name: "Территория сна Подушка Люкс", article: "P0012347", category: "pillows", size: "40x60", price: 210.00, salePrice: 169.00, discount: 20, specs: "ортопедическая", height: "11 см", spring: "", zones: 1, hardness: "среднежёсткий", maxLoad: "", cover: "шёлк", inStock: true, color: "#a18cd1", image: "" },
    { id: 38, name: "Территория сна Подушка Ариэль", article: "P0012348", category: "pillows", size: "50x70", price: 135.00, salePrice: 105.00, discount: 22, specs: "детская", height: "10 см", spring: "", zones: 1, hardness: "мягкий", maxLoad: "", cover: "хлопок", inStock: true, color: "#ffecd2", image: "" },
    { id: 39, name: "Территория сна Подушка Элит", article: "P0012349", category: "pillows", size: "40x60", price: 165.00, salePrice: 129.00, discount: 22, specs: "анатомическая", height: "12 см", spring: "", zones: 1, hardness: "средний", maxLoad: "", cover: "трикотаж", inStock: true, color: "#667eea", image: "" }
];

let products = [];
let loading = true;

async function loadProducts() {
    const localData = localStorage.getItem('nexusProducts');
    if (localData) {
        products = JSON.parse(localData);
    } else {
        products = [...defaultProducts];
        localStorage.setItem('nexusProducts', JSON.stringify(products));
    }
    renderProducts();
    
    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .order('id');
        
        if (data && data.length > 0) {
            products = data;
            localStorage.setItem('nexusProducts', JSON.stringify(products));
            renderProducts();
        } else if (products.length > 0) {
            for (const p of products) {
                await supabase.from('products').upsert(p);
            }
        }
    } catch (e) {
        console.log('Using local data, Supabase not available');
    }
    loading = false;
}

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

function renderProducts() {
    let filtered = [...products];
    const size = sizeFilter.value;
    const hardness = hardnessFilter.value;
    const price = priceFilter.value;
    const activeCategory = document.querySelector('.nav-link.active')?.dataset.category || 'mattresses';
    filtered = filtered.filter(p => p.category === activeCategory);
    if (size !== 'all') { filtered = filtered.filter(p => p.size === size); }
    if (hardness !== 'all') {
        const hardnessMap = { 'soft': ['мягкий', 'среднемягкий'], 'medium': ['средний', 'среднемягкий', 'среднежёсткий'], 'hard': ['жёсткий', 'среднежёсткий'] };
        filtered = filtered.filter(p => hardnessMap[hardness]?.some(h => p.hardness?.toLowerCase().includes(h)));
    }
    if (price !== 'all') {
        const [min, max] = price.split('-').map(v => v === '1000+' ? Infinity : parseInt(v));
        filtered = filtered.filter(p => { if (price === '1000+') return p.salePrice >= 1000; return p.salePrice >= min && p.salePrice <= max; });
    }
    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}" onclick="openProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'">
                ${product.discount > 0 ? `<span class="product-badge">-${product.discount}%</span>` : ''}
                <div class="product-actions" onclick="event.stopPropagation()">
                    <button onclick="toggleFavorite(${product.id})" title="В избранное"><i class="${favorites.includes(product.id) ? 'fas' : 'far'} fa-heart" ${favorites.includes(product.id) ? 'style="color:#e74c3c"' : ''}></i></button>
                    <button onclick="toggleCompare(${product.id})" title="К сравнению"><i class="fas fa-balance-scale" ${compare.includes(product.id) ? 'style="color:#27ae60"' : ''}></i></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.size} см</div>
                <div class="product-name">${product.name}</div>
                <div class="product-specs">${product.specs}</div>
                <div class="product-price">${product.discount > 0 ? `<span class="price-old">${product.price.toFixed(2)} BYN</span>` : ''}<span class="price-current">${product.salePrice.toFixed(2)} <small>BYN</small></span></div>
                <div class="product-installment">от ${(product.salePrice/36).toFixed(2)} BYN/мес.</div>
                <button class="btn-add" onclick="event.stopPropagation();addToCart(${product.id})" ${!product.inStock?'disabled':''}>${product.inStock?'<i class="fas fa-cart-plus"></i> В корзину':'Нет в наличии'}</button>
            </div>
        </div>
    `).join('');
}

window.openProductModal = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    modalBody.innerHTML = `<div class="modal-gallery"><div class="modal-main-image"><img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"></div><div class="modal-product-info"><h2>${product.name}</h2><p class="article">Артикул: ${product.article}</p><div class="modal-price-block"><div class="modal-price-row"><span class="price-label">Цена:</span><span class="price-value sale">${product.salePrice.toFixed(2)} BYN</span></div>${product.discount > 0 ? `<div class="modal-price-row"><span class="price-label">Скидка:</span><span class="price-value" style="color:var(--danger)">-${product.discount}%</span></div>` : ''}</div><div class="modal-quantity"><label>Количество:</label><div class="modal-qty-controls"><button class="modal-qty-btn" onclick="changeModalQty(-1)">-</button><span class="modal-qty-value" id="modalQty">1</span><button class="modal-qty-btn" onclick="changeModalQty(1)">+</button></div></div><div class="modal-btns"><button class="btn-add" onclick="addToCartFromModal(${product.id})"><i class="fas fa-cart-plus"></i> Купить</button><button class="btn-favorite" onclick="toggleFavorite(${product.id})"><i class="far fa-heart"></i></button></div></div></div>`;
    modal.classList.add('show'); overlay.classList.add('show'); document.body.style.overflow = 'hidden';
};

let modalQty = 1;
window.changeModalQty = function(delta) { modalQty = Math.max(1, modalQty + delta); document.getElementById('modalQty').textContent = modalQty; };
window.addToCartFromModal = function(productId) { const product = products.find(p => p.id === productId); const existing = cart.find(item => item.id === productId); if (existing) existing.quantity += modalQty; else cart.push({...product, quantity: modalQty}); saveCart(); updateCart(); showToast(`Добавлено ${modalQty} шт.`); modalQty = 1; closeProductModal(); };
window.closeProductModal = function() { modal.classList.remove('show'); overlay.classList.remove('show'); document.body.style.overflow = ''; };
function saveCart() { localStorage.setItem('nexusCart', JSON.stringify(cart)); }
window.addToCart = function(productId) { const product = products.find(p => p.id === productId); const existing = cart.find(item => item.id === productId); if (existing) existing.quantity++; else cart.push({...product, quantity: 1}); saveCart(); updateCart(); showToast(`"${product.name}" добавлен в корзину`); };
function removeFromCart(productId) { cart = cart.filter(item => item.id !== productId); saveCart(); updateCart(); if (cart.length === 0) { cartSidebar.classList.remove('open'); overlay.classList.remove('show'); } }
function changeCartQty(productId, delta) { const item = cart.find(item => item.id === productId); if (item) { item.quantity += delta; if (item.quantity <= 0) removeFromCart(productId); else { saveCart(); updateCart(); } } }
function updateCart() { const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); const totalPrice = cart.reduce((sum, item) => sum + item.salePrice * item.quantity, 0); cartBadge.textContent = totalItems; cartTotal.textContent = totalPrice.toFixed(2) + ' BYN'; const footerActions = document.getElementById('cartFooterActions'); const cartTotalRow = document.querySelector('.cart-total'); if (cart.length === 0) { cartItems.innerHTML = `<div style="text-align:center;padding:40px 0;color:var(--gray)"><p>Корзина пуста</p></div>`; if (footerActions) footerActions.style.display = 'none'; if (cartTotalRow) cartTotalRow.style.display = 'none'; return; } if (footerActions) footerActions.style.display = 'block'; if (cartTotalRow) cartTotalRow.style.display = 'flex'; cartItems.innerHTML = cart.map(item => `<div class="cart-item"><div class="cart-item-image"><img src="${item.image || imageMap[item.size] || imageMap['80x190']}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:8px"></div><div class="cart-item-details"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${item.salePrice.toFixed(2)} BYN</div><div class="cart-item-controls"><button class="qty-btn" onclick="changeCartQty(${item.id},-1)">-</button><span class="cart-item-qty">${item.quantity}</span><button class="qty-btn" onclick="changeCartQty(${item.id},1)">+</button></div></div><button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button></div>`).join(''); }
function toggleCart() { cartSidebar.classList.toggle('open'); overlay.classList.toggle('show'); }
function showToast(message) { toastMsg.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2500); }
window.toggleFavorite = function(id) { const index = favorites.indexOf(id); if (index > -1) { favorites.splice(index, 1); showToast('Удалено из избранного'); } else { favorites.push(id); showToast('Добавлено в избранное'); } localStorage.setItem('nexusFavorites', JSON.stringify(favorites)); updateFavoritesBadge(); renderProducts(); if (favoritesSidebar.classList.contains('show')) { renderFavorites(); if (favorites.length === 0) { favoritesSidebar.classList.remove('show'); overlay.classList.remove('show'); } } };
function updateFavoritesBadge() { const badge = document.getElementById('favoritesBadge'); const icon = document.getElementById('favoritesBtnIcon'); if (favorites.length > 0) { badge.textContent = favorites.length; badge.style.display = 'flex'; badge.style.background = '#e74c3c'; icon.style.color = '#e74c3c'; } else { badge.style.display = 'none'; badge.style.background = ''; icon.style.color = ''; } }
function renderFavorites() { const container = document.getElementById('favoritesItems'); if (favorites.length === 0) { container.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--gray)"><p>Избранное пусто</p></div>`; return; } const favProducts = products.filter(p => favorites.includes(p.id)); container.innerHTML = favProducts.map(product => `<div class="fav-item"><img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}"><div class="fav-info"><div class="fav-name">${product.name}</div><div class="fav-price">${product.salePrice.toFixed(2)} BYN</div></div><button class="fav-remove" onclick="toggleFavorite(${product.id})"><i class="fas fa-times"></i></button></div>`).join(''); }
function toggleFavorites() { favoritesSidebar.classList.toggle('show'); overlay.classList.toggle('show', favoritesSidebar.classList.contains('show')); if (favoritesSidebar.classList.contains('show')) renderFavorites(); }
window.toggleCompare = function(id) { const index = compare.indexOf(id); if (index > -1) { compare.splice(index, 1); showToast('Удалено из сравнения'); } else { if (compare.length >= 3) { showToast('Максимум 3 товара'); return; } compare.push(id); showToast('Добавлено к сравнению'); } localStorage.setItem('nexusCompare', JSON.stringify(compare)); updateCompareBadge(); renderProducts(); if (compareSidebar.classList.contains('show')) { renderCompare(); if (compare.length === 0) { compareSidebar.classList.remove('show'); overlay.classList.remove('show'); } } };
function updateCompareBadge() { const badge = document.getElementById('compareBadge'); const icon = document.getElementById('compareBtnIcon'); if (compare.length > 0) { badge.textContent = compare.length; badge.style.display = 'flex'; badge.style.background = '#27ae60'; icon.style.color = '#27ae60'; } else { badge.style.display = 'none'; badge.style.background = ''; icon.style.color = ''; } }
function renderCompare() { const container = document.getElementById('compareItems'); if (compare.length === 0) { container.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--gray)"><p>Сравнение пусто</p></div>`; return; } const compareProducts = products.filter(p => compare.includes(p.id)); container.innerHTML = compareProducts.map(product => `<div class="fav-item"><img src="${product.image || imageMap[product.size] || imageMap['80x190']}" alt="${product.name}"><div class="fav-info"><div class="fav-name">${product.name}</div><div class="fav-price">${product.salePrice.toFixed(2)} BYN</div></div><button class="fav-remove" onclick="toggleCompare(${product.id})"><i class="fas fa-times"></i></button></div>`).join(''); }
function toggleComparePanel() { compareSidebar.classList.toggle('show'); overlay.classList.toggle('show', compareSidebar.classList.contains('show')); if (compareSidebar.classList.contains('show')) renderCompare(); }
cartBtn.addEventListener('click', toggleCart); closeCart.addEventListener('click', toggleCart); document.getElementById('favoritesBtn').addEventListener('click', toggleFavorites); document.getElementById('closeFavorites').addEventListener('click', toggleFavorites); document.getElementById('compareBtn').addEventListener('click', toggleComparePanel); document.getElementById('closeCompare').addEventListener('click', toggleComparePanel); closeModal.addEventListener('click', closeProductModal); overlay.addEventListener('click', () => { closeProductModal(); if (favoritesSidebar.classList.contains('show')) toggleFavorites(); if (compareSidebar.classList.contains('show')) toggleComparePanel(); });
checkoutBtn.addEventListener('click', () => { if (cart.length === 0) { showToast('Корзина пуста'); return; } showToast('Заказ оформлен!'); cart = []; saveCart(); updateCart(); toggleCart(); });
sizeFilter.addEventListener('change', renderProducts); hardnessFilter.addEventListener('change', renderProducts); priceFilter.addEventListener('change', renderProducts);
document.querySelectorAll('.nav-link[data-category]').forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active')); link.classList.add('active'); renderProducts(); }); });
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProductModal(); });
loadProducts();
updateCart();
updateFavoritesBadge();
updateCompareBadge();
</script>
