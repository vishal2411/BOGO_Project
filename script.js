let totalAmount = 0;

function toggleDetails(box) {
    const details = box.querySelector('.details');
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}

function addToCart(button) {
    const priceElement = button.closest('.offer-box').querySelector('.price');
    const price = parseFloat(priceElement.getAttribute('data-price'));

    totalAmount += price;
    
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

