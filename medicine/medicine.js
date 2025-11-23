function updateCartBadge(count) {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'block';
        } else {
            badge.textContent = '0';
            badge.style.display = 'none';
        }
    }
}

window.onload = function () {
    const loader = document.getElementById('loaderOverlay');

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';

            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 1500);
    }

    const initialCart = JSON.parse(localStorage.getItem('userCart')) || [];
    updateCartBadge(initialCart.length);

    const orderButtons = document.querySelectorAll('.order-button');

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.closest('.product-item');
            if (!productItem) return;

            const nameElement = productItem.querySelector('.product-name');
            const manufacturerElement = productItem.querySelector('.manufacturer');
            const priceElement = productItem.querySelector('.price');

            const productName = nameElement ? nameElement.textContent.trim() : 'Unknown Product';
            const productManufacturer = manufacturerElement ? manufacturerElement.textContent.trim() : 'Unknown Manufacturer';
            const productPriceText = priceElement ? priceElement.textContent.trim().replace('৳', '').trim() : '0';
            const productPrice = parseInt(productPriceText) || 0;

            const newCartItem = {
                type: 'medicine',
                name: productName,
                info: productManufacturer,
                price: productPrice,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('userCart')) || [];

            const existingItemIndex = cart.findIndex(item =>
                item.type === 'medicine' && item.name === productName
            );

            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
                alert(`${productName} এর পরিমাণ বাড়ানো হয়েছে!`);
            } else {
                cart.push(newCartItem);
                alert(`${productName} কার্টে যোগ করা হয়েছে!`);
            }

            localStorage.setItem('userCart', JSON.stringify(cart));

            updateCartBadge(cart.length);

            window.location.href = '../cart/cart.html';
        });
    });
};