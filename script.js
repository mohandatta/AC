document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const addToCartButtons = document.querySelectorAll('.product button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPrice = product.querySelector('p').innerText;

            const productItem = {
                name: productName,
                price: productPrice,
                quantity: 1
            };

            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push(productItem);
            }

            updateCart();

            // Change button text to 'Added'
            button.innerText = 'Added';
            button.disabled = true;

            // Revert back to 'Add to Cart' after a short delay
            setTimeout(() => {
                button.innerText = 'Add to Cart';
                button.disabled = false;
            }, 2000); // 2-second delay
        });
    });
});
