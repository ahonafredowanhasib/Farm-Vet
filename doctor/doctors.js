function updateCartBadge(count) {
    const badge = document.querySelector('.cart-badge');
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'block';
    } else {
        badge.textContent = '0';
        badge.style.display = 'none';
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

    const bookButtons = document.querySelectorAll('.book-button');

    bookButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const doctorItem = event.target.closest('.doctor-item');
            if (!doctorItem) return;

            const nameElement = doctorItem.querySelector('.doctor-name');
            const specialtyElement = doctorItem.querySelector('.doctor-specialty');
            const feeElement = doctorItem.querySelector('.fee');

            const doctorName = nameElement ? nameElement.textContent.trim() : 'Unknown Doctor';
            const doctorSpecialty = specialtyElement ? specialtyElement.textContent.trim() : 'Unknown Specialty';
            const doctorFeeText = feeElement ? feeElement.textContent.trim().replace('৳', '').trim() : '0';
            const doctorFee = parseInt(doctorFeeText) || 0;

            const newCartItem = {
                type: 'doctor',
                name: doctorName,
                info: doctorSpecialty,
                price: doctorFee,
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem('userCart')) || [];

            const existingItemIndex = cart.findIndex(item =>
                item.type === 'doctor' && item.name === doctorName
            );

            if (existingItemIndex === -1) {
                cart.push(newCartItem);

                localStorage.setItem('userCart', JSON.stringify(cart));

                updateCartBadge(cart.length);

                alert(`${doctorName} কার্টে যোগ করা হয়েছে!`);
                window.location.href = '../cart/cart.html';

            } else {
                alert(`${doctorName} ইতিমধ্যেই আপনার কার্টে রয়েছে।`);
                window.location.href = '../cart/cart.html';
            }
        });
    });
};