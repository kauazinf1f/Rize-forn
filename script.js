// Products data
const products = [
    {
        id: 'discord-nitro-mensal',
        name: 'DISCORD NITRO MENSAL',
        price: 2.00,
        originalPrice: 3.00,
        discount: 33.33, // (3 - 2)/3 * 100 = 33,33%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404495668822933514/netflix_by_px.psd_20250811_125227_0000.png?ex=689d6045&is=689c0ec5&hm=69b9b710a7182e23a3386669456d67a3bd589c4b9565bf00a1fff68919fcfb4c&',
        category: 'discord',
        inStock: false,
        description: 'Tenha uma conta com Nitro Boost ativo sem pagar o preço cheio do Discord'
    },
    {
        id: 'discord-nitro-gif',
        name: 'DISCORD NITRO GIF',
        price: 15.00,
        originalPrice: 20.00,
        discount: 25, // (20 - 15)/20 * 100 = 25%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404495661487100137/netflix_by_px.psd_20250811_125656_0000.png?ex=689d6043&is=689c0ec3&hm=61c614b5c7ea47688f5ee93ccfb38eecd397bb432392ff6ef712572c2a8147a8&',
        category: 'discord',
        inStock: false,
        description: 'Tenha **Nitro GIF** e desbloqueie todos os recursos premium do Discord'
    },
    {
        id: 'impulso-server',
        name: 'IMPULSOS',
        price: 15.00,
        originalPrice: 20.00,
        discount: 25, // igual acima, 25%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404495653882691745/netflix_by_px.psd_20250811_125855_0000.png?ex=689d6042&is=689c0ec2&hm=45aa7fd777700e822ea49521223add0fb3cc46121df850ae2390e5b6763fccba&',
        category: 'discord',
        inStock: false,
        description: 'Tenha Impulsos ativos no seu servidor sem pagar o preço cheio do Discord'
    },
    {
        id: 'membros-gif',
        name: 'MEMBROS GIFS',
        price: 1.50,
        originalPrice: 3.00,
        discount: 50, // (3 - 1.5)/3 * 100 = 50%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404539572289015989/netflix_by_px.psd_20250811_155739_0000.png?ex=689d8929&is=689c37a9&hm=0ec5a335b5cffd8bb1346be848089e60283ea71aea1cd759a6bd8fdbf9193e5a&',
        category: 'discord',
        inStock: true,
        description: '100% membros reais. Entra em qualquer servidor'
    },
    {
        id: 'netflix-tela',
        name: 'NETFLIX TELA',
        price: 2.50,
        originalPrice: 4.00,
        discount: 37.5, // (4 - 2.5)/4 * 100 = 37,5%
        image: 'https://cdn.discordapp.com/attachments/1404426544818028629/1404456303404912720/netflix_by_px.psd_20250811_091027_0000.png?ex=689de45c&is=689c92dc&hm=a74ef606002fb27d2244acedfc6041531140dce3823d8a8520aa26739f281c8b&',
        category: 'assinatura',
        inStock: false,
        description: 'Garantia de 4 dias. Duração de 30 dias. Não alterar a senha (perde o acesso). Pode usar na TV, celular e notebook. Qualidade HD/UHD. Sem anúncios. Acesso a todo o catálogo (séries, filmes e lançamentos)'
    },
    {
        id: 'spotify-tela',
        name: 'SPOTIFY PREMIUM ANUAL',
        price: 6.00,
        originalPrice: 8.00,
        discount: 25, // (8 - 6)/8 * 100 = 25%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404486968548528168/netflix_by_px.psd_20250811_122850_0000.png?ex=689d582b&is=689c06ab&hm=0c65eeb4e0e49017641a6bfd4aa1bf36d0c24d5a0e3865e3c6d2395a2cd552b2&',
        category: 'assinatura',
        inStock: true,
        description: 'Garantia de 30 dias Duração de 12 meses Não alterar a senha (perde o acesso) Pode usar no celular, computador, tablet e smart TV Música sem anúncios e em alta qualidade Playlists e músicas para ouvir offline Acesso ilimitado a todo o catálogo do Spotify'
    },
    {
        id: 'crunchyroll-tela',
        name: 'CRUNCHYROLL',
        price: 1.20,
        originalPrice: 2.50,
        discount: 52, // (2.5 - 1.2)/2.5 * 100 = 52%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404440778457088031/netflix_by_px.psd_20250811_092337_0000.png?ex=689dd5e6&is=689c8466&hm=25e425746b40534821b4618afdbfe4ad1afe13f1c84647f64e4bd252fc957455&',
        category: 'assinatura',
        inStock: false,
        description: 'Acesso completo ao Crunchyroll premium com anime e mangá'
    },
    {
        id: 'disney-plus',
        name: 'DISNEY PLUS',
        price: 2.50,
        originalPrice: 5.00,
        discount: 50, // (5 - 2.5)/5 * 100 = 50%
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404452892282327081/netflix_by_px.psd_20250811_101149_0000.png?ex=689de12e&is=689c8fae&hm=1ca61e66a9f462630e38230f94dc355f4d0249894f6ebcc2d4d1ac729c74d111&',
        category: 'assinatura',
        inStock: false,
        description: 'Acesso completo ao Disney+ com todo o catálogo Disney, Marvel, Star Wars'
    },
    {
        id: 'canva-pro',
        name: 'CANVA PRO MENSAL',
        price: 1.20,
        image: 'https://cdn.discordapp.com/attachments/1402478377310617633/1404490837143851019/netflix_by_px.psd_20250811_124226_0000.png?ex=689d5bc5&is=689c0a45&hm=1fe499584f406c0398a96c2e3bea74b16feb65f338eb9cdaf1014328f517ebea&',
        category: 'assinatura',
        inStock: false,
        description: 'Ferramenta de design profissional com recursos premium'
    },
    {
        id: 'forn-gringo',
        name: 'FORN GRINGO',
        price: 3.00,
        image: 'https://cdn.discordapp.com/attachments/1397931737782157372/1399189692036939849/painc-1.png?ex=689dd932&is=689c87b2&hm=5d002642ccdb26019434963e1bfddb2a226e602b3d3fe434d8ea32d51c4ffe94&',
        category: 'fornecedor',
        inStock: true,
        description: 'Fornecedores de confiança internacionais. Itens exclusivos de Grow a Garden. Itens raros de Roube um Brairot. Estoques para diversos jogos populares. Revenda 100% autorizada e liberada. Produtos testados e entregues no ato'
    },
        {
        id: 'forn-rize',
        name: 'FORN RIZE',
        price: 6.00,
        image: 'https://cdn.discordapp.com/attachments/1397931737782157372/1399189692036939849/painc-1.png?ex=689dd932&is=689c87b2&hm=5d002642ccdb26019434963e1bfddb2a226e602b3d3fe434d8ea32d51c4ffe94&',
        category: 'fornecedor',
        inStock: true,
        description: 'Acesso direto ao fornecedor gringo (GAG e muito mais) Fornecedores confiáveis de Blox Fruits (Itens, frutas e mais) Fornecedores de Nitros e Impulsos com preços absurdamente baixos Pack Loja completo com modelos prontos, banners, gifs, métodos e mais Atualizações constantes + grupo fechado com acesso vitalício'
    }
];

