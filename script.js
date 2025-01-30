// Function to search for products
function handleSearch() {
    const searchBar = document.querySelector('.search-bar');
    const query = searchBar.value.trim().toLowerCase();
    const popup = document.querySelector('.popup');
    const products = document.querySelectorAll('.product');

    if (!query) {
        alert('Please enter a search term.');
        return;
    }

    let productFound = false;

    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent.toLowerCase();
        const description = product.querySelector('.product-description').textContent.toLowerCase();

        if (name.includes(query) || description.includes(query)) {
            product.style.display = 'block';
            productFound = true;
        } else {
            product.style.display = 'none';
        }
    });

    if (!productFound) {
        popup.style.display = 'block'; // Show popup if no products are found
    }
}

// Ensure search bar updates clear button visibility
function updateClearButton() {
    const searchBar = document.querySelector('.search-bar');
    const clearButton = document.querySelector('.clear-button');
    clearButton.style.display = searchBar.value ? 'inline-block' : 'none';
}

// Clear the search bar and reset product visibility
function clearSearch() {
    const searchBar = document.querySelector('.search-bar');
    const products = document.querySelectorAll('.product');
    searchBar.value = '';
    updateClearButton();

    products.forEach(product => {
        product.style.display = 'block'; // Show all products when search is cleared
    });
}

// Hide the popup and show all products when the "OK" button is clicked
function hidePopup() {
    const popup = document.querySelector('.popup');
    const products = document.querySelectorAll('.product');
    popup.style.display = 'none'; // Hide popup
    products.forEach(product => {
        product.style.display = 'block'; // Show all products
    });
}

// Event listeners
window.onload = () => {
    const searchBar = document.querySelector('.search-bar');
    const clearButton = document.querySelector('.clear-button');
    const searchButton = document.querySelector('.search-button');
    const popupButton = document.querySelector('.popup-button');

    searchBar.addEventListener('input', updateClearButton);
    clearButton.addEventListener('click', clearSearch);
    searchButton.addEventListener('click', handleSearch);
    popupButton.addEventListener('click', hidePopup); // Attach hidePopup to the OK button
};
