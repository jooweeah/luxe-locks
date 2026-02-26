function saveCart() {
    try {
        localStorage.setItem('luxe-locks-cart', JSON.stringify(cart));
    } catch (e) {
        // localStorage unavailable (private browsing, storage quota exceeded, etc.)
    }
}

function loadCart() {
    try {
        const raw = localStorage.getItem('luxe-locks-cart');
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        // Validate each entry so corrupt/tampered data can't break the UI
        return parsed.filter(function (item) {
            return (
                typeof item.name === 'string' && item.name.length > 0 &&
                typeof item.price === 'number' && item.price > 0 &&
                typeof item.quantity === 'number' && Number.isInteger(item.quantity) && item.quantity > 0
            );
        });
    } catch (e) {
        return [];
    }
}

let cart = loadCart();

function toggleCart() {
    if (document.getElementById('cartDrawer').classList.contains('is-open')) {
        closeCart();
    } else {
        openCart();
    }
}

function openCart() {
    renderCart();
    document.getElementById('cartDrawer').classList.add('is-open');
    document.getElementById('cartOverlay').classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartDrawer').classList.remove('is-open');
    document.getElementById('cartOverlay').classList.remove('is-open');
    document.body.style.overflow = '';
}

function renderCart() {
    const cartEmpty = document.getElementById('cartEmpty');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartFooter = document.getElementById('cartDrawerFooter');
    const cartTotal = document.getElementById('cartTotal');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartBadge = document.querySelector('.cart-badge');

    const hasItems = cart.length > 0;

    // Toggle empty state and footer visibility together
    cartEmpty.style.display = hasItems ? 'none' : 'block';
    cartFooter.style.display = hasItems ? 'block' : 'none';

    // Build item list
    cartItemsList.innerHTML = '';
    cart.forEach(function (item) {
        const li = document.createElement('li');
        li.className = 'cart-item';

        const info = document.createElement('div');
        info.className = 'cart-item-info';

        const name = document.createElement('p');
        name.className = 'cart-item-name';
        name.textContent = item.name;

        const price = document.createElement('p');
        price.className = 'cart-item-price';
        price.textContent = '$' + item.price.toFixed(2);

        info.appendChild(name);
        info.appendChild(price);

        const qtyControl = document.createElement('div');
        qtyControl.className = 'cart-item-qty-control';

        const decreaseBtn = document.createElement('button');
        decreaseBtn.type = 'button';
        decreaseBtn.className = 'qty-btn';
        decreaseBtn.dataset.action = 'decrease';
        decreaseBtn.dataset.name = item.name;
        decreaseBtn.setAttribute('aria-label', 'Decrease quantity');
        decreaseBtn.textContent = '−';

        const count = document.createElement('span');
        count.className = 'qty-count';
        count.textContent = item.quantity;

        const increaseBtn = document.createElement('button');
        increaseBtn.type = 'button';
        increaseBtn.className = 'qty-btn';
        increaseBtn.dataset.action = 'increase';
        increaseBtn.dataset.name = item.name;
        increaseBtn.setAttribute('aria-label', 'Increase quantity');
        increaseBtn.textContent = '+';

        qtyControl.appendChild(decreaseBtn);
        qtyControl.appendChild(count);
        qtyControl.appendChild(increaseBtn);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-btn';
        removeBtn.dataset.name = item.name;
        removeBtn.setAttribute('aria-label', 'Remove item');
        removeBtn.textContent = '✕';

        li.appendChild(info);
        li.appendChild(qtyControl);
        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);
    });

    // Compute totals once
    const totalItems = cart.reduce(function (sum, item) {
        return sum + item.quantity;
    }, 0);
    const total = cart.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    // Update footer subtotal line
    cartItemCount.textContent = totalItems === 1 ? '1 item' : totalItems + ' items';
    cartTotal.textContent = '$' + total.toFixed(2);

    // Update nav badge
    cartBadge.textContent = totalItems;
    cartBadge.classList.toggle('is-empty', totalItems === 0);
}

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    saveCart();
    openCart(); // openCart calls renderCart() first
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    renderCart();
}

function changeQty(name, delta) {
    const index = cart.findIndex(item => item.name === name);
    if (index === -1) return;

    cart[index].quantity += delta;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    renderCart();
}

document.addEventListener('DOMContentLoaded', function () {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    document.getElementById('cartCloseBtn').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeCart();
    });

    // Event delegation for cart item buttons — set up once, survives re-renders
    document.getElementById('cartItemsList').addEventListener('click', function (e) {
        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            removeItem(removeBtn.dataset.name);
            return;
        }

        const btn = e.target.closest('.qty-btn');
        if (!btn) return;
        const name = btn.dataset.name;
        const delta = btn.dataset.action === 'increase' ? 1 : -1;
        changeQty(name, delta);
    });

    const addToCartButtons = document.querySelectorAll('.btn-primary[data-name]');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);
            if (!name || isNaN(price)) return;
            addToCart(name, price);
        });
    });

    // Restore badge and footer state from any previously saved cart
    renderCart();
});