// Shopping Cart
class ShoppingCart {
    constructor() {
        this.items = [];
        this.isOpen = false;
        this.total = 0;
        this.itemCount = 0;
        this.loadFromStorage();
        this.updateUI();
    }

    loadFromStorage() {
        const savedCart = localStorage.getItem('imperative-shop-cart');
        if (savedCart) {
            try {
                this.items = JSON.parse(savedCart);
                this.calculateTotals();
            } catch (error) {
                console.error('Error loading cart from storage:', error);
                this.items = [];
            }
        }
    }

    saveToStorage() {
        localStorage.setItem('imperative-shop-cart', JSON.stringify(this.items));
    }

    calculateTotals() {
        this.total = this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
        this.itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
        this.updateUI();
    }

    addToCart(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        
        this.calculateTotals();
        this.saveToStorage();
        this.renderCartItems();
        
        return true;
    }

    removeFromCart(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.calculateTotals();
        this.saveToStorage();
        this.renderCartItems();
    }

    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        const item = this.items.find(item => item.product.id === productId);
        if (item) {
            item.quantity = quantity;
            this.calculateTotals();
            this.saveToStorage();
            this.renderCartItems();
        }
    }

    clearCart() {
        this.items = [];
        this.calculateTotals();
        this.saveToStorage();
        this.renderCartItems();
    }

    getTotal() {
        return this.total;
    }

    openCart() {
        this.isOpen = true;
        document.getElementById('cartSidebar').classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        this.isOpen = false;
        document.getElementById('cartSidebar').classList.remove('show');
        document.body.style.overflow = '';
    }

    toggleCart() {
        if (this.isOpen) {
            this.closeCart();
        } else {
            this.openCart();
        }
    }

    updateUI() {
        const cartCount = document.getElementById('cartCount');
        const totalPrice = document.getElementById('totalPrice');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartFooter = document.getElementById('cartFooter');

        // Update cart count badge
        if (this.itemCount > 0) {
            cartCount.textContent = this.itemCount;
            cartCount.classList.add('show');
        } else {
            cartCount.classList.remove('show');
        }

        // Update total price
        if (totalPrice) {
            totalPrice.textContent = this.formatPrice(this.total);
        }

        // Show/hide empty state and footer
        if (cartEmpty && cartFooter) {
            if (this.items.length === 0) {
                cartEmpty.style.display = 'block';
                cartFooter.style.display = 'none';
            } else {
                cartEmpty.style.display = 'none';
                cartFooter.style.display = 'block';
            }
        }
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        if (!cartItemsContainer) return;

        cartItemsContainer.innerHTML = '';

        this.items.forEach(({ product, quantity }) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.setAttribute('data-testid', `cart-item-${product.id}`);

            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-price">${this.formatPrice(product.price)}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${product.id}', ${quantity - 1})" data-testid="button-decrease-${product.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${quantity}</span>
                    <button class="quantity-btn" onclick="cart.updateQuantity('${product.id}', ${quantity + 1})" data-testid="button-increase-${product.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-btn" onclick="cart.removeFromCart('${product.id}')" data-testid="button-remove-${product.id}">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        this.updateUI();
    }

    formatPrice(price) {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
}

// Toast notifications
class ToastManager {
    constructor() {
        this.container = document.getElementById('toastContainer');
    }

    show(title, description, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type === 'error' ? 'error' : ''}`;

        toast.innerHTML = `
            <div class="toast-title">${title}</div>
            <div class="toast-description">${description}</div>
        `;

        this.container.appendChild(toast);

        // Auto remove after 4 seconds
        setTimeout(() => {
            toast.remove();
        }, 4000);
    }
}

// Initialize cart and toast manager
const cart = new ShoppingCart();
const toast = new ToastManager();

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${!product.inStock ? 'out-of-stock' : ''}`;
        productCard.setAttribute('data-testid', `product-card-${product.id}`);

        productCard.innerHTML = `
            ${!product.inStock ? `
                <div class="out-of-stock-overlay">
                    <span class="out-of-stock-badge">Esgotado</span>
                </div>
            ` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-pricing">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? `
                        <span class="product-original-price">${formatPrice(product.originalPrice)}</span>
                    ` : ''}
                    ${product.discount ? `
                        <span class="product-discount">${product.discount}% OFF</span>
                    ` : ''}
                </div>
                ${product.description ? `
                    <p class="product-description">${product.description}</p>
                ` : ''}
                <button class="add-to-cart-btn ${!product.inStock ? 'disabled' : ''}" 
                        onclick="handleAddToCart('${product.id}')" 
                        ${!product.inStock ? 'disabled' : ''}
                        data-testid="button-add-${product.id}">
                    ${product.inStock ? '<i class="fas fa-cart-plus"></i> Adicionar ao carrinho' : 'Produto esgotado'}
                </button>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Format price utility
function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Handle add to cart with loading state
function handleAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
    
    const button = document.querySelector(`[data-testid="button-add-${productId}"]`);
    const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adicionando...';
    button.disabled = true;
    
    // Add to cart
    const success = cart.addToCart(product);
    
    if (success) {
        toast.show('Produto adicionado!', `${product.name} foi adicionado ao seu carrinho.`);
        
        // Show success state briefly
        button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    } else {
        button.innerHTML = originalText;
        button.disabled = false;
        toast.show('Erro', 'Não foi possível adicionar o produto ao carrinho.', 'error');
    }
}

// Copy PIX key functionality
function copyPixKey() {
    const pixKey = document.getElementById('pixKey').textContent;
    navigator.clipboard.writeText(pixKey).then(() => {
        toast.show('PIX copiado!', 'Chave PIX copiada para a área de transferência.');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        toast.show('PIX copiado!', 'Chave PIX copiada para a área de transferência.');
    });
}

// Checkout modal functionality
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    // Render checkout items
    checkoutItems.innerHTML = '';
    cart.items.forEach(({ product, quantity }) => {
        const item = document.createElement('div');
        item.className = 'checkout-item';
        item.innerHTML = `
            <span class="item-name">${product.name}</span>
            <span class="item-quantity">x${quantity}</span>
            <span class="item-price">${cart.formatPrice(product.price * quantity)}</span>
        `;
        checkoutItems.appendChild(item);
    });
    
    // Update total
    checkoutTotal.textContent = cart.formatPrice(cart.total);
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function confirmPayment() {
    toast.show('Instruções enviadas!', 'Siga as instruções de pagamento acima.');
    closeCheckoutModal();
    cart.closeCart();
}

// Smooth scrolling
function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('navMobile');
    mobileMenu.classList.toggle('show');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render products
    renderProducts();
    
    // Cart button click
    document.getElementById('cartBtn').addEventListener('click', () => {
        cart.toggleCart();
    });
    
    // Cart close button
    document.getElementById('cartClose').addEventListener('click', () => {
        cart.closeCart();
    });
    
    // Cart backdrop click
    document.getElementById('cartBackdrop').addEventListener('click', () => {
        cart.closeCart();
    });
    
    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', openCheckoutModal);
    
    // Modal close buttons
    document.getElementById('modalClose').addEventListener('click', closeCheckoutModal);
    document.getElementById('modalBackdrop').addEventListener('click', closeCheckoutModal);
    
    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('[data-scroll]').forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-scroll');
            smoothScroll(target);
        });
    });
    
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const target = href.substring(1);
                smoothScroll(target);
            }
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('navMobile');
            if (mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
            }
        });
    });
    
    // Header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
    });
});
