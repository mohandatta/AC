document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    const renderCartItems = () => {
        cartItemsContainer.innerHTML = '';
        let totalAmount = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="remove-item cart-button">Remove</button>
            `;

            const price = parseFloat(item.price.replace('$', ''));
            totalAmount += price * item.quantity;

            cartItemsContainer.appendChild(cartItem);

            cartItem.querySelector('.remove-item').addEventListener('click', () => {
                const index = cart.indexOf(item);
                cart.splice(index, 1);
                updateCart();
                renderCartItems();
            });
        });

        totalAmountElement.innerText = totalAmount.toFixed(2);
    };

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    renderCartItems();
});
