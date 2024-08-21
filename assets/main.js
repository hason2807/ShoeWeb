// Get the modal element
var modal = document.getElementById('myModal');

// Get the link that opens the modal
var cartLink = document.getElementById("cart-link");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the link, open the modal
cartLink.onclick = function() {
    modal.style.display = "block";
    populateCart(); // Call the function to populate cart items
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to populate cart items (sample item for demonstration)
function populateCart() {
    var cartItemsDiv = document.querySelector('.cart-items');
    // Create a sample item
    var itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-row');
    itemDiv.innerHTML = `
        <span class="cart-item cart-column">Sample Product</span>
        <span class="cart-price cart-column">$10</span>
        <span class="cart-quantity cart-column">1</span>
    `;
    // Append the item to the cart
    cartItemsDiv.appendChild(itemDiv);

    // Update total price (you can implement this logic based on your requirement)
    updateCartTotal();
}

// Function to update cart total price (sample implementation)
function updateCartTotal() {
    var cartTotalPrice = document.querySelector('.cart-total-price');
    cartTotalPrice.textContent = '$10'; // Sample total price
}
